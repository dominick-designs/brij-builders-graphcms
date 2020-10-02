import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Hero from './BackgroundAsImage'
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


