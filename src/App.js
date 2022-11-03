import Layout from './components/layout/Layout'
import Router from './Router'

export default function App() {
  return (
    <div className='bg-green-400'>
      <Layout>
        <Router />
      </Layout>
    </div>
  )
}
