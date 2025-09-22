// src/main.tsx
import './index.css'

import SiteLayout from '@layouts/SiteLayout'
// Canonical slugs
import { SLUG } from '@lib/routes'
import ContactEN from '@pages/en/Contact'
import FacilitiesEN from '@pages/en/Facilities'
// EN pages
import HomeEN from '@pages/en/Home'
import NewsEN from '@pages/en/News'
import OpenDataCodeEN from '@pages/en/Open'
import PeopleEN from '@pages/en/People'
import ProjectsEN from '@pages/en/Projects'
import PublicationsEN from '@pages/en/Publications'
import ResearchEN from '@pages/en/Research'
import ContactES from '@pages/es/Contact'
import FacilitiesES from '@pages/es/Facilities'
// ES pages
import HomeES from '@pages/es/Home'
import NewsES from '@pages/es/News'
import OpenDataCodeES from '@pages/es/Open'
import PeopleES from '@pages/es/People'
import ProjectsES from '@pages/es/Projects'
import PublicationsES from '@pages/es/Publications'
import ResearchES from '@pages/es/Research'
import NotFound from '@pages/NotFound'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Default → English home */}
        <Route path="/" element={<Navigate to="/en/" replace />} />

        {/* ---------- EN ---------- */}
        <Route element={<SiteLayout lang="en" />}>
          <Route path="/en/" element={<HomeEN />} />
          <Route path={`/en/${SLUG.people}`} element={<PeopleEN />} />
          <Route path={`/en/${SLUG.research}`} element={<ResearchEN />} />
          <Route path={`/en/${SLUG.publications}`} element={<PublicationsEN />} />
          <Route path={`/en/${SLUG.projects}`} element={<ProjectsEN />} />
          <Route path={`/en/${SLUG.facilities}`} element={<FacilitiesEN />} />
          <Route path={`/en/${SLUG.news}`} element={<NewsEN />} />
          <Route path={`/en/${SLUG.open}`} element={<OpenDataCodeEN />} />
          <Route path={`/en/${SLUG.contact}`} element={<ContactEN />} />
        </Route>

        {/* ---------- ES ---------- */}
        <Route element={<SiteLayout lang="es" />}>
          <Route path="/es/" element={<HomeES />} />
          <Route path={`/es/${SLUG.people}`} element={<PeopleES />} />
          <Route path={`/es/${SLUG.research}`} element={<ResearchES />} />
          <Route path={`/es/${SLUG.publications}`} element={<PublicationsES />} />
          <Route path={`/es/${SLUG.projects}`} element={<ProjectsES />} />
          <Route path={`/es/${SLUG.facilities}`} element={<FacilitiesES />} />
          <Route path={`/es/${SLUG.news}`} element={<NewsES />} />
          <Route path={`/es/${SLUG.open}`} element={<OpenDataCodeES />} />
          <Route path={`/es/${SLUG.contact}`} element={<ContactES />} />
        </Route>

        {/* ---------- TEMP redirects from localized ES slugs (optional but helpful) ---------- */}
        <Route path="/es/personas" element={<Navigate to={`/es/${SLUG.people}`} replace />} />
        <Route
          path="/es/investigacion"
          element={<Navigate to={`/es/${SLUG.research}`} replace />}
        />
        <Route
          path="/es/publicaciones"
          element={<Navigate to={`/es/${SLUG.publications}`} replace />}
        />
        <Route path="/es/proyectos" element={<Navigate to={`/es/${SLUG.projects}`} replace />} />
        <Route
          path="/es/instalaciones"
          element={<Navigate to={`/es/${SLUG.facilities}`} replace />}
        />
        <Route path="/es/noticias" element={<Navigate to={`/es/${SLUG.news}`} replace />} />
        <Route path="/es/datos-codigo" element={<Navigate to={`/es/${SLUG.open}`} replace />} />
        <Route path="/es/contacto" element={<Navigate to={`/es/${SLUG.contact}`} replace />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
