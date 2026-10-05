import { createClient, SupabaseClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL;
const rawAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

function isValidHttpUrl(urlStr?: string | null): boolean {
  if (!urlStr || typeof urlStr !== 'string') return false;
  const trimmed = urlStr.trim();
  if (
    trimmed === '' ||
    trimmed === 'undefined' ||
    trimmed === 'null' ||
    trimmed.includes('your-project') ||
    trimmed.includes('your-supabase-url') ||
    trimmed.includes('placeholder')
  ) {
    return false;
  }
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidKey(keyStr?: string | null): boolean {
  if (!keyStr || typeof keyStr !== 'string') return false;
  const trimmed = keyStr.trim();
  return (
    trimmed !== '' &&
    trimmed !== 'undefined' &&
    trimmed !== 'null' &&
    !trimmed.includes('your-anon-key') &&
    !trimmed.includes('placeholder')
  );
}

function initSupabase(): SupabaseClient | null {
  if (!isValidHttpUrl(rawUrl) || !isValidKey(rawAnonKey)) {
    return null;
  }
  try {
    return createClient(rawUrl!.trim(), rawAnonKey!.trim());
  } catch (err) {
    console.warn('[Supabase initialization failed]:', err);
    return null;
  }
}

export const supabase = initSupabase();
export const isSupabaseConfigured = Boolean(supabase !== null);

export interface ConsultationRequestPayload {
  full_name: string;
  email: string;
  phone_whatsapp: string;
  area_of_interest: string;
  academic_background: string;
  target_timeline: string;
  notes?: string;
}

export interface ConsultationSubmissionResult {
  success: boolean;
  data?: any;
  error?: string;
  isDemo?: boolean;
}

/**
 * Inserts a new consultation request into Supabase PostgreSQL.
 * If Supabase is not yet configured, safely saves to localStorage in demo mode.
 */
export async function submitConsultationRequest(
  payload: ConsultationRequestPayload
): Promise<ConsultationSubmissionResult> {
  // If Supabase credentials are not set, handle demo mode safely
  if (!supabase || !isSupabaseConfigured) {
    console.info(
      '[Supabase Notice] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not configured. Saving submission to local persistence for preview.'
    );
    try {
      const stored = JSON.parse(
        localStorage.getItem('run_with_me_consultation_requests') || '[]'
      );
      const newRecord = {
        id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `local_${Date.now()}`,
        ...payload,
        created_at: new Date().toISOString(),
      };
      stored.push(newRecord);
      localStorage.setItem(
        'run_with_me_consultation_requests',
        JSON.stringify(stored)
      );
      return { success: true, data: newRecord, isDemo: true };
    } catch (e: any) {
      return { success: false, error: e.message || 'Failed to save local record' };
    }
  }

  try {
    const { data, error } = await supabase
      .from('consultation_requests')
      .insert([
        {
          full_name: payload.full_name,
          email: payload.email,
          phone_whatsapp: payload.phone_whatsapp,
          area_of_interest: payload.area_of_interest,
          academic_background: payload.academic_background,
          target_timeline: payload.target_timeline,
          notes: payload.notes || '',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('[Supabase Error] insert into consultation_requests:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data, isDemo: false };
  } catch (err: any) {
    console.error('[Supabase Unexpected Error]:', err);
    return {
      success: false,
      error: err.message || 'An unexpected error occurred while saving your request.',
    };
  }
}
