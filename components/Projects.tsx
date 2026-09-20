import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = projectsData.find((p) => p.featured);
  const secondary = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <div className="sketch-section-header">
          <span className="sketch-label">Entry 02 — Portfolio</span>
          <h2 className="sketch-section-title">Featured Projects</h2>
          <p className="sketch-section-subtitle">
            Projects I&apos;ve built or contributed to, with real-world impact and
            practical software engineering experience.
          </p>
        </div>

        {/* Flagship Project */}
        {featured && (
          <div className="sketch-projects__flagship">
            <ProjectCard project={featured} />
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className="sketch-projects__grid">
          {secondary.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
