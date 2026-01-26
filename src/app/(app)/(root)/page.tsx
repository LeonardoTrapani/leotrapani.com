import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { About } from "@/features/portfolio/components/about";
// import { Awards } from "@/features/portfolio/components/awards";
import { Blog } from "@/features/portfolio/components/blog";
// import { Certifications } from "@/features/portfolio/components/certifications";
import { Experiences } from "@/features/portfolio/components/experiences";
import { GitHubContributions } from "@/features/portfolio/components/github-contributions";
import { Overview } from "@/features/portfolio/components/overview";
import { ProfileCover } from "@/features/portfolio/components/profile-cover";
import { ProfileHeader } from "@/features/portfolio/components/profile-header";
import { Projects } from "@/features/portfolio/components/projects";
import { SocialLinks } from "@/features/portfolio/components/social-links";
import { TeckStack } from "@/features/portfolio/components/teck-stack";
// import { TestimonialsMarquee } from "@/features/portfolio/components/testimonials-marquee";
import { USER } from "@/features/portfolio/data/user";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <GitHubContributions />
        <Separator />

        <Projects />
        <Separator />

        {/* <TestimonialsMarquee /> */}
        {/* <Separator /> */}

        <Experiences />
        <Separator />

        {/* <Awards /> */}
        {/* <Separator /> */}
        {/**/}
        {/* <Certifications /> */}
        {/* <Separator /> */}

        <Blog />
        <Separator />

        <TeckStack />
        <Separator />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
