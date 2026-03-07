import ReactIcon from '../assets/icons/ReactIcon.svg';
import NodejsIcon from '../assets/icons/NodejsIcon.svg';
import MongodbIcon from '../assets/icons/MongodbIcon.svg';
import ExpressIcon from '../assets/icons/ExpressIcon.svg';
import SocketioIcon from '../assets/icons/SocketioIcon.svg';
import css3Icon from '../assets/icons/css3Icon.svg';
import html5Icon from '../assets/icons/html5Icon.svg';
import FirebaseIcon from '../assets/icons/FirebaseIcon.svg';
import GitIcon from '../assets/icons/GitIcon.svg';
import GithubIcon from '../assets/icons/GithubIcon.svg';
import DockerIcon from '../assets/icons/DockerIcon.svg';
import PostgresqlIcon from '../assets/icons/PostgresqlIcon.svg';
import MssqlServerIcon from '../assets/icons/MssqlServerIcon.svg';
import MaterialIcon from '../assets/icons/MaterialIcon.svg';
import ViteIcon from '../assets/icons/ViteIcon.svg';
import i18nextIcon from '../assets/icons/i18nextIcon.svg';
import MongooseIcon from '../assets/icons/MongooseIcon.svg';
import SwiftIcon from '../assets/icons/SwiftIcon.svg';
import JiraIcon from '../assets/icons/JiraIcon.svg';
import PostmanIcon from '../assets/icons/PostmanIcon.svg';
import VercelIcon from '../assets/icons/VercelIcon.svg';
import RailwayIcon from '../assets/icons/RailwayIcon.svg';
import HerokuIcon from '../assets/icons/HerokuIcon.svg';
import KotlinIcon from '../assets/icons/KotlinIcon.svg';
import NextjsIcon from '../assets/icons/NextjsIcon.svg';
import CloudStockAppScreenshot from '../assets/projects-screenshots/CloudStockApp.png';
import CloudStockDashboardScreenshot from '../assets/projects-screenshots/CloudStockDashboard.png';
import KbBusinessHubAppScreenshot from '../assets/projects-screenshots/KbBusinessHubApp.png';
import KbBusinessHubCustomizationScreenshot from '../assets/projects-screenshots/KbBusinessHubCustomization.png';
import KbBusinessHubDataOriginSwitchScreenshot from '../assets/projects-screenshots/KbBusinessHubDataOriginSwitch.png';
import KbBusinessHubPayrollScreenshot from '../assets/projects-screenshots/KbBusinessHubPayroll.png';
import NuraHomeScreenshot from '../assets/projects-screenshots/NuraHome.png';
import TomwareDashboardScreenshot from '../assets/projects-screenshots/TomwareDashboard.png';

const slide = (titleEn, titleEs, hintEn, hintEs, image, options = {}) => ({
  title: { en: titleEn, es: titleEs },
  hint: { en: hintEn, es: hintEs },
  image,
  ...options,
});

export const homeTechGroups = {
  web: [
    {
      name: 'MongoDB',
      colors: ['#ffffff', '#4DB33D', '#3A6B28', '#a8d5a2'],
    },
    {
      name: 'Express.js',
      colors: ['#fff176', '#ffd54f', '#ffb300', '#fbc02d'],
    },
    {
      name: 'React.js',
      colors: ['#61dafb', '#21a1f1', '#0d8ddb', '#61dafb'],
    },
    {
      name: 'Node.js',
      colors: ['#8bc34a', '#689f38', '#558b2f', '#aed581'],
    },
  ],
  mobile: [
    {
      name: 'React Native',
      colors: ['#61dafb', '#55c2fb', '#0d8ddb', '#8de7ff'],
    },
    {
      name: 'Swift',
      colors: ['#ffbd6f', '#ff7a18', '#ff4d00', '#ffd194'],
    },
    {
      name: 'Kotlin',
      colors: ['#7f52ff', '#ff8a00', '#ff5ea8', '#7f52ff'],
    },
  ],
};

export const stackGroups = [
  {
    id: 'backend',
    items: [
      { name: 'Node.js', icon: NodejsIcon },
      { name: 'Express', icon: ExpressIcon },
      { name: 'Socket.io', icon: SocketioIcon },
      { name: 'MongoDB', icon: MongodbIcon },
      { name: 'Mongoose', icon: MongooseIcon },
      { name: 'PostgreSQL', icon: PostgresqlIcon },
      { name: 'MSSQL Server', icon: MssqlServerIcon },
      { name: 'Firebase', icon: FirebaseIcon },
    ],
  },
  {
    id: 'delivery',
    items: [
      { name: 'Git', icon: GitIcon },
      { name: 'GitHub', icon: GithubIcon },
      { name: 'Docker', icon: DockerIcon },
      { name: 'Vercel', icon: VercelIcon },
      { name: 'Railway', icon: RailwayIcon },
      { name: 'Heroku', icon: HerokuIcon },
      { name: 'Postman', icon: PostmanIcon },
      { name: 'Jira', icon: JiraIcon },
    ],
  },
  {
    id: 'mobile',
    items: [
      { name: 'React Native', icon: ReactIcon },
      { name: 'Swift', icon: SwiftIcon },
      { name: 'Kotlin', icon: KotlinIcon },
    ],
  },
  {
    id: 'frontend',
    items: [
      { name: 'React', icon: ReactIcon },
      { name: 'Next.js', icon: NextjsIcon },
      { name: 'Material UI', icon: MaterialIcon },
      { name: 'Vite', icon: ViteIcon },
      { name: 'i18next', icon: i18nextIcon },
      { name: 'HTML5', icon: html5Icon },
      { name: 'CSS3', icon: css3Icon },
    ],
  },
];

export const portfolioProjects = [
  {
    id: 'kbBusinessHub',
    accent: '#84a0ff',
    title: 'KB Business Hub',
    category: {
      en: 'Internal business platform',
      es: 'Plataforma interna de negocio',
    },
    description: {
      en: 'A web platform for payroll, purchases, kitchen operations, and more, including an internal live chat with notifications and typing status.',
      es: 'Una plataforma web para nomina, compras, operaciones de cocina y mas, incluyendo chat interno en vivo con notificaciones y estado de escribiendo.',
    },
    highlights: {
      en: [
        'Multiple operational modules in one product',
        'Internal chat with live notifications and typing indicator',
        'Realtime collaboration for internal workflows',
      ],
      es: [
        'Multiples modulos operativos dentro del mismo producto',
        'Chat interno con notificaciones en vivo',
        'Colaboracion en tiempo real para flujos internos',
      ],
    },
    tech: ['Web platform', 'Internal chat', 'Live notifications', 'Operations'],
    slides: [
      slide(
        'Payroll module',
        'Modulo de nomina',
        'Payroll management view inside KB Business Hub.',
        'Vista de gestion de nomina dentro de KB Business Hub.',
        KbBusinessHubPayrollScreenshot,
      ),
      slide(
        'Customization tools',
        'Herramientas de personalizacion',
        'Configuration and customization controls for users.',
        'Controles de configuracion y personalizacion para usuarios.',
        KbBusinessHubCustomizationScreenshot,
      ),
      slide(
        'Data origin switch',
        'Cambio de origen de datos',
        'Data source switching flow for internal operations.',
        'Flujo para cambiar el origen de datos en operaciones internas.',
        KbBusinessHubDataOriginSwitchScreenshot,
      ),
      slide(
        'Mobile companion',
        'Companion mobile',
        'The Kotlin mobile companion app for KB Business Hub.',
        'La app companion mobile en Kotlin para KB Business Hub.',
        KbBusinessHubAppScreenshot,
      )
    ],
  },
  {
    id: 'nura',
    accent: '#d9a76c',
    title: 'Nura',
    category: {
      en: 'Architecture landing page',
      es: 'Landing page de arquitectura',
    },
    description: {
      en: 'A landing page for an architecture studio, built to present the brand with a clean and visual-first experience.',
      es: 'Una landing page para un despacho de arquitectura, pensada para presentar la marca con una experiencia limpia y visual.',
    },
    highlights: {
      en: [
        'Visual-first brand presentation',
        'Responsive layout for desktop and mobile',
      ],
      es: [
        'Presentacion de marca orientada a lo visual',
        'Layout responsivo para desktop y mobile',
      ],
    },
    tech: ['Landing page', 'Responsive UI', 'Brand presentation'],
    slides: [
      slide(
        'Main landing view',
        'Vista principal',
        'Main landing page for the architecture studio.',
        'Vista principal de la landing page del estudio de arquitectura.',
        NuraHomeScreenshot,
      ),
    ],
  },
  {
    id: 'cloudstockApp',
    accent: '#71b4ff',
    title: 'Cloudstock App',
    category: {
      en: 'React Native inventory app',
      es: 'App de inventario en React Native',
    },
    description: {
      en: 'React Native app used with PDA scanners to count inventory piece by piece and sync each count into Cloudstock web.',
      es: 'Aplicacion en React Native usada con scanners PDA para contar inventario pieza por pieza y sincronizar cada conteo con Cloudstock web.',
    },
    highlights: {
      en: [
        'Scanner-driven inventory counting',
        'Mobile-first counting workflow',
        'Cloud synchronization with the web platform',
      ],
      es: [
        'Conteo de inventario guiado por scanner',
        'Flujo mobile-first para conteos',
        'Sincronizacion en la nube con la plataforma web',
      ],
    },
    tech: ['React Native', 'PDA scanners', 'Inventory sync'],
    slides: [
      slide(
        'Scan and count',
        'Escaneo y conteo',
        'Scanner-driven counting flow in the mobile app.',
        'Flujo de conteo guiado por scanner dentro de la app.',
        CloudStockAppScreenshot,
        {
          frameVariant: 'portrait',
          imageMaxWidth: { xs: '68%', sm: '56%', md: '44%' },
        },
      ),
      slide(
        'Cloud dashboard',
        'Dashboard en la nube',
        'Dashboard view connected to the mobile inventory counts.',
        'Vista del dashboard conectada con los conteos del inventario mobile.',
        CloudStockDashboardScreenshot,
      ),
    ],
  },
  {
    id: 'tomware',
    accent: '#76d7b8',
    title: 'Tomware',
    category: {
      en: 'Internal operations suite',
      es: 'Suite operativa interna',
    },
    description: {
      en: 'Internal software for stadium sales reports, fan attendance, ticket validation, badges, audits, warehouse checks, and in-store pickup control.',
      es: 'Software interno para reportes de ventas del estadio, asistencias, validacion de boletos, gafetes, auditorias, controles de almacen y recoleccion en tienda.',
    },
    highlights: {
      en: [
        'Sales and fan attendance reporting',
        'Ticket validation plus employee and concessionaire badges',
        'In-store pickup traceability with ID photo and signature',
      ],
      es: [
        'Reportes de ventas y asistencia de aficionados',
        'Validacion de boletos y generacion de gafetes',
        'Trazabilidad de entregas en tienda con foto de identificacion y firma',
      ],
    },
    tech: ['Internal software', 'Reports', 'Validation', 'Audits'],
    slides: [
      slide(
        'Operations dashboard',
        'Dashboard operativo',
        'Main Tomware operations dashboard.',
        'Dashboard principal de operaciones de Tomware.',
        TomwareDashboardScreenshot,
      ),
    ],
  },
];
