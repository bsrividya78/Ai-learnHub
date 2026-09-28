import { Course, LearningPath, Project, Quiz, AiToolItem } from '../types';

export const COURSES: Course[] = [
  {
    id: 'course-python-ai',
    title: 'Python for AI & High-Performance Computing',
    category: 'Python',
    difficulty: 'Beginner',
    description: 'Master vectorized computing with NumPy, memory-efficient data pipelines in Pandas, and multi-threaded execution for machine learning workloads.',
    prerequisites: ['Basic programming syntax', 'High school algebra'],
    estimatedHours: 24,
    totalLessons: 6,
    rating: 4.9,
    enrolledCount: 3840,
    instructor: {
      name: 'Dr. Marcus Vance',
      role: 'Associate Professor of Computer Engineering',
      institution: 'Carnegie Mellon University'
    },
    lessons: [
      {
        id: 'py-01',
        title: 'Vectorization vs. Loops: NumPy Memory Layout & SIMD',
        duration: '35 min',
        summary: 'Understand strided memory buffers, broadcasting semantics, and why vectorization runs 50x faster on CPU architectures.',
        keyTakeaway: 'Always leverage contiguous C-order arrays and NumPy broadcasting instead of explicit Python loops.'
      },
      {
        id: 'py-02',
        title: 'High-Throughput Data Wrangling with Pandas',
        duration: '45 min',
        summary: 'DataFrame memory optimization, categorical dtypes, vectorized text processing, and multi-index aggregation.',
        keyTakeaway: 'Downcasting float64 to float32 and using categorical encodings reduces memory consumption up to 75%.'
      },
      {
        id: 'py-03',
        title: 'Scientific Computing with SciPy & Linear Algebra',
        duration: '40 min',
        summary: 'Eigenvalue decomposition, singular value decomposition (SVD), sparse matrix arithmetic, and optimization solvers.',
        keyTakeaway: 'SVD forms the theoretical bedrock for Principal Component Analysis and low-rank matrix approximations.'
      },
      {
        id: 'py-04',
        title: 'Asynchronous Workflows & Multiprocessing for Datasets',
        duration: '50 min',
        summary: 'Bypassing Python Global Interpreter Lock (GIL) using ProcessPoolExecutor and shared memory tensors.',
        keyTakeaway: 'CPU-bound preprocessing tasks must utilize multi-process workers rather than simple threading.'
      },
      {
        id: 'py-05',
        title: 'Object-Oriented Architecture for Modular ML Pipelines',
        duration: '45 min',
        summary: 'Custom scikit-learn compatible transformers, base estimator classes, and deterministic seed management.',
        keyTakeaway: 'Modular estimators enable leak-free cross-validation and reproducible pipeline serializations.'
      },
      {
        id: 'py-06',
        title: 'Profiling & GPU Memory Allocation Fundamentals',
        duration: '40 min',
        summary: 'Using cProfile, PyTorch memory benchmarks, CUDA context initialization, and cache garbage collection.',
        keyTakeaway: 'Identify tensor memory leaks early using memory snapshots before large distributed training runs.'
      }
    ]
  },
  {
    id: 'course-classical-ai',
    title: 'Artificial Intelligence: Search, Logic & Heuristics',
    category: 'Artificial Intelligence',
    difficulty: 'Intermediate',
    description: 'Explore foundational AI algorithms: informed heuristic search (A*), adversarial minimax with alpha-beta pruning, constraint satisfaction, and Markov Decision Processes.',
    prerequisites: ['Python proficiency', 'Discrete mathematics & graphs'],
    estimatedHours: 30,
    totalLessons: 5,
    rating: 4.8,
    enrolledCount: 2910,
    instructor: {
      name: 'Prof. Elena Rostova',
      role: 'Lead AI Systems Researcher',
      institution: 'Stanford AI Laboratory'
    },
    lessons: [
      {
        id: 'ai-01',
        title: 'State-Space Representation & Informed A* Search',
        duration: '45 min',
        summary: 'Admissible and consistent heuristics, priority queues, path cost computation, and topological state graphs.',
        keyTakeaway: 'A* guarantees optimal solutions when heuristic function h(n) never overestimates true cost to goal.'
      },
      {
        id: 'ai-02',
        title: 'Adversarial Search: Minimax & Alpha-Beta Pruning',
        duration: '50 min',
        summary: 'Game trees, evaluation functions, depth-limited search, transposition tables, and branch elimination pruning.',
        keyTakeaway: 'Alpha-beta pruning reduces the effective branching factor from b to approximately sqrt(b) in optimal move ordering.'
      },
      {
        id: 'ai-03',
        title: 'Constraint Satisfaction Problems & Backtracking',
        duration: '40 min',
        summary: 'Arc consistency (AC-3), Minimum Remaining Values (MRV) heuristic, and forward checking in complex graphs.',
        keyTakeaway: 'Combining MRV with constraint propagation eliminates dead-ends before deep recursive exploration.'
      },
      {
        id: 'ai-04',
        title: 'Markov Decision Processes & Bellman Optimality',
        duration: '55 min',
        summary: 'States, transition probability matrices, discount factors, policy evaluation, and value iteration algorithms.',
        keyTakeaway: 'The Bellman equation decomposes expected future utility into immediate reward plus discounted recursive state value.'
      },
      {
        id: 'ai-05',
        title: 'Probabilistic Reasoning & Bayesian Belief Networks',
        duration: '45 min',
        summary: 'Conditional probability distributions, d-separation, directed acyclic graphs, and exact inference by variable elimination.',
        keyTakeaway: 'Bayesian networks factorize high-dimensional joint probability distributions using conditional independence.'
      }
    ]
  },
  {
    id: 'course-ml-core',
    title: 'Machine Learning: Supervised, Unsupervised & Ensemble Methods',
    category: 'Machine Learning',
    difficulty: 'Intermediate',
    description: 'Rigorous mathematical formulation of classification, regression, gradient descent optimization, regularization, SVMs, and tree ensembles.',
    prerequisites: ['Multivariate calculus', 'Linear algebra', 'NumPy'],
    estimatedHours: 36,
    totalLessons: 6,
    rating: 4.95,
    enrolledCount: 4720,
    instructor: {
      name: 'Dr. Aris Thorne',
      role: 'Principal Machine Learning Architect',
      institution: 'MIT CSAIL'
    },
    lessons: [
      {
        id: 'ml-01',
        title: 'Convex Loss Functions & Gradient Descent Dynamics',
        duration: '50 min',
        summary: 'Mean Squared Error, Binary Cross-Entropy, Lipschitz smoothness, learning rates, momentum, and Adam updates.',
        keyTakeaway: 'Adaptive learning rates like Adam damp oscillations along steep valleys while accelerating in flat dimensions.'
      },
      {
        id: 'ml-02',
        title: 'Bias-Variance Tradeoff & L1/L2 Regularization',
        duration: '45 min',
        summary: 'Overfitting mechanics, Lasso geometric sparsity, Ridge shrinkage, and ElasticNet compromise on correlated features.',
        keyTakeaway: 'L1 regularization acts as an intrinsic feature selector due to sharp corners at axes in parameter space.'
      },
      {
        id: 'ml-03',
        title: 'Support Vector Machines & The Kernel Trick',
        duration: '55 min',
        summary: 'Hyperplane margins, Lagrange multipliers, dual problem formulation, and Mercer reproducing kernel Hilbert spaces (RBF).',
        keyTakeaway: 'The kernel trick maps non-linearly separable points to infinite dimensions without explicit feature coordinates.'
      },
      {
        id: 'ml-04',
        title: 'Tree Ensembles: Random Forests vs. XGBoost / LightGBM',
        duration: '60 min',
        summary: 'Gini impurity, recursive partitioning, bagging variance reduction, and gradient boosted residual fitting.',
        keyTakeaway: 'Random Forests train trees in parallel to cut variance; Gradient Boosting builds sequential trees to shrink bias.'
      },
      {
        id: 'ml-05',
        title: 'Unsupervised Geometry: PCA, t-SNE, and K-Means++',
        duration: '45 min',
        summary: 'Covariance matrix eigendecomposition, perplexity in manifold projection, and optimal cluster centroid seeds.',
        keyTakeaway: 'K-Means++ samples initial centroids with probability proportional to squared distance, preventing poor local minima.'
      },
      {
        id: 'ml-06',
        title: 'Evaluation Metrics, ROC-AUC, and Calibrated Probabilities',
        duration: '40 min',
        summary: 'Precision-Recall curves under class imbalance, Platt scaling, Brier score, and expected calibration error (ECE).',
        keyTakeaway: 'Never use accuracy on skewed datasets; PR-AUC and F1-score reveal true detection capability.'
      }
    ]
  },
  {
    id: 'course-deep-learning',
    title: 'Deep Learning & Transformer Architectures',
    category: 'Deep Learning',
    difficulty: 'Advanced',
    description: 'Deep dive into computational graphs, backpropagation, CNNs, residual connections, multi-head self-attention, and PyTorch internals.',
    prerequisites: ['Machine Learning fundamentals', 'PyTorch basics', 'Matrix calculus'],
    estimatedHours: 42,
    totalLessons: 6,
    rating: 4.96,
    enrolledCount: 5120,
    instructor: {
      name: 'Dr. Sophia Chen',
      role: 'Staff Research Scientist',
      institution: 'DeepMind / Berkeley EECS'
    },
    lessons: [
      {
        id: 'dl-01',
        title: 'Autograd & Custom PyTorch Autograd Function Mechanics',
        duration: '50 min',
        summary: 'Directed acyclic computation graphs, chain rule Jacobian-vector products, and forward/backward memory caches.',
        keyTakeaway: 'In-place tensor modifications can corrupt values saved during forward pass required for backward gradients.'
      },
      {
        id: 'dl-02',
        title: 'Convolutional Feature Hierarchies & Residual Blocks',
        duration: '55 min',
        summary: 'Dilated convolutions, receptive field arithmetic, batch normalization, and skip connections solving vanishing gradients.',
        keyTakeaway: 'ResNet skip connections allow gradients to flow unimpeded directly back across 100+ deep layers.'
      },
      {
        id: 'dl-03',
        title: 'Sequence Modeling to Self-Attention: The Transformer',
        duration: '60 min',
        summary: 'Query, Key, Value tensor projections, scaled dot-product attention, causal masking, and rotary position embeddings (RoPE).',
        keyTakeaway: 'Attention complexity is O(N^2) with sequence length, which driven modern FlashAttention kernel optimizations.'
      },
      {
        id: 'dl-04',
        title: 'Modern LLM Architectures: Pre-training & Tokenization',
        duration: '65 min',
        summary: 'Byte-Pair Encoding (BPE), SentencePiece, KV-Cache memory bandwidth bottlenecks, and SwiGLU activations.',
        keyTakeaway: 'KV-Caching during inference transforms autoregressive token generation from compute-bound to memory-bandwidth-bound.'
      },
      {
        id: 'dl-05',
        title: 'Parameter-Efficient Fine-Tuning: LoRA & QLoRA',
        duration: '55 min',
        summary: 'Low-rank matrix factorizations W = W0 + B*A, 4-bit NormalFloat quantization, and gradient checkpointing.',
        keyTakeaway: 'LoRA freezes base weights and trains rank-8 adapters, slashing VRAM footprint by 80% without losing quality.'
      },
      {
        id: 'dl-06',
        title: 'Alignment & Reinforcement Learning from Human Feedback',
        duration: '50 min',
        summary: 'PPO vs DPO (Direct Preference Optimization), Bradley-Terry preference modeling, and reward hacking mitigation.',
        keyTakeaway: 'DPO eliminates the need for an explicit reward model network, directly deriving the objective from likelihood ratios.'
      }
    ]
  },
  {
    id: 'course-data-science',
    title: 'Data Science, Vector Databases & Feature Engineering',
    category: 'Data Science',
    difficulty: 'Intermediate',
    description: 'Production data pipelines: statistical hypothesis testing, automated feature engineering, vector indexing (HNSW, IVFFlat), and RAG data pipelines.',
    prerequisites: ['Python', 'Basic statistics', 'SQL fundamentals'],
    estimatedHours: 28,
    totalLessons: 5,
    rating: 4.88,
    enrolledCount: 3410,
    instructor: {
      name: 'Kavita Sundaram, M.S.',
      role: 'Head of Data Platforms',
      institution: 'Georgia Tech Engineering'
    },
    lessons: [
      {
        id: 'ds-01',
        title: 'Statistical Hypothesis Testing & A/B Experimentation',
        duration: '45 min',
        summary: 'Two-sample t-tests, Mann-Whitney U, p-values, sample size determination, Bonferroni corrections for multi-testing.',
        keyTakeaway: 'Always perform power analysis prior to launching experiments to guarantee statistically meaningful effect sizes.'
      },
      {
        id: 'ds-02',
        title: 'Advanced Feature Engineering & Target Encoding',
        duration: '40 min',
        summary: 'Out-of-fold target encoding, polynomial interactions, datetime cycle encodings (sin/cos), and missingness indicators.',
        keyTakeaway: 'Target encoding without cross-fold leakage is crucial to prevent catastrophic training data memorization.'
      },
      {
        id: 'ds-03',
        title: 'Vector Embeddings & Semantic Search Pipelines',
        duration: '50 min',
        summary: 'Dense representations, contrastive loss pretraining, cosine vs inner product metrics, and dimensional normalization.',
        keyTakeaway: 'L2-normalized embeddings make inner product computationally identical to cosine similarity.'
      },
      {
        id: 'ds-04',
        title: 'Approximate Nearest Neighbor: HNSW & IVFFlat Indexing',
        duration: '55 min',
        summary: 'Hierarchical Navigable Small World graphs, Voronoi cells, quantization trade-offs, and query latency benchmarks.',
        keyTakeaway: 'HNSW achieves sub-millisecond retrieval on millions of vectors with 98%+ recall at the expense of RAM index size.'
      },
      {
        id: 'ds-05',
        title: 'Retrieval Augmented Generation (RAG) Architecture',
        duration: '50 min',
        summary: 'Document chunking strategies, reciprocal rank fusion (RRF), re-ranking with cross-encoders, and hallucination reduction.',
        keyTakeaway: 'Hybrid retrieval combining BM25 keyword matching with dense vectors consistently outperforms dense-only search.'
      }
    ]
  }
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-beginner',
    level: 'Beginner',
    title: 'Foundations of AI Engineering',
    tagline: 'From zero Python syntax to training your first predictive models',
    description: 'Designed specifically for engineering undergrads starting their journey. Solidifies linear algebra, calculus, vectorized Python computing, and core regression/classification algorithms.',
    duration: '8 - 10 Weeks (6 hrs/wk)',
    prerequisites: 'High school mathematics and willingness to code daily.',
    capstoneProject: 'End-to-End Real Estate Valuation & Feature Importance Engine',
    coreCourses: ['course-python-ai', 'course-data-science'],
    milestones: [
      {
        step: 1,
        title: 'Vectorized Computing & Data Structures',
        duration: '2 Weeks',
        topics: ['NumPy memory strides', 'Broadcasting rules', 'Pandas DataFrame optimization', 'Matplotlib visualization']
      },
      {
        step: 2,
        title: 'Applied Engineering Mathematics',
        duration: '2 Weeks',
        topics: ['Matrix multiplication & inverses', 'Eigenvectors', 'Partial derivatives', 'Gradient descent formulas']
      },
      {
        step: 3,
        title: 'Core Supervised Algorithms',
        duration: '3 Weeks',
        topics: ['Ordinary Least Squares', 'Logistic regression', 'Decision trees', 'Cross-validation methodologies']
      },
      {
        step: 4,
        title: 'First Capstone Lab',
        duration: '2 Weeks',
        topics: ['Data ingestion & cleansing', 'Feature correlation matrix', 'Model benchmarking', 'Git pipeline submission']
      }
    ]
  },
  {
    id: 'path-intermediate',
    level: 'Intermediate',
    title: 'Applied Machine Learning & Deep Vision',
    tagline: 'Build production-ready PyTorch architectures and computer vision pipelines',
    description: 'Transition from basic scikit-learn models to modern deep learning. Master backpropagation dynamics, convolutional networks, hyperparameter optimization, and scalable model evaluation.',
    duration: '12 - 14 Weeks (8 hrs/wk)',
    prerequisites: 'Comfortable with Python OOP, matrix arithmetic, and basic statistics.',
    capstoneProject: 'Autonomous Vision Perception with Real-time Object Tracking',
    coreCourses: ['course-ml-core', 'course-classical-ai'],
    milestones: [
      {
        step: 1,
        title: 'Advanced Supervised & Tree Ensembles',
        duration: '3 Weeks',
        topics: ['Support Vector Machines', 'XGBoost & LightGBM', 'Bayesian hyperparameter tuning', 'SHAP explainability']
      },
      {
        step: 2,
        title: 'Deep Learning with PyTorch',
        duration: '4 Weeks',
        topics: ['Tensors & CUDA execution', 'Custom nn.Module design', 'Optimization routines', 'Early stopping hooks']
      },
      {
        step: 3,
        title: 'Computer Vision & Representation Learning',
        duration: '3 Weeks',
        topics: ['ResNet architectures', 'Data augmentation pipelines', 'Transfer learning', 'Grad-CAM visual inspection']
      },
      {
        step: 4,
        title: 'Applied Lab Deployment',
        duration: '3 Weeks',
        topics: ['ONNX model export', 'Latency profiling', 'FastAPI microservice containerization', 'Stress testing']
      }
    ]
  },
  {
    id: 'path-advanced',
    level: 'Advanced',
    title: 'Generative AI, LLMs & MLOps Infrastructure',
    tagline: 'Architect large language models, fine-tuning adapters, and distributed inference',
    description: 'The pinnacle engineering curriculum. Learn modern Transformer mechanics from scratch, LoRA parameter-efficient adaptation, vector database retrieval pipelines, and distributed GPU training.',
    duration: '14 - 16 Weeks (10 hrs/wk)',
    prerequisites: 'Strong PyTorch proficiency, solid deep learning intuition, Linux fundamentals.',
    capstoneProject: 'Enterprise Document Intelligence with Hybrid RAG & Quantized LLM',
    coreCourses: ['course-deep-learning', 'course-data-science'],
    milestones: [
      {
        step: 1,
        title: 'Transformer Architecture & Self-Attention',
        duration: '4 Weeks',
        topics: ['Scaled dot-product attention', 'Multi-head projections', 'FlashAttention v2', 'KV-Cache arithmetic']
      },
      {
        step: 2,
        title: 'Model Adaptation & Quantization',
        duration: '4 Weeks',
        topics: ['LoRA / QLoRA adapters', '4-bit and 8-bit quantization', 'Unsloth optimizations', 'DPO fine-tuning']
      },
      {
        step: 3,
        title: 'Vector Databases & High-Throughput RAG',
        duration: '3 Weeks',
        topics: ['HNSW graph indexing', 'Semantic re-ranking', 'Contextual compression', 'Evaluation with Ragas']
      },
      {
        step: 4,
        title: 'Distributed Infrastructure & TensorRT',
        duration: '4 Weeks',
        topics: ['FSDP (Fully Sharded Data Parallel)', 'vLLM high-throughput engine', 'Kubernetes GPU pods', 'CI/CD MLOps']
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: 'Autonomous Vision Perception System',
    difficulty: 'Advanced',
    category: 'Computer Vision & Robotics',
    summary: 'Build a real-time multi-object detection and depth estimation pipeline for autonomous mobile robots using YOLOv8 and Depth-Anything.',
    objective: 'Implement end-to-end edge inference on synchronized video streams, predicting bounding boxes, classes, and depth disparities at >30 FPS.',
    techStack: ['PyTorch', 'YOLOv8', 'OpenCV', 'TensorRT', 'ROS2'],
    dataset: 'KITTI Vision Benchmark & custom indoor robot telemetry',
    architecture: [
      'Dual camera stereo image stream ingestion via OpenCV threaded buffer',
      'YOLOv8 backbone feature extractor with custom trained bounding heads',
      'Monocular depth map generation via lightweight transformer distillation',
      'Sensor fusion layer calculating 3D spatial obstacle coordinates',
      'FastAPI WebSocket broadcaster streaming annotated telemetry'
    ],
    estimatedTime: '25 - 30 Hours',
    image: '/src/assets/images/project_autonomous_vision_1790598664613.jpg'
  },
  {
    id: 'proj-02',
    title: 'Enterprise Document Intelligence with Hybrid RAG',
    difficulty: 'Intermediate',
    category: 'Natural Language Processing',
    summary: 'Construct an intelligent retrieval-augmented generation engine that answers engineering queries across technical PDFs with zero hallucination.',
    objective: 'Combine dense vector embeddings with BM25 sparse keyword indices and a cross-encoder re-ranker to feed accurate contexts to an LLM.',
    techStack: ['LangChain', 'ChromaDB', 'Sentence-Transformers', 'FastAPI', 'Streamlit'],
    dataset: 'ArXiv AI & Engineering research papers (10,000+ pages)',
    architecture: [
      'PDF parsing and sliding-window recursive chunking with markdown headers',
      'Dual embedding generation: dense semantic vectors + BM25 sparse tokens',
      'Hybrid reciprocal rank fusion (RRF) query evaluation in ChromaDB',
      'Cross-encoder reranker filtering top-3 high-relevance chunks',
      'Streaming context-grounded response generation with citation links'
    ],
    estimatedTime: '18 - 22 Hours'
  },
  {
    id: 'proj-03',
    title: 'Algorithmic Financial Signal Predictor',
    difficulty: 'Intermediate',
    category: 'Time Series & Machine Learning',
    summary: 'Predict high-frequency stock volatility and trend reversals using Bidirectional LSTM networks and technical indicator feature engineering.',
    objective: 'Construct leak-free sliding window time-series splits, compute rolling Sharpe ratios, and backtest automated execution signals against market benchmarks.',
    techStack: ['Python', 'Pandas', 'PyTorch / LSTM', 'TA-Lib', 'Backtrader'],
    dataset: '1-minute bar equity tick data (S&P 500 constituents)',
    architecture: [
      'Tick data ingestion, gap cleansing, and volume-weighted average price (VWAP) calculation',
      'Engineering 35+ technical signals (MACD, Bollinger Bands, RSI, ATR)',
      'Stationary transformation using fractional differentiation',
      'Bidirectional LSTM with temporal attention mechanism',
      'Vectorized backtesting engine computing maximum drawdown and alpha metrics'
    ],
    estimatedTime: '15 - 20 Hours'
  },
  {
    id: 'proj-04',
    title: 'Medical Image Tumor Segmentation with UNet',
    difficulty: 'Advanced',
    category: 'Medical AI & Deep Learning',
    summary: 'Develop a pixel-wise semantic segmentation architecture to accurately delineate brain MRI lesions with 3D UNet and Dice Loss.',
    objective: 'Train a deep convolutional encoder-decoder with skip connections, achieving >0.88 Dice similarity coefficient on unseen validation volumes.',
    techStack: ['PyTorch', 'MONAI', 'SimpleITK', 'Weights & Biases', 'TorchIO'],
    dataset: 'BraTS (Brain Tumor Segmentation Challenge) multimodal MRI scans',
    architecture: [
      'NIfTI medical scan normalization, skull-stripping, and spatial resampling',
      '3D patch generation with elastic deformation augmentations',
      'UNet architecture with residual contraction blocks and bilinear upsampling',
      'Combined focal loss and soft Dice loss optimization',
      '3D volumetric surface reconstruction and slice viewer'
    ],
    estimatedTime: '30 - 35 Hours'
  },
  {
    id: 'proj-05',
    title: 'Phishing & Malicious Code Classifier',
    difficulty: 'Beginner',
    category: 'Cybersecurity & Machine Learning',
    summary: 'Protect web users by classifying malicious URLs and phishing emails using TF-IDF tokenization, lexical feature extraction, and ensemble trees.',
    objective: 'Build an automated cybersecurity scanning pipeline that evaluates email headers, lexical URL entropy, and body text with 99% precision.',
    techStack: ['Python', 'Scikit-Learn', 'Regex', 'XGBoost', 'Flask'],
    dataset: 'Enron email corpus & PhishTank validated malicious URL repository',
    architecture: [
      'URL lexical parsing (domain age, Shannon entropy, sub-domain depth, IP usage)',
      'Body text cleansing, stop-word removal, and TF-IDF n-gram vectorization',
      'Feature union matrix combining lexical metrics and text vectors',
      'XGBoost classifier with tuned decision thresholds for high precision',
      'REST API endpoint returning risk score and flagged heuristics'
    ],
    estimatedTime: '10 - 14 Hours'
  },
  {
    id: 'proj-06',
    title: 'Edge AI Drone Obstacle Avoidance Simulation',
    difficulty: 'Advanced',
    category: 'Reinforcement Learning',
    summary: 'Train a simulated quadcopter to navigate cluttered obstacle courses using Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO).',
    objective: 'Formulate continuous state-action spaces, reward shaping for collision penalties, and simulate flight aerodynamics in OpenAI Gym / PyBullet.',
    techStack: ['PyTorch', 'Stable-Baselines3', 'Gymnasium', 'PyBullet', 'NumPy'],
    dataset: 'Synthetic 3D physics world with dynamic moving obstacles',
    architecture: [
      'Continuous aerodynamic state vector modeling (pitch, roll, yaw, velocity)',
      'Raycast proximity sensor simulation mimicking LiDAR beams',
      'Actor-Critic PPO architecture with generalized advantage estimation (GAE)',
      'Curriculum learning: progressively increasing obstacle density',
      'Live flight telemetry dashboard rendering trajectory path and reward curves'
    ],
    estimatedTime: '28 - 32 Hours'
  }
];

export const QUIZZES: Quiz[] = [
  {
    id: 'quiz-python-ai',
    title: 'Python & Vectorized Math for Engineers',
    category: 'Python',
    difficulty: 'Beginner',
    description: 'Test your understanding of NumPy array memory buffers, broadcasting rules, and computational complexity.',
    questions: [
      {
        id: 1,
        question: 'Why is a vectorized NumPy operation significantly faster than an equivalent Python for-loop over lists?',
        options: [
          'Python loops run in kernel space while NumPy runs in user space.',
          'NumPy arrays are stored in contiguous memory buffers executed via optimized C loops and CPU SIMD vector instructions without per-element type checking.',
          'NumPy uses GPU processing by default on all machines.',
          'Python lists automatically allocate memory on external swap disks.'
        ],
        correctAnswer: 1,
        explanation: 'NumPy arrays store elements of homogeneous types in contiguous memory blocks. Operations are carried out by compiled C loops utilizing CPU vector instructions (AVX/SIMD), skipping Python dynamic type dispatching on every iteration.'
      },
      {
        id: 2,
        question: 'Under NumPy broadcasting rules, what is the resulting shape when broadcasting array A of shape (8, 1, 6) with array B of shape (7, 6)?',
        options: [
          'Incompatible shapes resulting in a ValueError',
          '(8, 7, 6)',
          '(8, 7, 1)',
          '(56, 6)'
        ],
        correctAnswer: 1,
        explanation: 'Broadcasting aligns shapes from trailing dimensions backwards: (8, 1, 6) and (1, 7, 6). Dimensions match if they are equal or if one of them is 1. Dimension 1 stretches to 7, yielding (8, 7, 6).'
      },
      {
        id: 3,
        question: 'When preprocessing large datasets in Python, which technique provides true CPU parallelism bypassing the Global Interpreter Lock (GIL)?',
        options: [
          'Using the standard `threading` module with daemon threads',
          'Using `concurrent.futures.ProcessPoolExecutor` with independent process workers',
          'Wrapping functions inside Python generators using `yield`',
          'Increasing the Python recursion depth with `sys.setrecursionlimit`'
        ],
        correctAnswer: 1,
        explanation: 'Due to the CPython GIL, standard threads cannot execute Python bytecode simultaneously across multiple CPU cores. `ProcessPoolExecutor` spawns separate operating system processes, each with its own Python interpreter and GIL.'
      },
      {
        id: 4,
        question: 'In singular value decomposition (SVD) of a matrix X = U * Σ * V^T, what do the columns of V represent?',
        options: [
          'The projection coordinates of samples along the principal components',
          'The principal direction vectors (eigenvectors of X^T * X)',
          'The diagonal singular values representing variance',
          'The reconstruction residuals after mean subtraction'
        ],
        correctAnswer: 1,
        explanation: 'The columns of V (or rows of V^T) are the right singular vectors of X, which correspond directly to the eigenvectors of the covariance matrix X^T * X (the principal component axes).'
      }
    ]
  },
  {
    id: 'quiz-ml-core',
    title: 'Machine Learning Theory & Generalization',
    category: 'Machine Learning',
    difficulty: 'Intermediate',
    description: 'Challenge your grasp of loss surfaces, bias-variance tradeoff, regularization, and model validation.',
    questions: [
      {
        id: 1,
        question: 'Why does L1 (Lasso) regularization produce sparse models with exact zero weights, while L2 (Ridge) only shrinks weights toward zero?',
        options: [
          'L1 penalty uses quadratic optimization while L2 uses linear programming.',
          'The L1 diamond-shaped constraint region has sharp corners on the coordinate axes, causing contours of the loss function to intersect axes directly.',
          'L1 regularization applies only to categorical features.',
          'L2 regularization is mathematically incompatible with gradient descent.'
        ],
        correctAnswer: 1,
        explanation: 'Geometrically, the L1 norm boundary is an axis-aligned rhomboid with non-differentiable vertices directly on the axes. The ellipsoidal loss contours are statistically far more likely to contact these corner vertices, setting weights strictly to zero.'
      },
      {
        id: 2,
        question: 'In high-dimensional classification with extreme class imbalance (e.g. 99.8% negative, 0.2% positive), which evaluation metric is most informative?',
        options: [
          'Raw Accuracy score',
          'Receiver Operating Characteristic (ROC) AUC',
          'Precision-Recall Area Under the Curve (PR-AUC)',
          'Mean Squared Error (MSE)'
        ],
        correctAnswer: 2,
        explanation: 'ROC-AUC can present an overly optimistic assessment in severe class skew because False Positive Rate (FP / TN) stays artificially low when True Negatives dominate. PR-AUC evaluates Precision (TP / (TP + FP)) against Recall without being masked by huge TN counts.'
      },
      {
        id: 3,
        question: 'What is the primary architectural difference in how Random Forests and Gradient Boosted Decision Trees (GBDT) handle error reduction?',
        options: [
          'Random Forests build sequential trees to reduce bias, whereas GBDT averages parallel trees to reduce variance.',
          'Random Forests train independent deep trees in parallel to reduce variance (bagging), whereas GBDT fits shallow trees sequentially on residual errors to reduce bias (boosting).',
          'Random Forests cannot be used for regression, only classification.',
          'GBDT relies on bagging while Random Forests rely on stacking.'
        ],
        correctAnswer: 1,
        explanation: 'Random Forests use Bootstrap Aggregating (bagging) of unconstrained, high-variance trees to average out variance. Gradient boosting uses iterative shallow trees, each trained to predict the negative gradient of the loss function from previous iterations to eliminate bias.'
      },
      {
        id: 4,
        question: 'In support vector machines, how does the RBF (Radial Basis Function) kernel handle non-linear decision boundaries?',
        options: [
          'By explicitly computing coordinates in a 1,000,000-dimensional matrix before fitting.',
          'By computing inner products in an implicit infinite-dimensional Hilbert space using the exponential distance between sample pairs.',
          'By transforming features into Fourier series coefficients on disk.',
          'By recursively splitting the dataset using axis-parallel thresholds.'
        ],
        correctAnswer: 1,
        explanation: 'The RBF kernel computes K(x, z) = exp(-gamma * ||x - z||^2). Through Mercer theorem and Taylor series expansion, this evaluates the dot product of two points mapped into an infinite-dimensional feature space without ever explicitly computing that mapping.'
      }
    ]
  },
  {
    id: 'quiz-deep-learning',
    title: 'Deep Learning & Transformer Architectures',
    category: 'Deep Learning',
    difficulty: 'Advanced',
    description: 'Assess your engineering mastery of multi-head attention, backpropagation graph caching, and modern LLM inference.',
    questions: [
      {
        id: 1,
        question: 'In scaled dot-product attention Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V, why is the dot product divided by sqrt(d_k)?',
        options: [
          'To ensure the attention weights sum up to exactly 1.0.',
          'For large values of d_k, the dot products grow large in magnitude, pushing the softmax function into regions with extremely tiny gradients (gradient vanishing).',
          'To convert floating point tensors to integer representations.',
          'To normalize the output sequence length.'
        ],
        correctAnswer: 1,
        explanation: 'Assuming independent components with mean 0 and variance 1, the dot product of Q and K has mean 0 and variance d_k. For large d_k, the values become large, driving softmax into saturated zones with near-zero gradients. Scaling by 1/sqrt(d_k) preserves unit variance.'
      },
      {
        id: 2,
        question: 'What is the primary purpose of the KV-Cache (Key-Value Cache) during autoregressive LLM text generation?',
        options: [
          'To store the final decoded vocabulary tokens in browser cache.',
          'To avoid recomputing the Key and Value tensor representations for all preceding tokens at every single generation step.',
          'To compress model weights from 16-bit to 4-bit during training.',
          'To prevent the model from repeating words.'
        ],
        correctAnswer: 1,
        explanation: 'Because attention for previous tokens is causal and deterministic, their Key and Value vectors remain unchanged. Caching them prevents O(N^2) redundant computation on every single generated token, turning inference into an efficient O(1) step per token.'
      },
      {
        id: 3,
        question: 'How does Low-Rank Adaptation (LoRA) enable parameter-efficient fine-tuning of massive neural network weights W0 of dimension d x k?',
        options: [
          'By dropping 90% of random neurons using dropout during training.',
          'By decomposing weight updates into two low-rank matrices B (d x r) and A (r x k) where rank r << min(d, k), freezing W0 and only training B and A.',
          'By training only the final linear classification head.',
          'By pruning all weights below a specified threshold to zero.'
        ],
        correctAnswer: 1,
        explanation: 'LoRA represents weight changes delta W as the product B * A, where r is a small rank (e.g. 8 or 16). Since B*A contains vastly fewer parameters than the d x k weight matrix, it drastically cuts GPU memory consumption and training time.'
      },
      {
        id: 4,
        question: 'Why do deep Residual Networks (ResNet) successfully train across hundreds of layers where plain feedforward networks fail?',
        options: [
          'They replace convolution operations with fast Fourier transforms.',
          'Identity shortcut connections (y = F(x) + x) create an uninterrupted gradient highway, allowing gradients to propagate back without vanishing even if F(x) gradients are small.',
          'They eliminate the need for non-linear activation functions like ReLU.',
          'They compress weights after each epoch.'
        ],
        correctAnswer: 1,
        explanation: 'With identity shortcut y = F(x) + x, the gradient dLoss/dx equals dLoss/dy * (dF/dx + 1). The +1 term ensures that even if the learned subnetwork gradients dF/dx approach zero, gradients flow directly back across arbitrary depth.'
      }
    ]
  }
];

export const AI_TOOLS: AiToolItem[] = [
  {
    id: 'tool-pytorch',
    name: 'PyTorch 2.x',
    category: 'Frameworks',
    description: 'The industry-standard deep learning framework with dynamic computational graphs, TorchDynamo compiler, and native distributed training.',
    url: 'https://pytorch.org',
    useCase: 'Research prototyping, production deep learning, and custom CUDA tensor operations',
    badge: 'Core Framework'
  },
  {
    id: 'tool-huggingface',
    name: 'Hugging Face Transformers',
    category: 'Research & Datasets',
    description: 'State-of-the-art open-source machine learning hub hosting over 500,000 pre-trained models, datasets, and pipelines.',
    url: 'https://huggingface.co',
    useCase: 'Deploying open weights (Llama, Mistral, Whisper) and dataset exploration',
    badge: 'Model Hub'
  },
  {
    id: 'tool-wandb',
    name: 'Weights & Biases (W&B)',
    category: 'Tracking & MLOps',
    description: 'Developer platform for machine learning experiment tracking, hyperparameter sweeps, model artifact versioning, and live GPU metrics.',
    url: 'https://wandb.ai',
    useCase: 'Loss curve tracking, gradient monitoring, and distributed team benchmarking',
    badge: 'Experiment Tracking'
  },
  {
    id: 'tool-colab',
    name: 'Google Colaboratory',
    category: 'Compute & Labs',
    description: 'Free cloud-hosted Jupyter notebook environment providing on-demand access to NVIDIA T4, A100 GPUs, and TPU accelerators.',
    url: 'https://colab.research.google.com',
    useCase: 'Zero-setup interactive coding, fast lab replication, and GPU acceleration',
    badge: 'Cloud GPU'
  },
  {
    id: 'tool-ollama',
    name: 'Ollama & vLLM',
    category: 'Frameworks',
    description: 'High-throughput local LLM execution runtimes with PagedAttention, KV-cache quantization, and OpenAI-compatible REST APIs.',
    url: 'https://ollama.com',
    useCase: 'Running privacy-preserving local LLMs (DeepSeek, Llama 3, Qwen) on laptop hardware',
    badge: 'Local Inference'
  },
  {
    id: 'tool-chroma',
    name: 'ChromaDB & LanceDB',
    category: 'Frameworks',
    description: 'Open-source lightweight vector databases engineered specifically for AI applications and Retrieval-Augmented Generation.',
    url: 'https://trychroma.com',
    useCase: 'Storing document embeddings and millisecond nearest-neighbor semantic search',
    badge: 'Vector DB'
  },
  {
    id: 'tool-kaggle',
    name: 'Kaggle Platform',
    category: 'Research & Datasets',
    description: 'World-renowned competitive data science community featuring real-world datasets, competitive engineering benchmarks, and notebooks.',
    url: 'https://kaggle.com',
    useCase: 'Model competitions, exploratory data analysis, and open engineering datasets',
    badge: 'Competitions'
  },
  {
    id: 'tool-tensorboard',
    name: 'TensorBoard',
    category: 'Tracking & MLOps',
    description: 'Visualization toolkit for tracking metrics like loss and accuracy, visualizing model graphs, and viewing dimensional embeddings.',
    url: 'https://tensorflow.org/tensorboard',
    useCase: 'Local computation graph inspection and histogram weight analysis',
    badge: 'Diagnostics'
  }
];

export const FAQS = [
  {
    id: 'faq-1',
    question: 'Do I need advanced calculus and linear algebra before starting?',
    answer: 'No! While mathematical rigor is crucial for deep engineering comprehension, our Beginner Path ("Foundations of AI Engineering") covers the necessary linear algebra, matrix derivatives, and probability intuition concurrently with hands-on Python coding.'
  },
  {
    id: 'faq-2',
    question: 'What hardware or GPU setup do I need for the practical labs?',
    answer: 'You do not need an expensive discrete GPU to begin. Beginner and Intermediate projects run seamlessly on CPU or via free cloud compute platforms like Google Colaboratory (T4 GPUs). For advanced distributed training labs, we provide optimized instructions for cloud platforms and quantized local runtimes (LoRA/4-bit).'
  },
  {
    id: 'faq-3',
    question: 'How are the projects structured for engineering portfolios and internships?',
    answer: 'Every project on AI LearnHub is designed to be production-grade rather than a generic toy tutorial. Each project includes system architecture blueprints, benchmark datasets, evaluation metrics (ROC-AUC, Dice score, latency profiling), and clean Git repository structures that stand out on engineering resumes.'
  },
  {
    id: 'faq-4',
    question: 'Can I track my progress and earn course milestone badges?',
    answer: 'Yes! The Student Dashboard records your enrolled courses, lesson completion percentages, interactive quiz performance, and unlocked engineering achievements. All progress is automatically saved to your local browser storage so you can resume anytime.'
  },
  {
    id: 'faq-5',
    question: 'How is AI LearnHub different from generic online coding courses?',
    answer: 'AI LearnHub is created specifically for engineering students. Instead of surface-level copy-paste code, we emphasize systems engineering: why memory layouts matter (SIMD vectorization), how backpropagation graphs manage memory buffers, loss function geometry, and deployment trade-offs.'
  },
  {
    id: 'faq-6',
    question: 'Are the interactive quizzes timed or graded?',
    answer: 'Quizzes evaluate deep conceptual understanding with detailed explanations for every single option. You receive an immediate breakdown of your score, explanations of where you succeeded or missed, and successful completions sync directly to your student dashboard credentials.'
  }
];
