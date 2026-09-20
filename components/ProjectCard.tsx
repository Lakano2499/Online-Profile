import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { SketchStar } from "./SketchSvg";

export function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    return (
      <article className="sketch-card sketch-card--featured" id={`project-${project.id}`}>
        <div className="sketch-card__tape-accent" aria-hidden="true" />
        <div className="sketch-card__inner-grid">

          {/* Media Column */}
          <div className="sketch-card__media">
            <div className="sketch-card__image-frame">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  width={720}
                  height={450}
                  className="sketch-card__image"
                />
              ) : (
                <div className="sketch-text-panel__inner">
                  <span className="sketch-text-panel__badge">Flagship Project</span>
                  <h4 className="sketch-text-panel__title">{project.title}</h4>
                </div>
              )}
            </div>
            {project.sketchNote && (
              <div className="sketch-card__handnote" aria-hidden="true">
                <span className="handwritten-note">{project.sketchNote}</span>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="sketch-card__details">
            {project.badge && (
              <div className="sketch-badge">
                <SketchStar className="sketch-badge__star" />
                <span>{project.badge}</span>
              </div>
            )}

            <h3 className="sketch-card__title">{project.title}</h3>

            <p className="sketch-card__desc">{project.description}</p>

            {/* Role Callout */}
            <div className="sketch-role-callout">
              <span className="role-pin" aria-hidden="true">›</span>
              <p className="role-text">{project.role}</p>
            </div>

            {/* Tech Tags */}
            <div className="sketch-tech-list">
              {project.tech.map((t) => (
                <span key={t} className="sketch-tech-tag">
                  {t}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="sketch-card__links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${
                    link.isPrimary ? "btn--primary" : "btn--outline"
                  } btn--sm`}
                >
                  {link.label}
                  <span className="btn-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </article>
    );
  }

  // Secondary Project Card
  return (
    <article className="sketch-card sketch-card--secondary" id={`project-${project.id}`}>
      {project.hasTextPanel || !project.image ? (
        <div className="sketch-card__image-frame sketch-card__text-panel">
          <div className="sketch-text-panel__inner">
            <div className="sketch-text-panel__icon-wrap" aria-hidden="true">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <span className="sketch-text-panel__badge">Mobile Application</span>
            <h4 className="sketch-text-panel__title">{project.title}</h4>
            <p className="sketch-text-panel__subtitle">Collaborative Team Project</p>
          </div>
        </div>
      ) : (
        <div className="sketch-card__image-frame">
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            width={540}
            height={320}
            className="sketch-card__image"
          />
        </div>
      )}

      <div className="sketch-card__body">
        <div className="sketch-card__header-row">
          <h3 className="sketch-card__title">{project.title}</h3>
          {project.sketchNote && (
            <span className="handwritten-chip">{project.sketchNote}</span>
          )}
        </div>

        <p className="sketch-card__desc">{project.description}</p>

        {/* Role Callout */}
        <div className="sketch-role-callout">
          <span className="role-pin" aria-hidden="true">›</span>
          <p className="role-text">{project.role}</p>
        </div>

        {/* Tech Tags */}
        <div className="sketch-tech-list">
          {project.tech.map((t) => (
            <span key={t} className="sketch-tech-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="sketch-card__links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm"
            >
              {link.label}
              <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
