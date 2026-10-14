"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Computer,
  ExternalLink,
  Eye,
  Github,
  Globe2,
  Mail,
  MapPin,
  MonitorCog,
  Sparkles,
  SquareStack,
  Star,
  TabletSmartphone,
  User,
  UsersRound,
  Wallpaper,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "../data/projects";
import ContactForm from "../components/ContactForm"
import PullTabSidebar from "../components/sideBar";
import { Separator } from "../components/ui/separator";
import Image from "next/image";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { Inter } from "next/font/google";
import InteractiveCube from "@/components/Cube";
import PlanetScene from "@/components/Planet";

const focusAreas = [
  "Reusable UI patterns",
  "Accessibility",
  "Design-to-code translation",
  "Rapid prototyping",
  "Component architecture",
];

const menuItems = [
  { label: "Get in touch", href: "#contact" },
  { label: "Projects", href: "#projects" },
  { label: "About me", href: "#about" },
];

const logoContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const logoItem = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isContactFormVisible, setIsContactFormVisible] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isFrontendClicked, setIsFrontendClicked] = useState<boolean>(true);
  const [isUIUXClicked, setIsUIUXClicked] = useState<boolean>(false);
  const [isFullStackClicked, setIsFullStackClicked] = useState<boolean>(false);

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-6 py-16 md:py-20">
      <div className="absolute -z-10 top-30 right-[-10%] w-full">
        {/* <script
            type="module"
            src="https://cdn.spline.design/@splinetool/viewer@2.0.52/build/spline-viewer.js"
          ></script> */}
        <PlanetScene />
      </div>
      <section className="grid gap-10 lg:items-start">
        <div className="space-y-6">
          <div className="flex min-h-screen flex-col items-start gap-6 md:mt-20 lg:gap-8">
            <div className="group flex md:max-w-3/4">
              <aside
                id="portfolio-sidebar"
                className={[
                  "fixed inset-y-0 left-0 z-50 w-64",
                  "border-r bg-background shadow-xl",
                  "transition-transform duration-500",
                  "ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isVisible
                    ? "translate-x-0 delay-75"
                    : "-translate-x-full delay-0",
                ].join(" ")}
              >
                <div className="flex h-full flex-col justify-center px-8">
                  <nav className="flex flex-col items-start space-y-4 h-full pt-10">
                    {menuItems.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsVisible(false)}
                        className={[
                          "w-full transition duration-300 px-3 py-2",
                          "text-base font-medium text-primary",
                          "transition-[opacity,transform,background-color]",
                          "duration-300 ease-out",
                          "hover:translate-x-1",
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-5 opacity-0",
                        ].join(" ")}
                        style={{
                          transitionDelay: isVisible
                            ? `${150 + index * 75}ms`
                            : `${(menuItems.length - index - 1) * 40}ms`,
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <button
                  type="button"
                  aria-controls="portfolio-sidebar"
                  aria-expanded={isVisible}
                  aria-label={
                    isVisible ? "Close navigation" : "Open navigation"
                  }
                  onClick={() => setIsVisible((current) => !current)}
                  className={[
                    "absolute left-full top-1/2",
                    "flex h-28 w-11 -translate-y-1/2 items-center justify-center",
                    "rounded-r-2xl border border-l-0 bg-background shadow-md",
                    "transition-all duration-500",
                    "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                    "hover:w-13 hover:bg-accent",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-primary focus-visible:ring-offset-2",
                    isVisible
                      ? "translate-x-0"
                      : "translate-x-3 group-hover:translate-x-5",
                  ].join(" ")}
                >
                  <ChevronRight
                    aria-hidden="true"
                    className={[
                      "size-5 transition-transform duration-500",
                      isVisible ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                  />
                </button>
              </aside>

              <div
                className={[
                  "space-y-4 transition-transform duration-500",
                  "ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isVisible
                    ? "translate-x-6 md:translate-x-14"
                    : "translate-x-0",
                ].join(" ")}
              >
                <h1 className="font-inter text-4xl font-bold uppercase tracking-tight transition-transform duration-300 md:text-5xl">
                  I&apos;m a frontend developer
                  <br /> in Melbourne
                </h1>

                <p className="max-w-2xl text-lg text-muted-foreground transition-transform duration-300">
                  I&apos;m passionate about bringing ideas to life through
                  design and code.
                </p>
              </div>

              {/* <PlanetScene /> */}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="shadow-md shadow-primary/30 transition duration-300 hover:transform hover:scale-110 hover:shadow-md px-10"
              >
                <Link href="#contact">
                  <Mail className="size-4" />
                  Say hi
                </Link>
              </Button>

              {/* <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent/50 bg-white/60 text-secondary-foreground backdrop-blur transition duration-300 hover:translate-x-0.5 hover:shadow-md"
              >
                <Link href="#projects">
                  <ArrowUpRight className="size-4" />
                  View projects
                </Link>
              </Button> */}

              <Button
                asChild
                size="sm"
                variant="ghost"
                className="text-secondary-foreground/70 hover:bg-background hover:border hover:transform transition duration-300 hover:scale-110"
              >
                <Link
                  href="https://github.com/rebvuu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="space-y-6 grid md:grid-cols-3 min-h-screen gap-4 md:gap-8 lg:gap-12 xl:gap-16"
      >
        <div className="md:h-full">
          <ButtonGroup orientation="vertical" className="w-full">
            <Button
              variant="outline"
              className="h-20 w-full cursor-pointer transition duration-300 hover:scale-105 hover:bg-border"
              onClick={() => {
                setIsFrontendClicked(true);
                setIsUIUXClicked(false);
                setIsFullStackClicked(false);
              }}
            >
              <Wallpaper className="mr-1 size-6" />
              Frontend
            </Button>

            <Button
              variant="outline"
              className="h-20 w-full cursor-pointer transition duration-300 hover:scale-105 hover:bg-border"
              onClick={() => {
                setIsFrontendClicked(false);
                setIsUIUXClicked(true);
                setIsFullStackClicked(false);
              }}
            >
              <TabletSmartphone className="mr-1 size-6" />
              UI/UX
            </Button>

            <Button
              variant="outline"
              className="h-20 w-full cursor-pointer transition duration-300 hover:scale-105 hover:bg-border"
              onClick={() => {
                setIsFrontendClicked(false);
                setIsUIUXClicked(false);
                setIsFullStackClicked(true);
              }}
            >
              <MonitorCog className="mr-1 size-6" />
              Full Stack
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex md:flex-start flex-col gap-4 md:h-full items-center">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm a Web developer with a passion for creating delightful and
            unique user experiences. When I'm not coding or designing, I'm
            enjoying peace and quiet at home, playing games or baking.
          </p>
          <p className="font-semibold">What I use:</p>
          {isFrontendClicked ? (
            <motion.div
              className="flex flex-wrap gap-4"
              variants={logoContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                variants={logoItem}
                src="/img/logo/react.webp"
                alt="React logo"
                className="h-20 border p-2"
              />

              <motion.img
                variants={logoItem}
                src="/img/logo/nextjs01.png"
                alt="Next.js logo"
                className="h-20 border p-2"
              />

              <motion.img
                variants={logoItem}
                src="/img/logo/typescript01.png"
                alt="TypeScript logo"
                className="h-20 border p-2"
              />

              <motion.img
                variants={logoItem}
                src="/img/logo/tailwind.png"
                alt="Tailwind CSS logo"
                className="h-20 border p-2"
              />
            </motion.div>
          ) : null}

          {isUIUXClicked ? (
            <motion.div
              className="flex flex-wrap gap-4"
              variants={logoContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                variants={logoItem}
                src="/img/logo/figma.png"
                alt="Figma logo"
                className="h-20 border p-2"
              />

              <motion.img
                variants={logoItem}
                src="/img/logo/shadcnui01.png"
                alt="shadcn/ui logo"
                className="h-20 border p-2"
              />

              <motion.img
                variants={logoItem}
                src="/img/logo/motionone.png"
                alt="Motion One logo"
                className="h-20 border p-2"
              />

              <motion.img
                variants={logoItem}
                src="/img/logo/animateui.png"
                alt="Animate UI logo"
                className="h-20 border p-2"
              />

              {/* <motion.img
                  variants={logoItem}
                  src="/img/logo/antdesign.png"
                  alt="Ant Design logo"
                  className="h-20"
                /> */}
            </motion.div>
          ) : null}

          {isFullStackClicked ? (
            <motion.div
              className="flex flex-wrap gap-4"
              variants={logoContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                variants={logoItem}
                src="/img/logo/nodejs01.png"
                alt="Node.js logo"
                className="h-20 border p-2"
              />

              <motion.img
                variants={logoItem}
                src="/img/logo/postgresql01.png"
                alt="PostgreSQL logo"
                className="h-20 border p-2"
              />

              <motion.img
                variants={logoItem}
                src="/img/logo/nextauthjs.png"
                alt="NextAuth.js logo"
                className="h-20 border p-2"
              />

              <motion.img
                variants={logoItem}
                src="/img/logo/prisma.png"
                alt="Prisma logo"
                className="h-20 border p-2"
              />

              <motion.img
                variants={logoItem}
                src="/img/logo/aws.png"
                alt="AWS logo"
                className="h-20 border p-2"
              />
            </motion.div>
          ) : null}
        </div>
        <div className="flex flex-col items-center gap-4 md:h-full">
          <Image
            src="/img/profile3.jpg"
            alt="Profile picture"
            width={300}
            height={300}
            className="rounded-full border border-primary shadow-md shadow-primary/30"
          />
        </div>
      </section>

      <section id="projects" className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">
              Selected Frontend & UI Work
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="border">
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
                      className="text-muted-foreground font-light"
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
                    className="px-0 shadow-md shadow-primary/30 transition duration-300 hover:transform hover:scale-110 hover:shadow-md cursor-pointer"
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
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline hover:transform transition duration-300 hover:scale-110"
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

      <section
        className="grid gap-4 rounded-2xl border p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10 relative"
        id="contact"
      >
        <StarsBackground className="absolute inset-0 -z-10 h-full w-full" />
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold text-card-foreground">
            Let&apos;s build better user experiences
          </h3>
          <p className="text-lg text-muted-foreground">
            Shoot me a message if you'd like to collaborate or want to chat
            about UI and design :)
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="shadow-md shadow-primary/30 transition duration-300 hover:transform hover:scale-110 hover:shadow-md cursor-pointer"
              onClick={() => setIsContactFormVisible(!isContactFormVisible)}
            >
              <span>
                <Mail className="size-4" />
                Email me
              </span>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary/40 text-primary transition duration-300 hover:transform hover:scale-105 hover:shadow-md"
            >
              <Link href="/projects">
                <ArrowUpRight className="size-4" />
                See full case studies
              </Link>
            </Button>
          </div>
          {isContactFormVisible && <ContactForm />}
        </div>
      </section>
    </main>
  );
}
