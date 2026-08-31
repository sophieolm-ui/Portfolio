import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectDetail } from './pages/ProjectDetail'
import { AboutPage } from './pages/AboutPage'

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  )
}
