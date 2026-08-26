import type { StaticImageData } from 'next/image';
import profileImage from '../assets/Pas Foto.jpg';
import bumisiakpusakointernImage from '../assets/bumisiakpusakointern.png';
import sensitiveEntityDetectionImage from '../assets/sensitiveentitydetection.png';
import dishcoveryImage from '../assets/dishcovery.png';
import dynamicBerTopicImage from '../assets/dynamicbertopic.png';
import ztnaImage from '../assets/ztna.png';
import damagedRoadImage from '../assets/damaged road.png';
import humanPoseImage from '../assets/human pose.png';
import awsCertificationImage from '../assets/Sertif Aws.png';
import businessPlanImage from '../assets/SertifBusinessPlan.png';
import googleAnalyticsImage from '../assets/SertifGoogle.png';
import infografisAwardImage from '../assets/SertifInfografis.png';
import pythonVisualizationImage from '../assets/SertifVisualisasiData.png';
import mlBeginnerImage from '../assets/Sertifmachinelearning.png';

export type ContactInfo = {
  phone: string;
  email: string;
  linkedin: string;
};

export type Education = {
  school: string;
  location: string;
  period: string;
  degree: string;
  coursework: string[];
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  image: StaticImageData;
  bullets: string[];
  githubUrl?: string;
};

export type Project = {
  title: string;
  period: string;
  description: string;
  tech: string[];
  image: StaticImageData;
  githubUrl: string;
  liveUrl?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  image: StaticImageData;
};

export type Award = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: StaticImageData;
};

export type PortfolioData = {
  name: string;
  profileImage: StaticImageData;
  role: string;
  headline: string;
  summary: string;
  contact: ContactInfo;
  metaStats: string[];
  about: string[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: {
    soft: string[];
    hard: string[];
    tools: string[];
    languages: string[];
  };
  certifications: Certification[];
  awards: Award[];
};

export const portfolio: PortfolioData = {
  name: 'Muhammad Fadhil Pradipta',
  profileImage,
  role: 'Informatics Engineering Undergraduate',
  headline: 'AI • Machine Learning • Data Science • Full-Stack Developer',
  summary:
    'A detail-oriented and ambitious Informatics Engineering undergraduate student at Brawijaya University with strong expertise in Machine Learning, AI, Data Science, and Software Development. Experienced in developing end-to-end technical solutions ranging from face recognition attendance systems to full-stack web applications.',
  contact: {
    phone: '+62 813-1561-6521',
    email: 'fadhilmedsos@gmail.com',
    linkedin: 'https://linkedin.com/in/fadhilprdipta',
  },
  metaStats: ['Machine Learning', 'Computer Vision', 'NLP', 'Full-Stack Apps'],
  about: [
    'Focused on building practical AI-powered and data-driven products that connect technical depth with measurable business value.',
    'Experienced in end-to-end systems spanning computer vision, facial recognition, NLP, web applications, and cloud-based deployment workflows.',
    'Strong in leading projects, collaborating across teams, and translating user needs into technical solutions with clean architecture and strong documentation.',
  ],
  education: [
    {
      school: 'Brawijaya University',
      location: 'Malang, Indonesia',
      period: 'Aug 2022 – Jul 2026',
      degree: 'Faculty of Computer Science, Informatics Engineering',
      coursework: [
        'Machine Learning',
        'Natural Language Processing',
        'Image Processing',
        'Artificial Intelligence',
        'Data Structures & Algorithms',
        'Web Development',
        'Database Management (MySQL & PostgreSQL)',
        'Operating Systems',
        'Computer Networks',
      ],
    },
  ],
  experience: [
    {
      company: 'PT Bumi Siak Pusako',
      title: 'System Administrator Internship',
      period: 'Jul 2025 – Sep 2025',
      image: bumisiakpusakointernImage,
      githubUrl: 'https://github.com/dipt4aaaa/ProjectBSP',
      bullets: [
        'Developed a multi-platform employee attendance system using Face Recognition, consisting of a Tkinter desktop app, Flutter mobile app, Flask REST API, and Flask web dashboard.',
        'Designed Clean Architecture with a dedicated service layer to improve maintainability, modularity, and scalability.',
        'Integrated PostgreSQL and facial recognition for employee registration and real-time attendance logging.',
        'Built RESTful APIs to support real-time communication between mobile app and core system.',
        'Developed an HR monitoring dashboard with attendance logs, employee management, department statistics, and data visualizations.',
        'Used Docker-based deployment to streamline system setup and development workflows.',
      ],
    },
  ],
  projects: [
    {
      title: 'Sensitive Entity Detection in Medical Records using XLM-RoBERTa',
      period: 'Sep 2025 – Apr 2026',
      description:
        'Fine-tuned and evaluated an XLM-RoBERTa NER model to detect sensitive entities in unstructured medical record PDFs, addressing class imbalance and measuring precision, recall, and F1-score.',
      tech: ['XLM-RoBERTa', 'NER', 'Python', 'Medical NLP', 'Evaluation'],
      image: sensitiveEntityDetectionImage,
      githubUrl: 'https://github.com/dipt4aaaa/XLM-RoBERTa-untuk-NER-Deidentifikasi',
      liveUrl: '',
    },
    {
      title: 'Dishcovery – Recipe Recommendation Web App & AI Chatbot',
      period: 'Feb 2025 – Jun 2025',
      description:
        'Built an Indonesian recipe recommendation web app using TF-IDF and Cosine Similarity, combined with an Ollama-powered local LLM chatbot for conversational assistance.',
      tech: ['TF-IDF', 'Cosine Similarity', 'Ollama', 'Flask', 'JavaScript'],
      image: dishcoveryImage,
      githubUrl: 'https://github.com/dipt4aaaa/Dishcovery_Capstone',
      liveUrl: '',
    },
    {
      title: 'DynamicBERTopic – Dynamic Topic Modeling Pipeline',
      period: 'Feb 2025 – Jun 2025',
      description:
        'Developed an end-to-end MLOps pipeline for dynamic topic modeling using BERTopic with automated data preparation, experiment tracking, and HTML-based dashboards.',
      tech: ['BERTopic', 'MLOps', 'Python', 'NLP', 'Visualization'],
      image: dynamicBerTopicImage,
      githubUrl: 'https://github.com/AhmadSultanMA/DynamicBERTopic-MLOps',
      liveUrl: '',
    },
    {
      title: 'Zero Trust Network Access Medical Records',
      period: 'Feb 2025 – Jul 2025',
      description:
        'Designed and deployed a zero-trust architecture across AWS EC2 instances with Dockerized services, Nginx, PostgreSQL, Node.js, and NetBird network isolation.',
      tech: ['AWS', 'Docker', 'NetBird', 'PostgreSQL', 'Node.js'],
      image: ztnaImage,
      githubUrl: 'https://github.com/dipt4aaaa/ztna-medical-records',
      liveUrl: '',
    },
    {
      title: 'Damaged Road Image Classification',
      period: 'Oct 2024 – Dec 2024',
      description:
        'Built a single-hidden-layer neural network from scratch using NumPy to classify road damage with evaluation metrics including accuracy, confusion matrix, precision, recall, and F1-score.',
      tech: ['NumPy', 'Neural Network', 'Computer Vision', 'Python'],
      image: damagedRoadImage,
      githubUrl: 'https://github.com/dipt4aaaa/DamagedRoadDetection',
      liveUrl: '',
    },
    {
      title: 'Human Pose Classification (CNN vs Random Forest)',
      period: 'Oct 2023 – Dec 2023',
      description:
        'Compared CNN and Random Forest performance on the MPII Human Pose Dataset to benchmark deep learning and traditional ML approaches across activity labels.',
      tech: ['CNN', 'Random Forest', 'MPII', 'Python', 'Computer Vision'],
      image: humanPoseImage,
      githubUrl: 'https://github.com/dipt4aaaa/HumanPose',
      liveUrl: '',
    },
  ],
  skills: {
    soft: ['Problem Solving', 'Critical Thinking', 'Leadership', 'Teamwork', 'Time Management', 'Adaptability', 'Project Coordination', 'Analytical Thinking'],
    hard: ['Machine Learning', 'Natural Language Processing (NLP)', 'Computer Vision', 'Full-Stack Development', 'REST API', 'Data Analysis', 'Database Management', 'Zero Trust Network Access (ZTNA)'],
    tools: ['AWS', 'Docker', 'Git/GitHub', 'PostgreSQL', 'MySQL', 'Flask', 'Laravel', 'Flutter', 'NetBird', 'Postman', 'Microsoft Office', 'Google Workspace', 'Visual Studio Code', 'Arduino IDE', 'Canva'],
    languages: ['Indonesia', 'English'],
  },
  certifications: [
    {
      title: 'AWS Academy Graduate - AWS Academy Data Engineering',
      issuer: 'Amazon Web Services',
      date: 'May 2025',
      image: awsCertificationImage,
    },
    {
      title: 'Google Analytics Certification (2026)',
      issuer: 'Google Digital Academy / Skillshop',
      date: 'Aug 2026',
      image: googleAnalyticsImage,
    },
    {
      title: 'Belajar Machine Learning untuk Pemula',
      issuer: 'Dicoding Indonesia',
      date: 'Oct 2025',
      image: mlBeginnerImage,
    },
    {
      title: 'Belajar Dasar Visualisasi Data & Pemrograman dengan Python',
      issuer: 'Dicoding Indonesia',
      date: 'Jul 2025',
      image: pythonVisualizationImage,
    },
  ],
  awards: [
    {
      title: 'Finalist in Infographic Poster (4C National Competition)',
      issuer: 'FILKOM UB',
      date: 'Nov 2024',
      description:
        'Selected as a national finalist by designing a data-driven infographic poster that analyzed industrial workplace accident trends in Indonesia using clustering for geographical mapping and time-series modeling for 5-year fatality forecasting, while proposing an AI-driven CCTV system for real-time PPE detection and hazard prevention.',
      image: infografisAwardImage,
    },
    {
      title: '2nd Place Winner – International Business Plan Competition (ECOFEST 2024)',
      issuer: 'FEB UPNVJ',
      date: 'Feb 2024',
      description:
        'Secured 2nd place among top competing teams by conceiving and developing FixFlare, an innovative automotive service business plan featuring an online mechanic booking platform with UI/UX prototypes designed to connect vehicle owners with certified local mechanics.',
      image: businessPlanImage,
    },
  ],
};
