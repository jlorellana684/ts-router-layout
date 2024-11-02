import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { MainLayout } from '../../components/layouts/MainLayout'

export const Route = createFileRoute('/app')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MainLayout />
}
