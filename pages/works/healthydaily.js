import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="HealtyDaily">
    <Container>
      <Title>
        HealtyDaily – Home Fitness App <Badge>2025</Badge>
      </Title>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Figma</span>
        </ListItem>
        <ListItem>
          <Meta>Figma Link</Meta>
          <Link href="https://www.figma.com/design/iiRW0FL36SmIybSwtcZB0f/uiux-healtydaily?node-id=0-1&t=pkG7kfxu6mxDWP7O-1" target="_blank">
            View Design in Figma <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <P>
        HealtyDaily is a mobile UI/UX design concept for a fitness app targeting users who prefer working out from home.
        The app focuses on simplicity, guided flow, and encouraging progress for beginners to advanced users.
      </P>

      <P>
        The app features three main categories: <strong>Workout</strong>, <strong>Yoga</strong>, and <strong>Cardio</strong>. Each category contains curated exercises and difficulty levels:
      </P>

      <List ml={6} my={2} spacing={2}>
        <ListItem>• Workout: Arm & Shoulder, Chest & Back, Abs, Legs</ListItem>
        <ListItem>• Cardio: Jogging, Jump Rope, Biking</ListItem>
        <ListItem>• Yoga: General Yoga Routines</ListItem>
      </List>

      <P>
        Each exercise category provides three levels of difficulty: Beginner, Intermediate, and Advanced, to support all users regardless of experience.
      </P>
      <Box mt={6} maxW="200px" mx="auto">
        <WorkImage src="/images/works/healthydaily1.gif" alt="Login and Register Screen" />
      </Box>
      <P>
        The first screen walkthrough demonstrates the <strong>Login</strong> and <strong>Register</strong> interfaces.
        Users can create an account manually or use third-party options like <strong>Google</strong> or <strong>Facebook</strong> for a quick and seamless login experience.
      </P>
      <Box mt={6} maxW="200px" mx="auto">
        <WorkImage src="/images/works/healthydaily2.gif" alt="Login and Register Screen" />
      </Box>
      <P>
        The <strong>Home screen</strong> shows personalized fitness data including:
        current weight, calories burned, and steps taken. This dashboard is tailored to help users monitor their progress and stay motivated.
      </P>
      <Box mt={6} maxW="200px" mx="auto">
        <WorkImage src="/images/works/healthydaily3.gif" alt="Login and Register Screen" />
      </Box>
      <P>
        Users can select training types from <strong>Workout</strong>, <strong>Cardio</strong>, or <strong>Yoga</strong>.
        Each category offers a curated list of routines designed to match the user&rsquo;s goals and fitness level.
      </P>

      <Box mt={6} maxW="200px" mx="auto">
        <WorkImage src="/images/works/healthydaily4.gif" alt="Login and Register Screen" />
      </Box>
      <P>
        The <strong>User Menu</strong> allows customization of settings such as language preferences, premium subscription options, user information, and more similar to standard features in modern fitness apps.
      </P>
      <P>
        HealtyDaily is designed to empower users to take control of their fitness journey from the comfort of their homes. 
        With a clean interface, intuitive navigation, and structured workout flows, this project aims to inspire long-term 
        commitment to a healthier lifestyle no gym membership required.
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
