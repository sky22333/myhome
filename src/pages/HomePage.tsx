import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { siteConfig } from '@/lib/config';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Mail, Link as LinkIcon, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MotionSection = motion.section;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export function HomePage() {
  const authorInitials = siteConfig.author.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
        window.removeEventListener('scroll', checkScroll);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="bg-background font-sans text-foreground antialiased">
      <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(hsl(var(--muted))_1px,transparent_1px)]"></div>
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        <ThemeToggle />
      </div>
      <main className="container mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <MotionSection
          className="relative flex min-h-screen flex-col justify-center space-y-6 py-16 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <Avatar className="h-24 w-24 md:h-28 md:w-28">
              <AvatarImage src={siteConfig.author.avatarUrl} alt={siteConfig.author.name} />
              <AvatarFallback>{authorInitials}</AvatarFallback>
            </Avatar>
          </motion.div>
          <h1 className="font-display text-4xl font-bold md:text-6xl">
            {siteConfig.author.name}
          </h1>
          <h2 className="text-2xl text-muted-foreground md:text-3xl">
            {siteConfig.author.bio}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed md:text-lg">
            {siteConfig.author.statement}
          </p>
          <div className="flex items-center space-x-6">
            <SocialLink href={siteConfig.socials.github}>
              <Icons.GitHub className="h-6 w-6" />
            </SocialLink>
            <SocialLink href={siteConfig.socials.linkedin}>
              <Icons.LinkedIn className="h-6 w-6" />
            </SocialLink>
            <SocialLink href={siteConfig.socials.x}>
              <Icons.X className="h-6 w-6" />
            </SocialLink>
          </div>
          {showScroll && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <div className="animate-float flex flex-col items-center text-muted-foreground">
                <ChevronDown className="h-10 w-10" />
              </div>
            </div>
          )}
        </MotionSection>
        {/* About Section */}
        <MotionSection
          className="space-y-6 py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h3 className="font-display text-2xl font-semibold md:text-3xl">
            {siteConfig.about.title}
          </h3>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteConfig.about.content}
          </p>
        </MotionSection>
        {/* Projects Section */}
        <MotionSection
          className="space-y-12 py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h3 className="font-display text-2xl font-semibold md:text-3xl">
            {siteConfig.projects.title}
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {siteConfig.projects.items.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-lg border bg-muted/20 p-6 transition-all duration-300 hover:bg-muted/50 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="text-lg font-medium transition-colors duration-300 group-hover:text-primary md:text-xl">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 max-h-0 overflow-hidden text-base text-muted-foreground opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
                    {project.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </MotionSection>
        {/* Links Section */}
        <MotionSection
          className="space-y-12 py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h3 className="font-display text-2xl font-semibold md:text-3xl">
            {siteConfig.links.title}
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {siteConfig.links.items.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-lg border bg-muted/20 p-6 transition-all duration-300 hover:bg-muted/50 hover:shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <LinkIcon className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium transition-colors duration-300 group-hover:text-primary md:text-xl">
                        {link.title}
                      </h4>
                      <p className="mt-2 max-h-0 overflow-hidden text-base text-muted-foreground opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </MotionSection>
        {/* Contact Section */}
        <MotionSection
          className="space-y-6 py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h3 className="font-display text-2xl font-semibold md:text-3xl">
            {siteConfig.contact.title}
          </h3>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteConfig.contact.content}
          </p>
          <motion.a
            href={`mailto:${siteConfig.author.email}`}
            className="inline-flex items-center gap-2 font-medium text-foreground transition-colors duration-300 hover:text-primary"
            whileHover={{ x: 2 }}
          >
            <Mail className="h-5 w-5" />
            <span>{siteConfig.author.email}</span>
          </motion.a>
        </MotionSection>
        {/* Footer */}
        <footer className="py-12 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center space-x-6 pb-6">
            <SocialLink href={siteConfig.socials.github}>
              <Icons.GitHub className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={siteConfig.socials.linkedin}>
              <Icons.LinkedIn className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={siteConfig.socials.x}>
              <Icons.X className="h-5 w-5" />
            </SocialLink>
          </div>
          <p>{siteConfig.footer.text}</p>
        </footer>
      </main>
    </div>
  );
}
