import React from "react";
import { experienceData, collaborationData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section section--experience">
      <div className="container">
        <div className="sketch-section-header">
          <span className="sketch-label">Entry 05 — Experience &amp; Collaboration</span>
          <h2 className="sketch-section-title">Experience &amp; Team Collaboration</h2>
          <p className="sketch-section-subtitle">
            Professional administrative support roles and collaborative software development responsibilities.
          </p>
        </div>

        <div className="sketch-timeline-columns">

          {/* Work Experience Column */}
          <div className="sketch-timeline-col">
            <div className="sketch-timeline-col__header">
              <span className="sketch-col-icon" aria-hidden="true">💼</span>
              <h3 className="sketch-col-title">Work Experience</h3>
            </div>

            <div className="sketch-timeline">
              {experienceData.map((item) => (
                <div key={item.id} className="sketch-timeline-item">
                  <div className="sketch-timeline-marker" aria-hidden="true">
                    <span className="marker-dot" />
                  </div>
                  <div className="sketch-timeline-card">
                    <div className="sketch-timeline-card__top">
                      <h4 className="sketch-item-title">{item.title}</h4>
                      {item.sketchTag && (
                        <span className="handwritten-chip">{item.sketchTag}</span>
                      )}
                    </div>
                    <p className="sketch-item-inst">{item.institution}</p>
                    <span className="sketch-item-period">{item.period}</span>
                    {item.highlights && (
                      <ul className="sketch-item-bullets">
                        {item.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Collaboration Column */}
          <div className="sketch-timeline-col">
            <div className="sketch-timeline-col__header">
              <span className="sketch-col-icon" aria-hidden="true">🤝</span>
              <h3 className="sketch-col-title">Team Collaboration</h3>
            </div>

            <div className="sketch-timeline">
              {collaborationData.map((item) => (
                <div key={item.id} className="sketch-timeline-item">
                  <div className="sketch-timeline-marker" aria-hidden="true">
                    <span className="marker-dot" />
                  </div>
                  <div className="sketch-timeline-card">
                    <div className="sketch-timeline-card__top">
                      <h4 className="sketch-item-title">{item.title}</h4>
                      {item.sketchTag && (
                        <span className="handwritten-chip">{item.sketchTag}</span>
                      )}
                    </div>
                    <p className="sketch-item-inst">{item.context}</p>
                    <span className="sketch-item-period">{item.role}</span>
                    <ul className="sketch-item-bullets">
                      {item.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
