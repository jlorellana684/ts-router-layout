import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(landing)/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /(landing)/!'
}