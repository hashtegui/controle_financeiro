import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    'https://rgzcltfyailhxcgaefya.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnemNsdGZ5YWlsaHhjZ2FlZnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0NjU4OTQsImV4cCI6MjAxNTA0MTg5NH0.6YHeolo-LL4DwMSiNHvSzTSuj5rhQ-CidUy-JSQCeJo'
);
