import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="boneage">
    <Container>
      <Title>
        Bone Age Assessment <Badge>2024</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Dataset</Meta>
          <Link href="https://www.kaggle.com/datasets/kmader/rsna-bone-age">
            rsna-bone-age <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Training Model</Meta>
          <Link href="https://www.kaggle.com/code/caroletuesday/bone-age-assesment-with-clahe-and-pretrained-vgg19">
            BoneAgeAssesment-CLAHE-VGG19 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TensorFlow, Keras, Python, PHP</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>
      <P>
        This project was conducted as part of my thesis research to obtain a Bachelor of Computer Science 
        (S.Kom) degree. In this project, I developed a Bone Age Assessment system using the CLAHE (Contrast 
        Limited Adaptive Histogram Equalization) method to enhance the quality of X-ray bone images. The 
        prediction model was built using the VGG-19 Convolutional Neural Network (CNN) architecture, which 
        is known for its strong performance in image classification tasks. The dataset used for this project 
        was provided by The Radiological Society of North America (RSNA), consisting of 12,862 hand X-ray 
        images.
      </P>
      <Box mt={4}>
        <WorkImage src="/images/works/boneage2.png" alt="BoneAge" />
      </Box>
      <P>
        For training the model, I utilized key technologies such as TensorFlow and Keras to build and train 
        the machine learning model. OpenCV was employed to apply the CLAHE method for image enhancement, while 
        NumPy was used for numerical computations during data processing. The proposed model achieved a Mean 
        Absolute Error (MAE) of 11.5599 months, demonstrating its reliability in predicting bone age.
      </P>
      <Box mt={4}>
        <WorkImage src="/images/works/boneage3.png" alt="BoneAge" />
      </Box>
      <P>
        After training the model, it was saved for further testing on unseen X-ray images outside the training 
        dataset. To facilitate this testing process, I developed a simple web application using PHP, enabling 
        users to upload X-ray images and obtain real-time bone age predictions. This project highlights the 
        potential of combining machine learning and image processing techniques for medical applications.
      </P>
      <Box mt={4}>
        <WorkImage src="/images/works/boneage4.png" alt="BoneAge" />
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
