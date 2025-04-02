import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function checkAuth() {
  // Get auth data
  console.log("Checking Auth");
  const { data: { session } } = supabase.auth.getSession()
  
  // If no session, redirect to login
  if (!session) {
    redirect("/login")
  }
  
  return { userId: session.user.id };
}