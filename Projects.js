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
    name: "Libft (Custom C Library)",
    type: "42",
    stack: "C / Makefile",
    description: "Recreated the standard C library from scratch. Implemented memory management, string manipulation, and linked list data structures to deeply understand low-level operations.",
    highlights: "Memory Management • Pointers • Norminette Compliant",
    github: "https://github.com/Ahmadalameri-0/libft",
  },
  {
    name: "I/O Deep Dive: ft_printf & GNL",
    type: "42",
    stack: "C / System I/O",
    description: "Rebuilt the standard printf using variadic arguments, and developed a memory-efficient line reader using static variables. Both repositories are available on my GitHub.",
    highlights: "Variadic Functions • Static Variables",
    github: "https://github.com/Ahmadalameri-0",
  },
  {
    name: "Push_swap",
    type: "algo",
    stack: "C / Algorithms",
    description: "An optimized data sorting project utilizing two stacks and a strict set of operations. Designed to sort numbers with the absolute minimum number of moves, emphasizing algorithmic efficiency.",
    highlights: "Sorting Algorithms • Big O • Optimization",
    github: "https://github.com/Ahmadalameri-0/Push_swap",
  },
  {
    name: "Infrastructure Path: Inception",
    type: "42",
    stack: "Docker / SysAdmin / Networking",
    description: "A journey starting with secure VM deployment (Born2beRoot) and TCP/IP subnetting (NetPractice), culminating in Inception: orchestrating a complete, secure microservices infrastructure (NGINX, WordPress, MariaDB) from scratch using Docker Compose.",
    highlights: "Docker • System Administration • Subnetting",
    github: "https://github.com/Ahmadalameri-0/Inception-42",
  },
  {
    name: "Python Piscine",
    type: "42",
    stack: "Python / OOP",
    description: "An intensive deep dive into modern Python. Mastered Object-Oriented Programming, abstract base classes, decorators, and generators to build scalable, robust architectures.",
    highlights: "OOP • Decorators • Design Patterns",
  },
  {
    name: "A-Maze-ing",
    type: "algo",
    stack: "Python / Pathfinding",
    description: "A fully packaged terminal-based maze generator and solver. Implemented Depth-First Search (DFS) for generation and Breadth-First Search (BFS) for optimal path routing, featuring robust validation and custom UI themes.",
    highlights: "DFS & BFS • Pydantic • Algorithm Design",
    github: "https://github.com/Ahmadalameri-0/A-maze-ing",
  },
  {
    name: "Pac-Man",
    type: "algo",
    stack: "Python / Pygame",
    description: "A complete recreation of the classic arcade game. Engineered robust screen state management, game loops, and entity logic, ensuring flawless execution through strict static type checking (mypy).",
    highlights: "Game Architecture • State Machines",
    github: "https://github.com/Ahmadalameri-0/Pac-Man",
    demo: "https://ahmadalameri-0.itch.io/pacman",
  },
  {
    name: "Codexion",
    type: "42",
    stack: "C / POSIX Threads",
    description: "A highly optimized multi-threaded concurrency simulator solving the Dining Philosophers problem. Engineered precise thread synchronization and deadlock prevention strategies using POSIX threads and mutexes.",
    highlights: "Concurrency • Mutexes • Deadlock Prevention",
    github: "https://github.com/Ahmadalameri-0/Codexion",
  },
];