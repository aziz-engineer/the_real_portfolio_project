import { SkillCategory } from '../types/portfolio';

export const skillsData: SkillCategory[] = [
  {
    id: 'web-dev',
    title: 'Développement Web',
    icon: 'Globe',
    description:
      'Création d’applications web modernes, performantes et scalables, du frontend réactif aux APIs robustes.',
    skills: [
      { name: 'React.js', level: 'Avancé', tags: ['Frontend', 'Hooks', 'Components'] },
      { name: 'TypeScript / JavaScript', level: 'Avancé', tags: ['ESNext', 'Typage strict'] },
      { name: 'Node.js & Express', level: 'Avancé', tags: ['Backend', 'REST APIs', 'Middleware'] },
      { name: 'Next.js', level: 'Intermédiaire', tags: ['SSR', 'Full Stack'] },
      { name: 'HTML5 & CSS3 / Tailwind CSS', level: 'Avancé', tags: ['Responsive', 'UI/UX'] },
      { name: 'Architecture RESTful API', level: 'Avancé', tags: ['JWT', 'CRUD', 'Validation'] },
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Développement Mobile',
    icon: 'Smartphone',
    description:
      'Conception d’applications mobiles intuitives et fiables pour iOS et Android avec gestion hors-ligne.',
    skills: [
      { name: 'React Native', level: 'Intermédiaire', tags: ['Cross-platform', 'Mobile UI'] },
      { name: 'Architecture Mobile & State', level: 'Intermédiaire', tags: ['Context API', 'AsyncStorage'] },
      { name: 'Intégration APIs REST Mobile', level: 'Avancé', tags: ['Axios', 'Fetch', 'OAuth'] },
      { name: 'Stockage Local & Offline', level: 'Intermédiaire', tags: ['SQLite', 'Sécurité locale'] },
      { name: 'UI/UX Mobile Réactif', level: 'Avancé', tags: ['Animations', 'Gestures'] },
    ],
  },
  {
    id: 'databases-tools',
    title: 'Bases de Données & Outils',
    icon: 'Database',
    description:
      'Gestion et modélisation de données fiables, conteneurisation, contrôle de version et outillage de développement.',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 'Avancé', tags: ['SGBD Relatifs', 'Optimisation requêtes'] },
      { name: 'MongoDB', level: 'Avancé', tags: ['Mongoose'] },
      { name: 'Git & GitHub', level: 'Avancé', tags: ['Version Control', 'Workflows', 'Collaboration'] },
      { name: 'Postman & Swagger', level: 'Avancé', tags: ['API Testing', 'Documentation'] },
      { name: 'Linux / Bash', level: 'Intermédiaire', tags: ['Systèmes', 'Ligne de commande'] },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersécurité & Web Penetration Testing',
    icon: 'ShieldCheck',
    description:
      'Protection des applications, évaluation de la posture de sécurité et détection méthodique des vulnérabilités.',
    skills: [
      { name: 'Web Penetration Testing', level: 'Intermédiaire', tags: ['Audit offensif', 'Sécurité applicative'] },
      { name: 'OWASP Top 10', level: 'Intermédiaire', tags: ['XSS', 'SQLi', 'CSRF', 'SSRF', 'IDOR'] },
      { name: 'Burp Suite (Community/Pro)', level: 'Intermédiaire', tags: ['Interception', 'Repeater', 'Intruder'] },
      { name: 'Nmap & Reconnaissance réseau', level: 'Intermédiaire', tags: ['Scan de ports', 'Services'] },
      { name: 'Wireshark & Analyse de paquets', level: 'Intermédiaire', tags: ['Protocoles', 'Trafic réseau'] },
      { name: 'Sécurisation du Code (DevSecOps)', level: 'Intermédiaire', tags: ['Sanitization', 'Headers', 'Bcrypt/JWT'] },
    ],
  },
];
