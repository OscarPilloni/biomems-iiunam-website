import './index.css'

import SiteLayout from '@layouts/SiteLayout'
import ContactEN from '@pages/en/Contact'
import FacilitiesEN from '@pages/en/Facilities'
import HomeEN from '@pages/en/Home'
import NewsEN from '@pages/en/News'
import OpenEN from '@pages/en/Open'
import PeopleEN from '@pages/en/People'
import ProjectDetailEN from '@pages/en/ProjectDetail'
import ProjectsEN from '@pages/en/Projects'
import PublicationsEN from '@pages/en/Publications'
import ResearchEN from '@pages/en/Research'
import ContactES from '@pages/es/Contact'
import FacilitiesES from '@pages/es/Facilities'
import HomeES from '@pages/es/Home'
import NewsES from '@pages/es/News'
import OpenES from '@pages/es/Open'
import PeopleES from '@pages/es/People'
import ProjectDetailES from '@pages/es/ProjectDetail'
import ProjectsES from '@pages/es/Projects'
import PublicationsES from '@pages/es/Publications'
import ResearchES from '@pages/es/Research'
import NotFound from '@pages/NotFound'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', loader: () => redirect('/en') },
  {
    element: <SiteLayout />,
    children: [
      // EN
      { path: '/en', element: <HomeEN /> },
      { path: '/en/people', element: <PeopleEN /> },
      { path: '/en/research', element: <ResearchEN /> },
      { path: '/en/publications', element: <PublicationsEN /> },
      { path: '/en/projects', element: <ProjectsEN /> },
      { path: '/en/facilities', element: <FacilitiesEN /> },
      { path: '/en/news', element: <NewsEN /> },
      { path: '/en/open', element: <OpenEN /> },
      { path: '/en/contact', element: <ContactEN /> },
      { path: '/en/projects/:id', element: <ProjectDetailEN /> },

      // ES
      { path: '/es', element: <HomeES /> },
      { path: '/es/people', element: <PeopleES /> },
      { path: '/es/research', element: <ResearchES /> },
      { path: '/es/publications', element: <PublicationsES /> },
      { path: '/es/projects', element: <ProjectsES /> },
      { path: '/es/facilities', element: <FacilitiesES /> },
      { path: '/es/news', element: <NewsES /> },
      { path: '/es/open', element: <OpenES /> },
      { path: '/es/contact', element: <ContactES /> },
      { path: '/es/proyectos/:id', element: <ProjectDetailES /> },

      // 404
      { path: '*', element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
