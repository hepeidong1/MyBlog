// data.js — 直接编辑此文件管理内容
const SITE_DATA = {
  "profile": {
    "name": "Peidong He",
    "title": "西安理工大学 · 研究生",
    "school": "Xi'an University of Technology",
    "bio": "Hello! I am a student at Xi'an University of Technology, mainly engaged in research on mathematics.\n\nMy research interests include optimization algorithm, path planning, and UAV swarm control. This blog aims to share my research results and related resources, hoping to communicate and cooperate with fellow scholars.",
    "tags": [
      "Optimization Algorithm",
      "Path Planning",
      "UAV Swarm Control",
      "Formation Control",
      "Distributed System"
    ],
    "info": [
      {
        "icon": "fas fa-graduation-cap",
        "label": "University",
        "value": "Xi'an University of Technology"
      },
      {
        "icon": "fas fa-user-tie",
        "label": "Supervisor",
        "value": "Prof. Gang Hu"
      },
      {
        "icon": "fas fa-university",
        "label": "Department",
        "value": "School of Mathematics"
      },
      {
        "icon": "fas fa-flask",
        "label": "Research",
        "value": "Optimization & Path Planning"
      },
      {
        "icon": "fas fa-map-marker-alt",
        "label": "Location",
        "value": "Xi'an, China"
      }
    ],
    "contacts": [
      {
        "icon": "fas fa-envelope",
        "name": "Email",
        "href": "mailto:125091008@stu.xaut.edu.cn",
        "type": "link"
      },
      {
        "icon": "fab fa-github",
        "name": "GitHub",
        "href": "https://github.com/hepeidong1",
        "type": "link"
      },
      {
        "icon": "fab fa-researchgate",
        "name": "ResearchGate",
        "href": "https://www.researchgate.net/profile/Peidong-He-5?ev=hdr_xprf",
        "type": "link"
      },
      {
        "icon": "fab fa-weixin",
        "name": "WeChat",
        "type": "qr",
        "qrType": "wechat"
      },
      {
        "icon": "fab fa-qq",
        "name": "QQ",
        "type": "qr",
        "qrType": "qq"
      }
    ]
  },
  "diary": [
    {
      "title": "PDPSO paper accepted by CMAME",
      "date": "2025-11-15",
      "tag": "Paper",
      "body": "Our paper on priority-driven search particle swarm optimization has been accepted by Computer Methods in Applied Mechanics and Engineering."
    },
    {
      "title": "Working on slime mould inspired path planning",
      "date": "2025-10-08",
      "tag": "Thought",
      "body": "Exploring the combination of Dijkstra algorithm with slime mould foraging principles for path planning optimization."
    },
    {
      "title": "Started MATLAB path planning project",
      "date": "2025-09-01",
      "tag": "Event",
      "body": "Began a new project focusing on flow-based path planning using triangular mesh decomposition."
    }
  ],
  "publications": [
    {
      "title": "PDPSO: Priority-driven search particle swarm optimization with dynamic candidate solutions management strategy for solving higher-dimensional complex engineering problems",
      "authors": "Gang Hu, Peidong He, Heming Jia, Essam H. Houssein, Laith Abualigah",
      "venue": "Computer Methods in Applied Mechanics and Engineering",
      "venueType": "journal",
      "venueAbbr": "CMAME",
      "year": "2025",
      "doi": "10.1016/j.cma.2025.118318",
      "links": {
        "PDF": "/articles/article1/PDPSO.pdf",
        "Code": "/articles/article1/PDPSO.zip",
        "Supplementary": "/articles/article1/Supplementary Material (PDPSO).docx"
      },
      "details": {
        "Journal": "Computer Methods in Applied Mechanics and Engineering, 446 (2025) 118318",
        "DOI": "10.1016/j.cma.2025.118318",
        "Abstract": "Particle swarm optimization (PSO) is one of the most classical meta-heuristic algorithms. To address the challenges of PSO in high-dimensional complex engineering problems, we propose PDPSO, which incorporates a priority-driven search strategy and a dynamic candidate solution management strategy. Verified by CEC2017 and 34 engineering examples, the PDPSO algorithm exhibits outstanding advantages in high-dimensional problems and excellent computational efficiency."
      }
    },
    {
      "title": "A novel framework for 4D UAV swarm path planning",
      "authors": "Gang Hu, Peidong He, Mahmoud Abdel Salam, Guo Wei",
      "venue": "Applied Mathematical Modelling",
      "venueType": "journal",
      "venueAbbr": "AMM",
      "year": "2026",
      "doi": "10.1016/j.apm.2025.116383",
      "links": {
        "PDF": "/articles/article2/2.pdf",
        "Code": "/articles/article2/SiMlDCS_CODE.zip",
        "Supplementary": "/articles/article2/Supplementary Material (AMMOD-D-25-02519 R1).docx"
      },
      "details": {
        "Journal": "Applied Mathematical Modelling, 150 (2026) 116383",
        "DOI": "10.1016/j.apm.2025.116383",
        "Abstract": "We make innovative adjustments in environment modeling, path planning process, and path generator. The Plan Separation and Consolidation Method separates the path planning problem of large-scale UAV swarms both in the time dimension and the dimension of the individuals of UAVs, utterly eliminating the 'curse of dimensionality' in the planning process."
      }
    },
    {
      "title": "Distributed large-scale joint non-uniform UAV formation path planning based on global optimal guidance",
      "authors": "Gang Hu, Peidong He, Guo Wei",
      "venue": "Applied Mathematical Modelling",
      "venueType": "journal",
      "venueAbbr": "AMM",
      "year": "2025",
      "doi": "10.1016/j.apm.2025.116239",
      "links": {
        "PDF": "/articles/article3/3.pdf",
        "Code": "/articles/article3/UAV Formation Code.zip"
      },
      "details": {
        "Journal": "Applied Mathematical Modelling, 150 (2026) 116383",
        "DOI": "10.1016/j.apm.2025.116239",
        "Abstract": "This paper proposes a path planning method for large-scale, low-cost military UAVs, addressing system design, path planning algorithms, and UAV safety guarantee. We implement a distributed formation control system and construct behavior-based formation coordination control methods through quantified UAV interactions."
      }
    }
     {
      "title": "HAURRT*smart: A rapidly exploring pseudo-random tree algorithm with low redundancy",
      "authors": "Peidong He, Gang Hu, Essam H. Houssein, Guo Wei",
      "venue": "Aerospace Science and Technology",
      "venueType": "journal",
      "venueAbbr": "AST",
      "year": "2026",
      "doi": "10.1016/j.ast.2026.111868",
      "links": {
        "PDF": "https://github.com/hepeidong1/MyBlog/raw/refs/heads/main/articles/article4/4.pdf",
        "Code": "https://github.com/hepeidong1/MyBlog/raw/refs/heads/main/articles/article4/code.zip",
        "Supplementary": "https://github.com/hepeidong1/MyBlog/raw/refs/heads/main/articles/article4/SM.mp4"
      },
      "details": {
        "Journal": "Aerospace Science and Technology, 176 (2026) 111868",
        "DOI": "10.1016/j.ast.2026.111868",
        "Abstract": "Autonomous robot path planning technologies have several problems. They can be slow, often use too many nodes, and struggle to adapt to complex environments, especially when using random sampling algorithms. Traditional Rapidly-exploring Random Tree (RRT) algorithms rely on random sampling and fixed stride lengths. This limits their ability to navigate complicated spaces and narrow passages effectively. This paper proposes the HAURRT*smart algorithm, which features four key improvements. First, we use Halton sequences for uniform sampling, eliminating node redundancy and step size dependence. By adding a state marker, our sampling strategy fully inherits the three major advantages of Halton sequences. Second, we add a dynamically adjusted target bias probability to balance exploration and exploitation for faster convergence. Third, the uniform node chain extension strategy addresses sparsity from long-distance node expansion, promoting compact connections. Finally, local branch pruning and reconnection, guided by the triangle inequality, optimize the final path and improve smoothness by eliminating redundant nodes in reverse order."
      }
    },
    {
      "title": "VEAPF: A Purely Visual Navigation Integrating Multi-Visual Features into the Traditional Obstacle Avoidance Framework",
      "authors": "Peidong He, Gang Hu, Guo Wei, Bin Shu, Jialing Yan",
      "venue": "Under Review",
      "venueType": "journal",
      "venueAbbr": "Preprint",
      "year": "2026",
      "status": "Under Review",
      "links": {},
      "details": {
        "Abstract": "Supplementary Materials will be uploaded shortly."
      }
    }
  ],
  "projects": [
    {
      "title": "UAV Swarm Path Planning",
      "date": "2024.01 — Present",
      "badge": "Research",
      "desc": "Large-scale UAV swarm path planning based on Plan Separation and Consolidation Method. MATLAB · Python · C++"
    },
    {
      "title": "Particle Swarm Optimization Framework",
      "date": "2024.06 — 2025.03",
      "badge": "开源",
      "desc": "PDPSO: A high-dimensional optimization framework with priority-driven search strategy. Python · MATLAB"
    }
  ]
};
