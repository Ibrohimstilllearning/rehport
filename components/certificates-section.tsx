"use client"

import { useEffect, useRef, useState } from "react"
import { Award, ExternalLink, Calendar } from "lucide-react"

const certificates = [
  {
    title: "CCNA: Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "2025",
    credentialUrl: "/ccnabase.png",
    description:
      "Industry-recognized certification covering networking fundamentals, routing & switching, network security, IP services, automation, and troubleshooting. Demonstrates the ability to configure, manage, and secure modern enterprise networks using Cisco technologies.",
    badge: "CCNA",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "2025",
    credentialUrl: "/ccna.png",
    description:
      "Fundamental networking concepts including network protocols, IP addressing, subnetting, and basic device configuration using Cisco technologies.",
    badge: "CCNA",
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "2025",
    credentialUrl: "/ccna2.png",
    description:
      "Advanced networking concepts including enterprise network design, security implementation, and automation using Cisco technologies.",
    badge: "CCNA",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "2025",
    credentialUrl: "/ccna3.png",
    description:
      "Demonstrated proficiency in routing and switching concepts, including VLANs, trunking, STP, and basic network troubleshooting using Cisco technologies.",
    badge: "CCNA",
  },
  {
    title: "MTCNA: MikroTik Certified Network Associate",
    issuer: "MikroTik",
    date: "2024",
    credentialUrl: "/mtcna.png",
    description:
      "Validated skills in MikroTik router configuration, network design, and troubleshooting.",
    badge: "MTCNA",
  },
  {
    title: "MTCRE: MikroTik Certified Routing Engineer",
    issuer: "MikroTik",
    date: "2025",
    credentialUrl: "/mtcre.png",
    description:
      "Certified in advanced routing concepts, BGP, OSPF, and MikroTik router configuration.",
    badge: "MTCRE",
  },
  {
    title:"Basic BGP in Juniper",
    issuer: "ID-Networkers",
    date: "2025",
    credentialUrl: "/idncert.png",
    description:
      "Completed training on BGP fundamentals and configuration using Juniper devices.",
    badge: "IDN",
  },
]

export function CertificatesSection() {
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
    <section
      id="certificates"
      ref={sectionRef}
      className="relative z-10 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-sm tracking-wider uppercase text-primary">
              Certificates
            </span>
          </div>

          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Professional{" "}
            <span className="text-primary">credentials</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(210_100%_56%/0.12)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Subtle corner glow on hover */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/0 transition-all duration-500 group-hover:bg-primary/5" />

              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <Award size={20} />
                </div>
                <span className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
                  {cert.badge}
                </span>
              </div>

              <h3 className="mb-1 text-base font-semibold leading-snug text-foreground">
                {cert.title}
              </h3>

              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {cert.issuer}
                </span>
                <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground/60">
                  <Calendar size={12} />
                  {cert.date}
                </span>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-all duration-300 hover:gap-2.5"
              >
                View Credential
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
