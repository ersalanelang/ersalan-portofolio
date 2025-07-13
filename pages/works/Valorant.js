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
import Attribute  from '../../components/styled-text'
import Layout from '../../components/layouts/article'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useState } from 'react'

const mouseTrackingCode = `useEffect(() => {
  const el = maskRef.current;
  let breathingTween = null;
  let lastMouseX = null;
  let lastMouseY = null;
  let isHovering = false;

  const startBreathing = () => {
    if (!breathingTween) {
      breathingTween = gsap.to(el, {
        scale: 0.85,
        duration: 0.65,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  };

  const handleMouseMove = (e) => {
    isHovering = true;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    stopBreathing();

    gsap.to(el, {
      x: x * 0.5,
      y: y * 0.5,
      rotateX: -y * 0.15,
      rotateY: x * 0.15,
      ease: "power2.out",
      duration: 1.7,
    });
  };

  // Cek setiap 1 detik apakah posisi mouse tetap (berarti idle)
  const interval = setInterval(() => {
    if (!isHovering) return;

    const currentMouseX = lastMouseX;
    const currentMouseY = lastMouseY;

    if (
      currentMouseX !== null &&
      currentMouseY !== null &&
      currentMouseX === lastMouseX &&
      currentMouseY === lastMouseY
    ) {
      startBreathing();
    }
  }, 300);

  el.addEventListener("mousemove", handleMouseMove);
  el.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    el.removeEventListener("mousemove", handleMouseMove);
    el.removeEventListener("mouseleave", handleMouseLeave);
    clearInterval(interval);
    stopBreathing();
  };
}, []);`

const tiltEffectCode = `export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = \`perspective(700px) rotateX(\${tiltX}deg) rotateY(\${tiltY}deg) scale3d(.95, .95, .95)\`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};`

const projectFeatures = [
  {
    feature: 'Dynamic Video Transitions',
    description: 'Seamless video switching with GSAP animations',
    technology: 'GSAP, React useRef',
    impact: 'Enhanced user engagement through smooth multimedia transitions',
  },
  {
    feature: 'Scroll-Triggered Morphing',
    description: 'Container shape morphing based on scroll position',
    technology: 'GSAP ScrollTrigger, ClipPath',
    impact: 'Unique visual storytelling that guides user attention',
  },
  {
    feature: 'Advanced Mouse Tracking',
    description: '3D perspective effects with breathing animations',
    technology: 'GSAP, Event Listeners, Intervals',
    impact: 'Immersive micro-interactions that increase user engagement',
  },
  {
    feature: 'Bento Grid Layout',
    description: 'Responsive grid with individual tilt effects',
    technology: 'CSS Grid, 3D Transforms',
    impact: 'Modern, interactive card-based content presentation',
  },
  {
    feature: 'Loading State Management',
    description: 'Progressive video loading with custom loader',
    technology: 'React State, Video API',
    impact: 'Smooth user experience with visual feedback',
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
    <Layout title="Valorant Custom 3D Website">
      <Container>
        <Title>
          Valorant Custom 3D Website - Interactive Gaming Experience <Badge>2025</Badge>
        </Title>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, GSAP, Tailwind CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Vite, React Icons, GSAP Timeline, ClipPath API</span>
        </ListItem>
        <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/ersalanelang/Valorant-Custom-3D-Web" isExternal>
              Valorant-Custom-3D-Web <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        <ListItem>
          <Meta>Assets</Meta>
          <span>Official Valorant multimedia content, custom animations</span>
        </ListItem>
        <ListItem>
          <Meta>Live Demo</Meta>
           <Link href="https://valorant-custom-3-d-web.vercel.app/" isExternal>
              https://valorant-custom-3-d-web.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
      </List>

        <P>
          This project represents a modern interpretation of premium web design, combining cutting-edge animation 
          techniques with the tactical aesthetics of Valorant. Valorant is a free-to-play 5v5 tactical shooter by Riot 
          Games that combines sharp gunplay with unique Agent abilities for strategic, competitive play.
          Taking inspiration from <Link href="https://zentry.com" target="_blank">Zentry.com&rsquo;s<ExternalLinkIcon mx="2px" /></Link> innovative 
          approach to interactive web experiences, I&rsquo;ve created a fully immersive digital environment that showcases 
          advanced front-end development capabilities.
        </P>
        <WorkImage src="/images/works/valorant-img.png" alt="Valorant Custom UI" />
        <P>Main objectives of this project:</P>
        <List ml={6} my={2} spacing={2}>
          <ListItem>• Create an immersive 3D web experience using advanced GSAP animations</ListItem>
          <ListItem>• Implement sophisticated user interactions with mouse tracking and scroll triggers</ListItem>
          <ListItem>• Build a responsive, performance-optimized website with smooth video transitions</ListItem>
          <ListItem>• Demonstrate modern web development techniques with React and animation libraries</ListItem>
        </List>
        <P>
          Built with <strong>React.js</strong> and powered by <strong>GSAP (GreenSock Animation Platform)</strong>, this project demonstrates the seamless integration of modern JavaScript frameworks with professional animation libraries. The use of <Attribute>ScrollTrigger</Attribute> for scroll-based animations, <Attribute>Timeline</Attribute> for complex animation sequences, and custom <Attribute>useEffect</Attribute> hooks for mouse tracking showcases a deep understanding of both React ecosystem and advanced animation techniques.
        </P>

        <P>
          The project incorporates official Valorant multimedia assets including high-quality videos and imagery to create an authentic gaming atmosphere. The design philosophy balances modern web aesthetics with Valorant&rsquo;s tactical visual identity, ensuring optimal performance across different devices and screen sizes.
        </P>

        <P>Key technical features implemented in this project:</P>
        <ProjectTable data={projectFeatures} />

        <P>
          One of the most challenging aspects of this project was implementing the <strong>advanced mouse tracking system</strong> implemented in the hero section. This system creates 3D perspective effects on the central video preview, combined with an intelligent breathing animation that activates during idle states. The implementation showcases advanced event handling and performance optimization techniques:
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
                JavaScript
            </Box>
            <Button
                size="sm"
                leftIcon={copied ? <CheckIcon /> : <CopyIcon />}
                colorScheme="teal"
                variant="ghost"
                onClick={() => handleCopy(mouseTrackingCode)}
            >
                {copied ? 'Copied' : 'Copy'}
            </Button>
            </Flex>
            <SyntaxHighlighter language="javascript" style={dracula} customStyle={{ margin: 0 }}>
            {mouseTrackingCode}
            </SyntaxHighlighter>
        </Box>

        <P>
          The mouse tracking system calculates the relative position of the cursor within the element bounds and applies corresponding 3D transformations using <Attribute>rotateX</Attribute> and <Attribute>rotateY</Attribute>. The breathing animation provides subtle visual feedback during idle states, creating a more engaging and alive interface. The implementation includes proper cleanup mechanisms to prevent memory leaks and ensure optimal performance.
        </P>
        <WorkImage src="/images/works/valorant-gif1.gif" alt="Valorant Custom UI" />
        <P>
          The features section implements a responsive <strong>Bento Grid layout</strong> with individual tilt effects for each card. This creates a premium, interactive experience where each element responds to user cursor movement with realistic 3D transformations:
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
                JavaScript
            </Box>
            <Button
                size="sm"
                leftIcon={copied ? <CheckIcon /> : <CopyIcon />}
                colorScheme="teal"
                variant="ghost"
                onClick={() => handleCopy(tiltEffectCode)}
            >
                {copied ? 'Copied' : 'Copy'}
            </Button>
            </Flex>
            <SyntaxHighlighter language="javascript" style={dracula} customStyle={{ margin: 0 }}>
            {tiltEffectCode}
            </SyntaxHighlighter>
        </Box>

        <P>
          The tilt effect component demonstrates advanced understanding of coordinate systems and CSS 3D transformations. By calculating relative mouse positions and applying mathematical transformations, each card responds naturally to user interaction, creating an engaging and premium user experience that enhances the overall interface quality.
        </P>
        <WorkImage src="/images/works/valorant-gif2.gif" alt="Valorant Custom UI" />

        <P>
          Performance optimization was a crucial consideration throughout development. All animations are GPU-accelerated using GSAP&rsquo;s hardware acceleration features, and proper cleanup mechanisms ensure optimal memory usage. The implementation includes responsive design patterns that adapt to different screen sizes and device capabilities, maintaining consistent performance across platforms.
        </P>

        <P>
          This project successfully demonstrates the intersection of creative design, technical implementation, and user experience optimization. By combining React&rsquo;s component architecture with GSAP&rsquo;s powerful animation capabilities, the result is a sophisticated web application that showcases modern front-end development practices while delivering an engaging, interactive experience inspired by the tactical precision of Valorant.
        </P>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'