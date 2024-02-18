import React, { useEffect } from "react";
import { Card } from "../components";
import { Footer } from "../components";
import { sseSocials } from "../data/socials";

export const SoftwareBase = () => {
  useEffect(() => {
    document.title = "Ray Knorr - SSE";
    document.body.classList.add("bg-cal-poly-green");
  }, []);

  return (
    <div className="relative w-screen h-screen pb-20 md:pb-36 bg-cal-poly-green">
      <a href="/" className="absolute z-10 w-16 h-auto top-8 right-8">
        <img src="/celeste-logo-1000.png" alt="Celeste Logo" />
      </a>
      <div className="absolute pb-20 top-32 md:pb-36">
        <p className="px-10 text-xl font-fragment-mono text-celeste">
          Hi, I'm Ray Knorr. I'm a software engineer.
        </p>
        <Card
          title="Bio"
          body="I'm a software engineer with a passion for web development. I specialize in front-end development, but I'm also comfortable working on the back-end. I have experience with a variety of technologies, including React, TypeScript, Node.js, and Python."
          bgColour="bg-celeste"
          textColour="text-ultra-violet"
          borderColour="border-ultra-violet"
        />

        <p className="px-10 pt-8 text-xl font-fragment-mono text-celeste">
          Here are a few of my projects:
        </p>
        <Card
          title="This Website"
          body={
            <>
              I built this website using TypeScript, React.js and Tailwind CSS.
              Here's a link to the{" "}
              <a
                href="https://github.com/RayK3/ray-knorr-music"
                target="_blank"
                rel="noreferrer"
                className="font-bold"
              >
                repository
              </a>
              .
            </>
          }
          bgColour="bg-celeste"
          textColour="text-ultra-violet"
          borderColour="border-ultra-violet"
        />
        <Card
          title="Coming Soon"
          body="Check back soon for more projects!"
          bgColour="bg-celeste"
          textColour="text-ultra-violet"
          borderColour="border-ultra-violet"
        />
      </div>
      <Footer
        textColour="text-celeste"
        bgColour="bg-cal-poly-green"
        iconColour="text-celeste hover:text-dark-celeste"
        socials={sseSocials}
      />
    </div>
  );
};
