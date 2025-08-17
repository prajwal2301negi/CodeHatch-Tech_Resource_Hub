'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap,
  Target,
  Briefcase,
  Award,
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Lightbulb,
  Calendar,
  Star,
  Zap,
  Trophy,
  BookOpen,
  Code,
  Brain,
  Rocket,
  Shield,
  Heart,
  Clock,
  AlertTriangle,
  ThumbsUp,
  MessageCircle,
  GitBranch,
  Database,
  Smartphone,
  Globe
} from "lucide-react";
import Link from "next/link";

interface YearPlan {
  year: string;
  title: string;
  primaryFocus: string;
  color: string;
  icon: React.ReactNode;
  goals: string[];
  skills: string[];
  projects: string[];
  competitions: string[];
  tips: string[];
  timeAllocation: {
    dsa: number;
    development: number;
    projects: number;
    other: number;
  };
  milestones: string[];
  commonMistakes: string[];
  resources: string[];
}

const yearPlans: YearPlan[] = [
  {
    year: "1st Year",
    title: "Foundation Building Phase",
    primaryFocus: "Data Structures & Algorithms Mastery",
    color: "bg-blue-500",
    icon: <GraduationCap className="w-6 h-6" />,
    goals: [
      "Master fundamental programming concepts",
      "Complete Striver A2Z DSA Course (450+ problems)",
      "Solve 200-300 coding problems across all topics",
      "Understand time and space complexity analysis",
      "Build strong problem-solving foundation",
      "Learn basic Git and version control"
    ],
    skills: [
      "Programming fundamentals (C++/Java/Python)",
      "Arrays, Strings, and Basic Math",
      "Linked Lists and Stacks/Queues",
      "Recursion and Backtracking",
      "Binary Trees and BST",
      "Basic Sorting and Searching",
      "Time/Space Complexity Analysis"
    ],
    projects: [
      "Simple calculator with GUI",
      "Basic file management system",
      "Tic-tac-toe game",
      "Student grade management system",
      "Simple banking system simulation"
    ],
    competitions: [
      "College coding competitions",
      "HackerRank challenges",
      "CodeChef beginner contests",
      "LeetCode daily challenges"
    ],
    tips: [
      "Focus 80% time on DSA, 20% on basic projects",
      "Don't jump to advanced topics too early",
      "Practice coding by hand for better understanding",
      "Join coding communities and forums",
      "Maintain a coding journal",
      "Solve problems without looking at solutions first"
    ],
    timeAllocation: {
      dsa: 70,
      development: 10,
      projects: 15,
      other: 5
    },
    milestones: [
      "Solve first 100 problems",
      "Complete basic data structures",
      "Understand recursion completely",
      "Build first project",
      "Participate in first contest"
    ],
    commonMistakes: [
      "Jumping to competitive programming too early",
      "Not practicing enough problems",
      "Focusing on multiple languages instead of one",
      "Ignoring time complexity analysis",
      "Not building any projects"
    ],
    resources: [
      "Striver A2Z DSA Course",
      "Love Babbar DSA Supreme",
      "LeetCode for practice",
      "GeeksforGeeks for theory"
    ]
  },
  {
    year: "2nd Year",
    title: "Full-Stack Development & Competition",
    primaryFocus: "Web Development + Competitive Programming",
    color: "bg-green-500",
    icon: <Code className="w-6 h-6" />,
    goals: [
      "Master MERN Stack development",
      "Learn Next.js for production applications",
      "Get comfortable with TypeScript",
      "Participate in 5+ hackathons",
      "Continue competitive programming",
      "Build 3-4 full-stack projects",
      "Contribute to open source projects"
    ],
    skills: [
      "HTML5, CSS3, JavaScript ES6+",
      "React.js and component architecture",
      "Node.js and Express.js",
      "MongoDB and database design",
      "Next.js and SSR/SSG",
      "TypeScript for type safety",
      "RESTful API development",
      "Authentication and authorization"
    ],
    projects: [
      "E-commerce website with payment integration",
      "Social media dashboard",
      "Real-time chat application",
      "Task management system",
      "Blog platform with CMS",
      "Weather app with geolocation"
    ],
    competitions: [
      "Major hackathons (Smart India Hackathon)",
      "Codeforces regular contests",
      "Google Code Jam qualification",
      "Facebook Hacker Cup",
      "College tech fests"
    ],
    tips: [
      "Balance DSA practice with development",
      "Build projects that solve real problems",
      "Learn to work in teams during hackathons",
      "Focus on clean, maintainable code",
      "Deploy projects and create portfolio",
      "Network with seniors and industry professionals"
    ],
    timeAllocation: {
      dsa: 40,
      development: 35,
      projects: 20,
      other: 5
    },
    milestones: [
      "Complete first full-stack project",
      "Win or place in a hackathon",
      "Reach 500+ solved problems",
      "Learn TypeScript proficiently",
      "Deploy 3 projects online"
    ],
    commonMistakes: [
      "Neglecting DSA for development",
      "Building projects without proper planning",
      "Not participating in hackathons",
      "Focusing only on frontend or backend",
      "Not learning version control properly"
    ],
    resources: [
      "Sheryians MERN Stack Course",
      "CodeWithHarry Next.js",
      "ChaiAurCode TypeScript",
      "Codeforces for CP"
    ]
  },
  {
    year: "3rd Year",
    title: "Advanced Skills & Job Preparation",
    primaryFocus: "Specialization + Interview Preparation",
    color: "bg-purple-500",
    icon: <Target className="w-6 h-6" />,
    goals: [
      "Master advanced DSA topics",
      "Learn ML/DL fundamentals",
      "Get hands-on with Computer Vision (OpenCV, YOLO)",
      "Learn DevOps and cloud technologies",
      "Participate in hiring challenges",
      "Build impressive portfolio projects",
      "Start interview preparation",
      "Apply for internships"
    ],
    skills: [
      "Advanced algorithms and data structures",
      "System design fundamentals",
      "Machine Learning basics",
      "Computer Vision with OpenCV",
      "Object detection with YOLO",
      "Docker and containerization",
      "AWS/Azure cloud services",
      "CI/CD pipelines"
    ],
    projects: [
      "Real-time object detection system",
      "Machine learning model deployment",
      "Microservices architecture project",
      "Computer vision application",
      "DevOps pipeline for web app",
      "Mobile app with Flutter"
    ],
    competitions: [
      "Google Summer of Code",
      "Microsoft Imagine Cup",
      "ACM ICPC regionals",
      "Kaggle competitions",
      "Company hiring challenges"
    ],
    tips: [
      "Focus on job-relevant skills",
      "Practice system design questions",
      "Build projects that showcase your skills",
      "Network with industry professionals",
      "Prepare for technical interviews",
      "Consider specializing in one domain"
    ],
    timeAllocation: {
      dsa: 30,
      development: 25,
      projects: 25,
      other: 20
    },
    milestones: [
      "Complete 800+ coding problems",
      "Deploy ML model in production",
      "Build computer vision project",
      "Get internship offer",
      "Contribute to major open source project"
    ],
    commonMistakes: [
      "Trying to learn everything at once",
      "Not focusing on interview preparation",
      "Building projects without real-world impact",
      "Ignoring system design concepts",
      "Not applying for internships early"
    ],
    resources: [
      "100 Days of ML Channel",
      "Murtaza Hassan OpenCV",
      "TechWorld with Nana DevOps",
      "System Design Primer"
    ]
  },
  {
    year: "4th Year",
    title: "Specialization & Placement",
    primaryFocus: "Job Placement + Advanced Specialization",
    color: "bg-orange-500",
    icon: <Briefcase className="w-6 h-6" />,
    goals: [
      "Secure job placement (TOP PRIORITY)",
      "Master interview skills",
      "Optional: Explore blockchain development",
      "Optional: Learn ethical hacking",
      "Contribute to open source projects",
      "Mentor junior students",
      "Prepare for industry transition",
      "Build professional network"
    ],
    skills: [
      "Advanced interview techniques",
      "System design at scale",
      "Leadership and mentoring",
      "Blockchain development (optional)",
      "Cybersecurity fundamentals (optional)",
      "Project management",
      "Communication skills",
      "Industry best practices"
    ],
    projects: [
      "Capstone project for college",
      "DeFi application (if blockchain)",
      "Security audit tool (if cybersecurity)",
      "Open source contribution",
      "Industry collaboration project"
    ],
    competitions: [
      "Final year project competitions",
      "Industry hackathons",
      "Research paper publications",
      "Startup competitions"
    ],
    tips: [
      "Placement preparation is the #1 priority",
      "Only explore advanced topics after securing job",
      "Focus on interview skills and communication",
      "Build a strong professional network",
      "Consider higher studies or startup options",
      "Give back to the community"
    ],
    timeAllocation: {
      dsa: 25,
      development: 20,
      projects: 30,
      other: 25
    },
    milestones: [
      "Secure job offer",
      "Complete final year project",
      "Mentor 5+ junior students",
      "Contribute to major open source project",
      "Present at tech conference"
    ],
    commonMistakes: [
      "Focusing on new tech instead of placement prep",
      "Not preparing for interviews seriously",
      "Ignoring soft skills development",
      "Not building professional relationships",
      "Procrastinating on job applications"
    ],
    resources: [
      "CodeEater Blockchain",
      "TryHackMe for Cybersecurity",
      "Interview preparation platforms",
      "Industry networking events"
    ]
  }
];

const careerPaths = [
  {
    title: "Software Development Engineer",
    companies: ["Google", "Microsoft", "Amazon", "Meta"],
    skills: ["DSA", "System Design", "Full-Stack Development"],
    avgSalary: "₹15-50 LPA",
    color: "bg-blue-500"
  },
  {
    title: "Data Scientist / ML Engineer",
    companies: ["Netflix", "Uber", "Flipkart", "Zomato"],
    skills: ["Python", "ML/DL", "Statistics", "Computer Vision"],
    avgSalary: "₹12-40 LPA",
    color: "bg-purple-500"
  },
  {
    title: "DevOps Engineer",
    companies: ["AWS", "Docker", "Kubernetes", "Startups"],
    skills: ["Cloud", "Docker", "CI/CD", "Infrastructure"],
    avgSalary: "₹10-35 LPA",
    color: "bg-gray-500"
  },
  {
    title: "Blockchain Developer",
    companies: ["Polygon", "CoinDCX", "Web3 Startups"],
    skills: ["Solidity", "Web3", "DeFi", "Smart Contracts"],
    avgSalary: "₹15-60 LPA",
    color: "bg-orange-500"
  }
];

export default function CareerAdvicePage() {
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
                🎯 Career Roadmap & Advice
              </h1>
              <p className="text-gray-600 mt-1">
                Your complete guide to success in tech industry
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Formula */}
        <Card className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-800">🏆 Success Formula</CardTitle>
            <CardDescription className="text-lg text-green-700">
              Follow this proven path used by 1000+ successful students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  1
                </div>
                <h4 className="font-semibold text-gray-800">Strong DSA Foundation</h4>
                <p className="text-sm text-gray-600 mt-1">1st Year: 200-300 problems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  2
                </div>
                <h4 className="font-semibold text-gray-800">Full-Stack + CP</h4>
                <p className="text-sm text-gray-600 mt-1">2nd Year: MERN + Hackathons</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  3
                </div>
                <h4 className="font-semibold text-gray-800">Specialization</h4>
                <p className="text-sm text-gray-600 mt-1">3rd Year: ML/CV + DevOps</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  4
                </div>
                <h4 className="font-semibold text-gray-800">Placement Ready</h4>
                <p className="text-sm text-gray-600 mt-1">4th Year: Job + Advanced Skills</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Year-wise Detailed Plans */}
        <div className="space-y-12">
          {yearPlans.map((plan, index) => (
            <Card key={plan.year} className="overflow-hidden">
              <div className={`h-2 ${plan.color}`}></div>
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl ${plan.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {plan.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{plan.year}: {plan.title}</CardTitle>
                    <CardDescription className="text-lg mb-4">
                      <strong>Primary Focus:</strong> {plan.primaryFocus}
                    </CardDescription>
                    
                    {/* Time Allocation Chart */}
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-gray-700 mb-3">Time Allocation</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{plan.timeAllocation.dsa}%</div>
                          <div className="text-gray-600">DSA Practice</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{plan.timeAllocation.development}%</div>
                          <div className="text-gray-600">Development</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{plan.timeAllocation.projects}%</div>
                          <div className="text-gray-600">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{plan.timeAllocation.other}%</div>
                          <div className="text-gray-600">Other</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Goals */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-600" />
                        Key Goals
                      </h4>
                      <ul className="space-y-2">
                        {plan.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Brain className="w-4 h-4 text-purple-600" />
                        Skills to Develop
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {plan.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-green-600" />
                        Project Ideas
                      </h4>
                      <ul className="space-y-2">
                        {plan.projects.map((project, projectIndex) => (
                          <li key={projectIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <ArrowRight className="w-3 h-3 mt-1 text-gray-400 flex-shrink-0" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Competitions */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-600" />
                        Competitions & Events
                      </h4>
                      <ul className="space-y-2">
                        {plan.competitions.map((comp, compIndex) => (
                          <li key={compIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <Star className="w-3 h-3 mt-1 text-yellow-500 flex-shrink-0" />
                            {comp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Milestones */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-indigo-600" />
                        Key Milestones
                      </h4>
                      <ul className="space-y-2">
                        {plan.milestones.map((milestone, milestoneIndex) => (
                          <li key={milestoneIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0" />
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Common Mistakes */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        Avoid These Mistakes
                      </h4>
                      <ul className="space-y-2">
                        {plan.commonMistakes.map((mistake, mistakeIndex) => (
                          <li key={mistakeIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <AlertTriangle className="w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" />
                            {mistake}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tips Section */}
                <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Pro Tips for {plan.year}
                  </h4>
                  <ul className="space-y-2">
                    {plan.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm text-blue-800">
                        <ThumbsUp className="w-3 h-3 mt-1 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career Paths */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🚀 Popular Career Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{path.title}</CardTitle>
                      <CardDescription className="mt-2">
                        Average Salary: <span className="font-semibold text-green-600">{path.avgSalary}</span>
                      </CardDescription>
                    </div>
                    <div className={`w-12 h-12 rounded-lg ${path.color} flex items-center justify-center text-white`}>
                      <Briefcase className="w-6 h-6" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Top Companies</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.companies.map((company, compIndex) => (
                          <Badge key={compIndex} variant="outline" className="text-xs">
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Success Tips */}
        <Card className="mt-16 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">🎯 Final Words of Wisdom</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Consistency is Key</h4>
                <p className="text-sm text-gray-600">
                  Code every day, even if it's just 30 minutes. Small consistent efforts compound over time.
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Build Your Network</h4>
                <p className="text-sm text-gray-600">
                  Connect with seniors, join communities, attend meetups. Your network is your net worth.
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Never Stop Learning</h4>
                <p className="text-sm text-gray-600">
                  Technology evolves rapidly. Stay curious, keep learning, and adapt to new trends.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg font-medium text-gray-800 mb-4">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </p>
              <p className="text-gray-600">
                Remember: Every expert was once a beginner. Your journey starts with a single step. 
                Follow this roadmap, stay consistent, and you'll achieve your dreams! 🚀
                  ✅ <strong>View Imp Algos:</strong>{" "}
  <a
    href="https://algorithm-website-lac.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    Algorithm Website
  </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
