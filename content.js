// ============================================================
//  MEDAI LITERACY INITIATIVE — CONTENT CONFIGURATION
//  Edit this file to update ALL text and images on the site.
//  Images go in /public/images/ — reference them as "/images/filename.jpg"
// ============================================================

export const site = {
  name: "MedAI Literacy Initiative",
  tagline: "Bridging the Gap Between Artificial Intelligence and Medical Understanding",
  description:
    "We teach people of all ages and backgrounds how AI is transforming medicine — how it works, where it fails, and how to think critically about its future.",
  email: "contact@medailiteracy.org", // ← update with your real email
  socialLinks: {
    linkedin: "https://linkedin.com/in/yourprofile", // ← update
    twitter: "",
    github: "",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Leadership", href: "/leadership" },
  { label: "Collaborators", href: "/collaborators" },
  { label: "Gallery", href: "/gallery" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Contact", href: "/contact" },
];

// ── HOME PAGE ─────────────────────────────────────────────
export const home = {
  hero: {
    headline: "Understanding Health in the \nAge of AI" ,
    subheadline:
      "We bring AI education to students and communities in the New England Area who want to understand how their healthcare is changing under new technologies.",
    cta: { label: "See Our Programs", href: "/programs" },
    ctaSecondary: { label: "Learn About Us", href: "/about" },
    // Place a hero image at /public/images/hero.jpg (optional — remove imageSrc to hide)
    imageSrc: "/images/hero.jpg",
    imageAlt: "Workshop participants engaged in AI medicine discussion",
  },
  stats: [
    { value: "3+", label: "Institutional Partners" },
    { value: "50+", label: "Students Reached" },
    { value: "3", label: "Age Groups Served" },
    { value: "2026", label: "Founded" },
  ],
  missionStatement:
    "Artificial intelligence (AI) is already reshaping how people seek answers about their health and how clinicians diagnose, monitor, and treat patients. Yet most people — patients, students, even healthcare workers — have little understanding of how these systems work, where they fail, and who they serve. We aim to close that gap.",
  featuredPrograms: ["yale-sprout", "newton-chinese-school", "tzu-chi"], // references programs below
};

// ── ABOUT PAGE ────────────────────────────────────────────
export const about = {
  headline: "Why AI Literacy in Medicine Matters",
  body: [
    "Artificial intelligence is no longer a future concern for medicine — it is already embedded in radiology workflows, clinical documentation, patient monitoring systems, and chatbots used for personal health inquiries. The decisions these systems make affect real lives.",
    "The MedAI Literacy Initiative was founded in 2025 on a straightforward conviction: that understanding AI should not be limited to engineers and researchers. Everyone deserves to understand the tools used in their care.",
    "We design programs for specific audiences. Students should enter the healthcare and technology fields with critical frameworks, not just technical skills. Communities, especially those historically underserved by both medicine and technology, deserve to be informed by programs built with their unique cultures and needs in mind."
  ],
  values: [
    {
      icon: "🔬",
      title: "Rigor",
      description:
        "We teach how AI actually works — not watered-down metaphors, but genuine intuition for the mechanisms, limitations, and failure modes.",
    },
    {
      icon: "🤝",
      title: "Accessibility",
      description:
        "No prior technical background required. We design for curious minds at every level — middle schoolers, seniors, and everyone in between.",
    },
    {
      icon: "⚖️",
      title: "Ethics First",
      description:
        "Every program centers the societal implications of AI in medicine: bias, explainability, equity, and the human stakes behind every model.",
    },
    {
      icon: "🌱",
      title: "Community",
      description:
        "We grow through partnerships — with schools, cultural organizations, and institutions — because lasting literacy is built locally.",
    },
  ],
  imageSrc: "/images/about.jpg",
  imageAlt: "Instructor teaching at a community workshop",
};

// ── PROGRAMS ──────────────────────────────────────────────
export const programs = {
  headline: "Our Programs",
  subheadline:
    "Each program is designed from scratch for its audience — in content, depth, and format.",
  items: [
    {
      id: "yale-sprout",
      status: "completed", // "completed" | "in-progress" | "upcoming"
      date: "2026-04",
      statusLabel: "April 2026",
      title: "The Future of AI in Medicine",
      host: "Yale Sprout 2026",
      audience: "Middle & High School Students",
      duration: "60-minute lecture",
      description:
        "A deep-dive lecture delivered at Yale Sprout covering the full landscape of AI in medicine — from the intuition behind neural networks and convolutional architectures to real-world clinical applications in imaging, notetaking, and decision support. Students explored not just what AI can do, but where it fails: bias in training data, explainability gaps, and the unique safety considerations of deploying AI in clinical settings.",
      topics: [
        "Neural networks and pattern recognition",
        "Medical imaging with CNNs",
        "Clinical NLP and large language models",
        "Decision trees in clinical workflows",
        "Genomics, drug discovery, and wearables",
        "Bias, explainability, and AI safety",
      ],
      imageSrc: "/images/yale-sprout.jpg",
      imageAlt: "Yale Sprout lecture session",
    },
    {
      id: "newton-chinese-school",
      date: "2026-01",
      status: "in-progress",
      statusLabel: "In Development",
      title: "AI + Health Explorer",
      host: "Newton Chinese School",
      audience: "Middle & High School Students",
      duration: "9-session project-based course",
      description:
        "A semester-long, project-based course in active development with Newton Chinese School. Students build and evaluate real AI systems applied to medical data — not as a coding exercise, but as a structured research experience. The curriculum emphasizes both technical implementation and critical clinical thinking: how do you interpret a model's outputs? What does a confusion matrix mean for a patient? We especially encourage participation from female students and those underrepresented in computer science.",
      topics: [
        "AI architectures: CNNs, decision trees, LLMs",
        "Medical imaging classification and segmentation",
        "Dataset curation and bias analysis",
        "Model evaluation: accuracy, precision, recall, F1",
        "Fine-tuning and transfer learning",
        "Clinical significance and ethical reflection",
        "Research-style poster presentation",
      ],
      imageSrc: "/images/newton-chinese-school.jpg",
      imageAlt: "Students working on AI projects",
    },
    {
      id: "tzu-chi",
      date: "2026-06",
      status: "in-progress",
      statusLabel: "In Development",
      title: "AI Safety for Everyday Life",
      host: "Tzu Chi Foundation",
      audience: "Older Adults",
      duration: "Interactive workshop",
      description:
        "A community workshop being developed in partnership with the Tzu Chi Foundation, designed for older adults anxious about navigating an increasingly AI-saturated world. Rather than technical depth, this program prioritizes practical wisdom: understanding what AI can and cannot do, recognizing AI-generated scams, and knowing when to trust — and when not to trust — an AI system. This workshop will be taught in Mandarin with cultural awareness of what Asian elderly members tend to think and fear about technology and healthcare.",
      topics: [
        "Where AI appears in daily life (hospitals, customer service, entertainment)",
        "How large language models actually work — in plain language",
        "Why AI hallucinates and what that means for you",
        "Recognizing and avoiding AI-powered scams",
        "What personal information to never share with AI",
        "Practical guidelines for safe AI use",
      ],
      imageSrc: "/images/tzu-chi.jpg",
      imageAlt: "Community workshop for older adults",
    },
  ],
};

// ── LEADERSHIP ────────────────────────────────────────────
export const leadership = {
  headline: "Leadership",
  subheadline: "Founded and led by researchers.",
  members: [
    {
      name: "Eric Yang",
      title: "Co-Founder & Program Director",
      affiliation: "Clinical Researcher, Mass General Brigham Mass Eye and Ear, Yale University",
      bio: "Eric is a clinical researcher at Mass General Brigham Mass Eye and Ear with a background in computational genomics research at Yale University. He received his bachelor's degree in Biology with a Data Science minor from Boston University. His research sits at the intersection of AI and medicine, and he is passionate about making that work understandable to the communities it affects.",
      imageSrc: "/images/eric-yang.jpg",
      imageAlt: "Eric Yang",
      linkedin: "https://linkedin.com/in/ericyang", // ← update
    },
    {
      name: "Malinda Lu",
      title: "Co-Founder & Design Lead",
      affiliation: "Computer Science & Mathematics, Wellesley College",
      bio: "Malinda is a computer science and mathematics student from Wellesley College with three years of research experience in clinical foundation models and time-series data modeling at MIT and Wellesley. She is committed to making AI in medicine research more inclusive and more ethically grounded.",
      imageSrc: "/images/malinda-lu.jpg",
      imageAlt: "Malinda Lu",
      linkedin: "https://linkedin.com/in/malindalu", // ← update
    },
  ],
};

// ── COLLABORATORS ─────────────────────────────────────────
export const collaborators = {
  headline: "Partners & Collaborators",
  subheadline:
    "We build with institutions that share our commitment to community, education, and equitable access to knowledge.",
  items: [
    {
      name: "Yale Sprout",
      type: "Academic Program",
      status: "Partner Venue",
      description:
        "Yale Sprout is a student-run academic enrichment program that brings university-level instruction to motivated high school students. We delivered our inaugural lecture on AI in medicine at Yale Sprout in Spring 2026.",
      logoSrc: "/images/logo-yale-sprout.png", // ← add logo or leave blank
      website: "https://yale.learningu.org/learn/sprout.html",
    },
    {
      name: "Newton Chinese School",
      type: "Community Education",
      status: "In Development",
      description:
        "Newton Chinese School has served the greater Boston Chinese-American community for decades. We are collaborating to embed an AI and medicine project-based course into their curriculum, with a focus on research skills and ethical thinking.",
      logoSrc: "/images/logo-newton-chinese-school.png",
      website: "https://www.newtonchineseschool.org/indexs.php",
    },
    {
      name: "Tzu Chi Foundation",
      type: "Humanitarian Organization",
      status: "In Development",
      description:
        "The Tzu Chi Foundation is a global humanitarian organization with deep roots in the Asian-American community. We are developing an AI safety and literacy workshop tailored specifically for their older adult members.",
      logoSrc: "/images/logo-tzu-chi.png",
      website: "https://tzuchi.us/",
    },
  ],
};

// ── GALLERY ───────────────────────────────────────────────
export const gallery = {
  headline: "Gallery",
  subheadline: "Moments from our programs, workshops, and community events.",
  // Add as many images as you like. caption is optional.
  images: [
    {
      src: "/images/gallery-1.jpg",
      alt: "Yale Sprout lecture",
      caption: "Delivering the AI in Medicine lecture at Yale Sprout, Spring 2026",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Workshop discussion",
      caption: "Interactive Q&A with students after the lecture",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Program planning session",
      caption: "Curriculum development session for the Newton Chinese School program",
    },
    // Add more: { src: "/images/gallery-4.jpg", alt: "...", caption: "..." }
  ],
};

// ── TUTORIALS ─────────────────────────────────────────────
export const tutorials = {
  headline: "Tutorials & Resources",
  subheadline:
    "Open educational resources for students, educators, and the curious. No prerequisites required.",
  items: [
    {
      id: "intro-neural-networks",
      date: "2026-04",
      title: "How Neural Networks Learn",
      level: "Beginner",
      duration: "15 min read",
      description:
        "A ground-up intuition for how neural networks recognize patterns — using medical imaging as the running example. No calculus required.",
      tags: ["Neural Networks", "Fundamentals"],
      href: "#", // ← link to your actual tutorial page or Google Doc
      status: "available", // "available" | "coming-soon"
      statusLabel: "May 2026",
    },
    {
      id: "medical-image-classifier",
      title: "Build a Medical Image Classifier",
      date: "2026-05",
      level: "Intermediate",
      duration: "45 min",
      description:
        "A guided Colab notebook walking through loading a medical imaging dataset, extracting features with a pretrained CNN, and running K-nearest neighbor classification. From the Newton Chinese School curriculum.",
      tags: ["CNN", "Medical Imaging", "Python", "Colab"],
      href: "#",
      status: "coming-soon",
    },
    {
      id: "ai-bias-medicine",
      date: "2026-06",
      title: "AI Bias in Medicine: A Critical Framework",
      level: "Beginner",
      duration: "20 min read",
      description:
        "What happens when a model is trained mostly on data from one demographic? How do geographic and demographic dataset shifts affect clinical performance? A conceptual guide with real examples.",
      tags: ["Bias", "Ethics", "Health Equity"],
      href: "#",
      status: "coming-soon",
    },
    {
      id: "llms-clinical-notes",
      date: "2026-07",
      title: "How LLMs Are Used in Clinical Notetaking",
      level: "Beginner",
      duration: "15 min read",
      description:
        "A plain-language breakdown of how large language models assist with clinical documentation — what they do well, where they hallucinate, and what clinicians need to watch for.",
      tags: ["LLMs", "Clinical NLP", "Patient Safety"],
      href: "#",
      status: "coming-soon",
    },
  ],
};

// ── CONTACT ───────────────────────────────────────────────
export const contact = {
  headline: "Get in Touch",
  subheadline:
    "Interested in bringing a program to your school or organization? Want to collaborate or contribute? We'd love to hear from you.",
  email: "contact@medailiteracy.org", // ← update
  reasons: [
    "Bringing a program to your school or institution",
    "Partnership or collaboration inquiry",
    "Speaking or workshop request",
    "Press or media",
    "General questions",
  ],
};
