import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useToast,  
  Flex,
  Button,
  Text,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon, CopyIcon, CheckIcon} from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useState } from 'react'

const codeString = 
`def clean_text(text):
    text = re.sub(r"http\\S+", "", text)
    text = text.lower()
    text = re.sub(r"[\\n\\r\\t]+", " ", text)
    text = re.sub(r"\\s+", " ", text)
    text = re.sub(r"[^\\w\\s]", "", text)
    return text.strip()
`;
const codeString2 = 
`labels = ['Negative', 'Neutral', 'Positive']

def predict_sentiment(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    with torch.no_grad():
        outputs = model(**inputs)
        probs = torch.nn.functional.softmax(outputs.logits, dim=1)
        return labels[torch.argmax(probs)]
`;

const Work = () => {
  const [copied, setCopied] = useState(false)
  const toast = useToast()

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString)
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
  <Layout title="sentimentprabowo">
    <Container>
      <Title>
        Sentiment Analysis - President Prabowo <Badge>2025</Badge>
      </Title>
      <Text fontSize="2xl" fontWeight="bold" my={4}>
        Public Sentiment Analysis on President Prabowo’s First Six Months in Office
      </Text>
      <P>
        Following the leadership transition from President Joko Widodo to President Prabowo Subianto, 
        public discourse has been lively regarding the new administration’s policy direction and execution. 
        As a data enthusiast, I wanted to explore how the public perceives this leadership shift—particularly 
        through organic commentary on YouTube, a major digital public space in Indonesia. The first six months 
        of a presidency often shape the 
        early impressions of a leader’s effectiveness.
      </P>
      <P>
        I collected 1,000 YouTube comments from videos discussing President Prabowo's performance during his 
        first six months in office using the YouTube Data API. The keyword used for search was:
      </P>
      <Box textAlign="center" my={4}>
        <Text fontWeight="bold" color="teal.400" fontSize="lg">
          “6 Bulan Menjabat Presiden Prabowo”
        </Text>
      </Box>
      <P>
        From the search results, I selected the top 5 most relevant videos and extracted comments from each.
      </P>
      <P>
        Before analysis, the comments were cleaned by removing URLs, punctuation, and newlines, then converted to lowercase for consistency. Here's a snippet of the preprocessing function:
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
            Python
          </Box>
          <Button
            size="sm"
            leftIcon={copied ? <CheckIcon /> : <CopyIcon />}
            colorScheme="teal"
            variant="ghost"
            onClick={handleCopy}
          >
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
        <SyntaxHighlighter language="python" style={dracula} customStyle={{ margin: 0 }}>
          {codeString}
        </SyntaxHighlighter>
      </Box>
      <P>
        For sentiment classification, I used the pretrained model{' '}
        <Link href="https://huggingface.co/mdhugol/indonesia-bert-sentiment-classification" isExternal color="teal.500">
          mdhugol/indonesia-bert-sentiment-classification <ExternalLinkIcon mx="2px" />
        </Link>, which is based on IndoBERT and fine-tuned on the Prosa sentiment dataset—specifically tailored for the Indonesian language. 
        The model categorizes text into three sentiment classes: <strong>Positive</strong>, <strong>Neutral</strong>, and <strong>Negative</strong>.
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
            Python
          </Box>
          <Button
            size="sm"
            leftIcon={copied ? <CheckIcon /> : <CopyIcon />}
            colorScheme="teal"
            variant="ghost"
            onClick={handleCopy}
          >
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
        <SyntaxHighlighter language="python" style={dracula} customStyle={{ margin: 0 }}>
          {codeString2}
        </SyntaxHighlighter>
      </Box>
      <P>
        From the 1,000 comments analyzed, the sentiment distribution is as follows:
      </P>
      <Box mt={4}>
        <WorkImage src="/images/works/chartsentimentprabowo.png" />
      </Box>
      <P>
        To better understand dominant public language, I generated a word cloud based on all cleaned comments:
      </P>
      <Box mt={4}>
        <WorkImage src="/images/works/cloudsentimentprabowo.png" />
      </Box>
      <P>
        While positive comments slightly dominate, public opinion remains nearly evenly split between optimism,
         skepticism, and criticism. This reflects that the public is still forming its expectations, with a
          high demand for visible progress.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Model</Meta>
          <Link href="https://huggingface.co/mdhugol/indonesia-bert-sentiment-classification">
            mdhugol/indonesia-bert-sentiment-classification <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Jupyter Notebook</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Transformers, YouTube API, Matplotlib</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://colab.research.google.com/drive/1APdSUK41FGIWhtEnxgnligkXw6cFtb8w?usp=sharing">
            Ersalan/JupyterNotebook<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      {/* <Box mt={4}>
        <WorkImage src="/images/works/prabowo-sentiment-pie.png" alt="Sentiment Pie Chart" />
      </Box>
      <P>
        The analysis results show that 37.9% of the comments are Positive, while Neutral and Negative comments are both 31.1%. This reflects a wide range of public opinions—ranging from optimism and caution to criticism.
      </P>
      <Box mt={4}>
        <WorkImage src="/images/works/prabowo-wordcloud.png" alt="Wordcloud Komentar" />
      </Box>
      <P>
        In addition to the sentiment chart, I also included a Wordcloud visualization to highlight the most frequently used words. Positive comments generally praised initial steps and bold policies, while negative ones questioned implementation and sustainability.
      </P>
      <P>
        Technologies used include Python, HuggingFace Transformers, and visualization libraries like Matplotlib and WordCloud. The entire workflow—from data collection, cleaning, sentiment prediction, to visualization—was executed in a Jupyter Notebook environment.
      </P> */}
    </Container>
  </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
