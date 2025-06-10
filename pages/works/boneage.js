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
import Layout from '../../components/layouts/article'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useState } from 'react'

const codeString = 
`import cv2

def apply_clahe(image, clip_limit=7, tile_grid_size=(8, 8)):
    dataTORGB = cv2.cvtColor(image, cv2.COLOR_BGR2YUV)
    Y, U, V = cv2.split(dataTORGB)
    clahe = cv2.createCLAHE(clipLimit=clip_limit, tileGridSize=tile_grid_size)
    HE_Y = clahe.apply(Y)
    hasilHE = cv2.merge((HE_Y, U, V))
    hasilHE = cv2.cvtColor(hasilHE, cv2.COLOR_YUV2BGR)
    return hasilHE

image_path = "/kaggle/input/rsna-bone-age/boneage-test-dataset/boneage-test-dataset/4370.png"
input_image = cv2.imread(image_path)

output_image = apply_clahe(input_image)
fig = plt.figure(figsize=(8,8)) 
  
rows = 2
columns = 2
fig.add_subplot(rows, columns, 1) 
plt.imshow(input_image)
fig.add_subplot(rows, columns, 2) 
plt.imshow(output_image)`

const codeString1 = 
`from tensorflow.keras.applications import VGG19
from keras import backend as K
from keras import layers, models, Model, regularizers
from keras.models import Sequential, load_model
from keras.losses import MeanAbsoluteError

model_name = 'Non-Gender-VGG19'
version = 'VGG19-uf5-2048-2048'

# penggunaan arsitektur pre-trained VGG19 
vgg19_imagenet_model = VGG19(include_top=False, weights='imagenet', input_shape=(224, 224, 3))

# freeze model VGG19
for layer in vgg19_imagenet_model.layers[:-5]:
    layer.trainable = False

# Flatten output layer dari VGG19
flattened = tf.keras.layers.Flatten()(vgg19_imagenet_model.output)

# Fully connected layer
x = tf.keras.layers.Dense(2048, activation='relu')(flattened)
x = tf.keras.layers.Dense(2048, activation='relu')(x)

# Fully connected layer, output layer
out = tf.keras.layers.Dense(1, name="Output-Layer")(x)

# fungsi untuk metrik loss RMSE
def root_mean_squared_error(y_true, y_pred):
        y_true = tf.cast(y_true, tf.float32)
        return K.sqrt(K.mean(K.square(y_pred - y_true))) 
    
vgg19_model = tf.keras.models.Model(inputs=vgg19_imagenet_model.input, outputs=out, name=model_name)
adam = tf.keras.optimizers.Adam(learning_rate=0.001)
vgg19_model.compile(loss=root_mean_squared_error, metrics=[MeanAbsoluteError()], optimizer = adam)`

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
  <Layout title="boneage">
    <Container>
      <Title>
        Bone Age Assesment with CLAHE and Pretrained VGG19 <Badge>2024</Badge>
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
      </List>
      <P>
        This project was conducted as part of my thesis research to obtain a Bachelor of Computer Science 
        (S.Kom) degree. In this project, I developed a Bone Age Assessment system using the CLAHE (Contrast 
        Limited Adaptive Histogram Equalization) method to enhance the quality of X-ray bone images. The 
        prediction model was built using the VGG-19 Convolutional Neural Network (CNN) architecture, which 
        is known for its strong performance in image classification tasks. The dataset used for this project 
        was provided by <Link href="https://www.kaggle.com/datasets/kmader/rsna-bone-age" target="_blank">The Radiological Society of North America (RSNA)</Link>, consisting of 12,862 hand X-ray 
        images.
      </P>
      <P>In an endeavor to deliver a more accurate and reliable bone age assessment system, this project 
        specifically highlights the crucial role of <strong>Contrast Limited Adaptive Histogram Equalization (CLAHE)</strong>  during the image pre-processing phase. Bone X-ray images, which form the foundation of Bone Age  Assessment (BAA), frequently present visibility challenges due to inherently low contrast. By applying 
        CLAHE, we successfully enhanced image quality significantly, rendering bone structures far clearer 
        and more detailed without losing vital information. This improvement in contrast and clarity is 
        paramount as it enables the Convolutional Neural Network (CNN) VGG19 model to extract complex 
        features related to bone age more effectively. Below is the code used to apply CLAHE.
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
        After the code was implemented, here are the results of an image before and after CLAHE was applied
      </P>
      <Box mt={4}>
        <WorkImage src="/images/works/boneage2.png" alt="BoneAge" />
      </Box>
      <P>
        Prior to model training, the dataset was meticulously prepared: it was divided into 80% for training, 10% for validation, and 10% for testing.
        This strategic split ensured robust model learning and unbiased evaluation. Furthermore, all image data underwent rescaling by 1.0/255
        to normalize pixel values (0-255 to 0-1), a standard practice optimizing deep learning performance and aiding faster model convergence.
      </P>
      <P>
        For training the model, I utilized key technologies such as TensorFlow and Keras to build and train
        the machine learning model. Specifically, the <strong>VGG19 architecture</strong> was chosen for its proven capability
        in extracting complex and hierarchical features from image data, which is crucial for accurately
        assessing bone age from X-ray images. Its deep convolutional layers excel at capturing intricate patterns
        that might otherwise be missed by shallower networks. Furthermore, OpenCV was employed to apply the
        CLAHE method for image enhancement, while NumPy was used for numerical computations during data processing.
        Below is the VGG19 model code I utilized for this purpose:
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
        With the model architecture defined and data prepared, the training commenced using a batch size of 32 for 60 epochs.
        This process allowed the model to learn iteratively from the training data. Post-training, the model&rsquo;s
        performance was rigorously evaluated on the unseen test set to confirm its generalization capabilities and accuracy
        in assessing bone age.
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
      <P>
        The evaluation results clearly demonstrated a significant improvement in model performance.
        After the application of <strong>CLAHE (Contrast Limited Adaptive Histogram 
        Equalization)</strong> during preprocessing, the model achieved an <strong>RMSE of 14.8154 months</strong> and 
        a <strong>Mean Absolute Error (MAE) of 11.5599 months</strong>. In contrast, when CLAHE was not utilized, the recorded RMSE was 15.9707 months and the MAE was 12.7505 months.
        This marked difference unequivocally indicates that CLAHE contributed positively to enhancing the accuracy of the regression model,
        resulting in bone age predictions that are notably closer to the true values, thus offering a more reliable diagnostic aid.
      </P>
    </Container>
  </Layout>
)}

export default Work
export { getServerSideProps } from '../../components/chakra'
