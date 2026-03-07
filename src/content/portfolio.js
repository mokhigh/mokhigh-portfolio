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

const slide = (titleEn, titleEs, hintEn, hintEs) => ({
  title: { en: titleEn, es: titleEs },
  hint: { en: hintEn, es: hintEs },
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
    id: 'frontend',
    items: [
      { name: 'React', icon: ReactIcon },
      { name: 'Material UI', icon: MaterialIcon },
      { name: 'Vite', icon: ViteIcon },
      { name: 'i18next', icon: i18nextIcon },
      { name: 'HTML5', icon: html5Icon },
      { name: 'CSS3', icon: css3Icon },
    ],
  },
  {
    id: 'mobile',
    items: [
      { name: 'React Native', icon: ReactIcon },
      { name: 'Swift', icon: SwiftIcon },
      { name: 'Kotlin', badge: 'KT' },
    ],
  },
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
      { name: 'Postman', icon: PostmanIcon },
      { name: 'Jira', icon: JiraIcon },
    ],
  },
];

export const portfolioProjects = [
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
      slide('Operations dashboard', 'Dashboard operativo', 'Add the main Tomware dashboard screenshot here.', 'Agrega aqui la captura principal del dashboard de Tomware.'),
      slide('Validation flow', 'Flujo de validacion', 'Add the ticket, badge, or warehouse validation screen here.', 'Agrega aqui la pantalla de validacion de boletos, gafetes o almacen.'),
      slide('Pickup control', 'Control de entregas', 'Add the in-store pickup and signature flow here.', 'Agrega aqui el flujo de recoleccion en tienda y firma.'),
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
      slide('Hero section', 'Hero principal', 'Add the main hero screenshot for Nura here.', 'Agrega aqui la captura del hero principal de Nura.'),
      slide('Project showcase', 'Muestra de proyectos', 'Add a section that shows architecture work here.', 'Agrega aqui una seccion que muestre el trabajo del estudio.'),
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
      slide('Scan and count', 'Escaneo y conteo', 'Add the scanner counting screen here.', 'Agrega aqui la pantalla de conteo con scanner.'),
      slide('Review screen', 'Pantalla de revision', 'Add the count review or item detail screen here.', 'Agrega aqui la pantalla de revision de conteos o detalle de item.'),
      slide('Sync status', 'Estado de sincronizacion', 'Add the sync or upload flow here.', 'Agrega aqui el flujo de sincronizacion o carga.'),
    ],
  },
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
        'Chat interno con notificaciones en vivo y indicador de escribiendo',
        'Colaboracion en tiempo real para flujos internos',
      ],
    },
    tech: ['Web platform', 'Internal chat', 'Live notifications', 'Operations'],
    slides: [
      slide('Main dashboard', 'Dashboard principal', 'Add the main KB Business Hub dashboard screenshot here.', 'Agrega aqui la captura del dashboard principal de KB Business Hub.'),
      slide('Live chat', 'Chat interno', 'Add the internal chat, notification, or typing status screen here.', 'Agrega aqui la pantalla del chat interno, notificaciones o estado de escribiendo.'),
      slide('Operations module', 'Modulo operativo', 'Add one payroll, purchases, or kitchen module here.', 'Agrega aqui un modulo de nomina, compras o cocina.'),
    ],
  },
  {
    id: 'kbBusinessHubApp',
    accent: '#6eb3ff',
    title: 'KB Business Hub App',
    category: {
      en: 'Kotlin mobile companion',
      es: 'Companion mobile en Kotlin',
    },
    description: {
      en: 'The Kotlin mobile version of KB Business Hub, made to bring internal workflows into a mobile format.',
      es: 'La version mobile en Kotlin de KB Business Hub, hecha para llevar los flujos internos a formato movil.',
    },
    highlights: {
      en: [
        'Mobile access to core internal processes',
        'Companion app for the main business platform',
      ],
      es: [
        'Acceso movil a procesos internos clave',
        'App complementaria de la plataforma principal',
      ],
    },
    tech: ['Kotlin', 'Mobile workflows', 'Internal tools'],
    slides: [
      slide('Home screen', 'Pantalla principal', 'Add the KB Business Hub app home screen here.', 'Agrega aqui la pantalla principal de la app de KB Business Hub.'),
      slide('Operational flow', 'Flujo operativo', 'Add one of the internal mobile flows here.', 'Agrega aqui alguno de los flujos internos en mobile.'),
    ],
  },
  {
    id: 'mcManager',
    accent: '#ff9f7a',
    title: 'MC Manager & MC Visualizer',
    category: {
      en: 'Sales enablement web tools',
      es: 'Herramientas web para ventas',
    },
    description: {
      en: 'Web apps for uploading product photos and prices so sales teams on tablets can present products to potential clients.',
      es: 'Apps web para subir fotos y precios de productos para que equipos de ventas en tablets puedan mostrar catalogos a posibles clientes.',
    },
    highlights: {
      en: [
        'Product photo and price management',
        'Tablet-friendly catalogue browsing for sales teams',
      ],
      es: [
        'Gestion de fotos y precios de productos',
        'Navegacion tipo catalogo optimizada para tablets de ventas',
      ],
    },
    tech: ['Sales tablets', 'Catalog browsing', 'Product media'],
    slides: [
      slide('Product manager', 'Administrador de productos', 'Add the upload or editing screen here.', 'Agrega aqui la pantalla de carga o edicion de productos.'),
      slide('Visualizer', 'Visualizador', 'Add the tablet-facing product visualizer here.', 'Agrega aqui el visualizador de productos para tablets.'),
    ],
  },
  {
    id: 'menuManager',
    accent: '#ffc46b',
    title: 'Menu Manager & Display',
    category: {
      en: 'Interactive restaurant menu',
      es: 'Menu interactivo para restaurante',
    },
    description: {
      en: 'An interactive menu system so a restaurant can manage photos, prices, descriptions, and availability for dishes and drinks.',
      es: 'Un sistema de menu interactivo para que un restaurante administre fotos, precios, descripciones y disponibilidad de platillos y bebidas.',
    },
    highlights: {
      en: [
        'Dish and drink availability control',
        'Photo, price, and description management',
      ],
      es: [
        'Control de disponibilidad de platillos y bebidas',
        'Gestion de fotos, precios y descripciones',
      ],
    },
    tech: ['Interactive menu', 'Availability control', 'Restaurant display'],
    slides: [
      slide('Menu manager', 'Administrador del menu', 'Add the manager interface here.', 'Agrega aqui la interfaz de administracion del menu.'),
      slide('Customer display', 'Display para clientes', 'Add the consumer-facing menu screen here.', 'Agrega aqui la pantalla del menu visible para clientes.'),
    ],
  },
  {
    id: 'banksTrxs',
    accent: '#63d1c5',
    title: 'Banks TRXS',
    category: {
      en: 'Bank tracking software',
      es: 'Software de control bancario',
    },
    description: {
      en: 'Software to track expenses and incomes across company bank accounts, with balances, recalculations, and reports by concept, spec, and construction.',
      es: 'Software para rastrear egresos e ingresos de cuentas bancarias de la empresa, con balances, recalculos y reportes por concepto, especificacion y construccion.',
    },
    highlights: {
      en: [
        'Bank balances and balance recalculations',
        'Expense and income reporting by business dimensions',
      ],
      es: [
        'Balances bancarios y recalculo de saldos',
        'Reportes de egresos e ingresos por dimensiones de negocio',
      ],
    },
    tech: ['Balances', 'Recalculations', 'Financial reports'],
    slides: [
      slide('Transactions table', 'Tabla de transacciones', 'Add the main transactions screen here.', 'Agrega aqui la pantalla principal de transacciones.'),
      slide('Reports view', 'Vista de reportes', 'Add one balance or concept report here.', 'Agrega aqui algun reporte de saldos o conceptos.'),
    ],
  },
  {
    id: 'tomBot',
    accent: '#7adf8b',
    title: 'Tom Bot',
    category: {
      en: 'WhatsApp automation',
      es: 'Automatizacion por WhatsApp',
    },
    description: {
      en: 'A WhatsApp bot that lets fans check wallet points, season attendance, register for private events, and receive massive marketing messages.',
      es: 'Un bot de WhatsApp que permite a los aficionados consultar puntos, asistencias de temporada, registro a eventos privados y mensajes masivos de marketing.',
    },
    highlights: {
      en: [
        'Wallet points and season attendance lookup',
        'Mass messaging for marketing campaigns',
        'VIP and private event registration flows',
      ],
      es: [
        'Consulta de puntos y asistencias de temporada',
        'Mensajes masivos para campanas de marketing',
        'Flujos de registro para eventos VIP y privados',
      ],
    },
    tech: ['WhatsApp bot', 'Marketing flows', 'Fan data'],
    slides: [
      slide('Chat entry flow', 'Flujo de entrada al chat', 'Add the WhatsApp conversation start here.', 'Agrega aqui el inicio de la conversacion en WhatsApp.'),
      slide('Points and attendance', 'Puntos y asistencias', 'Add the wallet points or attendance response here.', 'Agrega aqui la respuesta de puntos o asistencias.'),
      slide('Marketing or events', 'Marketing o eventos', 'Add a campaign or event registration flow here.', 'Agrega aqui un flujo de campana o registro de evento.'),
    ],
  },
  {
    id: 'kbKitchen',
    accent: '#ffb16e',
    title: 'KB Kitchen',
    category: {
      en: 'Kitchen operations software',
      es: 'Software de operaciones de cocina',
    },
    description: {
      en: 'Kitchen software for menu handling, employee food purchases, payroll discounts, inventory, reports, and voucher printing.',
      es: 'Software de cocina para manejo de menu, compras de comida para empleados, descuentos por nomina, inventario, reportes e impresion de vouchers.',
    },
    highlights: {
      en: [
        'Menu and employee food purchase flows',
        'Payroll discount integration',
        'Inventory reports and voucher printing',
      ],
      es: [
        'Flujos de menu y compras de comida para empleados',
        'Integracion con descuentos por nomina',
        'Reportes de inventario e impresion de vouchers',
      ],
    },
    tech: ['Kitchen ops', 'Payroll integration', 'Voucher printing'],
    slides: [
      slide('Kitchen dashboard', 'Dashboard de cocina', 'Add the main kitchen operations view here.', 'Agrega aqui la vista principal de operaciones de cocina.'),
      slide('Voucher flow', 'Flujo de vouchers', 'Add the voucher or redemption screen here.', 'Agrega aqui la pantalla de vouchers o canje.'),
      slide('Inventory/reporting', 'Inventario y reportes', 'Add an inventory or reporting screen here.', 'Agrega aqui una pantalla de inventario o reportes.'),
    ],
  },
  {
    id: 'tomticketsApi',
    accent: '#7db8ff',
    title: 'Tomtickets API',
    category: {
      en: 'Ticket data API',
      es: 'API de datos de boletaje',
    },
    description: {
      en: 'An API that exposes ticket and attendance data to an external company through a secret-key integration.',
      es: 'Una API que expone datos de boletos y asistencias a una empresa externa mediante una integracion con llave secreta.',
    },
    highlights: {
      en: [
        'Controlled external access to ticket data',
        'Attendance and game-level data delivery',
      ],
      es: [
        'Acceso controlado a datos de boletaje',
        'Entrega de informacion de asistencias y juegos',
      ],
    },
    tech: ['API', 'Secret key access', 'Attendance analytics'],
    slides: [
      slide('Endpoint overview', 'Vista de endpoints', 'Add API documentation or endpoint examples here.', 'Agrega aqui documentacion o ejemplos de endpoints.'),
      slide('Response sample', 'Ejemplo de respuesta', 'Add a response sample or analytics output here.', 'Agrega aqui un ejemplo de respuesta o salida analitica.'),
    ],
  },
  {
    id: 'bnextApi',
    accent: '#b392ff',
    title: 'Bnext API',
    category: {
      en: 'POS integration API',
      es: 'API de integracion con POS',
    },
    description: {
      en: 'API used by the chatbot to retrieve information directly from the POS system.',
      es: 'API usada por el chatbot para recuperar informacion directamente del sistema POS.',
    },
    highlights: {
      en: [
        'POS data bridge for the chatbot',
        'Operational data retrieval for automated flows',
      ],
      es: [
        'Puente de datos del POS para el chatbot',
        'Recuperacion de informacion operativa para flujos automatizados',
      ],
    },
    tech: ['API', 'POS integration', 'Bot backend'],
    slides: [
      slide('Integration flow', 'Flujo de integracion', 'Add a POS-to-bot integration diagram or screen here.', 'Agrega aqui un diagrama o captura del flujo POS hacia el bot.'),
      slide('Data response', 'Respuesta de datos', 'Add a sample response or backend view here.', 'Agrega aqui una respuesta de ejemplo o una vista del backend.'),
    ],
  },
];
