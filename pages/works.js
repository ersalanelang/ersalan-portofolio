import { Container, Heading, SimpleGrid} from '@chakra-ui/react'  //Container, Heading, SimpleGrid, Divider 
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbWebPanti from '../public/images/works/webpanti.png'
import thumbBoneAge from '../public/images/works/boneage.jpg'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
// import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
// import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
// import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="webpanti"  //untuk mengarah ke halaman pages/webpanti.js
            title="Website Panti Asuhan"
            thumbnail={thumbWebPanti}
          >
            Sistem Informasi Manajemen berbasis Website untuk UPT Rumah Pengasuhan Anak Wiloso Projo
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="boneage"  //untuk mengarah ke halaman pages/webpanti.js
            title="Bone Age Assessment"
            thumbnail={thumbBoneAge}
          >
            Bone Age Assessment using CLAHE with VGG-19 Architecture
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
