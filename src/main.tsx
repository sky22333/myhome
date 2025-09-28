import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
], {
  basename: "/myhome"
});

// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ErrorBoundary>
        <RouterProvider router={router} />
        <Toaster />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>,
)

