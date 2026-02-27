import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Apps from './pages/Apps'
import ToolStack from './pages/ToolStack'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="apps" element={<Apps />} />
          <Route path="tools" element={<ToolStack />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
