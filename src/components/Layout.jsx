import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>
      <Header />
      <main className="flex-1 px-5 py-16" style={{ maxWidth: 'var(--wide-width)', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
        <div style={{ maxWidth: 'var(--content-width)', marginLeft: 'auto', marginRight: 'auto' }}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
