import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useToast,  
  Flex,
  Button,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon, CopyIcon, CheckIcon} from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/post'
import P from '../../components/paragraph'
import Attribute  from '../../components/styled-text'
import Layout from '../../components/layouts/article'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useState } from 'react'

import LatexDisplay from '../../components/LatexDisplay';

const codeString = 
`data.drop(['Over18', 'StandardHours', 'EmployeeCount', 'EmployeeNumber'], axis=1, inplace=True)

data['Attrition'] = data['Attrition'].map({'Yes': 1, 'No': 0})
data['OverTime'] = data['OverTime'].map({'Yes': 1, 'No': 0})`;

const codeString1 = 
`from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X,Y, test_size=0.333, random_state=42)
# Importing sklearn logistic regression
from sklearn.linear_model import LogisticRegression

# Instantiating the model, using default settings
logres = LogisticRegression()

# Fitting the model (Training)
logres.fit(X_train, Y_train)`;

const codeString2 = 
`import shap

# Linear Explainer compatible with Logistic Regression
explainer = shap.LinearExplainer(logres, X_train, feature_perturbation="interventional")
shap_values = explainer.shap_values(X_test)

# Summary plot
shap.summary_plot(shap_values, X_test, feature_names=data2.columns[1:], show=False)`

const accuracyFormula = `
    \\text{Accuracy} = \\frac{15 + 413}{15 + 413 + 6 + 56} = \\frac{428}{490} = 0.873
  `;

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
  <Layout title="Employee Attrition">
    <Container>
      <Title>
        Explaining Employee Attrition using SHAP and Logistic Regression <Badge>2025</Badge>
      </Title>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Pandas, Scikit-learn, SHAP, Matplotlib, Seaborn</span>
        </ListItem>
        <ListItem>
          <Meta>Dataset</Meta>
          <Link href="https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset" target="_blank">
            IBM HR Analytics Attrition Dataset <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Training Model</Meta>
          <Link href="https://www.kaggle.com/code/caroletuesday/employee-attrition-using-shap-and-logistic-regres" target="_blank">
            Kaggle/ErsalanElang <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <P>
        This project aims to predict employee attrition using Logistic Regression and interpret the results using <strong>SHAP (SHapley Additive exPlanations)</strong>. I created this project out of interest in Data Analytics project and its impact on strategic decision-making in companies.
      </P>
      <P>
        The main goals are:
      </P>
      <List ml={6} my={2} spacing={2}>
        <ListItem>• Predict employee attrition using a classification model using Logistic Regression</ListItem>
        <ListItem>• Understand key factors contributing to employee attrition</ListItem>
        <ListItem>• Provide explainable and interpretable output using SHAP</ListItem>
      </List>
      <P>
        The dataset used is from Kaggle: <Link href="https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset" target="_blank">IBM HR Analytics Attrition Dataset</Link>. 
        The dataset is notably clean, free from any Null/NaN values, which greatly facilitated the analysis and speaks to the quality of the contributions. 
        Prior to training the model, several preprocessing steps were performed to remove irrelevant columns and convert categorical data into numeric format suitable for machine learning algorithms. 
        Below is a glimpse of the data cleaning process:
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
            onClick={() => handleCopy(codeString)}
          >
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
        <SyntaxHighlighter language="python" style={dracula} customStyle={{ margin: 0 }}>
          {codeString}
        </SyntaxHighlighter>
      </Box>
      <P>
        The data was then split into training and test sets using a 66.7% : 33.3% ratio, meaning roughly 
        two-thirds of the data was allocated for training the model and the remaining one-third for evaluating 
        its performance. This division helps assess how well the model generalizes to unseen data. Following this split, 
        the Logistic Regression model was trained:
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
            onClick={() => handleCopy(codeString1)}
          >
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
        <SyntaxHighlighter language="python" style={dracula} customStyle={{ margin: 0 }}>
          {codeString1}
        </SyntaxHighlighter>
      </Box>
      <P>
        After training the Logistic Regression model using the training data, we evaluate its performance on the test set. One of the most informative evaluation tools is the confusion matrix, which shows how well the model is able to correctly classify employee attrition cases.
      </P>
      <P>
        The model’s performance was evaluated using a confusion matrix:
      </P>

      <Box mt={6} maxW="400px" mx="auto">
        <WorkImage src="/images/works/matrix_summary_plot7.png" alt="Confusion Matrix" />
      </Box>
      <P>
        The confusion matrix gives insight into the classification results:
        the model correctly predicted <strong>413 employees</strong> who stayed (True Negative)
        and <strong>15 employees</strong> who left (True Positive). However, it misclassified <strong>6 employees</strong> who stayed as leaving (False Positive), and <strong>56 employees</strong> who actually left as staying (False Negative).
      </P>
      <P>
        These results indicate that while the model performs well in identifying non-attrition cases,
        it may require further tuning to better catch actual attrition cases. The overall <strong>accuracy</strong> is <strong>87.3%</strong>, showing that the model is generally reliable.
      </P>
      <P>
        Accuracy is calculated as:
      </P>
      <LatexDisplay latex={accuracyFormula} />
      <P>
        After evaluating the model&rsquo;s performance using metrics such as accuracy, the next 
        step is to interpret how individual features contribute to the prediction of employee attrition. 
        To achieve this, I implemented <strong>SHAP (SHapley Additive exPlanations)</strong>, 
        which provides a powerful framework for understanding the feature importance and the direction of 
        their influence on the model&rsquo;s output.
      </P>
      <P>
        By leveraging SHAP values, we can move beyond traditional performance metrics and 
        gain interpretable insights into why the model predicts an employee 
        is likely to leave. This step is crucial for making the model transparent and 
        ensuring that decisions based on it are explainable and actionable. Below is a glimpse of 
        the code used to generate the SHAP values and summary plot.
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
            onClick={() => handleCopy(codeString2)}
          >
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
        <SyntaxHighlighter language="python" style={dracula} customStyle={{ margin: 0 }}>
          {codeString2}
        </SyntaxHighlighter>
      </Box>
      <P>
        Once the code is executed, a SHAP summary plot is generated, providing a visual representation of how each feature influences the model&rsquo;s predictions across all employees. 
      </P>
      <Box mt={6} maxW="600px" mx="auto">
        <WorkImage src="/images/works/shap_summary_plot4.png" alt="SHAP Summary Plot" />
      </Box>
      <P>
        To gain a clearer and more interpretable understanding of the factors driving <strong>employee 
          attrition</strong>,  The SHAP summary plot helped visualize how key features, such as <Attribute>OverTime</Attribute>, <Attribute>YearsSinceLastPromotion</Attribute>, 
          and <Attribute>MonthlyIncome</Attribute> impact the likelihood of an employee leaving. 
          For instance, <strong>excessive overtime</strong> and <strong>lack of career advancement</strong> showed 
          a strong positive SHAP value, signaling a higher attrition risk. 
          Conversely, <strong>higher job level</strong>, <strong>job satisfaction</strong>, 
          and <strong>work-life balance</strong> were associated with negative SHAP values, 
          indicating their role in <strong>employee retention</strong>.
      </P>
      <P>
        These insights not only highlighted the most influential features but also 
        provided actionable directions for human resource strategies. The analysis 
        revealed that both <strong>organizational structure</strong> (e.g., Number of Companies Worked, 
        Years since last promotion) and <strong>personal satisfaction</strong> (e.g., environment and relationship 
        satisfaction) significantly affect attrition. Additionally, some features like <strong>StockOptionLevel</strong>  and <strong>JobInvolvement</strong> displayed mixed effects, suggesting deeper, 
        case-specific analysis is needed. Overall, integrating SHAP values into the model 
        interpretation process enhanced transparency and allowed for more 
        targeted, data-driven interventions to reduce turnover.
      </P>
    </Container>
  </Layout>
)}

export default Work
export { getServerSideProps } from '../../components/chakra'
