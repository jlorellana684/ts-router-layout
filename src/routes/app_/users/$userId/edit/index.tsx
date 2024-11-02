import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app_/users/$userId/edit/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /app_/users/$userId/edit/!'
}
