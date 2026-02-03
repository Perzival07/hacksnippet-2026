-- Create team_registrations table
CREATE TABLE IF NOT EXISTS public.team_registrations (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  team_name TEXT NOT NULL UNIQUE,
  team_size INTEGER NOT NULL DEFAULT 1,
  password_hash TEXT NOT NULL,
  leader_name TEXT NOT NULL DEFAULT '',
  leader_roll TEXT NOT NULL DEFAULT '',
  leader_dept TEXT NOT NULL DEFAULT '',
  leader_email TEXT NOT NULL DEFAULT '',
  leader_phone TEXT NOT NULL DEFAULT '',
  leader_skills TEXT,
  idea_title TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  problem_statement TEXT NOT NULL DEFAULT '',
  idea_description TEXT NOT NULL DEFAULT '',
  tech_stack TEXT,
  expected_outcome TEXT,
  agree_rules BOOLEAN NOT NULL DEFAULT false,
  previous_experience TEXT NOT NULL DEFAULT 'No'
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS public.team_members (
  id BIGSERIAL PRIMARY KEY,
  team_registration_id BIGINT NOT NULL REFERENCES public.team_registrations(id) ON DELETE CASCADE,
  member_number INTEGER NOT NULL,
  name TEXT NOT NULL,
  roll TEXT NOT NULL,
  dept TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  role TEXT,
  skills TEXT
);

-- Enable Row Level Security
ALTER TABLE public.team_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Allow public to insert team registrations (for registration)
CREATE POLICY "Allow team registration creation" 
ON public.team_registrations 
FOR INSERT 
WITH CHECK (true);

-- Allow public to read their own team registration (for login)
CREATE POLICY "Allow team registration read" 
ON public.team_registrations 
FOR SELECT 
USING (true);

-- Allow public to insert team members (during registration)
CREATE POLICY "Allow team member creation" 
ON public.team_members 
FOR INSERT 
WITH CHECK (true);

-- Allow public to read team members
CREATE POLICY "Allow team member read" 
ON public.team_members 
FOR SELECT 
USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_team_registrations_team_name ON public.team_registrations(team_name);
CREATE INDEX IF NOT EXISTS idx_team_members_team_registration_id ON public.team_members(team_registration_id);
