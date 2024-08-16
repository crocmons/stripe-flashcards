import FAQ from '@/components/FAQ'
import HeroSection from '@/components/HeroSection'
import Pricing from '@/components/Pricing'
import ProjectSlider from '@/components/ProjectSlider'
import Testimonial from '@/components/Testimonial'
import Works from '@/components/Works'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
  return (
   <main>
  
  <HeroSection />
  <ProjectSlider />
  <Testimonial />

   <section
   id='works'
   >
    <Works />
   </section>
   <section
   id='pricing'
   className='my-20 md:h-screen max-w-6xl mx-auto items-center px-2' 
   >
    <Pricing />
   </section>

   {/* FAQ */}
   <section
   id='faq'
   className=' text-black bg-white mt-36 pt-10 flex'
   >
    
    <FAQ />
   </section>
   <GoogleAnalytics gaId='G-EPE5H2NTDE' />
   </main>
  )
}
