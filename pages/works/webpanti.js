import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="webpanti">
    <Container>
      <Title>
        Website Panti Asuhan <Badge>2022</Badge>
      </Title>
      <P>
        During my internship at Dinas Komunikasi Informatika dan Persandian Kota Yogyakarta, I developed a web-based Management Information System for UPT Rumah Pengasuhan Anak Wiloso Projo. The project aimed to address the outdated data management practices, which relied on paper records and Excel spreadsheets, by providing a more efficient and scalable solution.
      </P>
      <P>
        The system was built using PHP and Laravel for the backend and frontend, with MySQL as the database. It features detailed data management capabilities, along with options to export records into Excel and PDF formats. These functionalities not only simplified the process of managing children’s records but also made it easier to generate accurate reports and ensure secure data storage.
      </P> 
      <P>
        This project stemmed from a survey I conducted, identifying the need for modernization. By suggesting and implementing a web-based solution, I was able to help the orphanage streamline their operations and prepare for potential online integration in the future.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="">
             <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Laravel, MySQL</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>
      <WorkImage src="/images/works/webpanti2.png" alt="WebPanti" />
      <WorkImage src="/images/works/webpanti3.png" alt="WebPanti" />
      <WorkImage src="/images/works/webpanti4.png" alt="WebPanti" />
      <WorkImage src="/images/works/webpanti5.png" alt="WebPanti" />
      {/* <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
