"use client";

import { MyWorks } from "@/components/my-works/MyWorks";
import { projects } from "@/data/projects";
import { Project } from "@/components/project/project";
import LastWords from "@/components/lastWords/LastWords";
import Contact from "@/components/contact/Contact";
import { Home } from "@/components/home/Home";
import { About } from "@/components/about/About";
import { Expertise } from "@/components/expertise/Expertise";
import { Services } from "@/components/services/Services";
import { Experience } from "@/components/experience/Experience";
import { SideProjects } from "@/components/sideProjects/SideProjects";
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

export default function Page() {

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      person_profiles: 'always',
      defaults: '2025-05-24',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })
  }, [])

  return (
    <PostHogProvider client={posthog}>
      <Home />
      <About />
      <Expertise />
      <Services />
      <Experience />
      <MyWorks />
      {projects.map((project) => (
        <Project key={project.key}>{project}</Project>
      ))}
      <SideProjects />
      <LastWords />
      <Contact />
    </PostHogProvider>
  );
}
