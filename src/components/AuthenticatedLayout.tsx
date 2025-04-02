'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/auth'

interface AuthenticatedLayoutProps {
  children: React.ReactNode
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const router = useRouter()
  const [isAuthChecked, setIsAuthChecked] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

// Check initial auth state
useEffect(() => {
  console.log('Auth check started')
  const checkAuth = async () => {
    try {
      console.log('----------------------------------\nFetching session...')
      const { data: { session }, error } = await supabase.auth.getSession()
      console.log('Session data:', { hasSession: !!session, error })
      
      if (error) {
        console.error('Auth error:', error)
        throw error
      }

      if (session) {
        const user = session.user
        //setUser(user)
        console.log('User details:', {
          id: user?.id,
          email: user?.email,
          created_at: user?.created_at
        })
      }


      setIsAuthChecked(true)
      setIsAuthenticated(!!session)
      
      if (!session) {
        console.log('No session found, redirecting to login')
        router.push('/login')
      } else {
        console.log('Session found, user is authenticated')
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      router.push('/login')
    }
  }
  checkAuth()
  }, [router])

 // Subscribe to auth changes
 useEffect(() => {
  console.log('Setting up auth state change listener')
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      console.log('Auth state changed:', { event: _event, hasSession: !!session })
      
      if (session) {
        const user = session.user
        console.log('User details updated:', {
          id: user?.id,
          email: user?.email,
          created_at: user?.created_at
        })
      }

      setIsAuthChecked(true)
      setIsAuthenticated(!!session)
      
      if (!session) {
        console.log('Session lost, redirecting to login')
        router.push('/login')
      }
    }
  )

    return () => {
      console.log('Cleaning up auth state change listener')
      subscription.unsubscribe()
    }
  }, [router, supabase])

  // If auth is not checked yet, show loading state
  if (!isAuthChecked) {
    console.log('Rendering loading state')
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg font-semibold">Loading...</p>
        <p className="text-sm text-muted-foreground">Checking authentication...</p>
      </div>
    </div>
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login')
    router.push('/login')
    return null
  }

  console.log('Rendering authenticated content')

  return <>{children}</>
}