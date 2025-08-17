'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Search,
  ExternalLink,
  Play,
  Users,
  Zap,
  Calendar,
  Target,
  Award,
  Briefcase,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Server,
  Eye,
  Monitor,
  Code2,
  Layers,
  Network
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Resource {
  id: string;
  title: string;
  description: string;
  instructor: string;
  type: 'playlist' | 'channel' | 'course';
  link: string;
  duration?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  resources: Resource[];
}

const categories: Category[] = [
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    description: 'Master DSA with top-rated instructors',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    resources: [
      {
        id: 'striver-450',
        title: 'Striver A2Z DSA Course',
        description: 'Complete DSA roadmap with 450+ problems',
        instructor: 'Striver (Raj Vikramaditya)',
        type: 'playlist',
        link: 'https://www.youtube.com/@takeUforward',
        duration: '200+ hours',
        level: 'beginner'
      },
      {
        id: 'love-babbar',
        title: 'DSA Supreme Course',
        description: '149 comprehensive video lectures on DSA',
        instructor: 'Love Babbar',
        type: 'playlist',
        link: 'https://www.youtube.com/@CodeHelp',
        duration: '149 videos',
        level: 'beginner'
      },
      {
        id: 'leetcode',
        title: 'LeetCode Practice',
        description: 'Solve coding problems and prepare for interviews',
        instructor: 'LeetCode',
        type: 'course',
        link: 'https://leetcode.com',
        level: 'intermediate'
      }
    ]
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Full-stack web development resources',
    icon: <Database className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-green-500 to-green-700',
    resources: [
      {
        id: 'mern-sheryians',
        title: 'MERN Stack Development',
        description: 'Complete MERN stack course',
        instructor: 'Sheryians Coding School',
        type: 'playlist',
        link: 'https://www.youtube.com/@sheryians',
        duration: '50+ hours',
        level: 'intermediate'
      },
      {
        id: 'nextjs-harry',
        title: 'Next.js Complete Course',
        description: 'Learn Next.js from scratch to advanced',
        instructor: 'CodeWithHarry',
        type: 'playlist',
        link: 'https://www.youtube.com/@CodeWithHarry',
        duration: '20+ hours',
        level: 'intermediate'
      },
      {
        id: 'mdn-docs',
        title: 'MDN Web Docs',
        description: 'Complete web development documentation',
        instructor: 'Mozilla',
        type: 'course',
        link: 'https://developer.mozilla.org',
        level: 'beginner'
      }
    ]
  },
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Master different programming languages',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    resources: [
      {
        id: 'typescript-chai',
        title: 'TypeScript Complete Course',
        description: 'Learn TypeScript from basics to advanced',
        instructor: 'ChaiAurCode (Hitesh Choudhary)',
        type: 'playlist',
        link: 'https://www.youtube.com/@chaiaurcode',
        duration: '15+ hours',
        level: 'beginner'
      },
      {
        id: 'django-chai',
        title: 'Django Web Framework',
        description: 'Python Django for web development',
        instructor: 'ChaiAurCode (Hitesh Choudhary)',
        type: 'playlist',
        link: 'https://www.youtube.com/@chaiaurcode',
        duration: '25+ hours',
        level: 'intermediate'
      },
      {
        id: 'go-chai',
        title: 'Go Programming Language',
        description: 'Learn Go from scratch',
        instructor: 'ChaiAurCode (Hitesh Choudhary)',
        type: 'playlist',
        link: 'https://www.youtube.com/@chaiaurcode',
        duration: '20+ hours',
        level: 'beginner'
      }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Build mobile apps with Flutter',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
    resources: [
      {
        id: 'flutter-akshit',
        title: 'Flutter Complete Course',
        description: 'Master Flutter app development',
        instructor: 'Akshit Madan',
        type: 'playlist',
        link: 'https://www.youtube.com/@AkshitMadan',
        duration: '40+ hours',
        level: 'beginner'
      },
      {
        id: 'flutter-docs',
        title: 'Flutter Documentation',
        description: 'Official Flutter documentation and tutorials',
        instructor: 'Flutter Team',
        type: 'course',
        link: 'https://flutter.dev/docs',
        level: 'beginner'
      }
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    description: 'Learn blockchain development',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-orange-500 to-orange-700',
    resources: [
      {
        id: 'blockchain-codeeater',
        title: 'Blockchain Development',
        description: 'Complete blockchain and smart contract development',
        instructor: 'CodeEater',
        type: 'playlist',
        link: 'https://www.youtube.com/@CodeEater21',
        duration: '30+ hours',
        level: 'intermediate'
      },
      {
        id: 'solidity-docs',
        title: 'Solidity Documentation',
        description: 'Official Solidity smart contract language docs',
        instructor: 'Ethereum Foundation',
        type: 'course',
        link: 'https://docs.soliditylang.org',
        level: 'intermediate'
      }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI/ML & Data Science',
    description: 'Machine Learning and AI resources',
    icon: <Brain className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-pink-500 to-pink-700',
    resources: [
      {
        id: 'ml-100days',
        title: '100 Days of Machine Learning',
        description: 'Complete ML/DL/RL, GAN, NLP course series',
        instructor: '100 Days of ML',
        type: 'playlist',
        link: 'https://www.youtube.com/@campusx-official',
        duration: '100+ hours',
        level: 'intermediate'
      },
      {
        id: 'kaggle-courses',
        title: 'Kaggle Learn',
        description: 'Free micro-courses in data science',
        instructor: 'Kaggle',
        type: 'course',
        link: 'https://www.kaggle.com/learn',
        level: 'beginner'
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Learn ethical hacking and security',
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-red-500 to-red-700',
    resources: [
      {
        id: 'cybersec-basics',
        title: 'Cybersecurity Fundamentals',
        description: 'Introduction to cybersecurity concepts',
        instructor: 'Professor Messer',
        type: 'playlist',
        link: 'https://www.youtube.com/@professormesser',
        duration: '50+ hours',
        level: 'beginner'
      },
      {
        id: 'tryhackme',
        title: 'TryHackMe',
        description: 'Learn cybersecurity through hands-on exercises',
        instructor: 'TryHackMe',
        type: 'course',
        link: 'https://tryhackme.com',
        level: 'beginner'
      }
    ]
  },
  {
    id: 'iot',
    name: 'IoT & Embedded Systems',
    description: 'Internet of Things development',
    icon: <Wifi className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-teal-500 to-teal-700',
    resources: [
      {
        id: 'iot-arduino',
        title: 'Arduino Programming',
        description: 'Learn IoT with Arduino and sensors',
        instructor: 'Paul McWhorter',
        type: 'playlist',
        link: 'https://www.youtube.com/@paulmcwhorter',
        duration: '30+ hours',
        level: 'beginner'
      },
      {
        id: 'raspberry-pi',
        title: 'Raspberry Pi Projects',
        description: 'Build IoT projects with Raspberry Pi',
        instructor: 'ExplainingComputers',
        type: 'playlist',
        link: 'https://www.youtube.com/@ExplainingComputers',
        duration: '20+ hours',
        level: 'beginner'
      }
    ]
  },
  {
    id: 'competitive',
    name: 'Competitive Programming',
    description: 'Excel in coding competitions',
    icon: <Trophy className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
    resources: [
      {
        id: 'codeforces',
        title: 'Codeforces',
        description: 'Competitive programming platform',
        instructor: 'Codeforces',
        type: 'course',
        link: 'https://codeforces.com',
        level: 'intermediate'
      },
      {
        id: 'atcoder',
        title: 'AtCoder',
        description: 'Programming contest platform',
        instructor: 'AtCoder',
        type: 'course',
        link: 'https://atcoder.jp',
        level: 'intermediate'
      }
    ]
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    description: 'OpenCV, YOLO, and image processing',
    icon: <Eye className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    resources: [
      {
        id: 'opencv-python',
        title: 'OpenCV Python Complete Course',
        description: 'Master computer vision with OpenCV',
        instructor: 'Murtaza Hassan',
        type: 'playlist',
        link: 'https://www.youtube.com/@murtazasworkshop',
        duration: '30+ hours',
        level: 'intermediate'
      },
      {
        id: 'yolo-object-detection',
        title: 'YOLO Object Detection',
        description: 'Real-time object detection with YOLO',
        instructor: 'Computer Vision Engineer',
        type: 'playlist',
        link: 'https://www.youtube.com/@ComputerVisionEngineer',
        duration: '15+ hours',
        level: 'advanced'
      },
      {
        id: 'opencv-docs',
        title: 'OpenCV Documentation',
        description: 'Official OpenCV documentation and tutorials',
        instructor: 'OpenCV Team',
        type: 'course',
        link: 'https://docs.opencv.org',
        level: 'intermediate'
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    description: 'Docker, Kubernetes, AWS, CI/CD',
    icon: <Server className="w-6 h-6" />,
    color: 'bg-gradient-to-br from-slate-500 to-slate-700',
    resources: [
      {
        id: 'docker-kubernetes',
        title: 'Docker & Kubernetes Complete Course',
        description: 'Containerization and orchestration',
        instructor: 'TechWorld with Nana',
        type: 'playlist',
        link: 'https://www.youtube.com/@TechWorldwithNana',
        duration: '40+ hours',
        level: 'intermediate'
      },
      {
        id: 'aws-cloud',
        title: 'AWS Cloud Practitioner',
        description: 'Amazon Web Services fundamentals',
        instructor: 'FreeCodeCamp',
        type: 'playlist',
        link: 'https://www.youtube.com/@freecodecamp',
        duration: '25+ hours',
        level: 'beginner'
      },
      {
        id: 'jenkins-cicd',
        title: 'Jenkins CI/CD Pipeline',
        description: 'Continuous Integration and Deployment',
        instructor: 'DevOps Journey',
        type: 'playlist',
        link: 'https://www.youtube.com/@DevOpsJourney',
        duration: '20+ hours',
        level: 'intermediate'
      }
    ]
  },
{
  id: 'theory',
  name: 'Theory Subjects',
  description: 'Core CS subjects for strong fundamentals',
  icon: <BookOpen className="w-6 h-6" />,
  color: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
  resources: [
    {
      id: 'os-knowledgegate',
      title: 'Operating System Complete Course',
      description: 'Detailed OS concepts with examples',
      instructor: 'Knowledge Gate',
      type: 'playlist',
      link: 'https://www.youtube.com/@KNOWLEDGEGATE_kg',
      duration: '50+ hours',
      level: 'beginner'
    },
    {
      id: 'cn-knowledgegate',
      title: 'Computer Networks Complete Course',
      description: 'In-depth CN course for exams & interviews',
      instructor: 'Knowledge Gate',
      type: 'playlist',
      link: 'https://www.youtube.com/@KNOWLEDGEGATE_kg',
      duration: '40+ hours',
      level: 'beginner'
    },
    {
      id: 'dbms-gatesmashers',
      title: 'DBMS Complete Course',
      description: 'Database Management Systems explained',
      instructor: 'Gate Smashers',
      type: 'playlist',
      link: 'https://www.youtube.com/@GATESmashers',
      duration: '50+ hours',
      level: 'intermediate'
    },
    {
      id: 'oops-lovebabbar',
      title: 'OOPs Concepts in C++/Java',
      description: 'Object-Oriented Programming fundamentals',
      instructor: 'Love Babbar',
      type: 'playlist',
      link: 'https://www.youtube.com/@CodeHelp',
      duration: '30+ hours',
      level: 'beginner'
    }
  ]
},
{
  id: 'system-design',
  name: 'System Design',
  description: 'Scalable systems, architecture, and design patterns',
  icon: <Layers className="w-6 h-6" />,
  color: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
  resources: [
    {
      id: 'systemdesign-bytebytego',
      title: 'ByteByteGo - System Design',
      description: 'In-depth system design concepts by Alex Xu',
      instructor: 'ByteByteGo',
      type: 'playlist',
      link: 'https://www.youtube.com/ByteByteGo',
      level: 'intermediate'
    }
  ]
}

];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.resources.some(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const roadmapData = [
    {
      year: "1st Year",
      title: "Foundation Building",
      color: "bg-blue-500",
      icon: <GraduationCap className="w-6 h-6" />,
      focus: "Data Structures & Algorithms",
      goals: [
        "Master basic programming concepts",
        "Complete Striver A2Z DSA Course",
        "Solve 200-300 coding problems",
        "Learn time & space complexity",
        "Build strong problem-solving foundation"
      ],
      resources: ["DSA", "Basic Programming", "Problem Solving"],
      tip: "Focus entirely on DSA - it's your foundation for everything!"
    },
    {
      year: "2nd Year", 
      title: "Full-Stack Development",
      color: "bg-green-500",
      icon: <Code className="w-6 h-6" />,
      focus: "Web Development & Competitive Programming",
      goals: [
        "Master MERN Stack development",
        "Learn Next.js for production apps",
        "Get comfortable with TypeScript",
        "Participate in hackathons regularly",
        "Continue competitive programming"
      ],
      resources: ["MERN Stack", "Next.js", "TypeScript", "Competitive Programming"],
      tip: "Build projects and participate in hackathons - practical experience matters!"
    },
    {
      year: "3rd Year",
      title: "Specialization & Practice",
      color: "bg-purple-500", 
      icon: <Target className="w-6 h-6" />,
      focus: "Advanced Topics & Job Preparation",
      goals: [
        "Practice advanced DSA problems",
        "Learn ML/DL/RL fundamentals",
        "Master OpenCV and YOLO",
        "Get hands-on with DevOps tools",
        "Participate in hiring challenges",
        "Build impressive portfolio projects"
      ],
      resources: ["Advanced DSA", "AI/ML", "Computer Vision", "DevOps"],
      tip: "Focus on job preparation while exploring advanced technologies!"
    },
    {
      year: "4th Year",
      title: "Specialization & Placement",
      color: "bg-orange-500",
      icon: <Briefcase className="w-6 h-6" />,
      focus: "Advanced Specialization (Optional)",
      goals: [
        "Secure job placement first priority",
        "Optional: Explore blockchain development",
        "Optional: Learn ethical hacking",
        "Contribute to open source projects",
        "Mentor junior students",
        "Prepare for industry transition"
      ],
      resources: ["Blockchain", "Cybersecurity", "Open Source"],
      tip: "After securing placement, explore advanced topics that interest you!"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                codehatch
              </h1>
              <p className="text-gray-600 mt-1">
                Your ultimate coding resources for college students
              </p>
            </div>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search resources, instructors, topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedCategory ? (
          <>
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600">13</div>
                  <div className="text-gray-600">Categories</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-600">60+</div>
                  <div className="text-gray-600">Resources</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-purple-600">600+</div>
                  <div className="text-gray-600">Hours of Content</div>
                </CardContent>
              </Card>
            </div>

            {/* Year-wise Roadmap Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🎯 Your 4-Year Coding Journey
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A carefully crafted roadmap to transform you from a beginner to industry-ready developer. 
                  Follow this path and you will be ahead of 90% of your peers!
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <Link href="/career-advice">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Target className="w-4 h-4 mr-2" />
                      Detailed Career Advice
                    </Button>
                  </Link>
                  <Link href="/syllabus">
                    <Button variant="outline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Complete Syllabus
                    </Button>
                  </Link>
                </div>
              </div>
              
             
              
              {/* Success Timeline */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                  🚀 Success Timeline
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                      1
                    </div>
                    <h4 className="font-semibold text-gray-800">Strong Foundation</h4>
                    <p className="text-sm text-gray-600 mt-1">Master DSA & Problem Solving</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                      2
                    </div>
                    <h4 className="font-semibold text-gray-800">Full-Stack Skills</h4>
                    <p className="text-sm text-gray-600 mt-1">Build Real-World Projects</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                      3
                    </div>
                    <h4 className="font-semibold text-gray-800">Job Ready</h4>
                    <p className="text-sm text-gray-600 mt-1">Advanced Skills & Practice</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                      4
                    </div>
                    <h4 className="font-semibold text-gray-800">Industry Expert</h4>
                    <p className="text-sm text-gray-600 mt-1">Specialized & Placed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Categories Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                📚 Learning Resources by Category
              </h2>
              <p className="text-gray-600 mb-8">
                Explore our curated collection of resources from top instructors and platforms
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category) => (
                <Card
                  key={category.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-white mb-4`}>
                      {category.icon}
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">
                        {category.resources.length} resources
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Platforms</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'GitHub', link: 'https://github.com', color: 'bg-gray-800' },
                  { name: 'Stack Overflow', link: 'https://stackoverflow.com', color: 'bg-orange-500' },
                  { name: 'HackerRank', link: 'https://hackerrank.com', color: 'bg-green-600' },
                  { name: 'GeeksforGeeks', link: 'https://geeksforgeeks.org', color: 'bg-green-500' }
                ].map((platform) => (
                  <Link
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${platform.color} text-white p-4 rounded-lg text-center hover:opacity-90 transition-opacity`}
                  >
                    {platform.name}
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          // Category Detail View
          <div>
            <Button 
              variant="ghost" 
              onClick={() => setSelectedCategory(null)}
              className="mb-6"
            >
              ← Back to Categories
            </Button>
            
            {selectedCategoryData && (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-xl ${selectedCategoryData.color} flex items-center justify-center text-white`}>
                    {selectedCategoryData.icon}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                      {selectedCategoryData.name}
                    </h1>
                    <p className="text-gray-600 mt-1">
                      {selectedCategoryData.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {selectedCategoryData.resources.map((resource) => (
                    <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl">{resource.title}</CardTitle>
                            <CardDescription className="mt-2">
                              {resource.description}
                            </CardDescription>
                          </div>
                          <Badge 
                            variant={resource.level === 'beginner' ? 'default' : 
                                   resource.level === 'intermediate' ? 'secondary' : 'destructive'}
                          >
                            {resource.level}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="w-4 h-4" />
                            <span>{resource.instructor}</span>
                          </div>
                          
                          {resource.duration && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Play className="w-4 h-4" />
                              <span>{resource.duration}</span>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">
                              {resource.type}
                            </Badge>
                          </div>
                          
                          <Link
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="w-full">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Access Resource
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2025 codehatch - Empowering College Students with Quality Coding Resources</p>
            <p className="mt-2 text-sm">
              All resources are curated from top instructors and platforms. Visit their channels to support them!
            </p>
               ✅ <strong>View Imp Algos:</strong>{" "}
  <a
    href="https://algorithm-website-lac.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    Algorithm Website
  </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
