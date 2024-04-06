import { Rocket } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
      <Rocket className="h-5 w-5 text-primary-foreground" />
    </div>
  )
}
