-- Run with ME - Supabase PostgreSQL Database Schema
-- Table: consultation_requests

CREATE TABLE IF NOT EXISTS public.consultation_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_whatsapp TEXT NOT NULL,
    area_of_interest TEXT NOT NULL,
    academic_background TEXT NOT NULL,
    target_timeline TEXT NOT NULL,
    notes TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous and authenticated web visitors to submit consultation requests
CREATE POLICY "Allow public insert to consultation_requests"
    ON public.consultation_requests
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow authenticated admins to view all requests
CREATE POLICY "Allow authenticated view of consultation_requests"
    ON public.consultation_requests
    FOR SELECT
    TO authenticated
    USING (true);
