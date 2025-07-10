import { Logo } from "@/components/logo";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
        <Image
            src="https://placehold.co/1920x1080.png"
            alt="Gombe State Judiciary Building"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-20"
            data-ai-hint="courthouse building"
        />
        <div className="absolute inset-0 bg-primary/80 z-10"></div>
        <div className="relative z-20 w-full max-w-md">
            <div className="flex justify-center mb-6">
                <Logo />
            </div>
            {children}
        </div>
    </div>
  );
}
