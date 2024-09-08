
import './App.css'
import About from './components/About'
import Header from './components/Header'
import OrderNow from './components/OrderNow'
import PricingPlans from './components/PricingPlans'

function App() {

  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Header />
      <About />
      <PricingPlans />
      <OrderNow/>
    </div>
  )
}

export default App
