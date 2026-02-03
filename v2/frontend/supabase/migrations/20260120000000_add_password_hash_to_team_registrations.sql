-- Add password_hash column to team_registrations table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'team_registrations' 
    AND column_name = 'password_hash'
  ) THEN
    ALTER TABLE public.team_registrations 
    ADD COLUMN password_hash TEXT NOT NULL DEFAULT '';
    
    -- Remove the default after adding (since we want it to be required)
    ALTER TABLE public.team_registrations 
    ALTER COLUMN password_hash DROP DEFAULT;
  END IF;
END $$;
