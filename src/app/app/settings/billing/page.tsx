import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function Page() {
  return (
    <Card>
      <CardHeader className="border-b border-border">
        <CardTitle>Uso de Plano</CardTitle>
        <CardDescription>
          Você está atualmente no {''} [plan.name]
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <header className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">1/5</span>
            <span className="text-sm text-muted-foreground">20%</span>
          </header>
          <main>
            <Progress value={20} />
          </main>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-6">
        <span>Para um maior limite, assine o PRO</span>
        <Button>Assine por R$9 / mês</Button>
      </CardFooter>
    </Card>
  )
}
