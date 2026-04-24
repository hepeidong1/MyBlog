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
        "Abstract": "Particle swarm optimization (PSO) is one of the most classical meta-heuristic algorithms (MAs), and the algorithm is extensively used in solving practical engineering application problems. To address the challenges of particle swarm optimization in high-dimensional complex engineering problems, including accuracy, stability, and resource utilization, we propose a PSO variant called PDPSO, which incorporates a priority-driven search strategy and a dynamic candidate solution management strategy. The priority-driven search strategy removes the inertia term, retaining the guidance of the individual optimal and high-priority candidate solutions, significantly enhancing algorithm stability, robust and execution efficiency; the dynamic candidate solution management strategy constructs an adaptive priority table, dynamically screening high-quality solution sets via a non-uniform subpopulation allocation mechanism, combined with a state rollback mechanism to prevent local stagnation, and integrating candidate solution elimination to achieve a self-balancing equilibrium between algorithm exploration and exploitation. We have not added any mutation strategy to the original algorithm, instead, the PDPSO algorithm balances the exploration and exploitation capabilities by whether or not to continue to learn the previous candidate solutions at the next update, which is a significant highlight of the algorithm and provides a new research direction to improve the robustness of other optimization algorithms for high-dimensional complex problems. Verified by CEC2017 high-dimensional testing (30, 50, and 100 dimensions) and 34 engineering examples, the PDPSO algorithm exhibits outstanding advantages in high-dimensional problems and excellent computational efficiency. When the test function dimension increases from 30D to 100D, the growth rate in time complexity is as low as 24.87%. The PDPSO algorithm demonstrates strong applicability in real-world engineering problems, with optimization results in various complex simulation scenarios approaching theoretical optimal solutions. PDPSO provides a high-precision, robust solution for high-dimensional engineering optimization, and its dimension-insensitive complexity characteristics have universal value. The source codes and supplementary materials of PDPSO are available at https://github.com/hepeidong1/PDPSO."
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
        "Abstract": "UAVs (Unmanned Aerial Vehicles) have gained popularity in agricultural monitoring and military strikes due to their efficiency, flexibility, and affordability. However, achieving autonomic flight for UAVs still faces challenges. We make innovative adjustments in three aspects: environment modeling, path planning process, and path generator. Combine the advantages of the Global Path Search Algorithm and Local Path Search Algorithm, then design a large-scale UAV swarm path planning algorithm based on Plan Separation and Consolidation Method. We use many hybrid models to re-model the various environmental elements, which solves the weakness of the 'combination explosion' and the inability to balance the various practical needs when extending the 2D grid method to 3D space. The Plan Separation and Consolidation Method separates the path planning problem of large-scale UAV swarms both in the time dimension and the dimension of the individuals of UAVs, and then consolidates the planning problems through temporary static obstacle regions, which utterly eliminates the 'curse of dimensionality' in the planning process of large-scale UAV swarms, and provides a new opportunity for the autonomous control and parallelization of UAV swarms. We design a new local path evaluator and an enhanced Differentiated Creative Search algorithm to generate approximately optimal local paths quickly and accurately. We validate the effectiveness of the Plan Separation and Consolidation Method process and path generation method through a large number of repetitive experiments. Supplementary materials and related code can be downloaded at https://ogi.teracloud.jp/share/1202e180fd6a0c09."
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
        "Abstract": "In the military field, the utilization of unmanned aerial vehicle (UAV) formations to carry out saturation attacks on enemy forces is the development trend of future war. Traditional path planning algorithms have the disadvantages of poor real-time performance, poor flexibility, poor scalability, and weak anti-jamming ability, which make these algorithms difficult to apply in the control of large-scale joint non-uniform military UAV formations. This paper proposes a path-planning method for large-scale, low-cost military UAVs, it addresses three key aspects: system design, path-planning algorithms, and UAV safety guarantee. In system design, we implement a distributed formation control system. In this setup, individual agents can perform flight tasks independently using autonomous algorithms without needing to communicate with a central control center. In path planning algorithms, we quantify the four interactions of UAVs and combine them with the linear separation force strategy to construct a set of behavior-based formation coordination control methods through a reasonable interaction combination method. By adding guided paths, based on the integration of behavior-based formation coordination control methods, this paper retains the advantages of global path planning algorithms, such as high success rate, and local path planning algorithms, such as real-time performance. By designing a distributed formation control system with strong robustness and incorporating an escape mechanism, the system benefits from both passive and active fault-tolerant control strategies. This significantly enhances the overall stability of the system. Ablation experiments demonstrate that the components of the formation control system proposed in this paper are reasonable. Simulation experiments indicate that the distributed large-scale joint non-uniform UAV formation real-time path planning method is secure, stable, adaptable to various planning environments, and exhibits a fast convergence speed for the formation. Additionally, it is scalable, flexible, and suitable for application in large-scale clusters, among other benefits."
      }
    },
    {
      "title": "HAURRT*smart: A rapidly exploring pseudo-random tree algorithm with low redundancy",
      "authors": "Peidong He, Gang Hu, Essam H. Houssein, Guo Wei",
      "venue": "Aerospace Science and Technology",
      "venueType": "journal",
      "venueAbbr": "AESCTE",
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
        "Abstract": "Autonomous robot path planning technologies have several problems. They can be slow, often use too many nodes, and struggle to adapt to complex environments, especially when using random sampling algorithms. Traditional Rapidly-exploring Random Tree (RRT) algorithms rely on random sampling and fixed stride lengths. This limits their ability to navigate complicated spaces and narrow passages effectively. This paper proposes the HAURRT*smart algorithm, which features four key improvements. First, we use Halton sequences for uniform sampling, eliminating node redundancy and step size dependence. By adding a state marker, our sampling strategy fully inherits the three major advantages of Halton sequences. Second, we add a dynamically adjusted target bias probability to balance exploration and exploitation for faster convergence. Third, the uniform node chain extension strategy addresses sparsity from long-distance node expansion, promoting compact connections. Finally, local branch pruning and reconnection, guided by the triangle inequality, optimize the final path and improve smoothness by eliminating redundant nodes in reverse order. We extensively test the HAURRT*smart algorithm on 10 pixel maps, ranging from simple to highly complex environments. The result shows that this algorithm has several key features: it can quickly find effective paths; it maintains low redundancy by exploring most areas with fewer nodes; it remains efficient and low in redundancy across different environments, showing strong adaptability; and it can also work in dynamic environments. Notably, at the reasonable setting of scene resolution, HAURRT*smart can rapidly explore all accessible region pixel blocks, a feat that surpasses all algorithms relying on regular random sampling. URL for supplementary materials and code: hepeidong.com."
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
