import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY, SUPABASE_ENDPOINT } from '$env/static/private';

export const supabase = createClient(SUPABASE_ENDPOINT, SUPABASE_KEY);