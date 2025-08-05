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

const dataTableCode = `interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange:setRowSelection,
    state: {
      sorting,
      rowSelection
    },
  });`

const projectFeatures = [
  {
    feature: 'Data Table Management',
    description: 'Advanced table with sorting, pagination, and row selection',
    technology: 'TanStack Table, ShadCN UI',
    impact: 'Efficient data handling and user-friendly interface',
  },
  {
    feature: 'Payment Dashboard',
    description: 'Interactive payment overview with visual charts',
    technology: 'Chart.js, React Components',
    impact: 'Clear financial data visualization for better insights',
  },
  {
    feature: 'User Detail Pages',
    description: 'Comprehensive user profile and management system',
    technology: 'Next.js Dynamic Routing, React State',
    impact: 'Streamlined user information access and management',
  },
  {
    feature: 'Responsive Design',
    description: 'Mobile-first approach with adaptive layouts',
    technology: 'Tailwind CSS, ShadCN Components',
    impact: 'Consistent experience across all device types',
  },
  {
    feature: 'Modern UI Components',
    description: 'Professional design system with consistent styling',
    technology: 'ShadCN UI, Radix Primitives',
    impact: 'Enhanced user experience with accessibility features',
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
    <Layout title="Admin Dashboard Project Management">
      <Container>
        <Title>
          Admin Dashboard Project Management - Modern Web Application <Badge>2025</Badge>
        </Title>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, TypeScript, ShadCN UI</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>TanStack Table, Tailwind CSS, Radix UI, Chart.js</span>
        </ListItem>
        <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/ersalanelang/Dashboard-Shadcn-Project" isExternal>
              Dashboard-ShadCN-Project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        <ListItem>
          <Meta>Live Demo</Meta>
           <Link href="https://dashboard-shadcn-project.vercel.app/" isExternal>
              https://dashboard-shadcn-project.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
      </List>

        <P>
          In this project, I created a comprehensive admin dashboard for project management that serves as a practical 
          learning exercise to explore and implement the powerful features of <strong>ShadCN UI</strong> within a 
          <strong>Next.js</strong> application. Built using modern web technologies including <Attribute>TypeScript</Attribute> 
          for type safety, <Attribute>TanStack Table</Attribute> for advanced data management, and <Attribute>Tailwind CSS</Attribute> 
          for responsive styling, this dashboard demonstrates professional-grade component architecture and user experience design. 
          The project leverages <Attribute>ShadCN UI</Attribute> components which are built on top of <Attribute>Radix UI</Attribute> 
          primitives, ensuring accessibility and consistent design patterns throughout the application.
        </P>

        <P>
          This admin dashboard serves as a centralized management system for project oversight and user administration. 
          The primary functionality includes a comprehensive payment management interface where administrators can track 
          financial transactions, view detailed analytics through interactive charts on the main dashboard, and access 
          detailed user profiles for effective user management. The dashboard is designed to streamline administrative 
          workflows by providing quick access to critical business metrics, user data visualization, and efficient 
          data table operations with advanced filtering, sorting, and pagination capabilities. This makes it an ideal 
          solution for small to medium-sized businesses requiring a modern, efficient administrative interface.
        </P>

        <WorkImage src="/images/works/dashboard-shadcn-ex2.png" alt="Admin Dashboard Main Interface" />

        <P>Key technical features implemented in this dashboard:</P>
        <ProjectTable data={projectFeatures} />

        <P>
          One of the core implementations in this project is the <strong>advanced data table component</strong> that 
          leverages TanStack Table (formerly React Table) for powerful data manipulation capabilities. This component 
          demonstrates sophisticated state management with sorting, pagination, and row selection functionality:
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
                onClick={() => handleCopy(dataTableCode)}
            >
                {copied ? 'Copied' : 'Copy'}
            </Button>
            </Flex>
            <SyntaxHighlighter language="typescript" style={dracula} customStyle={{ margin: 0 }}>
            {dataTableCode}
            </SyntaxHighlighter>
        </Box>

        <P>
          The data table implementation showcases advanced TypeScript usage with generic types <Attribute>TData</Attribute> 
          and <Attribute>TValue</Attribute>, ensuring type safety across different data structures. The component utilizes 
          TanStack Table&rsquo;s powerful API including <Attribute>getCoreRowModel</Attribute>, <Attribute>getPaginationRowModel</Attribute>, 
          and <Attribute>getSortedRowModel</Attribute> to provide comprehensive data manipulation capabilities. The integration 
          with ShadCN UI components ensures consistent styling and accessibility features, while the flexible column definition 
          system allows for easy customization and reusability across different data sets within the dashboard.
        </P>

        <WorkImage src="/images/works/dashboard-shadcn-ex3.png" alt="Data Table Implementation" />

        <P>
          This project successfully demonstrates the practical implementation of modern React patterns and Next.js 
          capabilities in building a production-ready admin dashboard. The combination of ShadCN UI&rsquo;s component 
          library with TanStack Table&rsquo;s data management provides a robust foundation for scalable administrative 
          interfaces. Through this learning exercise, I&rsquo;ve gained valuable experience in implementing complex UI 
          components, managing application state, and creating responsive designs that work seamlessly across different 
          devices. The dashboard serves as both a functional administrative tool and a testament to modern web development 
          practices, showcasing the potential for creating sophisticated business applications using contemporary React 
          ecosystem tools.
        </P>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'