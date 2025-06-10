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

const codeString = 
`from lifelines import KaplanMeierFitter
import matplotlib.pyplot as plt

kmf = KaplanMeierFitter()

plt.figure(figsize=(8, 5))

# Plot survival curves for OverTime = 0 and 1
for label, grouped_df in data2.groupby("OverTime"):
    # Mengganti label numerik dengan "No" atau "Yes"
    legend_label = "No" if label == 0 else "Yes"
    kmf.fit(durations=grouped_df['YearsAtCompany'], event_observed=grouped_df['Attrition'], label=legend_label)
    kmf.plot_survival_function()

plt.title('Kaplan-Meier Survival Curve by OverTime')
plt.xlabel('Years at Company')
plt.ylabel('Probability of Staying')
plt.grid(True)
plt.legend(title='OverTime') # Judul legenda tetap 'OverTime'
plt.show()`

const codeString1 =
`from lifelines import CoxPHFitter

# Contoh memilih subset penting
df_cox = data2[['Attrition','YearsAtCompany', 'OverTime', 'NumCompaniesWorked', 'MonthlyIncome', 'Age','YearsSinceLastPromotion','BusinessTravel','Department','DistanceFromHome']]
df_cox.dropna(inplace=True)
cph = CoxPHFitter()
cph.fit(df_cox, duration_col='YearsAtCompany', event_col='Attrition')

summary_df = cph.summary[['coef', 'exp(coef)', 'p', 'coef lower 95%', 'coef upper 95%']]
summary_df = summary_df.rename(columns={
    'coef': 'Coefficient',
    'exp(coef)': 'Hazard Ratio',
    'p': 'p-value',
    'coef lower 95%': 'Lower CI',
    'coef upper 95%': 'Upper CI'
})

print(summary_df)`

const hazardData = [
  {
    covariate: 'OverTime',
    coefficient: 1.184745,
    hazardRatio: 3.269852,
    pValue: 2.469557e-19,
    lowerCI: 0.926455,
    upperCI: 1.443035,
  },
  {
    covariate: 'NumCompaniesWorked',
    coefficient: 1.732985,
    hazardRatio: 5.657515,
    pValue: 1.689006e-14,
    lowerCI: 1.290279,
    upperCI: 2.175691,
  },
  {
    covariate: 'MonthlyIncome',
    coefficient: -4.025814,
    hazardRatio: 0.017849,
    pValue: 9.301644e-14,
    lowerCI: -5.084870,
    upperCI: -2.966759,
  },
  {
    covariate: 'Age',
    coefficient: -3.094345,
    hazardRatio: 0.045305,
    pValue: 9.469171e-12,
    lowerCI: -3.984350,
    upperCI: -2.204340,
  },
  {
    covariate: 'YearsSinceLastPromotion',
    coefficient: -1.214077,
    hazardRatio: 0.296984,
    pValue: 2.089134e-03,
    lowerCI: -1.987346,
    upperCI: -0.440809,
  },
  {
    covariate: 'BusinessTravel',
    coefficient: 1.002713,
    hazardRatio: 2.725668,
    pValue: 3.052702e-05,
    lowerCI: 0.531366,
    upperCI: 1.474061,
  },
  {
    covariate: 'Department',
    coefficient: 0.767367,
    hazardRatio: 2.154087,
    pValue: 1.808599e-04,
    lowerCI: 0.365692,
    upperCI: 1.169042,
  },
  {
    covariate: 'DistanceFromHome',
    coefficient: 0.699187,
    hazardRatio: 2.012116,
    pValue: 1.245044e-03,
    lowerCI: 0.274704,
    upperCI: 1.123670,
  },
];

const HazardTable = ({ data }) => {
  return (
    <Box overflowX="auto" my={4}> {/* overflowX untuk scroll horizontal jika tabel terlalu lebar */}
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Covariate</Th>
            <Th isNumeric>Coefficient</Th>
            <Th isNumeric>Hazard Ratio</Th>
            <Th isNumeric>p-value</Th>
            <Th isNumeric>Lower CI</Th>
            <Th isNumeric>Upper CI</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>{row.covariate}</Td>
              <Td isNumeric>{row.coefficient.toFixed(6)}</Td> {/* toFixed untuk format angka */}
              <Td isNumeric>{row.hazardRatio.toFixed(6)}</Td>
              <Td isNumeric>{row.pValue.toExponential(6)}</Td> {/* toExponential untuk notasi ilmiah */}
              <Td isNumeric>{row.lowerCI.toFixed(6)}</Td>
              <Td isNumeric>{row.upperCI.toFixed(6)}</Td>
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
    <Layout title="Employee Attrition - Survival Analysis">
      <Container>
        <Title>
          Survival Analysis for Employee Attrition using Kaplan-Meier and Cox Proportional Hazards <Badge>2025</Badge>
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
          <Link href="https://www.kaggle.com/code/caroletuesday/survival-analysis-for-employee-attrition" target="_blank">
            Kaggle/ErsalanElang <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

        <P>
          This project is a continuation of my previous work, <Link href="https://www.kaggle.com/code/caroletuesday/employee-attrition-using-shap-and-logistic-regres" target="_blank">Explaining Employee Attrition using SHAP and Logistic Regression<ExternalLinkIcon mx="2px" /></Link>. While 
          that project focused on identifying and explaining key features that contribute to attrition, this project explores the <strong>Time Dimension</strong> when employees are likely to leave.
        </P>

        <P>Main goals of this project:</P>
        <List ml={6} my={2} spacing={2}>
          <ListItem>• Estimate employee survival time using Kaplan-Meier Estimator</ListItem>
          <ListItem>• Identify covariates that significantly affect attrition risk using the Cox Proportional Hazards Model</ListItem>
          <ListItem>• Enhance predictive HR analytics with temporal insights</ListItem>
        </List>

        <P>
          The Kaplan-Meier estimator enables us to visualize employee survival probabilities over time, 
          revealing attrition patterns across different subgroups such as overtime workers or employees 
          with varying levels of job satisfaction. This helps identify when employees are most likely to 
          leave and which groups are at higher risk. Complementing this, the Cox Proportional Hazards Model 
          quantifies the influence of variables like age, overtime status, and years since last promotion on 
          the likelihood of attrition, offering a deeper understanding of risk factors over time. In the 
          context of this project, both methods enhance the earlier SHAP and Logistic Regression analysis 
          by introducing a time-based and risk-focused dimension, making the insights more actionable for 
          strategic HR interventions.
        </P>
        <P>
          The dataset used in this project is the <strong>IBM HR Analytics Attrition Dataset</strong>, which is publicly available on{' '}
          <Link href="https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset" target="_blank">
          Kaggle <ExternalLinkIcon mx="2px" /></Link>.
          Before modeling, the data was preprocessed to ensure it was suitable for analysis. This involved removing irrelevant columns such
          as <Attribute>Over18</Attribute>, <Attribute>StandardHours</Attribute>, and <Attribute>EmployeeNumber</Attribute>, encoding categorical variables like <Attribute>Attrition</Attribute> and <Attribute>OverTime</Attribute> into numeric values, 
          and performing standardization where necessary. These steps were essential to prepare the dataset for both classical machine learning and survival analysis approaches.
        </P>
        <P>
          Following the preprocessing stage, the dataset was split into training and testing sets using a 66.7% : 33.3% ratio. A <strong>Logistic Regression</strong> model was then trained using the cleaned data 
          to explore which features most significantly influence employee attrition. This process mirrors the earlier SHAP-based project, maintaining consistency in data handling. 
        </P>
        <P>
          Using SHAP, we then visualized which features were most impactful to the model&rsquo;s predictions:
        </P>
        <Box mt={6} maxW="400px" mx="auto">
            <WorkImage src="/images/works/shap_summary_plot4.png" alt="Confusion Matrix" />
        </Box>
        <P>
            The provided SHAP summary plot offers crucial insights into how each feature influences our 
            model&rsquo;s predictions for employee attrition. From this plot, we observe that features 
            like <Attribute>OverTime</Attribute>, <Attribute>NumCompaniesWorked</Attribute>, and <Attribute>BusinessTravel</Attribute> are 
            strong drivers of increased attrition risk, particularly when their values are 
            high (red dots on the right). Conversely, higher values for 
            features like <Attribute>JobLevel</Attribute>, <Attribute>YearsWithCurrManager</Attribute>, <Attribute>MonthlyIncome</Attribute>, <Attribute>Age</Attribute>, <Attribute>TotalWorkingYears</Attribute>, and various 
              satisfaction metrics tend to decrease the likelihood of attrition (red dots on the left).
        </P>
        <P>
            While SHAP excels at identifying which features are important and how they influence the model&rsquo;s prediction, 
            it doesn&rsquo;t directly tell us about the duration of employee tenure. To complement this, we turn 
            to <strong>Kaplan-Meier Survival Curves</strong>. Given that SHAP highlights <Attribute>OverTime</Attribute> as 
            the most impactful feature significantly increasing attrition risk, a Kaplan-Meier plot allows us to 
            visualize precisely how the probability of an employee staying with the 
            company (<Attribute>YearsAtCompany</Attribute> as the duration) changes over time, specifically for those 
            who work overtime versus those who do not. Below is a glimpse of the code used to generate the Kaplan-Meier values and summary plot.
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
        <P>Once the code is executed, a Kaplan-Meier summary plot is generated, providing a visual presentation of how probability of an employee staying with the company by Overtime</P>
        <Box mt={6} maxW="400px" mx="auto">
            <WorkImage src="/images/works/kaplan-meier_summary_plot4.png" alt="Confusion Matrix" />
        </Box>
        <P>
            This Kaplan-Meier Survival Curve effectively visualizes employee retention probability 
            over <Attribute>YearsAtCompany</Attribute>, differentiated by 
            their <Attribute>OverTime</Attribute> status. The blue curve, representing 
            employees with no overtime, consistently shows a significantly higher probability 
            of staying, even extending to <code>1.0</code> year of observed tenure. In stark contrast, the orange curve, 
            for those who do work overtime, largely flattens around <code>0.8</code> years, 
            indicating that observed attrition events for this group occur considerably earlier.
        </P>
        <P>
            This clear difference, further emphasized by the minimal confidence interval overlap, strongly 
            indicates that working <Attribute>OverTime</Attribute> notably increases attrition risk within 
            the first year, underscoring the critical importance of evaluating workload management for 
            improved employee retention. Next, to quantify the precise impact of individual features on attrition risk over time, we then leverage the Cox Proportional Hazards Model. The following Python code snippet outlines the implementation for this robust statistical model.
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
        <P>Once the code excecuted, here we got the summary of Cox Proportional Hazards model.</P>
        <HazardTable data={hazardData} />
        <P>
            Following the visual insights from the Kaplan-Meier curves, the Cox Proportional Hazards Model 
            provides a quantitative understanding of how various factors specifically influence the 
            risk (hazard) of employee attrition over time. The key metric, Hazard Ratio (HR), reveals 
            this impact: an HR greater than 1 indicates an increased risk of attrition 
            for every one-unit increase in that variable, while an HR less than 1 signifies 
            a decreased risk, with all effects being statistically significant (indicated by low p-values). 
            From our analysis, <Attribute>NumCompaniesWorked</Attribute> (HR: <code>5.66</code>) 
            and <Attribute>OverTime</Attribute> (HR: <code>3.27</code>) emerge as the strongest 
            predictors, indicating that employees with more previous employers or those working 
            overtime face substantially higher attrition hazards. 
            Similarly, <Attribute>BusinessTravel</Attribute> (HR: <code>2.73</code>), <Attribute>Department</Attribute> (HR: <code>2.15</code>), and <Attribute>DistanceFromHome</Attribute> (HR: <code>2.01</code>) also 
            significantly increase attrition risk. 
            Conversely, higher <Attribute>MonthlyIncome</Attribute> (HR: <code>0.018</code>), <Attribute>Age</Attribute> (HR: <code>0.045</code>), and even <Attribute>YearsSinceLastPromotion</Attribute> (HR: <code>0.297</code>) act 
            as protective factors, considerably reducing an employee&rsquo;s likelihood of leaving.
        </P>
        <P>
            in conclusion, this project deepens employee attrition understanding by combining SHAP&rsquo;s feature insights with survival analysis. Kaplan-Meier and Cox models provide a crucial time dimension, revealing *when* employees are at risk and quantifying specific factors like <Attribute>OverTime</Attribute>&rsquo;s impact. These actionable, time-based insights empower HR teams to develop targeted retention strategies.
        </P>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
