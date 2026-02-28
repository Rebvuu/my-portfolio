"use client";

import { motion } from "framer-motion";
import {
  BookCheck,
  Database,
  Frown,
  Link,
  LockKeyhole,
  MonitorCog,
  Shield,
  Smile,
} from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../../components/ui/separator";

const architecturePoints = [
  { text: "Stripe checkout + webhook verification", icon: LockKeyhole },
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

export default function EcommerceCaseStudy() {
  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-24 space-y-24">
        {/* Header */}
        <section className="md:grid md:grid-cols-2 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight pb-2">
              Modular <br></br>E-Commerce Store
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Designed in Figma and developed using Next.js and Sanity. The goal
              was to create a scalable, content-managed shopping experience with
              reusable UI components and clean, responsive layouts across
              devices.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Sanity CMS</Badge>
            </div>
          </div>
          <div className="relative mt-4">
            <img
              src="/img/desktop-products-view.png"
              alt="Online store desktop screenshot"
              className="rounded-md object-cover"
            />
            <img
              src="/img/mobile-view.png"
              alt="Online store mobile screenshot"
              className="rounded-md object-cover border mt-4 absolute left-9/12 bottom-0 inset-0 border-gray-800 w-28"
            />
          </div>
        </section>

        <Separator />

        {/* My role */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">My Role</h2>

          <ul className="space-y-2 text-muted-foreground list-disc pl-5">
            <li>UI Implementation from Figma designs</li>
            <li>Component system architecture</li>
            <li>Sanity CMS schema design</li>
            <li>Dynamic product and category rendering</li>
            <li>Responsive layout implementation</li>
          </ul>
        </section>

        <Separator />

        {/* The problem */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">The Problem</h2>

          <div className="grid grid-cols-2">
            <div className="space-y-2.5">
              <p className="text-muted-foreground">
                Most small e-commerce sites struggle with:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Rigid content structures</li>
                <li>Poor scalability</li>
                <li>Hardcoded product layouts</li>
                <li>Inconsistent UI patterns</li>
              </ul>
              {/* <Frown className="size-6 text-rose-400" /> */}
            </div>
            <div className="space-y-2.5">
              <p className="text-muted-foreground">
                The aim was to build a storefront that:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Allows non-technical content updates</li>
                <li>Scales with new product types</li>
                <li>Maintains visual consistency</li>
                <li>Prioritizes performance and clarity</li>
              </ul>
              {/* <Smile className="size-5 text-teal-500" /> */}
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {architecturePoints.map(({ text, icon: Icon }) => (
              <div
                key={text}
                className="flex justify-center items-center gap-2 p-4 rounded bg-primary text-primary-foreground point"
              >
                {text} <Icon className="size-5 shrink-0 icon" />
              </div>
            ))}
          </div> */}
        </section>

        <Separator />

        {/* Design system */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Design System</h2>

          <div className="space-y-2.5">
            <p className="text-muted-foreground">
              This project began in Figma with a structured design system
              including:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>Defined spacing scale</li>
              <li>Consistent typography hierarchy</li>
              <li>Component variants (buttons, cards, badges)</li>
              <li>Responsive breakpoints</li>
              <li>Product card and gallery patterns</li>
            </ul>
          </div>
          <p className="text-muted-foreground">
            The development process focused on faithfully translating the design
            system into reusable React components while preserving spacing,
            hierarchy, and interaction details.
          </p>

          <img
            src="/img/style-system.png"
            alt="Style system and component architecture diagram"
            className="rounded-md object-cover border md:w-2/3 relative"
          />
        </section>

        <Separator />

        {/* UI & reusability */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">UI System and Reusability</h2>

          <div className="space-y-2.5">
            <p className="text-muted-foreground">
              The interface was built using a modular component structure,
              allowing:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>Reusable ProductCard components</li>
              <li>Dynamic category filtering</li>
              <li>Configurable content blocks via CMS</li>
              <li>Scalable layout patterns</li>
              <li>Consistent spacing and alignment</li>
            </ul>
          </div>
          <p className="text-muted-foreground">
            This approach ensures the storefront can expand without compromising
            design integrity.
          </p>

          <img
            src="/img/desktop-view.png"
            alt="Online store desktop view screenshot"
            className="rounded-md object-cover border md:w-2/3 relative h-auto"
          />
        </section>

        <Separator />

        {/* CMS Integration */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">CMS Integration</h2>

          <div className="space-y-2.5">
            <p className="text-muted-foreground">
              Sanity was used to create structured content models including:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>Products</li>
              <li>Categories</li>
              <li>Variants</li>
              <li>Image galleries</li>
            </ul>
          </div>
          <p className="text-muted-foreground">
            Content is fetched dynamically using GROQ queries, allowing
            non-technical users to manage products without touching code.
            <br></br>This makes the storefront scalable for client use.
          </p>

          <img
            src="/img/product-sanity-schema.png"
            alt="Sanity CMS product schema screenshot"
            className="rounded-md object-cover border md:w-2/3 relative"
          />
        </section>

        <Separator />

        {/* Improvements */}
        <section className="space-y-6 pb-10">
          <h2 className="text-2xl font-semibold">Ongoing Development</h2>

          <p className="text-muted-foreground leading-relaxed">
            The next phase includes checkout flow and Stripe integration,
            extending the storefront into a full transactional platform.
          </p>
        </section>
        <Separator />
      </div>
    </main>
  );
}