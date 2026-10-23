// ============================================================
// content.js — نصوص الصفحة. عدّل هنا فقط بدون لمس index.html
// (النصوص تقبل HTML بسيط مثل <strong> و <code>)
// ============================================================
const CONTENT = {
  nav: {
    logo: "Ahmad.",
    philosophy: "Philosophy",
    foundation: "Foundation",
    projects: "42 Projects",
    contact: "Contact",
  },

  hero: {
    pill: "42 Network Cadet • Problem Solver",
    titleLine1: "Engineering from",
    titleLine2: "the ground up.",
    subtitle:
      'Hi, I\'m <span class="text-white font-medium">Ahmad Bani Amer</span>. I build software with deep attention to memory, algorithmic efficiency, and clean architecture—bridging low-level systems with modern engineering.',
    primaryCta: "Explore 42 Projects",
    secondaryCta: "My Engineering Path",
  },

  philosophy: {
    label: "01 / The Philosophy",
    text:
      "Great software isn’t built on shortcuts. It’s forged by understanding how the machine actually thinks—mastering pointers, memory allocation, and divide-and-conquer logic before writing a single line of code.",
  },

  foundation: {
    label: "02 / The Foundation",
    title: "Two rigorous paths. One mindset.",
    subtitle:
      "Combining peer-driven, low-level systems engineering with structured algorithmic problem solving.",

    school42: {
      badge: "Systems & Peer Learning",
      title: "42 Network — Common Core",
      text:
        'Successfully survived <strong class="text-white">The Piscine</strong>—an intensive month-long coding bootcamp in C and Unix Shell—and advanced into the <strong class="text-white">Common Core</strong> curriculum. Operating in a 100% teacherless, project-based environment governed by strict code standards (<code class="text-apple-blue">Norminette</code>), zero memory leaks, and rigorous peer-to-peer evaluations.',
      tags: ["Unix / POSIX", "Low-Level C", "Memory Management", "Git Workflows"],
    },

    advices: {
      badge: "Structured Roadmap",
      title: "Programming Advices",
      text:
        'Following Dr. Mohammed Abu-Hadhoud’s foundational engineering roadmap. Reached <strong class="text-white">Course 07 (Algorithms & Problem Solving Level 3)</strong>, focusing on building rock-solid analytical thinking before jumping into high-level frameworks.',
      currentCourse: 7,   // شريط التقدم يتحسب من هذين الرقمين
      totalCourses: 24,
      phase: "Phase 1: Core Foundations",
      status: "In Progress (Course 07)",
      done: "✓ C++ L1 & L2 • ✓ Pointers & Memory • ✓ Problem Solving L1–L3",
    },

    stack: {
      label: "Under the Hood",
      title: "Core Engineering Stack",
      subtitle: "Tools and paradigms I use daily to write clean, maintainable, and fast code.",
      items: [
        "C / C++",
        "Python",
        "Data Structures & Algorithms",
        "Pointers & Dynamic Memory",
        "Linux / Bash / Makefiles",
        "Divide & Conquer",
      ],
    },
  },

  projects: {
    label: "03 / Selected Works",
    title: "Built at 42 Network.",
    subtitle:
      "Every project is engineered from scratch without external libraries, adhering to strict memory and performance constraints.",
  },

  contact: {
    label: "04 / What's Next",
    title: "Let’s build something extraordinary.",
    text:
      "Always open to connecting with fellow engineers, discussing low-level systems, or exploring new opportunities.",
    githubUrl: "https://github.com/",           // غيّره لرابطك
    emailUrl: "mailto:your.email@example.com",  // غيّره لإيميلك
    githubLabel: "GitHub Profile",
    emailLabel: "Send an Email",
    footer: "Designed & Engineered by Ahmad Bani Amer. Inspired by Apple Design.",
  },
};