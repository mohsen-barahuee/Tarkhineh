
import Header from '@/components/templates/Header'
import ResturantMenu from '@/components/templates/ResturantMenu'
import AboutSection from '@/components/templates/AboutSection'
import TarkhineTour from '@/components/templates/TarkhoneTour'

export default async function Home() {


  return (
    <>
      <Header />
      <ResturantMenu />
      <AboutSection />
      <TarkhineTour />
    </>
  )
}
