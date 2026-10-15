import fs from 'node:fs';
import path from 'node:path';

const publicDir = path.resolve('public');
const projectsDir = path.resolve(publicDir, 'projects');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Generate valid readable PDF for Mohamed Aziz Omrani
const pdfContent = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595 842]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
    >>
  >>
  /Contents 6 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Length 1200
>>
stream
BT
/F1 24 Tf
50 780 Td
(MOHAMED AZIZ OMRANI) Tj
/F2 12 Tf
0 -25 Td
(Developpeur Full Stack Web & Mobile | Passionne de Cybersecurite) Tj
0 -18 Td
(Disponible pour un stage PFA - Beja, Tunisie | Email: azizomrani222@gmail.com | Tel: 29026948) Tj
/F1 14 Tf
0 -40 Td
(A PROPOS) Tj
/F2 10 Tf
0 -18 Td
(Etudiant en 2eme annee Genie Logiciel et Sciences Informatiques a l'ISLAI Beja, developpeur Full Stack.) Tj
0 -15 Td
(Maitrise du frontend comme du backend et vision globale de bout en bout des applications web et mobiles.) Tj
0 -15 Td
(Passionne de cybersecurite, specialement le web penetration testing (OWASP Top 10, Burp Suite).) Tj
/F1 14 Tf
0 -35 Td
(EXPERIENCES PROFESSIONNELLES & STAGES) Tj
/F1 11 Tf
0 -20 Td
(Stage Developpeur Full Stack - Master Class (3 mois)) Tj
/F2 10 Tf
0 -15 Td
(- Conception et developpement de modules web reactifs et d'APIs REST securisees.) Tj
/F1 11 Tf
0 -22 Td
(Stage Developpeur Web & Mobile - Eklectic (1 mois)) Tj
/F2 10 Tf
0 -15 Td
(- Integration d'interfaces graphiques responsives et prototypage d'applications mobiles.) Tj
/F1 11 Tf
0 -22 Td
(Stage Developpeur - Sages, Projet SNDP (1 mois)) Tj
/F2 10 Tf
0 -15 Td
(- Analyse et developpement pour la gestion securisee des donnees du projet SNDP.) Tj
/F1 14 Tf
0 -35 Td
(FORMATIONS & CERTIFICATIONS) Tj
/F2 10 Tf
0 -18 Td
(- Formation Avancee Full Stack Web (React, Node.js, Express, PostgreSQL, Docker)) Tj
0 -16 Td
(- Formation Developpement Mobile Cross-platform & Architectures API (React Native)) Tj
0 -16 Td
(- Formation Cybersecurite & Web Penetration Testing (OWASP Top 10, Burp Suite, Nmap)) Tj
/F1 14 Tf
0 -35 Td
(FORMATION ACADEMIQUE) Tj
/F1 11 Tf
0 -18 Td
(Genie Logiciel et Sciences Informatiques (2eme annee en cours)) Tj
/F2 10 Tf
0 -15 Td
(ISLAI Beja - Institut Superieur des Langues Appliquees et d'Informatique de Beja (2023 - Present)) Tj
/F1 14 Tf
0 -35 Td
(COMPETENCES TECHNIQUES) Tj
/F2 10 Tf
0 -18 Td
(Web: React.js, TypeScript, JavaScript, Node.js, Express, Tailwind CSS, REST APIs) Tj
0 -15 Td
(Mobile: React Native, SQLite, State Management, APIs REST) Tj
0 -15 Td
(Bases de donnees & Outils: PostgreSQL, MySQL, MongoDB, Git, GitHub, Docker, Postman, Linux) Tj
0 -15 Td
(Cybersecurite: Web Pen Testing, OWASP Top 10, Burp Suite, Nmap, Wireshark, Securite du code) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000262 00000 n 
0000000341 00000 n 
0000000414 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1710
%%EOF`;

fs.writeFileSync(path.resolve(publicDir, 'Mohamed_Aziz_Omrani_CV.pdf'), pdfContent);
console.log('Created CV PDF at /public/Mohamed_Aziz_Omrani_CV.pdf');
