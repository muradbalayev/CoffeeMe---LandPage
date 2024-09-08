
import './App.css'
import About from './components/About'
import Header from './components/Header'
import PricingPlans from './components/PricingPlans'

function App() {

  return (
    <div className='max-w-[1440px] mx-auto'>
      <Header />
      <About />
      <PricingPlans />
    </div>
  )
}

export default App
