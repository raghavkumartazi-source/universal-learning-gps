export type RoadmapStep = {
  phase: string;
  timeline: string;
  title: string;
  outcome: string;
};

export type Resource = {
  title: string;
  platform: string;
  type: "Course" | "Book" | "Tutorial" | "Project";
  url: string;
};

export type RoadmapResult = {
  goal: string;
  estimatedDuration: string;
  roadmap: RoadmapStep[];
  missingSkills: string[];
  strengths: string[];
  curatedResources: Resource[];
  milestones: string[];
};

const careerTracks: Record<
  string,
  {
    skills: string[];
    roadmap: Omit<RoadmapStep, "timeline">[];
    resources: Resource[];
  }
> = {
  "Software Engineer": {
    skills: ["Programming Fundamentals", "Data Structures", "Algorithms", "Git", "APIs", "System Design", "Testing"],
    roadmap: [
      { phase: "Phase 1", title: "Build coding foundations", outcome: "Write structured programs with confidence" },
      { phase: "Phase 2", title: "Master data structures and APIs", outcome: "Ship small end-to-end applications" },
      { phase: "Phase 3", title: "Scale with architecture and testing", outcome: "Design production-ready systems" },
    ],
    resources: [
      { title: "Meta Front-End Developer", platform: "Coursera", type: "Course", url: "https://www.coursera.org" },
      { title: "CS50", platform: "edX", type: "Course", url: "https://www.edx.org" },
      { title: "Clean Code", platform: "Books", type: "Book", url: "https://www.goodreads.com/book/show/3735293-clean-code" },
      { title: "Build a Full-Stack App", platform: "YouTube", type: "Project", url: "https://www.youtube.com" },
    ],
  },
  "Data Scientist": {
    skills: ["Python", "Statistics", "SQL", "Machine Learning", "Data Visualization", "Experimentation", "MLOps Basics"],
    roadmap: [
      { phase: "Phase 1", title: "Learn data and statistics fundamentals", outcome: "Interpret datasets and metrics" },
      { phase: "Phase 2", title: "Train and evaluate ML models", outcome: "Build predictive pipelines" },
      { phase: "Phase 3", title: "Deploy and communicate insights", outcome: "Deliver business-impacting recommendations" },
    ],
    resources: [
      { title: "IBM Data Science", platform: "Coursera", type: "Course", url: "https://www.coursera.org" },
      { title: "Data Analysis with Python", platform: "edX", type: "Course", url: "https://www.edx.org" },
      { title: "Hands-On ML", platform: "Books", type: "Book", url: "https://www.oreilly.com" },
      { title: "Kaggle Portfolio Projects", platform: "Kaggle", type: "Project", url: "https://www.kaggle.com" },
    ],
  },
  "Electronics Engineer": {
    skills: ["Circuit Analysis", "Digital Electronics", "Microcontrollers", "Embedded C", "Signal Processing", "PCB Design"],
    roadmap: [
      { phase: "Phase 1", title: "Master electronics fundamentals", outcome: "Read and design basic circuits" },
      { phase: "Phase 2", title: "Build embedded and digital systems", outcome: "Prototype working hardware" },
      { phase: "Phase 3", title: "Optimize and deploy products", outcome: "Create robust production designs" },
    ],
    resources: [
      { title: "Embedded Systems", platform: "Coursera", type: "Course", url: "https://www.coursera.org" },
      { title: "Electronics for Beginners", platform: "Udemy", type: "Course", url: "https://www.udemy.com" },
      { title: "The Art of Electronics", platform: "Books", type: "Book", url: "https://www.cambridge.org" },
      { title: "IoT Device Build", platform: "YouTube", type: "Project", url: "https://www.youtube.com" },
    ],
  },
  Entrepreneur: {
    skills: ["Problem Validation", "Market Research", "Product Thinking", "Sales", "Finance Basics", "Leadership"],
    roadmap: [
      { phase: "Phase 1", title: "Validate a real problem", outcome: "Define a clear target audience and pain point" },
      { phase: "Phase 2", title: "Build MVP and go-to-market", outcome: "Launch and acquire first users" },
      { phase: "Phase 3", title: "Scale and fund growth", outcome: "Create repeatable growth systems" },
    ],
    resources: [
      { title: "Startup Entrepreneurship", platform: "Coursera", type: "Course", url: "https://www.coursera.org" },
      { title: "Y Combinator Startup School", platform: "Tutorial", type: "Tutorial", url: "https://www.startupschool.org" },
      { title: "The Lean Startup", platform: "Books", type: "Book", url: "https://www.goodreads.com/book/show/10127019-the-lean-startup" },
      { title: "Landing Page + Interview Sprint", platform: "Project", type: "Project", url: "https://www.notion.so" },
    ],
  },
};

export const careerOptions = Object.keys(careerTracks);

export const generateRoadmap = (goal: string, skillInput: string, weeklyHours: number): RoadmapResult => {
  const track = careerTracks[goal] ?? careerTracks["Software Engineer"];
  const currentSkills = skillInput
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  const missingSkills = track.skills.filter(
    (skill) => !currentSkills.some((current) => current.toLowerCase() === skill.toLowerCase()),
  );

  const strengths = currentSkills.length ? currentSkills.slice(0, 5) : ["Learning mindset", "Consistency"];
  const baseWeeks = Math.max(12, 48 - Math.min(30, weeklyHours * 2));
  const phaseWeeks = Math.ceil(baseWeeks / 3);

  const roadmap = track.roadmap.map((step, index) => ({
    ...step,
    timeline: `Weeks ${index * phaseWeeks + 1}-${(index + 1) * phaseWeeks}`,
  }));

  return {
    goal,
    estimatedDuration: `${baseWeeks} weeks`,
    roadmap,
    missingSkills,
    strengths,
    curatedResources: track.resources,
    milestones: [
      "Complete 1 capstone project",
      "Publish portfolio or case study",
      "Attempt 3 mock interviews",
      "Apply to targeted opportunities",
    ],
  };
};

export const generateMentorReply = (question: string, goal: string) => {
  const normalized = question.toLowerCase();

  if (normalized.includes("interview")) {
    return `For ${goal}, focus on 30-minute mock interviews twice per week, maintain a story bank using the STAR method, and review one real interview question set daily.`;
  }

  if (normalized.includes("time") || normalized.includes("schedule")) {
    return `Use a weekly plan: 40% concept learning, 40% project work, 20% revision. Reserve one day for reflection and roadmap adjustments.`;
  }

  if (normalized.includes("project")) {
    return `Build one flagship project aligned to ${goal}, then add two smaller practical projects to demonstrate depth and consistency.`;
  }

  return `Great question. For ${goal}, prioritize high-impact skills first, ship projects early, and review progress every two weeks to stay on track.`;
};
