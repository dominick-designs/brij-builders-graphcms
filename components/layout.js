import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Hero from '../components/hero/BackgroundAsImage'
import tw from "twin.macro"
const MainElem = tw.main`p-8`;
import Container from './container'

import AnimationRevealPage from "helpers/AnimationRevealPage"

export default function Layout({ preview, children, landingVideo }) {

  landingVideo = "https://www.youtube.com/embed/QQOA340YUZI"
  return (
    <>
      <Meta />
      <AnimationRevealPage disabled>
        <Hero
          landingPageUrl={landingVideo}
        />
        <Container >
          <main>{children}</main>
        </Container >
        <Footer />
      </AnimationRevealPage>

    </>
  )
}


