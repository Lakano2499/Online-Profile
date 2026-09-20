import React from "react";
import { educationData, experienceData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section section--experience">
      <div className="container">
        <div className="sketch-section-header">
          <span className="sketch-label">Entry 05 — Journey</span>
          <h2 className="sketch-section-title">Education &amp; Experience</h2>
          <p className="sketch-section-subtitle">
            Academic milestones and professional work experiences.
          </p>
        </div>

        <div className="sketch-timeline-columns">

          {/* Education Column */}
          <div className="sketch-timeline-col">
            <div className="sketch-timeline-col__header">
              <span className="sketch-col-icon" aria-hidden="true">🎓</span>
              <h3 className="sketch-col-title">Education</h3>
            </div>

            <div className="sketch-timeline">
              {educationData.map((item) => (
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
                    {item.description && (
                      <p className="sketch-item-desc">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="sketch-timeline-col">
            <div className="sketch-timeline-col__header">
              <span className="sketch-col-icon" aria-hidden="true">💼</span>
              <h3 className="sketch-col-title">Experience</h3>
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

        </div>
      </div>
    </section>
  );
}
