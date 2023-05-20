import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://mpvopvfodrakciwscmsy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdm9wdmZvZHJha2Npd3NjbXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0ODc2ODAsImV4cCI6MjAwMDA2MzY4MH0.rRHgMSyp96QW4rZOwOgpJk5FsRgG1aPYFj1VWO3_PWM"
)