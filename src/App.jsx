import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ProductDetail from './components/layout/ProductDetail'
import Explanation from './components/layout/Explanation'
import Ingredients from './components/layout/Ingredients'
import Reviews from './components/layout/Reviews'
import ExpertAdvice from './components/layout/ExpertAdvice'
import FAQ from './components/layout/FAQ'
import Mission from './components/layout/Mission'
import Carousel from './components/ui/Carousel'
import StoriesVideo from './components/layout/StoriesVideo'

function App() {

  return (
    <div className="min-h-screen mx-auto">
      <Header />
      <main className="py-8 md:w-335 mx-auto">
        {/* Product Main Section */}
        <ProductDetail />
        
        {/* Carousel */}
        <Carousel />

        {/* Explanation */}
        <Explanation />

        {/* Ingredients */}
        <Ingredients />

        {/* Reviews */}
        <Reviews />

        {/* Expert Advice */}
        <ExpertAdvice />

        {/* Stories Videos */}
        <StoriesVideo />

        {/* FAQ */}
        <FAQ />

        {/* Mission */}
        <Mission />
      </main>
      <Footer />
    </div>
  )
}

export default App
