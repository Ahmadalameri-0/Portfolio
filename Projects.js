// ============================================================
// projects.js — مشاريعك. كل مشروع = كتلة { ... } واحدة.
// لإضافة مشروع: انسخ كتلة وعدّلها، والكرت يظهر تلقائياً.
//
// type:   "42" (لون أزرق)  أو  "algo" (لون أخضر)
// github: ضع "" إذا ما في رابط، فيختفي الزر
// ============================================================
const PROJECTS = [
  // --- أمثلة فقط، استبدلها بمشاريعك الحقيقية ---
  {
    name: "Ready for Your First Project",
    type: "42",
    stack: "C / Makefile",
    description:
      "Send me your list of completed 42 projects in our chat, and we will transform this grid into an interactive showcase for each project.",
    highlights: "Memory Safe • Norminette Compliant",
    github: "https://github.com/",
  },
  {
    name: "Ready for Next Project",
    type: "algo",
    stack: "C++ / Logic",
    description:
      "We will customize each card with its technical highlights, architecture details, and direct links to your repositories.",
    highlights: "Clean Architecture",
    github: "https://github.com/",
  },
];