CREATE POLICY "Service role manages hackathon registrations"
ON public.hackathon_registrations
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Service role manages hackathon participants"
ON public.hackathon_participants
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);