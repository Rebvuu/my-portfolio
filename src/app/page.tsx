import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Eye,
  Github,
  Globe2,
  Mail,
  MapPin,
  Sparkles,
  SquareStack,
  Star,
} from "lucide-react";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { projects } from "../data/projects";

const focusAreas = [
  "Reusable UI patterns",
  "Accessibility",
  "Design-to-code translation",
  "Rapid prototyping",
  "Component architecture",
];

const highlights = [
  { label: "Based in", value: "Melbourne, Australia | Open to remote roles", icon: MapPin },
  { label: "Experience", value: "2+ years building for the web", icon: Sparkles },
  { label: "Stack", value: "TypeScript · React · Next.js · Tailwind", icon: SquareStack },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16 md:py-20">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm shadow-sm shadow-secondary/40">
            Open to frontend & product teams
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              ★ Design systems and product interfaces built with clarity and
              precision.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              I partner with product and design teams to build scalable,
              accessible interfaces that balance craft and performance.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="shadow-md shadow-primary/30 transition duration-300 hover:translate-x-0.5 hover:shadow-md"
            >
              <Link href="mailto:rebecca.vuurman@gmail.com">
                <Mail className="size-4" />
                Say hi
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent/50 bg-white/60 backdrop-blur text-secondary-foreground transition duration-300 hover:translate-x-0.5 hover:shadow-md"
            >
              <Link href="#projects">
                <ArrowUpRight className="size-4" />
                View projects
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-secondary-foreground/70"
            >
              <Link href="https://github.com/rebvuu" target="_blank">
                <Github className="size-4" />
                GitHub
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-primary/30 bg-white/70 bg-linear-to-br from-[#fddee4]/60 via-white/80 to-[#e2ebf2]/80 backdrop-blur shadow-lg shadow-[#d799c9]/20">
              <CardHeader className="flex flex-row items-start justify-between gap-2">
                <div className="space-y-1.5">
                  <p className="text-sm text-muted-foreground">Latest work</p>
                  <CardTitle className="text-xl">
                    Web3 marketplace for digital art
                  </CardTitle>
                  <CardDescription>
                    Contributed front-end UI and product flows for a digital art
                    marketplace, improving consistency, theming, and release
                    reliability.
                  </CardDescription>
                </div>
                <Badge className="bg-primary/15 text-primary">2025</Badge>
              </CardHeader>
              <CardFooter className="px-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Sparkles className="size-4" />
                    <span>Design systems</span>
                  </div>
                  <span aria-hidden="true">•</span>
                  <span>Next.js · Tailwind</span>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-primary/30 bg-white/70 bg-linear-to-br from-[#fddee4]/60 via-white/80 to-[#e2ebf2]/80 shadow-lg shadow-[#d799c9]/20 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl">What I focus on</CardTitle>
                <CardDescription>
                  Transforming intricate back-end logic into a simple, engaging
                  interface that users love.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="border-primary/30 bg-white/70 bg-linear-to-br from-[#fddee4]/60 via-white/80 to-[#e2ebf2]/80 shadow-lg shadow-[#d799c9]/20 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl">Working style</CardTitle>
              <CardDescription>
                Calm, collaborative, and focused on making teams faster.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border border-accent/40 bg-accent/10 p-4">
                <p className="text-sm font-semibold text-primary">
                  Design system thinking
                </p>
                <p className="text-sm text-muted-foreground">
                  I build interfaces as scalable systems — prioritising
                  consistency, reusability, and long-term maintainability.
                </p>
              </div>
              <div className="rounded-xl border border-muted-foreground/20 bg-secondary/30 p-4">
                <p className="text-sm font-semibold text-primary">
                  Close collaboration
                </p>
                <p className="text-sm text-muted-foreground">
                  I work closely with designers and product teams to translate
                  complex requirements into intuitive UI.
                </p>
              </div>
              <div className="rounded-xl border border-muted-foreground/20 bg-muted/40 p-4">
                <p className="text-sm font-semibold text-primary">
                  Detail-oriented execution
                </p>
                <p className="text-sm text-muted-foreground">
                  Focused on accessibility, performance, and polished
                  interaction details across devices.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-3">
              {highlights.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-2 text-sm shadow-sm backdrop-blur"
                >
                  <Icon className="size-4 text-primary" />
                  <div className="leading-tight">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </CardFooter>
          </Card>
        </div>
      </section>

      <section id="projects" className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Selected work
            </p>
            <h2 className="text-3xl font-semibold">
              Selected Frontend & UI Work
            </h2>
          </div>
          {/* <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/projects">
              <ExternalLink className="size-4" />
              View all
            </Link>
          </Button> */}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* {projects.slice(0, 3).map((project) => (
            <Card
              key={project.title}
              className="group h-full transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/15 border-primary/30 bg-white/70 bg-linear-to-br from-[#fddee4]/60 via-white/80 to-[#e2ebf2]/80 backdrop-blur shadow-lg shadow-[#978ab8]/20"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                {project.status === "in-progress" ? (
                  <Badge className="bg-muted text-primary">In progress</Badge>
                ) : (
                  <Badge className="bg-muted text-primary">Live (beta)</Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-muted-foreground/20 text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-3 px-6 pb-6">
                {project.link ? (
                  <Button asChild variant="link" className="px-0 text-primary">
                    <Link href={project.link} target="_blank">
                      <ExternalLink className="mr-1 size-4" />
                      Live
                    </Link>
                  </Button>
                ) : null}
                {project.repo ? (
                  <Button asChild variant="link" className="px-0 text-primary">
                    <Link href={project.repo} target="_blank">
                      <Github className="mr-1 size-4" />
                      Repo
                    </Link>
                  </Button>
                ) : null}
                {project.year ? (
                  <span className="ml-auto text-sm text-muted-foreground">
                    {project.year}
                  </span>
                ) : null}
              </CardFooter>
            </Card>
          ))} */}
          {projects.map((project) => (
            <Card
              key={project.title}
              className="transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/15 border-primary/30 bg-white/70 bg-linear-to-br from-[#fddee4]/60 via-white/80 to-[#e2ebf2]/80 backdrop-blur shadow-lg shadow-[#978ab8]/20"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center gap-3 px-6 pb-6">
                {project.url ? (
                  // <Link
                  //   href={project.url}
                  //   target="_blank"
                  //   className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  // >
                  //   <Eye className="size-4" />
                  //   View Project
                  // </Link>
                  <Button
                    asChild
                    variant="default"
                    className="px-0 transition duration-300 hover:translate-x-0.5 hover:shadow-md"
                  >
                    <Link href={project.url} target="_blank">
                      <Eye className="mr-1 size-4" />
                      View Project
                    </Link>
                  </Button>
                ) : null}
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="size-4" />
                    Live (beta)
                  </Link>
                ) : null}
                {project.repo ? (
                  <Link
                    href={project.repo}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Github className="size-4" />
                    Repo
                  </Link>
                ) : null}
                {project.status ? (
                  <Badge className="bg-primary/15 text-primary ml-auto">
                    {project.status === "in-progress" ? "In progress" : "Live"}
                  </Badge>
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-2xl border p-6 border-primary/30 bg-white/70 bg-linear-to-br from-[#fddee4]/60 via-white/80 to-[#e2ebf2]/80 backdrop-blur shadow-lg shadow-[#8da0ca]/20 md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Collaborate
          </p>
          <h3 className="text-3xl font-semibold text-card-foreground">
            Let&apos;s build better product experiences
          </h3>
          <p className="text-lg text-muted-foreground">
            Send me a message if you'd like to collaborate or want to chat about
            UI and design! I'm always open to connecting with other designers
            and developers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="shadow-md shadow-primary/30 transition duration-300 hover:translate-x-0.5 hover:shadow-md"
            >
              <Link href="mailto:rebecca.vuurman@gmail.com">
                <Mail className="size-4" />
                Start a conversation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 text-primary transition duration-300 hover:translate-x-0.5 hover:shadow-md"
            >
              <Link href="/projects">
                <ArrowUpRight className="size-4" />
                See detailed case studies
              </Link>
            </Button>
          </div>
        </div>

        <Card className="border-muted/80 bg-white/80 shadow-sm backdrop-blur">
          <CardHeader>
            <CardTitle>Ways I can help</CardTitle>
            <CardDescription>
              Bring me in to refine user flows, elevate UI polish, and make
              interfaces feel effortless.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Shape and maintain design systems with strong documentation.",
              "Translate complex product flows into intuitive UI.",
              "Improve performance, accessibility, and testing coverage.",
              "Mentor teams on UI engineering best practices.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-start gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3"
              >
                {/* <span className="mt-1 inline-block size-2 rounded-full bg-primary" /> */}
                <Star className="size-4 text-primary" />
                <p className="text-sm text-primary">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
