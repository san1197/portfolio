﻿import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sandya Manoharan",
  title: "Hey there! I'm Sandya",
  subTitle: emoji("Research Engineer @ Indeed"),
  sub2: emoji('Graduate in Software Engineering @ ASU'),
  resumeLink: "https://drive.google.com/file/d/16JuJedhcXDzW5mKftMbsn0X6JUCkKmbo/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sandyamanoharan/",
  github: "https://github.com/san1197",
  gmail: "sandya7c@gmail.com"
};

// Your Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "PRODUCT OF 2 YEARS OF SOFTWARE EXPERIENCE, INTERNSHIPS AND PROJECTS",
  skills: [
  ],


  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asuLogo.png"),
      subHeader: "Master of Science in Software Engineering",
      duration: "August 2019 - Present",
      desc: "CGPA: 3.70",
      descBullets: [
        "Courses: Data Mining, Software Agility, Advanced Data Structures and Algorithms, Foundations of Software Engineering",
        "Working as a Technology Assistant to assist professors with technical issues inside a remote learning setup.",
        "Working as an Online Director to aide in video recording, caption correction of classes for ASU Online students."
      ]
    },
    {
      schoolName: "SSN College of Engineering, India",
      logo: require("./assets/images/psgLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "August 2015 - May 2019",
      desc: "CGPA: 7.68",
      descBullets: [
        "Courses: Object Oriented Programming, Cloud Computing, Artificial Intelligence, Distributed Systems.",
        "Received Full Tuition waiver for exceptional achievement(National) in Chess.",
        "Served as the Sports Department President, organizing various tournaments and events."
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Python",
      progressPercentage: "80%"  
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Amazon Web Services",
      progressPercentage: "65%"
    }
  ]
};


const workExperiences = {
  viewExperiences: true, 
  experience: [
    {
      role: "Research Engineer I",
      company: "Indeed",
      companylogo: require("./assets/images/indeedlogo.png"),
      date: "July 2021 - Present",
      descBullets: [
        "Built automated weekly reports for the Amazon partnership project, responsible for $400MM in total hiring opportunity.",
        "Implemented a React front end for an internal tool that provides daily prescriptive opportunities to Client Success representatives. The tool influenced close to 47,000 opportunities and over $500 million in revenue in Q4, 2022",
        "Contributed to full stack development of Featured Employer, a project that incentivizes all employers to spend healthy budgets on Indeed Sponsored Jobs.",
        "Assisted in the maintenance of a benchmark tool to build client reports and provide insights about their performance relative to the market. The tool has hundreds of users building around 1000 reports each month",
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "PayPal's Opportunity Hack",
      companylogo: require("./assets/images/opphackLogo.png"),
      date: "May 2020 - Aug 2020",
      descBullets: [
        "Developed opportunityhack.io, a full-stack web application to showcase software solutions built by Opportunity Hack.",
        "Resolved issues causing site crashes, elevating uptime to 99%. Efforts were key to a 37% increase in daily traffic.",
        "Improved navigation by creating dynamic media sections, introducing live dashboards, and adding social media plugins.",
        "Ensured technical feasibility and optimum functioning of design features that accelerated load time by 20%."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Uniq Technologies",
      companylogo: require("./assets/images/aesLogo.png"),
      date: "December 2018 – June 2019",
      descBullets: [
        "Implemented Fake Account Detection in Twitter using Machine Learning algorithms and achieved an accuracy of 92%.",
        "Extracted real-time Twitter dataset of 10,000 users, performed filtering and preprocessing to improve quality of results.",
        "Built a collaborative filtering model to flag unusual user behavior and compute fakeness percentage based on it. ",
        "Trained and tested various Clustering algorithms, and built a comparison chart to depict increase in precision by 7%. "
      ]
    },
  ]
};


const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "xyz", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Projects"),
  subtitle: "A glimpse of the few course and self projects I have worked on",

  achievementsCards: [
    {
      title: "Personal Expenditure Insights",
      subtitle: "A light-weight methodology for extracting insights from text representing personal transactions using Triple Stores and Web Ontology Language(OWL).",
      image: require("./assets/images/expenseLogo.png"),
      footerLink: [
        { name: "View Project", url: "https://github.com/san1197/Personal-Expenditure-Insights" }
      ]
    },
    {
      title: "opportuityhack.io",
      subtitle: "A full-stack web application to showcase software solutions built by Opportunity Hack.",
      image: require("./assets/images/opphackLogo2.png"),
      footerLink: [
        { name: "View Project", url: "https://opportunityhack.io/" }
      ]
    },
    {
      title: "AWS Account Vending Machine",
      subtitle: "A serverless and dynamic Account Vending Machine to create AWS accounts and Organizational Units.",
      image: require("./assets/images/awsLogo.png"),
      footerLink: [
        { name: "View Project", url: "https://github.com/san1197/AWS-AccountVendingMachine" },
      ]
    },
    {
      title: "Twitter Fake Account Detection",
      subtitle: "A machine learning model that detects unusual account activity in social media and flags the user as fake.",
      image: require("./assets/images/aicopLogo.png"),
      footerLink: [
        { name: "View Project", url: "https://github.com/san1197/Twitter-FakeAccountDetection" },
      ]
    },
    {
      title: "CodeZilla - Compiler and Interpreter",
      subtitle: "A novel and easy-to-use Imperative Programming Language, inspired by Python.",
      image: require("./assets/images/codezillaLogo.png"),
      footerLink: [{ name: "View Project", url: "https://github.com/san1197/CodeZilla" }]
    },
    {
      title: "MatHub - Math Learning Platform",
      subtitle: "An interactive web application to assist middle school students in learning Math fundamentals.",
      image: require("./assets/images/mathubLogo.png"),
      footerLink: [
        { name: "View Project", url: "https://github.com/san1197/MatHub-Math-Learning-Platform" }
      ]
    }
  ]
};

const bigProjects = {
  title: "Hobbies",
  subtitle: "What I do in my free time? Besides Instagram.",
  hobbiesList: [
    {
      hobbyName: "play chess",
      fontAwesomeClassname: "fas fa-chess-knight"
    },
    {
      hobbyName: "paint",
      fontAwesomeClassname: "fas fa-paint-brush"
    },
    {
      hobbyName: "write short stories",
      fontAwesomeClassname: "fas fa-pen-alt"
    },
    {
      hobbyName: "listen to vintage music",
      fontAwesomeClassname: "fas fa-music"
    },
    {
      hobbyName: "watch the sun set",
      fontAwesomeClassname: "fas fa-cloud-sun"
    },
    {
      hobbyName: "travel",
      fontAwesomeClassname: "fas fa-car-side"
    },
  ]
};

const pubSection = {

  title: "",
  subtitle: "",

  pubs: [
    
  ]
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("😅"),

  talks: [
    {
      title: "abc",
      subtitle: "xyz",
      slides_url: "",
      event_url: ""
    }
  ]
};

const podcastSection = {
  title: emoji("🎙️"),
  subtitle: "abc",
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Say hi, let's see how we can change the world together.",
  email_address: "sandya7c@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, pubSection, talkSection, podcastSection, contactInfo};
