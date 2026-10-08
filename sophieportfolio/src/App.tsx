import { HashRouter, Routes, Route, useParams } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectDetail } from './pages/ProjectDetail'
import { ProjectStory } from './pages/ProjectStory'
import { AboutPage } from './pages/AboutPage'
import { projectStories } from './data/projectStories'

// Projects with a short-story version open there by default; everything
// else goes straight to the full case study, unchanged.
function ProjectEntry() {
  const { slug } = useParams<{ slug: string }>()
  if (slug && projectStories[slug]) return <ProjectStory />
  return <ProjectDetail />
}

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectEntry />} />
        <Route path="/projects/:slug/full" element={<ProjectDetail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  )
}
