'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  Brain, 
  Smartphone, 
  Shield, 
  Wifi, 
  Trophy,
  BookOpen,
  Server,
  Eye,
  Zap,
  ArrowLeft,
  CheckCircle,
  Clock,
  Target,
  Layers,
  Globe,
  GitBranch,
  Monitor,
  Cpu,
  Network,
  Lock,
  Camera,
  BarChart3,
  Puzzle,
  FileCode,
  Settings
} from "lucide-react";
import Link from "next/link";

interface Topic {
  name: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  subtopics: string[];
}

interface SyllabusCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  totalDuration: string;
  prerequisites: string[];
  topics: Topic[];
}

const syllabusData: SyllabusCategory[] = [
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    description: 'Complete DSA curriculum for competitive programming and interviews',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    totalDuration: '6-8 months',
    prerequisites: ['Basic programming in any language', 'Mathematical reasoning'],
    topics: [
      {
        name: 'Time & Space Complexity',
        duration: '1 week',
        difficulty: 'beginner',
        subtopics: [
          'Big O, Big Theta, Big Omega notation',
          'Best, Average, Worst case analysis',
          'Space complexity analysis',
          'Amortized analysis basics'
        ]
      },
      {
        name: 'Arrays & Strings',
        duration: '2-3 weeks',
        difficulty: 'beginner',
        subtopics: [
          'Array operations and manipulations',
          'Two pointer technique',
          'Sliding window problems',
          'String matching algorithms (KMP, Rabin-Karp)',
          'Palindrome problems',
          'Anagram and subsequence problems'
        ]
      },
      {
        name: 'Linked Lists',
        duration: '2 weeks',
        difficulty: 'beginner',
        subtopics: [
          'Singly, Doubly, Circular linked lists',
          'Insertion, deletion, traversal',
          'Reverse linked list variations',
          'Cycle detection (Floyd\'s algorithm)',
          'Merge operations',
          'LRU Cache implementation'
        ]
      },
      {
        name: 'Stacks & Queues',
        duration: '2 weeks',
        difficulty: 'beginner',
        subtopics: [
          'Stack implementation and operations',
          'Queue, Deque, Priority Queue',
          'Monotonic stack problems',
          'Next/Previous greater element',
          'Expression evaluation',
          'Queue using stacks and vice versa'
        ]
      },
      {
        name: 'Recursion & Backtracking',
        duration: '3 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Recursion fundamentals and patterns',
          'Tail recursion optimization',
          'N-Queens problem',
          'Sudoku solver',
          'Permutations and combinations',
          'Subset generation',
          'Maze solving problems'
        ]
      },
      {
        name: 'Binary Trees',
        duration: '3 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Tree traversals (Inorder, Preorder, Postorder)',
          'Level order traversal',
          'Tree construction problems',
          'Lowest Common Ancestor',
          'Tree diameter and height',
          'Binary tree to DLL conversion',
          'Serialize and deserialize'
        ]
      },
      {
        name: 'Binary Search Trees',
        duration: '2 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'BST operations (insert, delete, search)',
          'BST validation',
          'Inorder successor/predecessor',
          'Convert sorted array to BST',
          'BST iterator',
          'Recover BST'
        ]
      },
      {
        name: 'Heaps & Priority Queues',
        duration: '2 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Min heap and Max heap',
          'Heap sort algorithm',
          'K-way merge problems',
          'Top K elements',
          'Median from data stream',
          'Merge K sorted lists'
        ]
      },
      {
        name: 'Hashing',
        duration: '2 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Hash table implementation',
          'Collision resolution techniques',
          'Hash functions design',
          'Two sum variations',
          'Subarray sum problems',
          'Longest substring problems'
        ]
      },
      {
        name: 'Graphs',
        duration: '4 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Graph representation (Adjacency list/matrix)',
          'BFS and DFS traversals',
          'Shortest path (Dijkstra, Bellman-Ford)',
          'Minimum Spanning Tree (Kruskal, Prim)',
          'Topological sorting',
          'Strongly connected components',
          'Union-Find data structure',
          'Graph coloring and bipartite graphs'
        ]
      },
      {
        name: 'Dynamic Programming',
        duration: '4-5 weeks',
        difficulty: 'advanced',
        subtopics: [
          'DP fundamentals and memoization',
          'Tabulation vs memoization',
          'Classic problems (Fibonacci, Climbing stairs)',
          'Knapsack problems (0/1, unbounded)',
          'Longest Common Subsequence',
          'Edit distance problems',
          'Matrix chain multiplication',
          'DP on trees and graphs',
          'Digit DP and bitmask DP'
        ]
      },
      {
        name: 'Advanced Topics',
        duration: '3-4 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Segment trees and Fenwick trees',
          'Trie data structure',
          'Advanced graph algorithms',
          'String algorithms (Z-algorithm, Manacher)',
          'Game theory basics',
          'Number theory for CP'
        ]
      }
    ]
  },
  {
    id: 'web-dev',
    name: 'Web Development (MERN + Next.js)',
    description: 'Full-stack web development with modern technologies',
    icon: <Globe className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-green-500 to-green-700',
    totalDuration: '8-10 months',
    prerequisites: ['HTML, CSS, JavaScript basics', 'Understanding of HTTP/HTTPS'],
    topics: [
      {
        name: 'Frontend Fundamentals',
        duration: '3-4 weeks',
        difficulty: 'beginner',
        subtopics: [
          'Advanced HTML5 semantic elements',
          'CSS Grid and Flexbox mastery',
          'CSS animations and transitions',
          'Responsive design principles',
          'CSS preprocessors (Sass/SCSS)',
          'CSS frameworks (Tailwind CSS)',
          'Browser developer tools'
        ]
      },
      {
        name: 'JavaScript Deep Dive',
        duration: '4-5 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'ES6+ features and syntax',
          'Closures, hoisting, scope',
          'Promises, async/await',
          'Event loop and asynchronous programming',
          'DOM manipulation and events',
          'Fetch API and AJAX',
          'Error handling and debugging',
          'Module systems (ES6, CommonJS)'
        ]
      },
      {
        name: 'React.js Fundamentals',
        duration: '4-5 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Components and JSX',
          'Props and state management',
          'Event handling in React',
          'Conditional rendering and lists',
          'React hooks (useState, useEffect, useContext)',
          'Custom hooks creation',
          'Component lifecycle',
          'React Router for navigation'
        ]
      },
      {
        name: 'Advanced React',
        duration: '3-4 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Context API and state management',
          'Redux/Zustand for complex state',
          'Performance optimization (memo, useMemo)',
          'Code splitting and lazy loading',
          'Higher-order components',
          'Render props pattern',
          'Testing with Jest and React Testing Library'
        ]
      },
      {
        name: 'Node.js & Express',
        duration: '4-5 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Node.js runtime and modules',
          'Express.js framework setup',
          'Middleware and routing',
          'RESTful API design',
          'Request/response handling',
          'File system operations',
          'Environment variables',
          'Error handling middleware'
        ]
      },
      {
        name: 'MongoDB & Database Design',
        duration: '3-4 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'MongoDB basics and CRUD operations',
          'Mongoose ODM',
          'Schema design and validation',
          'Indexing and performance',
          'Aggregation pipeline',
          'Database relationships',
          'Transactions and ACID properties'
        ]
      },
      {
        name: 'Authentication & Security',
        duration: '2-3 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'JWT token authentication',
          'Password hashing (bcrypt)',
          'OAuth 2.0 and social login',
          'CORS and security headers',
          'Input validation and sanitization',
          'Rate limiting and DDoS protection',
          'HTTPS and SSL certificates'
        ]
      },
      {
        name: 'Next.js Framework',
        duration: '4-5 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Next.js setup and project structure',
          'Server-side rendering (SSR)',
          'Static site generation (SSG)',
          'API routes and serverless functions',
          'Dynamic routing and nested routes',
          'Image optimization',
          'Performance optimization',
          'Deployment strategies'
        ]
      },
      {
        name: 'TypeScript Integration',
        duration: '3-4 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'TypeScript basics and type system',
          'Interfaces and type aliases',
          'Generics and utility types',
          'React with TypeScript',
          'Node.js with TypeScript',
          'Type-safe API development',
          'Advanced TypeScript patterns'
        ]
      },
      {
        name: 'Testing & Deployment',
        duration: '2-3 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Unit testing with Jest',
          'Integration testing',
          'E2E testing with Cypress',
          'CI/CD pipelines',
          'Docker containerization',
          'Cloud deployment (Vercel, Netlify)',
          'Monitoring and logging'
        ]
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud Computing',
    description: 'Infrastructure, deployment, and cloud technologies',
    icon: <Server className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-slate-500 to-slate-700',
    totalDuration: '6-8 months',
    prerequisites: ['Linux basics', 'Command line proficiency', 'Basic networking'],
    topics: [
      {
        name: 'Linux & Command Line',
        duration: '2-3 weeks',
        difficulty: 'beginner',
        subtopics: [
          'Linux file system and navigation',
          'File permissions and ownership',
          'Process management',
          'System monitoring tools',
          'Shell scripting basics',
          'Cron jobs and scheduling',
          'Package management'
        ]
      },
      {
        name: 'Version Control & Git',
        duration: '1-2 weeks',
        difficulty: 'beginner',
        subtopics: [
          'Git fundamentals and workflow',
          'Branching and merging strategies',
          'Conflict resolution',
          'Git hooks and automation',
          'GitHub/GitLab workflows',
          'Code review processes'
        ]
      },
      {
        name: 'Containerization (Docker)',
        duration: '3-4 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Docker fundamentals and architecture',
          'Dockerfile creation and best practices',
          'Image management and registries',
          'Container networking',
          'Volume management',
          'Docker Compose for multi-container apps',
          'Container security'
        ]
      },
      {
        name: 'Container Orchestration (Kubernetes)',
        duration: '4-5 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Kubernetes architecture and components',
          'Pods, Services, and Deployments',
          'ConfigMaps and Secrets',
          'Ingress and load balancing',
          'Persistent volumes',
          'Helm package manager',
          'Monitoring and logging in K8s'
        ]
      },
      {
        name: 'Cloud Platforms (AWS)',
        duration: '5-6 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'AWS core services (EC2, S3, RDS)',
          'IAM and security best practices',
          'VPC and networking',
          'Load balancers and auto scaling',
          'Lambda and serverless computing',
          'CloudFormation and Infrastructure as Code',
          'Monitoring with CloudWatch'
        ]
      },
      {
        name: 'CI/CD Pipelines',
        duration: '3-4 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Jenkins setup and configuration',
          'Pipeline as code',
          'GitHub Actions workflows',
          'Automated testing integration',
          'Deployment strategies',
          'Blue-green and canary deployments',
          'Pipeline security and secrets management'
        ]
      },
      {
        name: 'Infrastructure as Code',
        duration: '2-3 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Terraform fundamentals',
          'Resource management',
          'State management',
          'Modules and reusability',
          'Ansible for configuration management',
          'Infrastructure testing'
        ]
      },
      {
        name: 'Monitoring & Logging',
        duration: '2-3 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Prometheus and Grafana',
          'ELK Stack (Elasticsearch, Logstash, Kibana)',
          'Application performance monitoring',
          'Alerting and incident response',
          'Log aggregation and analysis',
          'Distributed tracing'
        ]
      }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI/ML & Data Science',
    description: 'Machine Learning, Deep Learning, and Computer Vision',
    icon: <Brain className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-pink-500 to-pink-700',
    totalDuration: '10-12 months',
    prerequisites: ['Python programming', 'Statistics and probability', 'Linear algebra basics'],
    topics: [
      {
        name: 'Python for Data Science',
        duration: '3-4 weeks',
        difficulty: 'beginner',
        subtopics: [
          'NumPy for numerical computing',
          'Pandas for data manipulation',
          'Matplotlib and Seaborn for visualization',
          'Jupyter notebooks and environments',
          'Data cleaning and preprocessing',
          'Exploratory data analysis (EDA)'
        ]
      },
      {
        name: 'Statistics & Probability',
        duration: '3-4 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Descriptive and inferential statistics',
          'Probability distributions',
          'Hypothesis testing',
          'Correlation and causation',
          'Bayesian statistics',
          'A/B testing fundamentals'
        ]
      },
      {
        name: 'Machine Learning Fundamentals',
        duration: '4-5 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Supervised vs unsupervised learning',
          'Linear and logistic regression',
          'Decision trees and random forests',
          'Support Vector Machines',
          'K-means clustering',
          'Model evaluation and validation',
          'Cross-validation techniques',
          'Bias-variance tradeoff'
        ]
      },
      {
        name: 'Advanced Machine Learning',
        duration: '4-5 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Ensemble methods (Bagging, Boosting)',
          'XGBoost and LightGBM',
          'Feature engineering and selection',
          'Hyperparameter tuning',
          'Dimensionality reduction (PCA, t-SNE)',
          'Anomaly detection',
          'Time series analysis'
        ]
      },
      {
        name: 'Deep Learning',
        duration: '5-6 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Neural network fundamentals',
          'Backpropagation algorithm',
          'TensorFlow and PyTorch',
          'Convolutional Neural Networks (CNNs)',
          'Recurrent Neural Networks (RNNs)',
          'LSTM and GRU networks',
          'Transfer learning',
          'Regularization techniques'
        ]
      },
      {
        name: 'Computer Vision',
        duration: '4-5 weeks',
        difficulty: 'advanced',
        subtopics: [
          'OpenCV fundamentals',
          'Image preprocessing and filtering',
          'Feature detection and matching',
          'Object detection (YOLO, R-CNN)',
          'Image segmentation',
          'Face recognition systems',
          'Real-time video processing',
          'Deep learning for computer vision'
        ]
      },
      {
        name: 'Natural Language Processing',
        duration: '4-5 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Text preprocessing and tokenization',
          'Bag of words and TF-IDF',
          'Word embeddings (Word2Vec, GloVe)',
          'Sentiment analysis',
          'Named entity recognition',
          'Language models and transformers',
          'BERT and GPT architectures',
          'Text generation and summarization'
        ]
      },
      {
        name: 'Reinforcement Learning',
        duration: '3-4 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Markov Decision Processes',
          'Q-learning and policy gradients',
          'Deep Q-Networks (DQN)',
          'Actor-Critic methods',
          'Multi-agent reinforcement learning',
          'Applications in gaming and robotics'
        ]
      },
      {
        name: 'Generative AI',
        duration: '3-4 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Generative Adversarial Networks (GANs)',
          'Variational Autoencoders (VAEs)',
          'Style transfer and image generation',
          'Text-to-image models',
          'Large Language Models (LLMs)',
          'Fine-tuning and prompt engineering'
        ]
      }
    ]
  },
  {
    id: 'mobile-dev',
    name: 'Mobile Development (Flutter)',
    description: 'Cross-platform mobile app development',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
    totalDuration: '5-6 months',
    prerequisites: ['Object-oriented programming', 'Basic mobile app concepts'],
    topics: [
      {
        name: 'Dart Programming Language',
        duration: '2-3 weeks',
        difficulty: 'beginner',
        subtopics: [
          'Dart syntax and fundamentals',
          'Variables, data types, and operators',
          'Control flow and functions',
          'Object-oriented programming in Dart',
          'Collections and generics',
          'Asynchronous programming',
          'Error handling and exceptions'
        ]
      },
      {
        name: 'Flutter Fundamentals',
        duration: '4-5 weeks',
        difficulty: 'beginner',
        subtopics: [
          'Flutter architecture and widgets',
          'Stateless vs Stateful widgets',
          'Layout widgets and positioning',
          'Material Design and Cupertino',
          'Navigation and routing',
          'Forms and user input',
          'Gestures and animations'
        ]
      },
      {
        name: 'State Management',
        duration: '3-4 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'setState and InheritedWidget',
          'Provider pattern',
          'Bloc/Cubit architecture',
          'Riverpod state management',
          'GetX framework',
          'State persistence',
          'Complex state scenarios'
        ]
      },
      {
        name: 'Backend Integration',
        duration: '3-4 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'HTTP requests and REST APIs',
          'JSON parsing and serialization',
          'Authentication and authorization',
          'Firebase integration',
          'Real-time data with WebSockets',
          'Offline data synchronization',
          'Error handling and retry logic'
        ]
      },
      {
        name: 'Device Features',
        duration: '2-3 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Camera and image picker',
          'Location services and maps',
          'Push notifications',
          'Local storage and databases',
          'Biometric authentication',
          'Device sensors integration',
          'Platform-specific code'
        ]
      },
      {
        name: 'Advanced Topics',
        duration: '3-4 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Custom widgets and painting',
          'Performance optimization',
          'Testing (unit, widget, integration)',
          'CI/CD for mobile apps',
          'App store deployment',
          'Code generation and build runners',
          'Accessibility and internationalization'
        ]
      }
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    description: 'Decentralized applications and smart contracts',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-orange-500 to-orange-700',
    totalDuration: '6-7 months',
    prerequisites: ['JavaScript/TypeScript', 'Basic cryptography', 'Web development basics'],
    topics: [
      {
        name: 'Blockchain Fundamentals',
        duration: '2-3 weeks',
        difficulty: 'beginner',
        subtopics: [
          'Distributed ledger technology',
          'Cryptographic hash functions',
          'Digital signatures and PKI',
          'Consensus mechanisms (PoW, PoS)',
          'Bitcoin and cryptocurrency basics',
          'Blockchain trilemma',
          'Types of blockchain networks'
        ]
      },
      {
        name: 'Ethereum & Smart Contracts',
        duration: '3-4 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Ethereum Virtual Machine (EVM)',
          'Gas fees and transaction lifecycle',
          'Accounts and wallet management',
          'Smart contract fundamentals',
          'Ethereum development tools',
          'MetaMask integration',
          'Testnet deployment'
        ]
      },
      {
        name: 'Solidity Programming',
        duration: '4-5 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Solidity syntax and data types',
          'Functions and modifiers',
          'Inheritance and interfaces',
          'Events and logging',
          'Error handling and security',
          'Design patterns in Solidity',
          'Gas optimization techniques',
          'Smart contract testing'
        ]
      },
      {
        name: 'DeFi Development',
        duration: '3-4 weeks',
        difficulty: 'advanced',
        subtopics: [
          'ERC-20 and ERC-721 tokens',
          'Decentralized exchanges (DEX)',
          'Automated Market Makers (AMM)',
          'Lending and borrowing protocols',
          'Yield farming and staking',
          'Flash loans and arbitrage',
          'DeFi security considerations'
        ]
      },
      {
        name: 'Web3 Frontend Development',
        duration: '3-4 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Web3.js and Ethers.js libraries',
          'Wallet connection and authentication',
          'Contract interaction from frontend',
          'IPFS for decentralized storage',
          'React hooks for Web3',
          'Transaction handling and UX',
          'Multi-chain support'
        ]
      },
      {
        name: 'Advanced Blockchain Topics',
        duration: '2-3 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Layer 2 solutions (Polygon, Arbitrum)',
          'Cross-chain bridges',
          'NFT marketplaces',
          'DAO governance systems',
          'Blockchain security auditing',
          'MEV and front-running',
          'Emerging blockchain platforms'
        ]
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Ethical Hacking',
    description: 'Information security and penetration testing',
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-red-500 to-red-700',
    totalDuration: '8-10 months',
    prerequisites: ['Networking fundamentals', 'Linux/Windows systems', 'Programming basics'],
    topics: [
      {
        name: 'Security Fundamentals',
        duration: '2-3 weeks',
        difficulty: 'beginner',
        subtopics: [
          'CIA triad (Confidentiality, Integrity, Availability)',
          'Risk assessment and management',
          'Security policies and procedures',
          'Threat modeling',
          'Security frameworks (NIST, ISO 27001)',
          'Compliance and regulations',
          'Security awareness training'
        ]
      },
      {
        name: 'Network Security',
        duration: '4-5 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Network protocols and vulnerabilities',
          'Firewalls and intrusion detection',
          'VPN and secure communications',
          'Wireless security (WPA, WEP)',
          'Network scanning and enumeration',
          'Packet analysis with Wireshark',
          'Network segmentation'
        ]
      },
      {
        name: 'Web Application Security',
        duration: '4-5 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'OWASP Top 10 vulnerabilities',
          'SQL injection and prevention',
          'Cross-site scripting (XSS)',
          'Cross-site request forgery (CSRF)',
          'Authentication and session management',
          'Input validation and sanitization',
          'Secure coding practices'
        ]
      },
      {
        name: 'Penetration Testing',
        duration: '5-6 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Penetration testing methodology',
          'Information gathering and reconnaissance',
          'Vulnerability assessment tools',
          'Exploitation techniques',
          'Post-exploitation and persistence',
          'Reporting and documentation',
          'Legal and ethical considerations'
        ]
      },
      {
        name: 'System Security',
        duration: '3-4 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Operating system hardening',
          'Access control and permissions',
          'Malware analysis and detection',
          'Incident response procedures',
          'Digital forensics basics',
          'Backup and recovery strategies',
          'Endpoint protection'
        ]
      },
      {
        name: 'Cryptography',
        duration: '3-4 weeks',
        difficulty: 'advanced',
        subtopics: [
          'Symmetric and asymmetric encryption',
          'Hash functions and digital signatures',
          'Public Key Infrastructure (PKI)',
          'SSL/TLS protocols',
          'Cryptographic attacks',
          'Key management',
          'Blockchain cryptography'
        ]
      },
      {
        name: 'Security Tools & Frameworks',
        duration: '2-3 weeks',
        difficulty: 'intermediate',
        subtopics: [
          'Kali Linux and penetration testing tools',
          'Metasploit framework',
          'Nmap and network discovery',
          'Burp Suite for web testing',
          'SIEM tools and log analysis',
          'Vulnerability scanners',
          'Security automation'
        ]
      }
    ]
  }
];

export default function SyllabusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                📚 Detailed Syllabus
              </h1>
              <p className="text-gray-600 mt-1">
                Comprehensive curriculum for each technology domain
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">7</div>
              <div className="text-gray-600">Major Domains</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">60+</div>
              <div className="text-gray-600">Core Topics</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Months Total</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">300+</div>
              <div className="text-gray-600">Subtopics</div>
            </CardContent>
          </Card>
        </div>

        {/* Syllabus Categories */}
        <div className="space-y-12">
          {syllabusData.map((category) => (
            <Card key={category.id} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{category.name}</CardTitle>
                    <CardDescription className="text-lg mb-4">
                      {category.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="font-medium">Duration: {category.totalDuration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-gray-500" />
                        <span className="font-medium">{category.topics.length} Major Topics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                {/* Prerequisites */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Prerequisites
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.prerequisites.map((prereq, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {prereq}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Topics */}
                <div className="space-y-6">
                  {category.topics.map((topic, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-800 text-lg">{topic.name}</h5>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Clock className="w-3 h-3" />
                              {topic.duration}
                            </div>
                            <Badge 
                              variant={topic.difficulty === 'beginner' ? 'default' : 
                                     topic.difficulty === 'intermediate' ? 'secondary' : 'destructive'}
                              className="text-xs"
                            >
                              {topic.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {topic.subtopics.map((subtopic, subIndex) => (
                          <div key={subIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-3 h-3 mt-1 text-green-500 flex-shrink-0" />
                            {subtopic}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Tips */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-2xl text-center">💡 Learning Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Study Strategy</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                    Follow the prerequisites before starting any domain
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                    Practice coding problems daily (minimum 2-3 problems)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                    Build projects to apply theoretical knowledge
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                    Join communities and participate in discussions
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Time Management</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                    Dedicate 2-3 hours daily for focused learning
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                    Take breaks and avoid burnout
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                    Review and revise previous topics regularly
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                    Track your progress and celebrate milestones
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                   
             
  <strong>View Imp Algos:</strong>{" "}
  <a
    href="https://algorithm-website-lac.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    Algorithm Website
  </a>


                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
