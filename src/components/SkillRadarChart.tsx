import React, { useState } from 'react';

export interface RadarDimension {
  name: string;
  key: string;
  baseline: number;
  target: number;
  academicGap: string;
  commercialRequirement: string;
  practicalFix: string;
}

export interface RoleBenchmark {
  roleId: string;
  roleName: string;
  badge: string;
  description: string;
  dimensions: RadarDimension[];
}

const ROLE_BENCHMARKS: RoleBenchmark[] = [
  {
    roleId: 'software',
    roleName: 'Software & Web Graduate',
    badge: 'Popular Abroad',
    description: 'Transform classroom coding exercises into 2 solid, realistic web applications that local hiring managers can test live.',
    dimensions: [
      {
        name: 'Real-World Projects',
        key: 'projects',
        baseline: 38,
        target: 88,
        academicGap: 'University projects are usually simple calculators, todo apps, or isolated homework that don’t look like real company products.',
        commercialRequirement: 'Employers want to see a full, working application with user accounts, database storage, and realistic business use cases.',
        practicalFix: 'Build 1 or 2 complete, well-designed projects solving a real-life need (e.g. an appointment booking or inventory tool) with a live demo link.',
      },
      {
        name: 'Team & Git Workflow',
        key: 'workflow',
        baseline: 28,
        target: 86,
        academicGap: 'Classroom submissions often mean uploading a zip file or making a single sporadic commit named "final_version".',
        commercialRequirement: 'Local companies work in teams; they expect pull requests, clear commit descriptions, and well-organized folders.',
        practicalFix: 'Clean up your GitHub profile with structured branches, clear commit logs, and step-by-step README instructions.',
      },
      {
        name: 'Code Organization',
        key: 'clean_code',
        baseline: 35,
        target: 90,
        academicGap: 'Code written for semester marks often lacks error messages, crash protection, and clean file separation.',
        commercialRequirement: 'Code that other engineers can easily read, maintain, and test without unexpected crashes.',
        practicalFix: 'Refactor your project into tidy components and files with proper error handling and clear data flow.',
      },
      {
        name: 'Interview Explanations',
        key: 'interview',
        baseline: 30,
        target: 92,
        academicGap: 'Memorizing textbook definitions rather than explaining how you made architectural decisions or solved bugs.',
        commercialRequirement: 'Being able to talk through your code simply, explain why you chose a framework, and discuss how you handled challenges.',
        practicalFix: 'Practice explaining your project in simple English using the "Problem → Action → Result" method.',
      },
      {
        name: 'Local Market Fit',
        key: 'market_fit',
        baseline: 32,
        target: 85,
        academicGap: 'Applying with a resume format from back home that doesn’t follow the host country’s standard conventions.',
        commercialRequirement: 'A clean 1-page local resume emphasizing measurable outcomes, live links, and matching job keywords.',
        practicalFix: 'Format your resume to local country standards, highlighting your international degree and demonstrable skills clearly.',
      },
    ],
  },
  {
    roleId: 'data',
    roleName: 'Data & Business Analyst',
    badge: 'High Demand',
    description: 'Turn theoretical statistics and textbook datasets into actionable business dashboards that prove commercial value.',
    dimensions: [
      {
        name: 'Real Business Datasets',
        key: 'projects',
        baseline: 36,
        target: 88,
        academicGap: 'Class projects use pre-cleaned datasets like Titanic or Iris where data has already been tidied up for you.',
        commercialRequirement: 'Real company data is messy, incomplete, and requires smart cleaning and business logic.',
        practicalFix: 'Analyze raw, messy public data (like real retail sales or airline delays) and demonstrate how you cleaned and organized it.',
      },
      {
        name: 'Practical SQL & Reports',
        key: 'sql_tools',
        baseline: 40,
        target: 90,
        academicGap: 'Knowing basic SQL syntax in an exam, but struggling to write queries for real questions like churn rate or revenue growth.',
        commercialRequirement: 'Fast, accurate queries calculating monthly trends, aggregations, and business metrics for decision-makers.',
        practicalFix: 'Build a collection of 5 real-world SQL case studies answering direct questions a business manager would ask.',
      },
      {
        name: 'Dashboard Storytelling',
        key: 'dashboards',
        baseline: 30,
        target: 86,
        academicGap: 'Creating cluttered charts that look like homework graphs rather than executive-ready visual summaries.',
        commercialRequirement: 'Clean Power BI, Tableau, or Excel dashboards where any manager can instantly spot trends in 10 seconds.',
        practicalFix: 'Design an interactive, professional dashboard with key metrics on top and clear insights written in plain English.',
      },
      {
        name: 'Interview Communication',
        key: 'interview',
        baseline: 28,
        target: 90,
        academicGap: 'Talking only about mathematical formulas instead of explaining the business impact of your findings.',
        commercialRequirement: 'Explaining "What does this mean for the company’s bottom line and what action should we take?"',
        practicalFix: 'Practice storytelling: summarize every analysis with "Here is what the data showed, and here is my recommendation for the team."',
      },
      {
        name: 'Local Market Fit',
        key: 'market_fit',
        baseline: 32,
        target: 84,
        academicGap: 'Unclear which tools (Excel, SQL, Power BI, Python) are most requested in junior jobs in your host country.',
        commercialRequirement: 'Aligning your resume with the specific stack and phrasing local employers search for.',
        practicalFix: 'Audit 20 local job postings in your city and customize your project portfolio to match their exact expectations.',
      },
    ],
  },
  {
    roleId: 'business',
    roleName: 'Business & Management Graduate',
    badge: 'Versatile Track',
    description: 'Bridge general business or management coursework into tangible project coordination and stakeholder communication skills.',
    dimensions: [
      {
        name: 'Real Project Coordination',
        key: 'projects',
        baseline: 35,
        target: 85,
        academicGap: 'Group assignments where grades were based on a written report rather than actual timeline delivery.',
        commercialRequirement: 'Proof that you can manage a task from start to finish, handle changes, and meet deadlines.',
        practicalFix: 'Document a full case study showing how you planned, organized, and delivered an initiative with clear timelines.',
      },
      {
        name: 'Workplace Tools',
        key: 'tools',
        baseline: 38,
        target: 88,
        academicGap: 'Using basic Word and PowerPoint without familiarity with modern team tools like Jira, Trello, Slack, or advanced spreadsheets.',
        commercialRequirement: 'Comfort using standard digital project boards, collaboration tools, and organized documentation.',
        practicalFix: 'Showcase your familiarity with modern agile boards, project trackers, and structured team documentation.',
      },
      {
        name: 'Business Communication',
        key: 'communication',
        baseline: 32,
        target: 92,
        academicGap: 'Academic writing filled with passive voice and theory rather than crisp, action-oriented business emails and summaries.',
        commercialRequirement: 'Clear, concise spoken and written updates that save colleagues time and prevent misunderstandings.',
        practicalFix: 'Refine your communication style to be direct, polite, and focused on clear next steps and ownership.',
      },
      {
        name: 'Behavioral Interviews',
        key: 'interview',
        baseline: 28,
        target: 94,
        academicGap: 'Freezing up when asked questions like "Tell me about a time you resolved a conflict with a teammate."',
        commercialRequirement: 'Structured, confident storytelling using the STAR method (Situation, Task, Action, Result) with international warmth.',
        practicalFix: 'Prepare 5 signature stories from your studies abroad showing leadership, adaptability, teamwork, and resilience.',
      },
      {
        name: 'Local Workplace Culture',
        key: 'market_fit',
        baseline: 30,
        target: 86,
        academicGap: 'Not knowing the unspoken social and professional norms of workplaces in your host country.',
        commercialRequirement: 'Understanding local email etiquette, meeting participation styles, and networking culture.',
        practicalFix: 'Receive targeted mentorship on local office culture, professional networking, and how to carry yourself in interviews.',
      },
    ],
  },
];

interface SkillRadarChartProps {
  initialRoleId?: string;
  compact?: boolean;
  onExploreMore?: () => void;
}

export const SkillRadarChart: React.FC<SkillRadarChartProps> = ({
  initialRoleId = 'software',
  compact = false,
  onExploreMore,
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(initialRoleId);
  const [activeDimensionIndex, setActiveDimensionIndex] = useState<number>(0);
  const [showTarget, setShowTarget] = useState<boolean>(true);
  const [showBaseline, setShowBaseline] = useState<boolean>(true);

  const currentRole =
    ROLE_BENCHMARKS.find((r) => r.roleId === selectedRoleId) || ROLE_BENCHMARKS[0];
  const dimensions = currentRole.dimensions;
  const activeDim = dimensions[activeDimensionIndex] || dimensions[0];

  const size = compact ? 280 : 360;
  const center = size / 2;
  const maxRadius = compact ? 95 : 125;
  const numAxes = dimensions.length;

  const getCoordinates = (index: number, value: number) => {
    const angle = -Math.PI / 2 + (index * (2 * Math.PI)) / numAxes;
    const r = (value / 100) * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y, angle };
  };

  const baselinePoints = dimensions
    .map((dim, i) => {
      const { x, y } = getCoordinates(i, dim.baseline);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const targetPoints = dimensions
    .map((dim, i) => {
      const { x, y } = getCoordinates(i, dim.target);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const avgBaseline = Math.round(
    dimensions.reduce((acc, d) => acc + d.baseline, 0) / dimensions.length
  );
  const avgTarget = Math.round(
    dimensions.reduce((acc, d) => acc + d.target, 0) / dimensions.length
  );
  const avgGap = avgTarget - avgBaseline;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80 mb-5 max-w-full">
        {ROLE_BENCHMARKS.map((role) => {
          const isActive = role.roleId === selectedRoleId;
          return (
            <button
              key={role.roleId}
              type="button"
              onClick={() => {
                setSelectedRoleId(role.roleId);
                setActiveDimensionIndex(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-headline font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-white text-[#7C3AED] shadow-xs border border-purple-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <span>{role.roleName}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-radial from-purple-200/30 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

          <div className="relative">
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              className="overflow-visible select-none"
            >
              <defs>
                <linearGradient id="baselineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#630ED4" stopOpacity="0.15" />
                </linearGradient>

                <linearGradient id="targetGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#BEF264" stopOpacity="0.30" />
                  <stop offset="100%" stopColor="#0047FF" stopOpacity="0.10" />
                </linearGradient>

                <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {[20, 40, 60, 80, 100].map((level) => {
                const ringPoints = dimensions
                  .map((_, i) => {
                    const { x, y } = getCoordinates(i, level);
                    return `${x.toFixed(1)},${y.toFixed(1)}`;
                  })
                  .join(' ');

                return (
                  <polygon
                    key={`level-${level}`}
                    points={ringPoints}
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="1"
                    strokeDasharray={level === 100 ? undefined : '2 3'}
                  />
                );
              })}

              {dimensions.map((_, i) => {
                const { x, y } = getCoordinates(i, 100);
                return (
                  <line
                    key={`axis-${i}`}
                    x1={center}
                    y1={center}
                    x2={x}
                    y2={y}
                    stroke="#CBD5E1"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                );
              })}

              {showTarget && (
                <polygon
                  points={targetPoints}
                  fill="url(#targetGrad)"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                  className="transition-all duration-700 ease-out filter drop-shadow-xs"
                />
              )}

              {showBaseline && (
                <polygon
                  points={baselinePoints}
                  fill="url(#baselineGrad)"
                  stroke="#7C3AED"
                  strokeWidth="2.5"
                  className="transition-all duration-700 ease-out filter drop-shadow-sm"
                />
              )}

              {dimensions.map((dim, i) => {
                const targetCoord = getCoordinates(i, dim.target);
                const baseCoord = getCoordinates(i, dim.baseline);
                const labelCoord = getCoordinates(i, 118);
                const isSelected = i === activeDimensionIndex;

                return (
                  <g
                    key={`node-${dim.key}`}
                    onClick={() => setActiveDimensionIndex(i)}
                    className="cursor-pointer group/axis"
                  >
                    {showTarget && (
                      <circle
                        cx={targetCoord.x}
                        cy={targetCoord.y}
                        r={isSelected ? 5 : 4}
                        fill="#10B981"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        className="transition-all duration-300"
                      />
                    )}

                    {showBaseline && (
                      <circle
                        cx={baseCoord.x}
                        cy={baseCoord.y}
                        r={isSelected ? 6 : 4.5}
                        fill="#7C3AED"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="transition-all duration-300 group-hover/axis:scale-125"
                      />
                    )}

                    <text
                      x={labelCoord.x}
                      y={labelCoord.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`text-[11px] font-headline font-bold transition-all duration-200 select-none ${
                        isSelected
                          ? 'fill-[#7C3AED] font-extrabold scale-105'
                          : 'fill-slate-600 hover:fill-slate-900'
                      }`}
                    >
                      {dim.name}
                    </text>
                  </g>
                );
              })}

              <circle cx={center} cy={center} r="3" fill="#0F172A" />
            </svg>
          </div>

          <div className="flex items-center gap-4 mt-3 text-xs font-['Outfit',sans-serif]">
            <button
              type="button"
              onClick={() => setShowBaseline(!showBaseline)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-opacity cursor-pointer ${
                showBaseline ? 'opacity-100 bg-purple-50 text-[#7C3AED]' : 'opacity-40 text-slate-400'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
              <span className="font-semibold">Where Classroom Starts</span>
            </button>

            <button
              type="button"
              onClick={() => setShowTarget(!showTarget)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-opacity cursor-pointer ${
                showTarget ? 'opacity-100 bg-emerald-50 text-emerald-700' : 'opacity-40 text-slate-400'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] border border-white" />
              <span className="font-semibold">What Employers Look For</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-card-subtle flex flex-col gap-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider font-headline font-bold px-2 py-0.5 rounded-md bg-purple-100 text-[#7C3AED]">
                Skill Area {activeDimensionIndex + 1} of 5
              </span>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 font-headline">
                +{activeDim.target - activeDim.baseline}% Growth to Land Job
              </span>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-headline font-bold text-[#0F172A] leading-snug">
                {activeDim.name}
              </h4>
              <p className="text-xs text-slate-500 font-['Outfit',sans-serif] mt-0.5">
                Click any point on the chart to see what local companies expect.
              </p>
            </div>

            <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-500">Typical University Level:</span>
                <span className="text-[#7C3AED] font-bold font-headline">{activeDim.baseline} / 100</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden relative">
                <div
                  className="bg-[#7C3AED] h-full rounded-full transition-all duration-500"
                  style={{ width: `${activeDim.baseline}%` }}
                />
              </div>

              <div className="flex justify-between text-xs font-semibold pt-1">
                <span className="text-slate-500">Local Employer Expectation:</span>
                <span className="text-emerald-700 font-bold font-headline">{activeDim.target} / 100</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden relative">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${activeDim.target}%` }}
                />
              </div>
            </div>

            <div className="space-y-2 text-xs font-['Outfit',sans-serif]">
              <div className="p-2.5 rounded-lg bg-rose-50/70 border border-rose-100 text-rose-950">
                <span className="font-bold text-rose-700 block mb-0.5">Where University Coursework Falls Short:</span>
                {activeDim.academicGap}
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-100 text-emerald-950">
                <span className="font-bold text-emerald-700 block mb-0.5">How We Help You Bridge It:</span>
                {activeDim.practicalFix}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Overall Track Gap: <strong className="text-slate-800 font-headline">+{avgGap}%</strong></span>
              {onExploreMore && (
                <button
                  type="button"
                  onClick={onExploreMore}
                  className="text-[#7C3AED] font-bold hover:underline cursor-pointer"
                >
                  Get Your Free Plan →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillRadarChart;
