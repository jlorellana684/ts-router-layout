import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { EmptyLayout } from '../../../../../components/layouts/EmptyLayout'

export const Route = createFileRoute('/app_/users/$userId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <EmptyLayout />
}
