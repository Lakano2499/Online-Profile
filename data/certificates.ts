export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  type: "Participation" | "Completion";
  issueDate: string;
  eventDate?: string;
  duration?: string;
  venue?: string;
  implementedBy?: string;
  supportedBy?: string;
  imageUrl: string;
  pdfUrl?: string;
  credentialUrl?: string;
  skills?: string[];
  description?: string;
}

/**
 * ═══════════════════════════════════════════════════════════════
 * CERTIFICATES & CREDENTIALS DATA
 * ═══════════════════════════════════════════════════════════════
 * To add another certificate:
 * 
 * 1. Certificate Images & PDF Previews:
 *    Place your certificate image files (.png, .jpg, .webp) inside:
 *    public/assets/img/certificates/your-certificate-name.png
 * 
 * 2. PDF Certificate Files (if applicable):
 *    Place the original PDF file (.pdf) inside:
 *    public/assets/docs/your-certificate-name.pdf
 * 
 * 3. Add an entry to the `certificatesData` array below:
 * 
 * Example:
 * {
 *   id: "my-certificate-id",
 *   title: "Workshop / Course Title",
 *   issuer: "Issuing Organization / Company",
 *   type: "Completion", // or "Participation"
 *   issueDate: "October 15, 2025",
 *   eventDate: "October 10, 2025", // optional if different from issueDate
 *   duration: "4 hours",           // optional
 *   venue: "Online / University",  // optional
 *   imageUrl: "/assets/img/certificates/my-certificate-name.png",
 *   pdfUrl: "/assets/docs/my-certificate-name.pdf", // optional
 * }
 */
export const certificatesData: Certificate[] = [
  {
    id: "aiclassasean-ai-learning-modules",
    title: "AIClassASEAN — AI Learning Modules",
    issuer: "ASEAN Foundation / AI Ready ASEAN",
    type: "Completion",
    issueDate: "October 5, 2025",
    duration: "12 hours",
    supportedBy: "Google.org",
    imageUrl: "/assets/img/certificates/aiclassasean-ai-learning-modules.png",
    description: "Completion of foundational AI learning modules and interactive chapters covering artificial intelligence concepts and future-ready digital competencies."
  },
  {
    id: "ai-driven-software-development-lspu",
    title: "AI-Driven Software Development: From Wireframe to App — with a Focus on Security and Assurance",
    issuer: "Computer Science Society Organization",
    type: "Participation",
    issueDate: "December 3, 2025",
    venue: "Laguna State Polytechnic University — Santa Cruz Campus",
    imageUrl: "/assets/img/certificates/ai-driven-software-development-lspu.jpg",
    description: "Participation in an in-depth seminar exploring modern AI-assisted software pipelines, moving from wireframing to production applications while prioritizing security and assurance."
  },
  {
    id: "data-privacy-and-protection-digital-era",
    title: "Data Privacy and Protection in the Digital Era",
    issuer: "Ethel Programming Computer Programming Services",
    type: "Participation",
    issueDate: "March 16, 2026",
    duration: "1 hour",
    venue: "Google Meet",
    imageUrl: "/assets/img/certificates/data-privacy-and-protection-digital-era.png",
    description: "Webinar on digital data privacy rights, information security principles, and compliance strategies for digital applications."
  },
  {
    id: "hands-on-figma-ui-ux-design-workshop",
    title: "Hands On Figma UI/UX Design Workshop",
    issuer: "Ethel Programming Computer Programming Services",
    type: "Participation",
    issueDate: "November 16, 2025",
    venue: "Google Meet",
    imageUrl: "/assets/img/certificates/hands-on-figma-ui-ux-design-workshop.png",
    pdfUrl: "/assets/docs/hands-on-figma-ui-ux-design-workshop.pdf",
    description: "Interactive UI/UX design workshop covering Figma component design, wireframing workflows, and responsive interface prototyping."
  },
  {
    id: "hour-of-code-dict-region-2",
    title: "Hour of Code — DICT Region 2 Nueva Vizcaya",
    issuer: "DICT Region 2 Nueva Vizcaya",
    type: "Completion",
    eventDate: "October 5, 2025",
    issueDate: "October 13, 2025",
    duration: "4 hours",
    venue: "Zoom platform",
    imageUrl: "/assets/img/certificates/hour-of-code-dict-region-2.png",
    pdfUrl: "/assets/docs/hour-of-code-dict-region-2.pdf",
    description: "4-hour Hour of Code webinar conducted by the Department of Information and Communications Technology (DICT) Region 2 Nueva Vizcaya."
  },
  {
    id: "understanding-sdlc-ethel-programming",
    title: "Understanding the Software Development Life Cycle (SDLC)",
    issuer: "Ethel Programming Computer Programming Services",
    type: "Participation",
    issueDate: "October 9, 2025",
    venue: "Google Meet",
    imageUrl: "/assets/img/certificates/understanding-sdlc-ethel-programming.png",
    pdfUrl: "/assets/docs/understanding-sdlc-ethel-programming.pdf",
    description: "Professional seminar examining software development stages, methodologies, requirements analysis, and life-cycle management."
  },
  {
    id: "hour-of-code-ai-ready-asean",
    title: "Hour of Code — AI Ready ASEAN Programme",
    issuer: "AI Ready ASEAN Programme",
    implementedBy: "Break the Fake Movement in partnership with the ASEAN Foundation",
    supportedBy: "Google.org and DICT Region II Nueva Vizcaya",
    type: "Participation",
    issueDate: "September 30, 2025",
    duration: "3 hours",
    venue: "Zoom platform",
    imageUrl: "/assets/img/certificates/hour-of-code-ai-ready-asean.png",
    pdfUrl: "/assets/docs/hour-of-code-ai-ready-asean.pdf",
    description: "3-hour training on artificial intelligence literacy and coding fundamentals conducted under the AI Ready ASEAN initiative."
  }
];
