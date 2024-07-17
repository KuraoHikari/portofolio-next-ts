"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="
            flex 
            flex-col 
            xl:flex-row 
            items-center 
            justify-between 
            xl:pt-8 
            xl:pb-24"
        >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hi I'm{" "}
              <ReactTypingEffect
                text={["KuraoHikari"]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={1500}
                typingDelay={500}
                cursorClassName="text-blue-400"
                className="inline-block"
              />
            </h1>
            <p className="max-w-[550px] mb-9 text-white/80">
              Experienced in <span className="text-yellow-400">JavaScript</span>
              , <span className="text-blue-700">TypeScript</span>,{" "}
              <span className="text-accent">Dart</span>, SQL, and{" "}
              <span className="text-blue-300">Go</span>.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/cb.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="kurao-hikari-cv.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <Download className="w-5 h-5" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-4"
                  iconsStyles="w-14 h-14 p-2 border border-blue-400 rounded-md flex justify-center items-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
