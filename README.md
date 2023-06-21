# UC Santa Cruz Student Website

### Overview
- This guide provides comprehensive instructions for students at UC Santa Cruz _(UCSC)_ to host their personal websites under the UCSC domain.
- This guidances provides a ready-to-use Vuejs template; alternatively, you can use your own front-end resources developed with React, Angular, HTML/CSS, etc... 

### Demo
- An example of the template website being hosted on the UCSC domain. 
- [Live static demo viewable here.](https://shawn-armstrong.github.io/UCSC_Student_Website_Template/#/)
    
    <kbd>![ezgif com-optimize](https://user-images.githubusercontent.com/80125540/247391168-b903b33f-6f61-427d-a5f6-3c779139da9c.gif)</kbd>

### Requirements
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [Bitvise SSH client](https://www.bitvise.com/download-area) _(Alternatively, any FTP client will work)_

## Setup

### Instructions
1. Clone the repository in a directory of your choice with the following command:
     
   ```Console
   git clone https://github.com/Shawn-Armstrong/UCSC_Student_Website_Template.git
   ```
2. Fill in your details at `../assets/details.js` for a quick start. 

## Usage

### Development
- Navigate to the project's root directory in a console and run, `npm run serve`, to spin up a development server which will host your current code in-browser at http://localhost:8080/ .

### Deploy
1. Ensure you've add your CruzID to `../assets/details.js`.
2. Navigate to the root directory of the template and run, `npm run build`, which will create a directory called `dist` containing a production build of your website.
3. Use Bitvise to SSH into the UNIX Timeshare, open a new SFTP windows then copy the files inside `dist` to `public_html`. Your website will be hosted at `https://people.ucsc.edu/~YOUR_CRUZ_ID_HERE/#/` once the upload finishes.
  
<kbd>![deploy](https://user-images.githubusercontent.com/80125540/247389855-735d2ce1-3918-45ce-a0f7-6fa90bc0eae3.gif)</kbd>

## Technical Details

### About the template
- The provided template uses the Vuejs 2.X framework in conjunction with the Veutify 2.X component framework. 
- The template has a file, `..assets\utility.js`, that'll handle basic changes to support people who are unfamiliar with web development. Just plugin your information and it'll make the changes for you.
- The project is organized in a standard Vuejs layout:
    
  ```Console
  \App
  ├── babel.config.js
  ├── jsconfig.json
  ├── package-lock.json
  ├── package.json
  ├── public
  │   └── index.html
  ├── src
  │   ├── App.vue         # App injection point
  │   ├── assets          # Resource files
  │   │   ├── utility.js  # Easy-to-use, auto fill-in
  │   │   └── ...
  │   ├── components      # UI component logic
  │   │   └── ...
  │   ├── main.js         # Project entry point
  │   ├── plugins         # Plugin configuration
  │   │   └── ...
  │   ├── router          # Routing to navigate to webpages logic
  │   │   └── index.js
  │   ├── store
  │   │   └── index.js
  │   ├── styles.scss
  │   │   └── main.scss
  │   └── views           # Webpage logic
  │       └── ...
  └── vue.config.js
  ```
  
### Growing from the template
The template is written in Vuejs because it has a low entry for beginners. If you understand basic JavaScript then I recommend [this course](https://www.udemy.com/course-dashboard-redirect/?course_id=995016) when it's on sale for under $20. You can do a lot with only a few hours of this content and by looking at [Veutify's interactive examples](https://v2.vuetifyjs.com/en/). 
