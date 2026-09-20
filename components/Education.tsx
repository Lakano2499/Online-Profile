import React from "react";
import { educationData } from "@/data/experience";

export function Education() {
  return (
    <section id="education" className="section section--education">
      <div className="container">
        <div className="sketch-section-header">
          <span className="sketch-label">Entry 06 — Education</span>
          <h2 className="sketch-section-title">Academic Background</h2>
          <p className="sketch-section-subtitle">
            Formal education, degree specialization, and academic foundations in computer science.
          </p>
        </div>

        <div className="sketch-education__wrap">
          <div className="sketch-timeline sketch-timeline--single">
            {educationData.map((item) => (
              <div key={item.id} className="sketch-timeline-item">
                <div className="sketch-timeline-marker" aria-hidden="true">
                  <span className="marker-dot" />
                </div>
                <div className="sketch-timeline-card">
                  <div className="sketch-timeline-card__top">
                    <h3 className="sketch-item-title">{item.title}</h3>
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
      </div>
    </section>
  );
}
