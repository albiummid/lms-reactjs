import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import { AppRoutes } from './Routes'

export default function App() {
  return (
    <>
      <Layout>
        <>
          <Routes>
            {AppRoutes.map((route, key) => (
              <Route path={route.route} key={key}>
                <Route index element={route.page} />
                {route.subRoutes?.map((subRoute) => (
                  <Route path={subRoute.path} element={subRoute.page} />
                ))}
              </Route>
            ))}
          </Routes>
        </>
      </Layout>
    </>
  )
}
