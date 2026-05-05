import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Trash2, Plus, ChevronRight, Loader2, LayoutGrid, List, Table2, LayoutList, AlignLeft, AlignCenter, AlignRight, SortAsc, SortDesc } from 'lucide-react'
import ToolbarButton from '@/components/common/ToolbarButton'

const tabItems = ['Activos', 'Pendientes', 'Inactivos']

type ViewMode = 'table' | 'cards'
type LayoutMode = 'list' | 'grid' | 'table'
type AlignMode = 'left' | 'center' | 'right'
type SortMode = 'asc' | 'desc'

export default function ButtonsPage() {
  const [activeTab, setActiveTab] = useState('Activos')
  const [view, setView] = useState<ViewMode>('table')
  const [layout, setLayout] = useState<LayoutMode>('list')
  const [align, setAlign] = useState<AlignMode>('left')
  const [sort, setSort] = useState<SortMode>('asc')

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
          <Button variant="destructive">Cancelar</Button>
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
          <Button size="icon-lg" variant="default"><Plus/></Button>
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
                size={'lg'}
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

      {/* Toolbar Button */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Toolbar Button</h2>
        <div className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-muted/30">

          {/* Table / Cards — primary */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <ToolbarButton icon={<Table2 size={16} />}    color="primary" active={view === 'table'} onClick={() => setView('table')} title="Vista tabla" />
              <ToolbarButton icon={<LayoutGrid size={16} />} color="primary" active={view === 'cards'} onClick={() => setView('cards')} title="Vista cards" />
            </div>
            <span className="text-sm text-muted-foreground">primary — activo: <strong>{view}</strong></span>
          </div>

          {/* List / Grid / Table — success */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <ToolbarButton icon={<LayoutList size={16} />} color="success" active={layout === 'list'}  onClick={() => setLayout('list')}  title="Lista" />
              <ToolbarButton icon={<LayoutGrid size={16} />} color="success" active={layout === 'grid'}  onClick={() => setLayout('grid')}  title="Grilla" />
              <ToolbarButton icon={<Table2 size={16} />}     color="success" active={layout === 'table'} onClick={() => setLayout('table')} title="Tabla" />
            </div>
            <span className="text-sm text-muted-foreground">success — activo: <strong>{layout}</strong></span>
          </div>

          {/* Align — destructive */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <ToolbarButton icon={<AlignLeft size={16} />}   color="destructive" active={align === 'left'}   onClick={() => setAlign('left')}   title="Alinear izquierda" />
              <ToolbarButton icon={<AlignCenter size={16} />} color="destructive" active={align === 'center'} onClick={() => setAlign('center')} title="Centrar" />
              <ToolbarButton icon={<AlignRight size={16} />}  color="destructive" active={align === 'right'}  onClick={() => setAlign('right')}  title="Alinear derecha" />
            </div>
            <span className="text-sm text-muted-foreground">destructive — activo: <strong>{align}</strong></span>
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
