import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Clients from './Clients'
import Explore from './Explore'
import Faq from './Faq'
import Heading from './Heading'
import Pricing from './Pricing'
import Products from './Products'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Heading />
        <Products />
        <Explore />
        <Faq />
        <Pricing />
        <Testimonials />
        <Clients />
        <Footer/>
    </div>
  )
}

export default Home