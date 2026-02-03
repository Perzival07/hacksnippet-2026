-- Create teams table for team authentication
CREATE TABLE public.teams (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  team_name TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;

-- Allow public to read teams (for login validation)
-- Note: In production, you might want to restrict this further
CREATE POLICY "Allow team login validation" 
ON public.teams 
FOR SELECT 
USING (true);

-- Allow authenticated users to insert teams (or adjust as needed)
-- For now, allowing public inserts for team creation
CREATE POLICY "Allow team creation" 
ON public.teams 
FOR INSERT 
WITH CHECK (true);

-- Create index on team_name for faster lookups
CREATE INDEX idx_teams_team_name ON public.teams(team_name);
