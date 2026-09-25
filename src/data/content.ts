export interface GapCard {
  id: string;
  title: string;
  description: string;
  insight: string;
  icon: string;
  color: 'purple' | 'blue';
}

export const CRITICAL_GAPS: GapCard[] = [
  {
    id: 'gap-commercial-proof',
    title: 'The "Experience Needed" Trap',
    description: 'You see job posts asking for 1–2 years of local workplace experience just for entry-level jobs. But how can you get experience if nobody gives you the first chance?',
    insight: 'Employers want proof you can do real work, not just study. When you show 2 or 3 completed, real-world projects that solve real business problems, hiring managers take notice.',
    icon: 'lock_open',
    color: 'purple'
  },
  {
    id: 'gap-experience-loop',
    title: 'Local Work Habits & Communication',
    description: 'Every country has its own unspoken workplace culture—how team members chat, how meetings run, and how people explain their ideas clearly to colleagues.',
    insight: 'You do not need to figure this out alone. Practicing everyday professional communication and collaboration gives you genuine confidence before any interview.',
    icon: 'forum',
    color: 'blue'
  },
  {
    id: 'gap-ats-filtering',
    title: 'Sending 100+ Resumes with Zero Replies',
    description: 'Applying online with a standard university CV feels like shouting into an empty void. Automated computer screeners discard generic applications in seconds.',
    insight: 'Instead of sending 100 identical resumes, focus on 10 tailored applications that show exactly what that specific company needs to see.',
    icon: 'mark_email_unread',
    color: 'purple'
  },
  {
    id: 'gap-interview-readiness',
    title: 'Answering Interview Questions with Confidence',
    description: 'University exams ask you for memorized definitions. Job interviews ask: "Tell me about a time you handled a real project setback or worked through team feedback."',
    insight: 'Learn simple storytelling frameworks to explain your university projects clearly, comfortably, and persuasively to any interviewer.',
    icon: 'psychology',
    color: 'blue'
  }
];

export interface ProgressionStep {
  number: string;
  title: string;
  subtitle: string;
  explanation: string;
  example: string;
  isAccent?: boolean;
}

export const PROGRESSION_STEPS: ProgressionStep[] = [
  {
    number: '01',
    title: 'Your Degree',
    subtitle: 'What You Learned in Class',
    explanation: 'The books, exams, assignments, and theoretical foundations you worked hard to complete at university.',
    example: 'Lectures, university coursework, academic papers, and final grades.',
    isAccent: false
  },
  {
    number: '02',
    title: 'Hands-on Practice',
    subtitle: 'Building Real Things',
    explanation: 'Taking concepts from textbooks and turning them into working tools, sample projects, or mini-applications.',
    example: 'Creating a working prototype or database that solves an everyday problem.',
    isAccent: false
  },
  {
    number: '03',
    title: 'Work-Ready Evidence',
    subtitle: 'Proof Employers Can See',
    explanation: 'Real, polished examples of your work hosted online that you can point to on your resume and talk through proudly.',
    example: 'A live web link or portfolio project you built that a boss or recruiter can test on their phone.',
    isAccent: true
  },
  {
    number: '04',
    title: 'Career Confidence',
    subtitle: 'Interview & Job Success',
    explanation: 'Walking into interviews knowing your worth, speaking clearly with employers, and landing a role that values your potential.',
    example: 'Answering interview questions with real examples, clear explanations, and zero hesitation.',
    isAccent: false
  }
];

export interface CycleStep {
  step: string;
  label: string;
  detail: string;
  color: 'purple' | 'blue' | 'rose' | 'slate';
}

export const CYCLE_STEPS: CycleStep[] = [
  {
    step: '01',
    label: 'Sending out dozens of identical resumes',
    detail: 'Using the same standard student CV to apply for 50 or 100 jobs on LinkedIn or job boards each week.',
    color: 'purple'
  },
  {
    step: '02',
    label: 'Waiting for replies that never arrive',
    detail: 'Checking your inbox constantly, only to get automated rejection emails or total silence.',
    color: 'blue'
  },
  {
    step: '03',
    label: 'Taking random short courses online',
    detail: 'Collecting video course certificates hoping one extra badge will finally make employers notice you.',
    color: 'purple'
  },
  {
    step: '04',
    label: 'Worrying about your visa and future',
    detail: 'Feeling stressed as months tick away, second-guessing your abilities and wondering why your degree is not enough.',
    color: 'rose'
  },
  {
    step: '05',
    label: 'Repeating the same frustrating cycle',
    detail: 'Pushing harder with the exact same resume strategy, hoping for a different result.',
    color: 'rose'
  }
];

export const TOPIC_TAGS: string[] = [
  'Job Ready Skills',
  'Skills for Recent Graduates',
  'Employability Skills for Graduates',
  'Career Readiness Assessment',
  'Skill Gap Assessment',
  'Practical Skills for Graduates',
  'How to Become Job Ready',
  'Building Real Projects',
  'Resume That Gets Read',
  'Interview Practice'
];

export interface Deliverable {
  title: string;
  description: string;
  icon: string;
  color: 'purple' | 'blue';
  metrics: string[];
  deliverablePreview: string;
}

export const DELIVERABLES: Deliverable[] = [
  {
    title: 'Career Readiness Assessment & Diagnostic',
    description: 'An honest, comprehensive career readiness assessment evaluating your skills for recent graduates against local hiring expectations.',
    icon: 'insights',
    color: 'purple',
    metrics: [
      'Comprehensive Skill Gap Assessment',
      'Classroom vs. Industry Benchmark',
      'Career Readiness Score & Breakdown'
    ],
    deliverablePreview: 'A targeted diagnostic review highlighting your top academic strengths and identifying the missing job ready skills required to start landing interview calls.'
  },
  {
    title: 'Skill Gap Assessment & Practical Roadmap',
    description: 'A prioritized action plan showing how to become job ready with the essential employability skills for graduates that recruiters look for.',
    icon: 'timeline',
    color: 'blue',
    metrics: [
      'Practical Skills for Graduates',
      'Structured Weekly Milestones',
      'Aligned to Your Visa Clock'
    ],
    deliverablePreview: 'A step-by-step roadmap demonstrating how to become job ready by building relevant portfolio work and mastering the tools local companies actually use.'
  },
  {
    title: 'Job Ready Skills Portfolio Showcase',
    description: 'Clear architecture for 2 or 3 commercial-style proof projects that give employers verifiable proof of your practical skills for graduates.',
    icon: 'folder_special',
    color: 'purple',
    metrics: [
      'Verified Job Ready Skills',
      'Employability Skills for Graduates',
      'Confident Interview Talking Points'
    ],
    deliverablePreview: 'Hands-on blueprint for a working portfolio that lets managers test your projects live and proves you have the job ready skills to deliver value on day one.'
  }
];
