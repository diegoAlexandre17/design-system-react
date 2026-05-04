import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Trash2, Plus, ChevronRight, Loader2 } from 'lucide-react'

const tabItems = ['Activos', 'Pendientes', 'Inactivos']

export default function ButtonsPage() {
  const [activeTab, setActiveTab] = useState('Activos')

  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Button</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Variants</h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="success">Success</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Sizes</h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">With Icons</h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <Button>
            <Mail />
            Login with Email
          </Button>
          <Button variant="outline">
            <Plus />
            New item
          </Button>
          <Button variant="destructive">
            <Trash2 />
            Delete
          </Button>
          <Button variant="secondary">
            Continue
            <ChevronRight />
          </Button>
        </div>
      </section>

      {/* Icon only */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Icon Only</h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <Button size="icon" variant="default"><Plus /></Button>
          <Button size="icon" variant="outline"><Mail /></Button>
          <Button size="icon" variant="ghost"><ChevronRight /></Button>
          <Button size="icon" variant="destructive"><Trash2 /></Button>
        </div>
      </section>

      {/* Loading */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Loading</h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <Button disabled>
            <Loader2 className="animate-spin" />
            Loading...
          </Button>
          <Button variant="outline" disabled>
            <Loader2 className="animate-spin" />
            Please wait
          </Button>
        </div>
      </section>

      {/* Tabs */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Tabs</h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <div className="inline-flex gap-0">
            {tabItems.map((tab, index) => (
              <Button
                key={tab}
                variant={activeTab === tab ? 'tab-active' : 'tab'}
                className={`rounded-none first:rounded-l-md last:rounded-r-md ${
                  activeTab !== tab && index > 0 ? '-ml-px' : ''
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Disabled */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Disabled</h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <Button disabled>Default</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="ghost" disabled>Ghost</Button>
          <Button variant="destructive" disabled>Destructive</Button>
        </div>
      </section>
    </div>
  )
}
