import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import React from 'react'

export default async function page() {
  const session = await authClient.getSession()
  console.log(session)

  return (
    <div>

      <Button>CLick here</Button>
    </div>
  )
}
