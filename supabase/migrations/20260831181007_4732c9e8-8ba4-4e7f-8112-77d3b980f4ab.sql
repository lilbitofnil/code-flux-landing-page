CREATE TABLE public.hackathon_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_code TEXT NOT NULL UNIQUE,
  team_name TEXT NOT NULL CHECK (char_length(team_name) BETWEEN 2 AND 80),
  track TEXT NOT NULL CHECK (track IN ('AI & Machine Learning', 'Web & App Development', 'Fintech', 'Health & Wellness', 'Open Innovation')),
  project_idea TEXT NOT NULL CHECK (char_length(project_idea) BETWEEN 20 AND 1000),
  institution TEXT NOT NULL CHECK (char_length(institution) BETWEEN 2 AND 160),
  captain_phone TEXT NOT NULL CHECK (char_length(captain_phone) BETWEEN 7 AND 20),
  confirmation_sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.hackathon_registrations TO service_role;
ALTER TABLE public.hackathon_registrations ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.hackathon_participants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_id UUID NOT NULL REFERENCES public.hackathon_registrations(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  email TEXT NOT NULL CHECK (char_length(email) <= 255),
  is_captain BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT hackathon_participant_email_unique UNIQUE (email)
);
GRANT ALL ON public.hackathon_participants TO service_role;
ALTER TABLE public.hackathon_participants ENABLE ROW LEVEL SECURITY;

CREATE UNIQUE INDEX hackathon_one_captain_per_team
ON public.hackathon_participants (registration_id)
WHERE is_captain;

CREATE OR REPLACE FUNCTION public.update_hackathon_registration_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_hackathon_registration_updated_at
BEFORE UPDATE ON public.hackathon_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_hackathon_registration_updated_at();