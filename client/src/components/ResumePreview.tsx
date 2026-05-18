const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold text-indigo-600 mb-3 uppercase tracking-wide">{children}</h2>
);

const JobEntry = ({
  title,
  location,
  company,
  dates,
  bullets,
}: {
  title: string;
  location: string;
  company: string;
  dates: string;
  bullets: string[];
}) => (
  <div className="mb-6">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
      <h3 className="font-bold text-gray-900">{title}</h3>
      <span className="text-sm text-gray-600">{location}</span>
    </div>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
      <p className="text-sm font-medium text-indigo-700">{company}</p>
      <p className="text-sm text-gray-600 italic">{dates}</p>
    </div>
    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1.5">
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  </div>
);

const SkillLine = ({ label, items }: { label: string; items: string }) => (
  <p className="text-sm text-gray-700">
    <span className="font-semibold">{label}:</span> {items}
  </p>
);

export const ResumePreview = () => (
  <div className="max-w-3xl mx-auto">
    <div className="text-center mb-8 pb-6 border-b-2 border-indigo-600">
      <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">MOHMED VAID</h1>
      <p className="text-gray-600">
        Skokie, IL 60076 &nbsp;|&nbsp; mohmedvaid@gmail.com &nbsp;|&nbsp; (307) 213-9838
      </p>
      <p className="text-sm text-indigo-600 mt-1">
        linkedin.com/in/mohmedvaid &nbsp;|&nbsp; github.com/mohmedvaid &nbsp;|&nbsp; mohmedvaid.github.io
      </p>
    </div>

    <section className="mb-6">
      <SectionTitle>Profile Summary</SectionTitle>
      <p className="text-gray-700 leading-relaxed text-sm">
        AI and Full Stack Engineer with 5+ years across Fortune 500 and freelance roles, building agentic
        systems, LLM-powered automation, and multi-agent workflows end to end. Designs RAG pipelines,
        tool-using agents, and AI-assisted developer tooling on Azure, backed by strong software, CI/CD, and
        observability fundamentals. Fluent in TypeScript, JavaScript, Python, OpenAI and Claude models, and
        modern agent frameworks (LangChain, LangGraph, MCP).
      </p>
    </section>

    <section className="mb-6">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="space-y-2">
        <SkillLine
          label="AI & Agentic Systems"
          items="LLM application development (OpenAI GPT-4/4o/5.x, Anthropic Claude), agent frameworks (LangChain, LangGraph, CrewAI, AutoGen, OpenAI Agents SDK), Model Context Protocol (MCP), tool use & API orchestration, multi-agent workflows, RAG, embeddings & vector search, prompt engineering, agent evals & observability"
        />
        <SkillLine
          label="AI Tooling & Multimodal"
          items="Cursor, Claude Code, GitHub Copilot, Microsoft 365 Copilot, n8n automation, Hugging Face Transformers, Stable Diffusion, Whisper"
        />
        <SkillLine
          label="Programming Languages"
          items="TypeScript, JavaScript (ES6+), Python, Bash, SQL, HTML5, CSS3"
        />
        <SkillLine
          label="Web & App Development"
          items="Node.js, Express, React, Redux, Next.js, React Native, RESTful APIs, GraphQL"
        />
        <SkillLine
          label="Cloud & DevOps"
          items="Microsoft Azure, Azure DevOps, CI/CD Pipelines, Docker, Kubernetes, GitHub Actions, Jenkins"
        />
        <SkillLine
          label="Data & Storage"
          items="MySQL, MongoDB, Redis, SQL, Azure Synapse, Microsoft Fabric, vector databases"
        />
        <SkillLine
          label="Observability & Quality"
          items="Dynatrace, SonarQube, JMeter, Jest, Mocha, Postman, code reviews"
        />
        <SkillLine
          label="Security & Best Practices"
          items="OWASP Top 10, secure coding (authN/authZ, input validation, injection prevention), prompt-injection awareness, DevSecOps integration, code audits"
        />
        <SkillLine
          label="Collaboration & Methodologies"
          items="Git, Jira, Smartsheet, Agile/Scrum, CI/CD, microservices architecture"
        />
      </div>
    </section>

    <section className="mb-6">
      <SectionTitle>Experience</SectionTitle>
      <JobEntry
        title="Software Engineer"
        location="Chicago, IL"
        company="Walgreens"
        dates="06/2022 – Present"
        bullets={[
          "Designed and shipped LLM-powered chatbots and internal copilots (OpenAI GPT-4, Microsoft Copilot) with retrieval-augmented generation over enterprise knowledge, automating support, content, and voice workflows.",
          "Built agentic backend automations and multi-step AI workflows using tool use and API orchestration, reducing manual operations and scaling developer productivity across teams.",
          "Developed AI-assisted developer tooling and Copilot-driven scripts (report generators, custom JMeter UI) that cut repetitive engineering effort and accelerated delivery.",
          "Architected and shipped a full-stack SSL/TLS certificate lifecycle automation platform on Azure with automated CI/CD in Azure DevOps, cutting release cycles by ~35% and automating ~90% of manual renewal effort.",
          "Implemented SonarQube Enterprise with automated onboarding via Azure Pipelines and executive code-quality dashboards, improving code quality metrics by ~40% across multiple teams.",
          "Built Python data and telemetry pipelines from Azure and Dynatrace into Azure Synapse, Microsoft Fabric, and Power BI, enabling org-wide analytics and monitoring.",
          "Authored detailed After Action Reports for high-severity production incidents, partnering with application, operations, and security teams to identify root cause and implement preventative measures.",
          "Resolved critical performance bottlenecks and Redis caching issues, stabilizing high-traffic applications and reducing downtime, while collaborating with product, UX, and QA in Agile teams.",
        ]}
      />
      <JobEntry
        title="Automation Engineer"
        location="Des Plaines, IL"
        company="Americaneagle.com"
        dates="09/2019 – 06/2022"
        bullets={[
          "Built and maintained Cypress and Selenium automation frameworks in JavaScript/TypeScript, integrated into Azure DevOps CI/CD pipelines to reduce manual QA and enable continuous regression and cross-browser testing.",
          "Designed and executed automated UI, API, and functional test suites from business requirements, increasing coverage and lowering regression defects.",
          "Performed multi-browser (Chrome, Firefox, Edge, Safari) and RESTful API validation plus SQL-based backend data checks, ensuring end-to-end accuracy.",
          "Wrote unit tests with Mocha and Jest to catch issues earlier in the delivery lifecycle and improve code quality.",
          "Collaborated with developers and product owners in Agile/Scrum teams, using Jira for defect tracking and release prioritization.",
        ]}
      />
      <JobEntry
        title="Full Stack Developer"
        location="Remote"
        company="Upwork (Freelance)"
        dates="07/2020 – 06/2022"
        bullets={[
          "Delivered end-to-end web apps for global clients: responsive UIs (HTML/CSS/JS/jQuery) and scalable Node.js/Express backends with RESTful APIs and reusable integration modules.",
          "Integrated OpenAI GPT models and other AI APIs (text, image, voice) into client products, enabling smart chat interfaces, content generation, and interactive experiences.",
          "Prototyped AI features with Stable Diffusion (image generation) and Whisper (speech-to-text) to validate real-world use cases before full implementation.",
          "Designed MySQL and MongoDB schemas with optimized queries, improving reliability and cutting response times by up to ~40%.",
          "Implemented security best practices (authN/authZ, input validation, SQL injection prevention, OWASP Top 10) and reduced page load times from 7+ seconds to under 2 seconds via async JS, caching, and query optimization.",
        ]}
      />
    </section>

    <section className="mb-6">
      <SectionTitle>Technical Projects</SectionTitle>
      <div className="mb-4">
        <h3 className="font-bold text-gray-900">
          Agentic Workflow Builder{" "}
          <a
            href="https://github.com/mohmedvaid/workflow-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-normal text-indigo-600 hover:text-indigo-800"
          >
            github.com/mohmedvaid/workflow-builder
          </a>
        </h3>
        <p className="text-sm text-gray-700 mt-1">
          Builder for autonomous multi-step task execution and AI-powered pipeline orchestration across tools
          and services.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-gray-900">
          Algorithm Visualizer{" "}
          <a
            href="https://github.com/mohmedvaid/algo-visualizer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-normal text-indigo-600 hover:text-indigo-800"
          >
            github.com/mohmedvaid/algo-visualizer
          </a>
        </h3>
        <p className="text-sm text-gray-700 mt-1">
          Interactive visualizer for classic algorithms and data structures to aid learning and interview prep.
        </p>
      </div>
    </section>

    <section>
      <SectionTitle>Education</SectionTitle>
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
          <p className="text-gray-700 font-semibold">Certificate in Full Stack Web Development</p>
          <p className="text-sm text-gray-600 italic">01/2021 – 07/2022</p>
        </div>
        <p className="text-sm text-gray-600">Northwestern University, Evanston, IL</p>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
          <p className="text-gray-700 font-semibold">Bachelor of Computer Science</p>
          <p className="text-sm text-gray-600 italic">06/2017 – 12/2021</p>
        </div>
        <p className="text-sm text-gray-600">Northeastern Illinois University, Chicago, IL</p>
      </div>
    </section>
  </div>
);
