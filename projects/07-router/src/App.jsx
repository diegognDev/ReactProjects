import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { Router } from './Router'
import Page404 from './pages/404'

function App() {
  const routes = [
    {
      path: '/',
      Component: HomePage,
    },
    {
      path: '/about',
      Component: AboutPage,
    },
  ]

  return (
    <>
      <main>
        <Router routes={routes} defaultComponent={Page404} />
      </main>
    </>
  )
}

export default App
