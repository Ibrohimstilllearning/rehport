"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Palette, Zap, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "MTCNA (MikroTik Certified Network Associate) ",
    description: "Fundamental networking certification focused on MikroTik RouterOS configuration. Covers IP addressing, routing, bridging, firewall, NAT, wireless, and basic troubleshooting. Demonstrates strong understanding of network fundamentals and MikroTik device management."
  },
  {
    icon: Palette,
    title: "MTCRE (MikroTik Certified Routing Engineer)",
    description: "Advanced routing certification specializing in static routing, OSPF, tunneling, VPN, and traffic engineering using MikroTik RouterOS. Validates skills in designing, implementing, and troubleshooting routed networks in enterprise environments.",
  },
  {
    icon: Zap,
    title: "CCNA (Cisco Certified Network Associate)",
    description: "Industry-recognized certification covering networking fundamentals, routing & switching, network security, IP services, automation, and troubleshooting. Demonstrates the ability to configure, manage, and secure modern enterprise networks using Cisco technologies.",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">About</span>
          </div>

          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Crafting digital experiences{" "}
            <span className="text-primary">that matter</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {`My name is Muhamad Rehan Firmansyah, a passionate networking student with a strong interest in computer networks and cybersecurity. I have hands-on experience in routing, switching, and network security using Cisco and MikroTik devices.
`}
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"I hold professional certifications including MTCNA (MikroTik Certified Network Associate), MTCRE (MikroTik Certified Routing Engineer), and CCNA (Cisco Certified Network Associate), which strengthen my foundation in networking fundamentals, routing, and enterprise-level network concepts."}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"I have experience configuring network services such as NAT, HSRP, IPv4/IPv6, GRE Tunnel, and dynamic routing protocols like EIGRP and OSPF. I enjoy designing stable, secure, and scalable network infrastructures while continuously improving my troubleshooting skills."}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"I am highly motivated to grow in the IT field, especially in network engineering and cybersecurity. I believe that consistency, discipline, and learning from failure are the keys to long-term success. My goal is to become a professional Network Engineer or Cybersecurity Engineer who can contribute to building secure and reliable digital infrastructure."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(210_100%_56%/0.1)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon size={22} />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
