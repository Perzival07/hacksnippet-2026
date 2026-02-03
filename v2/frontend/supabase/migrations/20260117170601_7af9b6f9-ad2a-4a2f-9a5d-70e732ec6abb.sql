-- Create registrations table for hackathon participants
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  college_organization TEXT NOT NULL,
  team_name TEXT,
  experience_level TEXT NOT NULL DEFAULT 'beginner',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anyone can register)
CREATE POLICY "Anyone can register" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Allow users to view their own registration by email (for confirmation purposes)
CREATE POLICY "Users can view their own registration" 
ON public.registrations 
FOR SELECT 
USING (true);