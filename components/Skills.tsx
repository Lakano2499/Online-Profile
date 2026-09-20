import React from "react";
import { skillsData } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section section--skills">
      <div className="container">
        <div className="sketch-section-header">
          <span className="sketch-label">Entry 04 — Technical Toolkit</span>
          <h2 className="sketch-section-title">What I Work With</h2>
          <p className="sketch-section-subtitle">
            Skills I&apos;ve developed through coursework, projects, and
            hands-on software development practice.
          </p>
        </div>

        <div className="sketch-skills__grid">
          {skillsData.map((group) => (
            <div key={group.id} className="sketch-skill-card">
              <div className="sketch-skill-card__header">
                <div className="sketch-skill-card__title-wrap">
                  <span className="sketch-skill-card__icon" aria-hidden="true">
                    {group.icon === "code" && "</>"}
                    {group.icon === "tools" && "⚡"}
                    {group.icon === "brain" && "🧠"}
                    {group.icon === "network" && "🌐"}
                    {group.icon === "team" && "🤝"}
                  </span>
                  <h3 className="sketch-skill-card__category">
                    {group.category}
                  </h3>
                </div>
                {group.annotation && (
                  <span className="handwritten-chip" aria-hidden="true">
                    {group.annotation}
                  </span>
                )}
              </div>

              <div className="sketch-skill-card__tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="sketch-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
