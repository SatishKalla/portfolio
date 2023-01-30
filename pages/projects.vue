<template>
  <div class="projects" style="overflow-y: scroll;
    height: 500px;">
    <ui-grid position="left">
      <ui-grid-cell v-for="(item, index) in projects" :key="index" columns="4">
        <ProjectComponent :project="item"/>
      </ui-grid-cell>
    </ui-grid>
  </div>
</template>
<script setup>
const projects = [
  {
    name: 'Umano',
    fullName: 'Umano Tech',
    description: 'Umano is a product which collects information from different project management tools like jira, azure, bitbucket/gitlab, confluence, slack etc…, It has 20 metrics to display data from all the tools at a sprint level. Every metric shows data in charts, tables and timelines.',
    role: 'Senior developer',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Angular Js",
      "Node Js",
      "Express Js", 
      "Postgres",
      "Jira",
      "Git"
    ],
    responsibilities: [
      'Attended daily scrum meetings, sprint retro and planning sessions.',
      'Developed new metrics with charts and surfacing area. Ex: Planning Accuracy, Sprint Stability.',
      'Integrated and worked on chart js library and its plugins.',
      'Implemented Freemium module functionality.',
      'Developed custom filters for the dashboard for customers and users.',
    ],
    class: 'base-img dummy',
    url: 'https://www.umano.tech/',
    images: []
  },
  {
    name: 'VKYC',
    fullName: 'Video KYC',
    description: 'It`s an online KYC application built using Dhiwise platform that connects agents of the banks to customers.Customers can schedule a session with available agents online for videoKYC, In video call agent captures screenshots of the submitted proofs like photo, aadhar, pan and signature. Agent submits a kyc application for review. KYC can be approved or rejected. It consists of modules like requests, users, roles.',
    role: 'Team lead',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "React",
      "Node Js",
      "Express Js",
      "Dhiwise", 
      "MongoDB",
      "AWS S3", 
      "Heroku",
      "Twilio SMS", 
      "Sendgrid",
      "Git"
    ],
    responsibilities: [
      'Attended daily scrum meetings, sprint retro and planning sessions.',
      'Designed a database and created all the models',
      'Developed all the required rest api’s.',
      'Uploaded / Retrieved all the images to AWS S3 bucket using aws-sdk',
      'Integrated SMS(Twilio) and Email(Sendgrid) gateways',
      'Deployed application in heroku for testing and demo purpose'
    ],
    class: 'base-img dummy',
    url: '',
    images: []
  },
  {
    name: 'Shakthi QC',
    fullName: 'Shakthi Quality Control',
    description: 'This is a web-based application for manufacturing industries. Application tracks cylinder manufacturing process,It consists modules like stages,production and stock and different types of KPIs displayed in dashboards and reports',
    role: 'Senior Developer',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "React",
      "Material UI",
      "Node Js",
      "Express Js", 
      "MySQL",
      "Jira",
      "Git"
    ],
    responsibilities: [
      'Attended daily scrum meetings, sprint retro and planning sessions.',
      'Created database entities for the respective module',
      'Implemented algorithm for planning and scheduling module',
      'Setting up the application template with dynamic sidebar menus based on user role',
      'Developed UI components and rest api’s, Integration of both UI and backend',
      'Implemented UI routing.'
    ],
    class: 'base-img dummy',
    url: 'https://www.opstech.co.in/',
    images: []
  },
  {
    name: 'CASA ERP',
    fullName: 'CASA Lights',
    description: 'This is a web-based ERP system which maintains all the material details in different warehouses and tracks each item. It has complex modules like accounts,hrms, inventory.',
    role: 'UI Developer',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Angular",
      "Bootstrap",
      ".Net Framework",
      "Git"
    ],
    responsibilities: [
      'Converted a basic html template to angular template.',
      'Developed UI components and Integration with backend api’s.',
      'Implemented authentication and authorization using JWT.',
      'Developed dashboard with different charts and reports with lots of data in grids',
      'Implemented UI routing',
    ],
    class: 'base-img dummy',
    url: 'https://casagroup.in/',
    images: []
  },
  {
    name: 'SFCS',
    fullName: 'Shop Floor Control System',
    description: 'This is a web-based ERP system which helps in resolving the pain areas in the Apparel manufacturing platform. Application consists of various modules like laying, cutting, sewing and packing etc.which fulfills the flow of stitching a garment from scratch. It also includes tracking of the finished goods which are needed to be delivered to clients for various countries across the globe.',
    role: 'Senior Developer',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "React",
      "Ant Design",
      "Node Js",
      "Nest Js",
      "Postgres",
      "Kafka Js",
      "Bull Js",
      "Nx",
      "Jira",
      "Git"
    ],
    responsibilities: [
      'Attended daily scrum to give updates and discuss issues if any',
      'Taking business/task understandings from SME',
      'Developed UI components and rest api’s, Integration of both UI and backend.',
      'Writing unit test cases for both UI components and functional logics',
    ],
    class: 'base-img dummy',
    url: 'https://brandix.com/',
    images: []
  },
  {
    name: 'CDM',
    fullName: 'Charge Description Master',
    description: 'CDM is an application which collects 	the data from the hospital information system and review and updates the data based on the charge codes. It has modules like CDM List and Project form.',
    role: 'Senior Developer',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Angular",
      "Bootstrap",
      "Php",
      "Laravel",
      "MySQL",
      "Git"
    ],
    responsibilities: [
      'Implemented a data grid with filters which loads thousands of the records on the screen using virtual scroll mechanism in angular',
      'Worked on controller logics with complex queries using ORM and native SQL',
      'Implemented JWT authentication ',
      'Used rxjs Observables and behavioral subject to transfer the data in states in the components',
      'Implemented cors and csrf tokens as middleware in larvel',
      'Implemented Excel import and export component'
    ],
    class: 'base-img dummy',
    url: 'https://pena4tech.com/',
    images: []
  },
  {
    name: 'GSS',
    fullName: 'Gas Stores System',
    description: 'Gss is a web application for gas stores to record the daily transactions of the gas, lottery etc… and it has some high level reports day, month and year wise, it has modules like gas, lottery, in store payments and store sales',
    role: 'UI Developer',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Angular",
      "Bootstrap",
      ".Net Framework",
      "Git"
    ],
    responsibilities: [
      'Taking requirement from clients and understanding the business logics to create screens',
      'Developed UI Screens using Angular JS',
      'Implemented routing for the application using ui-router',
      'Implemented lazy loading technique using oc lazy load module to minimize loading of JavaScript files',
      'Used Factories and Services to send request and receive responses.', 
      'Implemented chart JS module to display charts in dashboard.',
    ],
    class: 'base-img dummy',
    url: '',
    images: []
  },
  {
    name: 'MCA Connect',
    fullName: 'Manohar Chowdhry & Associates',
    description: 'MCA connect is an exclusive web portal which makes team and services more	productive and monitors the business process. It has major modules like HRM, Timesheets, Billing, etc.',
    role: 'Senior Developer',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Jquery",
      "Angular Js",
      "Bootstrap",
      "Php",
      "Laravel",
      "MySQL",
      "Xampp",
      "Git"
    ],
    responsibilities: [
      'Involved in understanding and analyzing the project requirement and business functional flow.',
      'Involved in database design and application setup including routing and security.',
      'Integrated angular JS to the application for better UI and performance.',
      'Worked on complex business logics in modules like Billing and Timesheets.',
      'Worked on SQL quires to get better performance for the application.',
      'Implemented third party tools from composer like dompdf etc'
    ],
    class: 'base-img dummy',
    url: 'https://www.mca.co.in/',
    images: []
  },
  {
    name: 'Minte ERP',
    fullName: 'Minte',
    description: 'It is a complete mobile phone’s inventory management project with some added modules like open box phones Quality Check, Mobile Spares Inventory and Service Management, Stock Management, Material Requirement, Planning and sales life cycle.',
    role: 'Senior Developer',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Jquery",
      "Angular Js",
      "Bootstrap",
      "Php",
      "Yii2",
      "MySQL",
      "Xampp",
      "Git"
    ],
    responsibilities: [
      'Designed wireframes for forms and  application flow chart using draw.io',
      'Developed purchase order, quality and stock movements screens using angular JS and bootstrap classes.',
      'Implemented data models and controllers using Gii module and based on the requirement worked on controller logics.',
      'Used DB transactions throughout the application to restrict data loss.',
      'Implemented Import and export functionality using PHPExcel',
      'Used enhanced grid view like yii2-grid to display data in the reports',
    ],
    class: 'base-img dummy',
    url: 'https://www.minte.in/',
    images: []
  },
  {
    name: 'Factual Soft',
    fullName: 'RapidDox',
    description: 'Factual soft is a support application (Administration) for Rapiddox Product, To maintain all the information like users,licenses and payments. Factual soft has a wordpress website with rich in content and video, slider and contact plugins	with useresponse customer support.',
    role: 'Developer',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Jquery",
      "Php",
      "MySQL",
      "Xampp",
      "Git"
    ],
    responsibilities: [
      'Created a wordpress website, template modifications, third party plugins and widgets installations',
      'Developed trail download form logics and contact form logics and displayed data in a grid in wp-admin.',
      'Integrated Useresponse customer support Api to the website.',
      'As part of the administration site implemented login functionality with token based authentication.',
      'Integrated stipe payment gate way using javascript with payment module.',
      'Implemented licenses and coupon management modules.',
    ],
    class: 'base-img dummy',
    url: 'https://rapiddox.com/',
    images: []
  },
  {
    name: 'IBrosoft',
    fullName: 'Insurance Broking Software',
    description: 'IBroSoft is web based platform for Insurance Broking. IBroSoft Broking is follows KIRA/TIRA rules and accepted by Kenya and Tanzania Insurance governance\'s. This is complete automation tool for insurance broker firms. It has high end features like automated renewal system and firm accounting management system',
    role: 'Developer',
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Jquery",
      "Php",
      "MySQL",
      "Joomla CMS",
      "Mootools",
      "Highcharts",
      "Xampp",
      "Git"
    ],
    responsibilities: [
      'Generated front-end screens using Joomla administrator for the individual modules.',
      'Applied client side form validations and regex patterns.',
      'Created articles and included php files to build module functionalities.',
      'Running basic SQL queries using phpmyadmin in Xampp.',
      'Developed reports using data tables and used highcharts in dashboards'
    ],
    class: 'base-img dummy',
    url: '',
    images: []
  },
]
</script>
<style>
.projects::-webkit-scrollbar {
  width: 5px;
}
.projects::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,.12);
  border-radius: 20px;
}
.dark-mode .projects::-webkit-scrollbar-thumb {
  background-color: #fff;
}

.base-img {
  height: 60px;
  margin: 10px;
  background-repeat: no-repeat;
  background-size: cover;
}
.dummy {
  background-image: url('~/assets/images/img-dummy.jpg');
}
</style>