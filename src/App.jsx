
import { Toaster } from 'react-hot-toast'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import OrderNow from './components/OrderNow'
import PricingPlans from './components/PricingPlans'
import { LanguageProvider } from './context/languageContext'

function App() {

  return (
    <LanguageProvider>
      <div className='max-w-[1920px] mx-auto overflow-hidden'>
        <Header />
        <div className="bg-gradient-to-br from-[#f3f4f50f] to-[#54be9539]">
          <About />
          <PricingPlans />
          <OrderNow />
          <Footer />
        </div>
      </div>
      <Toaster
          containerClassName="toast"
          position="top-center"
          toastOptions={{
            duration: 3000,
            className: "custom-toast",
            style: {
              backgroundColor: "#fd0",
              fontWeight: "600",
              padding: "16px",
              color: "#214440",
            },
          }}
        />
    </LanguageProvider>
  )
}

export default App
