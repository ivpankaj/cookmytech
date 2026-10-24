import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Cloud Architecture Consulting Services | AWS & GCP Infrastructure Engineering",
  description:
    "CookMyTech provides cloud architecture consulting services, AWS and GCP infrastructure engineering, Docker containerization, Kubernetes orchestration, and automated CI/CD.",
  path: "/services/cloud-architecture",
});

export default function CloudArchitecturePage() {
  const serviceUrl = "https://www.cookmytech.com/services/cloud-architecture";
  const serviceSchema = generateServiceSchema({
    name: "Cloud Architecture Consulting Services",
    description:
      "Resilient cloud infrastructure engineering, AWS and Google Cloud Platform architecture, Docker containerization, Kubernetes orchestration, and automated DevOps.",
    url: serviceUrl,
    serviceType: "Cloud Systems & DevOps Engineering",
  });

  const faqs = [
    {
      question: "Which cloud platform is better for startups: AWS or Google Cloud Platform (GCP)?",
      answer:
        "Both provide robust capabilities. AWS offers the most expansive ecosystem of managed enterprise services (ECS, EKS, RDS, S3, SQS) and global data center coverage. GCP excels in developer ergonomics, serverless container execution (Google Cloud Run), and native AI/data tooling (BigQuery, Vertex AI). We help startups choose the right platform or architect cost-effective hybrid deployments based on workload demands and available startup cloud credits.",
    },
    {
      question: "What is Infrastructure as Code (IaC) and why do you use Terraform / OpenTofu?",
      answer:
        "Infrastructure as Code defines your cloud resources (VPCs, subnets, database clusters, load balancers, security groups) in version-controlled declarative code rather than manual console clicking. This eliminates configuration drift, enables instant reproduction of staging and production environments, and ensures complete disaster recovery capabilities.",
    },
    {
      question: "How do you optimize cloud hosting bills and prevent cloud cost overruns (FinOps)?",
      answer:
        "We implement FinOps best practices: rightsizing over-provisioned instances, setting up automated auto-scaling policies, configuring database read-replicas with connection poolers (PgBouncer), moving cold assets to tiered object storage (S3 Glacier), and setting up hard spend alerts to prevent runaway computing bills.",
    },
    {
      question: "How do you architect applications for 99.99% uptime and zero downtime deployments?",
      answer:
        "We engineer high-availability architectures featuring multi-Availability Zone (AZ) redundancy, health-check load balancers, container rolling updates (Blue-Green / Canary deployments via Docker and Kubernetes), and automated database backups with point-in-time recovery.",
    },
    {
      question: "What factors influence the cost and timeline of a cloud architecture consulting project?",
      answer:
        "Timelines and costs depend on the number of services being containerized, database migration complexity, compliance standards (SOC2, HIPAA, GDPR), and existing infrastructure debt. Standard cloud architecture setup and migration sprints typically execute in 3 to 6 weeks.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Infrastructure Audit & Workload Assessment",
      desc: "We analyze your traffic patterns, database bottlenecks, security posture, and current cloud hosting costs to formulate a right-sized architecture plan.",
    },
    {
      step: "02",
      title: "Infrastructure as Code Blueprinting",
      desc: "We write modular Terraform/OpenTofu configurations defining VPC networking, IAM least-privilege security roles, and isolated environment tiers.",
    },
    {
      step: "03",
      title: "Containerization & Orchestration Setup",
      desc: "We containerize application microservices with multi-stage Dockerfiles and deploy managed container orchestration on AWS ECS/Fargate, Google Cloud Run, or Kubernetes.",
    },
    {
      step: "04",
      title: "Automated CI/CD Pipeline Engineering",
      desc: "We configure GitHub Actions pipelines with automated linting, test execution, container image vulnerability scanning, and zero-downtime rolling deploys.",
    },
    {
      step: "05",
      title: "Telemetry, Observability & FinOps Handover",
      desc: "We set up centralized logging, Grafana/Datadog monitoring dashboards, uptime pingers, cost alerting, and provide complete documentation.",
    },
  ];

  const deliverables = [
    "Modular Terraform / OpenTofu repository defining 100% of your cloud infrastructure",
    "Production-hardened multi-stage Dockerfiles with optimized minimal base images",
    "Automated GitHub Actions CI/CD deployment pipelines with zero-downtime rollouts",
    "Multi-AZ PostgreSQL/MySQL database setup with automated backups and connection pooling",
    "SSL/TLS automated termination, Cloudflare/CloudFront CDN, and WAF DDoS protection",
    "Centralized logging, OpenTelemetry tracing, and Grafana/Prometheus health dashboards",
    "100% cloud account ownership and infrastructure documentation",
  ];

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
            { name: "Cloud Architecture", item: "/services/cloud-architecture" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Cloud Systems Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            Cloud Architecture Consulting Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is a cloud architecture consulting and infrastructure engineering studio. We design, deploy, and optimize scalable cloud systems across Amazon Web Services (AWS) and Google Cloud Platform (GCP) with Docker containerization, Kubernetes, Terraform IaC, and automated CI/CD for growing startups and enterprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult Cloud Architects →
            </Link>
            <Link
              href="/blog/aws-vs-google-cloud-for-startups"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read AWS vs Google Cloud Guide
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Cloud Dilemma
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Uncontrolled Cloud Bills, Fragile Deploys & Downtime
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              As software products grow, ad-hoc cloud setups quickly turn into liability: manually configured virtual machines that nobody knows how to recreate, unindexed databases causing connection exhaustion during traffic surges, and unexpected monthly hosting bills that drain startup runway.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Without automated CI/CD and multi-AZ redundancy, simple code deployments cause user-facing downtime and security vulnerabilities.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Engineering Standard
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Automated, Containerized Cloud Architecture
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We engineer cloud infrastructure as code using Terraform and OpenTofu. Every microservice is containerized in Docker, load balanced across redundant zones, and deployed automatically through automated GitHub Actions with zero downtime.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ 100% reproducible environments via Terraform Infrastructure as Code</li>
              <li className="flex items-center gap-2">✔ High availability (99.99%) across multi-AZ container clusters</li>
              <li className="flex items-center gap-2">✔ FinOps optimization to reduce hosting costs by up to 40%</li>
              <li className="flex items-center gap-2">✔ Automated CI/CD pipelines with image security scanning</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our Cloud Architecture Services Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">SaaS Startups & Scaleups</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Founders needing multi-tenant cloud infrastructure capable of passing SOC2 and enterprise customer security audits without hiring a full-time in-house DevOps engineer.
                </p>
              </div>
              <Link href="/services/saas-development" className="text-xs font-bold uppercase underline">
                SaaS Engineering Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">AI & Machine Learning Teams</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Engineering teams deploying vector databases, GPU inference workloads (vLLM/Triton), and high-throughput data processing pipelines.
                </p>
              </div>
              <Link href="/services/ai-agent-development" className="text-xs font-bold uppercase underline">
                AI Engineering Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Legacy Cloud Migrations</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Established businesses migrating off unmanaged monolithic VPS hosting (cPanel/EC2) to automated containerized microservices on AWS or GCP.
                </p>
              </div>
              <Link href="/services/custom-software-development" className="text-xs font-bold uppercase underline">
                Custom Software Engineering →
              </Link>
            </div>
          </div>
        </section>

        {/* PLATFORMS & TECHNOLOGIES */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            DevOps Stack
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            Supported Cloud Platforms & DevOps Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Amazon Web Services (AWS)", desc: "ECS, EKS, Lambda, RDS, S3, CloudFront & VPC" },
              { title: "Google Cloud (GCP)", desc: "Cloud Run, GKE, Cloud SQL, BigQuery & Cloud CDN" },
              { title: "Docker Containerization", desc: "Multi-stage minimal builds & microservice isolation" },
              { title: "Kubernetes (EKS/GKE)", desc: "Pod auto-scaling, ingress controllers & service mesh" },
              { title: "Terraform & OpenTofu", desc: "Declarative, version-controlled Infrastructure as Code" },
              { title: "GitHub Actions CI/CD", desc: "Automated test suites, security audits & zero-downtime deploys" },
              { title: "Redis & Connection Pooling", desc: "PgBouncer, Redis caching & async event queuing" },
              { title: "Grafana & Prometheus", desc: "Real-time metrics, tracing, alerting & APM monitoring" },
            ].map((tech) => (
              <div key={tech.title} className="p-4 border border-black bg-gray-50">
                <div className="font-display font-bold text-sm mb-1">{tech.title}</div>
                <div className="text-[11px] text-gray-600 leading-tight">{tech.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* STEP-BY-STEP PROCESS */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Execution Lifecycle
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Our Cloud Architecture Consulting Methodology
          </h2>
          <div className="space-y-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 border border-black bg-white flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="font-display text-3xl font-bold bg-black text-white px-4 py-2">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold uppercase mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DELIVERABLES & GOVERNANCE */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Project Deliverables
            </h2>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              We deliver fully documented infrastructure manifests that your team controls 100%.
            </p>
            <ul className="space-y-3 text-xs text-gray-800">
              {deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-black">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Security, FinOps & High Availability
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Our cloud designs adhere to strict enterprise reliability standards:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>FinOps Spend Protection:</strong> Instance rightsizing and auto-scaling to prevent overpaying for idle cloud compute.</li>
              <li>• <strong>Least Privilege IAM Roles:</strong> Granular permissions restricting access to production databases and cloud secrets.</li>
              <li>• <strong>Multi-AZ Redundancy:</strong> Automatic failover across separate physical data center zones with zero data loss.</li>
              <li>• <strong>100% Repository Transfer:</strong> All Terraform scripts and Docker configurations belong entirely to your company.</li>
            </ul>
          </div>
        </section>

        {/* RELATED SERVICES & GUIDES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">
            Complementary Services & Architecture Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <Link
              href="/services/api-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">API Development Services →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">REST & GraphQL microservices engineering</div>
            </Link>
            <Link
              href="/services/saas-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">SaaS Development Services →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Multi-tenant platforms & cloud deployments</div>
            </Link>
            <Link
              href="/blog/aws-vs-google-cloud-for-startups"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Guide: AWS vs Google Cloud →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Pricing, developer velocity & trade-offs</div>
            </Link>
            <Link
              href="/blog/how-to-design-a-scalable-backend"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Scalable Backend Architecture →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Microservices, caching & connection pooling</div>
            </Link>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="font-display text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-black text-white p-8 md:p-12 border border-black flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
              Ready to Architect Resilient Cloud Systems?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build With CookMyTech's Cloud Engineers
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Talk directly with senior cloud architects. Receive a comprehensive infrastructure assessment and proposal within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Cloud Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
