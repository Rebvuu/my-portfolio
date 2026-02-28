import Link from "next/link";
import { ArrowBigLeft, Binoculars, ExternalLink, Eye, Github } from "lucide-react";

import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { projects } from "../../data/projects";
import { Button } from "@/src/components/ui/button";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 min-h-screen">
      <div className="p-2 rounded-full border border-primary-foreground hover:bg-primary/50 hover:translate-1 transition duration-300 hover:translate-y-0.5 hover:shadow-md h-8 w-8 relative mb-10">
        <Link
          href="/"
          className="text-sm font-medium text-primary-foreground hover:underline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <ArrowBigLeft className="size-5 inline-block" />
        </Link>
      </div>
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
          Case studies
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">Selected work</h1>
        <p className="max-w-2xl text-muted-foreground">
          A handful of my recent projects that blend clean UI, thoughtful UX, and
          a solid back-end foundation.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/15 border-primary/30 bg-white/70 bg-linear-to-br from-[#fddee4]/60 via-white/80 to-[#e2ebf2]/80 backdrop-blur shadow-lg shadow-[#d799c9]/20"
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
    </main>
  );
}


