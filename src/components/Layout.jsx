import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>
      <Header />
      <main
        className="flex-1"
        style={{
          maxWidth: 'var(--wide-width)',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          padding: 'clamp(1.5rem, 3vw, 3rem) var(--gutter)',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
