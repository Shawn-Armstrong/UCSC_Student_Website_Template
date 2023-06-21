<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="display-1 mb-5">Projects</h1>
        <div>
          <v-expansion-panels inset>
            <v-expansion-panel
              v-for="(project, index) in projects"
              :key="index"
            >
              <v-expansion-panel-header
                class="white--text bold-header"
                color="#006aad"
                >{{ project.name }}</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <div>
                  <h3 class="mt-2">Summary:</h3>
                  <p>{{ project.summary }}</p>
                </div>
                <div>
                  <v-row>
                    <v-col
                      v-for="(image, imageIndex) in project.image"
                      :key="imageIndex"
                    >
                      <v-img
                        :src="image"
                        :alt="`${project.name} image ${imageIndex + 1}`"
                        max-height="500"
                        contain
                      ></v-img>
                    </v-col>
                  </v-row>
                </div>
                <div>
                  <h3 class="mt-2">Details:</h3>
                  <p>{{ project.details }}</p>
                </div>
                <div>
                  <h3>Tools / Concepts:</h3>
                  <ul>
                    <li
                      v-for="(tool, toolIndex) in project.tools"
                      :key="toolIndex"
                    >
                      {{ tool }}
                    </li>
                  </ul>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      projects: [
        {
          name: "Universal Robots Primary Client Library",
          summary:
            "Project used Python to implement a client library responsible for deserializing communication messages sent from a controller unit within a collaborative robot.",
          details:
            "Universal Robots, a prominent industrial robotics manufacturer, produces collaborative robots with multiple actuators managed by an onboard controller. This controller is an industrial computer equipped with a microprocessor that runs a proprietary real-time operating system. Among its various functions, the operating system offers a primary client interface, allowing external devices to remotely interact with the robot. The interface communicates with its clients via messages using hexadecimal strings that represent binary data, encoding robot state information as specified in their documentation. I used this specification to design a client library that receives these messages, parses strings, then deserializes their content before writing them to files. The client enables end-users to enhance their real-time robot application’s ability to support robot state monitoring.",
          tools: [
            "Python",
            "Client-Server Communication",
            "Object Oriented Programming",
            "Inheritance",
            "Polymorphism",
            "Deserialization",
          ],
          image: [require("@/assets/ur_client_library.gif")],
        },
        {
          name: "6G Wireless Antenna Testing",
          summary:
            "Project is developing software resources responsible for supporting test and measurement operations for cellular 6G assets.",
          details:
            "This is a collaborative research and development project between engineers at Keysight Technologies and UC Santa Cruz researchers, centered on developing a test and measurement system for benchmarking 6G cellular communication assets. I designed a server-client architecture within the open-source testing platform, OpenTAP, enabling iterative and controlled performance evaluations. Beyond this, I drafted numerous comprehensive technical documents to support development, end-users and stakeholders. I continue to provide technical consulting and contribute to enhancing the scalability of the system's design.",
          tools: [
            "Python",
            "Polymorphism",
            "Test and Measurement",
            "OpenTAP",
            "Agile Development",
          ],
          image: [
            require("@/assets/6g_model.gif"),
            require("@/assets/opentap.gif"),
          ],
        },
        {
          name: "GPU Parallelism",
          summary:
            "Project compares and contrasts parallelism performance between using single threaded, multi-threaded and GPU methods in an N-body problem.",
          details:
            "The project focuses on the N-body problem, which involves simulating a nearest-neighbor attraction model on a 2D plane with a given number of points. For each point, the Euclidean distance is calculated with all other points to determine its closest neighbor. The point is then moved one step closer to that neighbor. To handle the large number of computations required, points can be partitioned into groups and assigned threads to process them in parallel. In this experiment, WGSL was used to leverage the power of GPUs and accommodate nearly 18x more data points at 60 FPS than the web worker method. The experiment highlights the benefits and limitations of each parallel computing method and provides insights into the best approach to use for different types of problems.",
          tools: [
            "JavaScript Web Workers",
            "WebGPU Shading Language",
            "Thread Synchronization",
          ],
          image: [require("@/assets/GPU.gif")],
        },
        {
          name: "HTTP File Transfer Protocol Server",
          summary:
            "Project strictly used C to implemented a multithreaded HTTP, FTP server.",
          details:
            "This FTP server utilized HTTP/1.1 as its communication protocol, as defined in the specification RFC 2616. The server supported POST, PUT, GET, and DELETE methods along with various headers. Essentially, the server listened for client request messages, received the payload, and parsed it using regular expressions to identify the request line, headers, and body. After performing the necessary file system actions based on the request, the server sent an appropriate response message back to the client. The server used a thread pool and logging system to support parallelism to improve performance. The implementation was tested using multiple FTP clients to ensure consistent behavior.",
          tools: [
            "C",
            "POSIX threads",
            "HTTP",
            "Logging",
            "Concurrency Primitives",
          ],
          image: [],
        },
        {
          name: "ASL Neural Network",
          summary: "Project trained a machine learning model capable of recongizing letters associated with American Sign Lanaguge images.",
          details: "The project used applied machine learning concepts in conjunction with TensorFlow and Keras libraries to train a convolutional neural network (CNN) capable of identifying letters associated with ASL (American Sign Language) images. The model used an ASL dataset consisting of 1,000 images of varying quality with assigned labels. The dataset was preprocessed, cleaned, and partitioned into training and validation sets. The CNN model comprised multiple layers, including two Conv2D layers with ReLU (Rectified Linear Unit) activation functions, followed by Batch Normalization, MaxPooling, and Dense layers. The final Dense layer used a softmax activation function for class probability output. The model was compiled using the Adam optimizer and Sparse Categorical Crossentropy loss function.",
          tools: [
            "Applied Machine Learning",
            "Convolutional Neural Network",
            "Batch Normalization",
            "Keras",
            "Tensorflow",
            "Image Recognition "
          ],
          image: [require("@/assets/asl.jpg")],
        }
      ],
    };
  },
};
</script>
