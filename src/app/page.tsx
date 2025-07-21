"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LogIn,
  UserPlus,
  ArrowRight,
  CheckCircle,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { Logo } from "@/components/logo";
import { motion } from "framer-motion";

const FeatureCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-card/60 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-primary/10 transition-shadow duration-300 border border-primary/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg text-primary">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorksStep = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      variants={fadeIn}
      className="flex flex-col items-center text-center"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-4 border-2 border-primary/20">
        {number}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-xs">{description}</p>
    </motion.div>
  );
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Logo />
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              className="text-primary hover:bg-primary/10"
            >
              <Link href="/login">
                <LogIn />
                Login
              </Link>
            </Button>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/signup">
                <UserPlus />
                Register
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative py-20 md:py-32 overflow-hidden border-b">
          <div className="absolute inset-0 z-0 opacity-5">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Abstract background"
              fill
              objectFit="cover"
              className="absolute inset-0"
              data-ai-hint="abstract pattern"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10"></div>
          </div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <motion.h1
                  variants={fadeIn}
                  className="text-2xl md:text-5xl font-bold font-headline tracking-loose  text-primary"
                >
                  Judicial Services, <br />
                  Simplified and Secure.
                </motion.h1>
                <motion.p
                  variants={fadeIn}
                  className="mt-6 max-w-xl text-sm md:text-lg text-muted-foreground"
                >
                  The official Zamfara State Judiciary platform for seamless and
                  secure online legal services. Built for convenience, speed,
                  and trust.
                </motion.p>
                <motion.div variants={fadeIn} className="mt-8 flex gap-4">
                  <Button
                    size="sm"
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transform hover:scale-105 transition-transform shimmer"
                  >
                    <Link href="/signup">
                      Get Started <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                variants={fadeIn}
                className="relative hidden md:block"
              >
                <div className="bg-card/50 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-primary/20 transform-gpu hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 p-3 bg-background rounded-lg border">
                    <Image
                      src="https://placehold.co/40x40.png"
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                      data-ai-hint="person avatar"
                    />
                    <div>
                      <p className="font-semibold text-sm">Musa Adekunle</p>
                      <p className="text-xs text-muted-foreground">
                        Legal Document Request
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 mt-4 bg-green-500/10 text-green-700 rounded-lg border border-green-500/20">
                    <CheckCircle className="w-6 h-6" />
                    <div>
                      <p className="font-semibold text-sm">Status: Approved</p>
                      <p className="text-xs">
                        Your document is ready for download.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="how-it-works" className="py-24 bg-primary/5">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={stagger}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold font-headline text-primary"
              >
                A Simple, Secure Process
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
              >
                Obtain your official legal documents in just a few easy steps.
              </motion.p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <HowItWorksStep
                number="1"
                title="Create Account"
                description="Sign up with your details to create a secure personal account."
              />
              <HowItWorksStep
                number="2"
                title="Submit Request"
                description="Select the document type you need and fill in the required information accurately."
              />
              <HowItWorksStep
                number="3"
                title="Download & Print"
                description="Once approved, make your payment and instantly download the official document."
              />
            </div>
          </motion.div>
        </section>

        <section className="py-24 bg-background">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={stagger}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold font-headline text-primary"
              >
                Core Services
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
              >
                Secure and efficient digital solutions for all your legal
                document needs.
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                index={1}
                icon={<FileText className="w-6 h-6" />}
                title="E-Filing"
                description="Submit legal documents electronically through our secure portal."
              />
              <FeatureCard
                index={2}
                icon={<ShieldCheck className="w-6 h-6" />}
                title="E-Verification"
                description="Verify documents quickly and securely online, ensuring authenticity and compliance."
              />
              <FeatureCard
                index={3}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
                title="Accredited Agents"
                description="Authorized individuals to submit requests to the court on your behalf."
              />
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Zamfara State Judiciary. All
              Rights Reserved.
            </p>
            <p className="text-sm text-center md:text-right text-primary-foreground/80">
              Powered by{" "}
              <a
                href="https://echobitstech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                echobitstech
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
