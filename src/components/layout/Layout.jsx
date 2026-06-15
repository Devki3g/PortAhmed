import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
