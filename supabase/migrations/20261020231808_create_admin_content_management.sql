/*
# Create protected content management tables

1. New Tables
- `site_content`: editable public text identified by a stable key.
- `managed_items`: editable product and service-package records stored as JSON data.

2. Security
- Row Level Security is enabled on both tables.
- Anyone can read published content for the public website.
- Only the authenticated owner email `violetabeauty234@gmail.com` can insert, update, or delete content.
- Four separate policies are defined for each table and each CRUD operation.

3. Important Notes
- The owner must sign in with Supabase email/password before making changes.
- The tables preserve the existing static website as a fallback if no override exists.
- No existing application data is modified or deleted.
*/

CREATE TABLE IF NOT EXISTS public.site_content (
  key text PRIMARY KEY,
  value text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.managed_items (
  id text PRIMARY KEY,
  kind text NOT NULL CHECK (kind IN ('product', 'package')),
  data jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.managed_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read site content" ON public.site_content;
CREATE POLICY "Public can read site content" ON public.site_content
  FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "Owner can insert site content" ON public.site_content;
CREATE POLICY "Owner can insert site content" ON public.site_content
  FOR INSERT TO authenticated
  WITH CHECK ((auth.jwt() ->> 'email') = 'violetabeauty234@gmail.com');
DROP POLICY IF EXISTS "Owner can update site content" ON public.site_content;
CREATE POLICY "Owner can update site content" ON public.site_content
  FOR UPDATE TO authenticated
  USING ((auth.jwt() ->> 'email') = 'violetabeauty234@gmail.com')
  WITH CHECK ((auth.jwt() ->> 'email') = 'violetabeauty234@gmail.com');
DROP POLICY IF EXISTS "Owner can delete site content" ON public.site_content;
CREATE POLICY "Owner can delete site content" ON public.site_content
  FOR DELETE TO authenticated
  USING ((auth.jwt() ->> 'email') = 'violetabeauty234@gmail.com');

DROP POLICY IF EXISTS "Public can read managed items" ON public.managed_items;
CREATE POLICY "Public can read managed items" ON public.managed_items
  FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "Owner can insert managed items" ON public.managed_items;
CREATE POLICY "Owner can insert managed items" ON public.managed_items
  FOR INSERT TO authenticated
  WITH CHECK ((auth.jwt() ->> 'email') = 'violetabeauty234@gmail.com');
DROP POLICY IF EXISTS "Owner can update managed items" ON public.managed_items;
CREATE POLICY "Owner can update managed items" ON public.managed_items
  FOR UPDATE TO authenticated
  USING ((auth.jwt() ->> 'email') = 'violetabeauty234@gmail.com')
  WITH CHECK ((auth.jwt() ->> 'email') = 'violetabeauty234@gmail.com');
DROP POLICY IF EXISTS "Owner can delete managed items" ON public.managed_items;
CREATE POLICY "Owner can delete managed items" ON public.managed_items
  FOR DELETE TO authenticated
  USING ((auth.jwt() ->> 'email') = 'violetabeauty234@gmail.com');