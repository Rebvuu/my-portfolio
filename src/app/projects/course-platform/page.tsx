"use client";

import { motion } from "framer-motion";
import {
  BookCheck,
  Database,
  Link,
  LockKeyhole,
  MonitorCog,
  Shield,
} from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../../components/ui/separator";

const architecturePoints = [
  { text: "Stripe Checkout + webhook verification", icon: LockKeyhole },
  { text: "Server-side enrolment creation", icon: BookCheck },
  { text: "Role-based route protection", icon: Shield },
  { text: "Prisma ORM with relational data modeling", icon: Database },
  { text: "CMS-driven structured lesson rendering", icon: MonitorCog },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function CoursePlatformCaseStudy() {
  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-24 space-y-24">
        {/* Header */}
        <section className="md:grid md:grid-cols-2 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight pb-2">
              Course Platform with Secure Payments & Headless CMS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A production-ready wellness course platform with secure Stripe
              payments, automated enrolment, protected content access, and
              CMS-driven lessons.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Stripe</Badge>
              <Badge variant="secondary">Prisma</Badge>
              <Badge variant="secondary">Supabase</Badge>
              <Badge variant="secondary">Sanity CMS</Badge>
            </div>
          </div>
          <div className="relative mt-4">
            <img
              src="/img/lesson-interface.png"
              alt="Course platform dashboard screenshot"
              className="rounded-md object-cover"
            />
            <img
              src="/img/continue-mobile.png"
              alt="Course platform mobile screenshot"
              className="rounded-md object-cover border mt-4 absolute left-9/12 bottom-1.5 inset-0 border-gray-800 w-28"
            />
          </div>
        </section>

        <Separator />

        {/* Problem */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">The Problem</h2>

          <p className="text-muted-foreground leading-relaxed">
            The platform needed to sell digital courses securely, automatically
            enroll users upon payment, and protect course content with
            authentication, while keeping the user interface simple and
            clutter-free.
          </p>

          <ul className="space-y-2 text-muted-foreground list-disc pl-5">
            <li>Secure payment validation</li>
            <li>Automated enrolment logic</li>
            <li>Protected course routes</li>
            <li>CMS-driven lesson content</li>
            <li>Clean, intuitive dashboard</li>
          </ul>
        </section>

        <Separator />

        {/* Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">System Architecture</h2>

          <p className="text-muted-foreground leading-relaxed">
            The system was designed backend-first to ensure payment integrity
            and data consistency. Webhooks validate payments before enrolment is
            created, and route protection ensures only authorised users access
            content.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {architecturePoints.map(({ text, icon: Icon }) => (
              <div
                key={text}
                className="flex justify-center items-center gap-2 p-4 rounded bg-primary text-primary-foreground point"
              >
                {text} <Icon className="size-5 shrink-0 icon" />
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Data Flow */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Payment & Enrolment Flow</h2>

          <div className="space-y-3 text-muted-foreground">
            <p>1. User completes Stripe Checkout</p>
            <p>2. Stripe triggers verified webhook</p>
            <p>3. Server validates signature</p>
            <p>4. Enrolment record is created</p>
            <p>5. User gains access to protected course routes</p>
          </div>

          <img
            src="/img/flowchart.png"
            alt="Payment and enrolment flow diagram"
            className="rounded-md object-cover border md:w-2/3 relative"
          />
        </section>

        <Separator />

        {/* Technical Challenges */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold">Key Technical Challenges</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg">Stripe Webhook Validation</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Implemented secure webhook handling with signature validation
                and idempotency checks to prevent duplicate enrolments and
                ensure payment integrity.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg">
                Protected Routes & Role Checks
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Built server-side validation to ensure only enrolled users can
                access lesson content, preventing unauthorised access.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg">
                CMS-Driven Lesson Rendering
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Structured Sanity schemas and dynamically rendered modular
                lesson blocks for flexible content updates without code changes.
              </p>
            </div>
          </div>

          <img
            src="/img/sanity-schema.png"
            alt="Code snippet of sanity schema"
            className="rounded-md object-cover border md:w-2/3 relative"
          />
          <img
            src="/img/sanity-dashboard.png"
            alt="Sanity studio dashboard screenshot"
            className="rounded-md object-cover border md:w-2/3 relative"
          />
        </section>

        <Separator />

        {/* UX Decisions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">UX Considerations</h2>

          <p className="text-muted-foreground leading-relaxed">
            The interface was intentionally minimal to reduce cognitive load.
            Error handling and confirmation feedback ensure clarity at every
            stage of the purchase and learning experience.
          </p>

          <img
            src="/img/error-handling.png"
            alt="Error message screenshot"
            className="rounded-md object-cover border md:w-2/3 relative"
          />
          <img
            src="/img/lesson-complete-message.png"
            alt="Lesson complete message screenshot"
            className="rounded-md object-cover border md:w-2/3 relative"
          />
        </section>

        <Separator />

        {/* Improvements */}
        <section className="space-y-6 pb-10">
          <h2 className="text-2xl font-semibold">Future Improvements</h2>

          <ul className="space-y-2 text-muted-foreground list-disc pl-5">
            <li>Background job queue for webhook handling</li>
            <li>Loading skeleton for better perceived performance</li>
            <li>Admin dashboard for analytics and customer management</li>
            <li>Advanced lesson analytics tracking</li>
          </ul>
        </section>
        <Separator />

        {/* Live demo */}
        <section className="space-y-6 pb-10">
          <h2 className="text-2xl font-semibold">Live Demo</h2>

          <p className="text-muted-foreground leading-relaxed">
            Want to see it for yourself? Check out the link below to explore the
            live demo of the course platform.
          </p>

          <a
            href="https://hersacredvoice.com.au/"
            target="_blank"
            className="inline-block px-6 py-3 rounded bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition duration-300 hover:translate-x-0.5 hover:shadow-md"
          >
            View Live Demo
            <Link className="size-5 ml-2 inline-block" />
          </a>
        </section>
      </div>
    </main>
  );
}