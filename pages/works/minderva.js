import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useToast,
  Flex,
  Button,
  Box,
  Table,    
  Thead,    
  Tbody,    
  Tr,       
  Th,       
  Td        
} from '@chakra-ui/react'
import { ExternalLinkIcon, CopyIcon, CheckIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/post'
import P from '../../components/paragraph'
import Attribute from '../../components/styled-text'
import Layout from '../../components/layouts/article'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useState } from 'react'

const companionComponentCode = `const CompanionComponent = ({companionId, subject, topic, name, userName, userImage, style, voice}) => {
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<SavedMessage[]>([]);

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
    const onCallEnd = () => {
        setCallStatus(CallStatus.FINISHED);
        addToSessionHistory(companionId)
    }
    const onMessage = (message: Message) => {
        if(message.type === 'transcript' && message.transcriptType === 'final') {
            const newMessage= { role: message.role, content: message.transcript}
            setMessages((prev) => [newMessage, ...prev])
        }
    }
    const onSpeechStart = () => setIsSpeaking(true);
    const onSpeechEnd = () => setIsSpeaking(false);

    vapi.on('call-start',onCallStart);
    vapi.on('call-end',onCallEnd);
    vapi.on('message',onMessage);
    vapi.on('speech-start',onSpeechStart);
    vapi.on('speech-end',onSpeechEnd);

    return () => {
      vapi.off('call-start',onCallStart);
      vapi.off('call-end',onCallEnd);
      vapi.off('message',onMessage);
      vapi.off('speech-start',onSpeechStart);
      vapi.off('speech-end',onSpeechEnd);
    }
  }, [companionId]);

  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING)
    const assistantOverrides = {
        variableValues: { name, userName, subject, topic, style },
        clientMessages: ["transcript"],
        serverMessages: [],
    }
    vapi.start(configureAssistant(voice, style), assistantOverrides)
  }
}`

const projectFeatures = [
  {
    feature: 'AI Voice Integration',
    description: 'Real-time voice conversations with AI companions',
    technology: 'VAPI, Speech-to-Text',
    impact: 'Natural, engaging learning experience',
  },
  {
    feature: 'Custom Companion Builder',
    description: 'Personalized AI with custom subjects and styles',
    technology: 'React State, Supabase',
    impact: 'Tailored educational support for each user',
  },
  {
    feature: 'Live Transcription',
    description: 'Real-time conversation transcripts and history',
    technology: 'VAPI Messages, React Hooks',
    impact: 'Enhanced accessibility and conversation review',
  },
  {
    feature: 'Subscription Management',
    description: 'Secure authentication and plan management',
    technology: 'Clerk, Payment Integration',
    impact: 'Scalable SaaS business model',
  },
];

const ProjectTable = ({ data }) => {
  return (
    <Box overflowX="auto" my={4}>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Feature</Th>
            <Th>Description</Th>
            <Th>Technology</Th>
            <Th>Impact</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td fontWeight="bold">{row.feature}</Td>
              <Td>{row.description}</Td>
              <Td>{row.technology}</Td>
              <Td>{row.impact}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

const Work = () => {
  const [copied, setCopied] = useState(false)
  const toast = useToast()

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    toast({
      title: 'Copied!',
      status: 'success',
      duration: 1500,
      isClosable: true
    })
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Layout title="Minderva - AI Companion SaaS Platform">
      <Container>
        <Title>
          Minderva - AI Companion SaaS Platform <Badge>2025</Badge>
        </Title>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, TypeScript, Tailwind CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Clerk, VAPI, Supabase, Shadcn/ui</span>
        </ListItem>
        <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/ersalanelang/minderva-saas-app" isExternal>
              minderva-saas-app <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
          <Meta>Live Demo</Meta>
           <Link href="https://minderva-saas-app.vercel.app/" isExternal>
              https://minderva-saas-app.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
      </List>
         <P>
          Minderva as an innovative AI companion platform that revolutionizes personalized learning through 
          voice-powered interactions. The name I chose combines <strong>&ldquo;Mind&ldquo;</strong> and <strong>&ldquo;Minerva&ldquo;</strong> 
          (Goddess of Wisdom), represented by an owl logo symbolizing knowledge and wisdom. This platform allows users to create 
          custom AI companions with personalized subjects, topics, voices, and conversation styles for 
          enhanced educational experiences.
        </P>
        <WorkImage src="/images/works/minderva-logo.png" alt="Minderva Logo" />
        
        <P>
          Built with <strong>Next.js</strong> and <strong>TypeScript</strong> for type-safe development, 
          the platform integrates <Attribute>Clerk</Attribute> for authentication and subscription management, 
          <Attribute>VAPI</Attribute> for AI voice processing, and <Attribute>Supabase</Attribute> for 
          data persistence. The combination creates a seamless SaaS experience where users can engage 
          in natural conversations with AI tutors tailored to their learning needs.
        </P>
        <WorkImage src="/images/works/minderva-ex1.png" alt="Minderva Example1" />
        <P>Key features implemented in this platform:</P>
        <ProjectTable data={projectFeatures} />

        <P>
          The core functionality revolves around the <strong>CompanionComponent</strong>, which manages 
          real-time voice interactions between users and AI companions. This component demonstrates 
          sophisticated state management for call status, speech recognition, and live transcription:
        </P>

        <Box position="relative" my={4} borderRadius="md" overflow="hidden" border="1px solid #444">
            <Flex justify="space-between" align="center" p={2} bg="#282a36">
            <Box
                fontSize="sm"
                color="whiteAlpha.800"
                fontWeight="bold"
                bg="gray.700"
                px={2}
                py={0.5}
                borderRadius="md"
            >
                TypeScript
            </Box>
            <Button
                size="sm"
                leftIcon={copied ? <CheckIcon /> : <CopyIcon />}
                colorScheme="teal"
                variant="ghost"
                onClick={() => handleCopy(companionComponentCode)}
            >
                {copied ? 'Copied' : 'Copy'}
            </Button>
            </Flex>
            <SyntaxHighlighter language="typescript" style={dracula} customStyle={{ margin: 0 }}>
            {companionComponentCode}
            </SyntaxHighlighter>
        </Box>

        <P>
          The implementation handles multiple concurrent states including call connectivity, speech detection, 
          and message transcription. The <Attribute>VAPI integration</Attribute> enables seamless voice-to-text 
          conversion while maintaining conversation context. Real-time visual feedback through Lottie animations 
          creates an engaging interface that responds to speech activity.
        </P>
        <WorkImage src="/images/works/minderva-ex2.png" alt="Minderva Example2" />

        <P>
          Through this project, I successfully bridged AI technology with educational needs, creating a scalable SaaS platform 
          that makes personalized learning accessible through natural voice interactions. Minderva demonstrates my expertise in
          modern full-stack development practices while delivering meaningful value to users seeking enhanced 
          educational support through AI companionship.
        </P>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'