"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Mikrotik Trainer | MTCNA | SMPN 172 Jakarta",
    description:
      "I became a MTCNA Trainer who taught about Network fundamentals and some basic configurations to children at SMPN 172 Jakarta school on October 16-17, 2024.",
    image: "/teach3.png",
    tags: ["MTCNA"],
    liveUrl: "/teach3.png",
  },
  {
    title: "Cisco Trainer | CCNA | SMK Karya Bahana Mandiri Bekasi 1",
    description:
      "I became a CCNA Trainer who taught about Network fundamentals and some basic configurations Mikrotik and Cisco to Students at SMK Karya Bahana Mandiri Bekasi 1 school on July 24-26, 2025.",
    image: "/teach1.jpg",
    tags: ["CCNA"],
    liveUrl: "/teach1.jpg",
  },
  {
    title: "Cisco Trainer | CCNA | SMK Atlantis Plus",
    description:
      "I became a CCNA Trainer who taught about Network fundamentals and some basic configurations Mikrotik and Cisco to Students at SMK Atlantis Plus school on September 10-12, 2025.",
    image: "/teach2.png",
    tags: ["CCNA"],
    liveUrl: "/teach2.png",
    githubUrl: "#",
  },
  {
    title: "Super LAB OSPF",
    description:
      "IT Project to build a lab network using Mikrotik RouterOS and Cisco Packet Tracer to implement OSPF Protocol with various topologies and configurations.",
    image: "/proj1.png",
    tags: ["Mikrotik", "Cisco", "OSPF"],
    liveUrl: "/proj1.png",
    githubUrl: "#",
  },
  {
    title: "OSPF & EIGRP Routing",
    description:
      "IT Project to build a lab network using Mikrotik RouterOS and Cisco Packet Tracer to implement OSPF & EIGRP Protocol with various topologies and configurations.",
    image: "/proj2.png",
    tags: ["Mikrotik", "Cisco", "OSPF", "EIGRP"],
    liveUrl: "/proj2.png",
    githubUrl: "#",
  },
  {
    title: "Configuration in Physical Devices",
    description:
      "IT Project to build a lab network using Mikrotik RouterOS and Cisco Physical Devices to implement OSPF & EIGRP Protocol with various topologies and configurations.",
    image: "/proj3.png",
    tags: ["Mikrotik", "Cisco", "OSPF", "EIGRP"],
    liveUrl: "/proj3.png",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">Projects</span>
          </div>

          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Selected{" "}
            <span className="text-primary">work</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(210_100%_56%/0.12)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      aria-label={`View ${project.title} live demo`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
