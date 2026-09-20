import React from "react";
import Image from "next/image";

interface MetaPill {
  icon: string;
  text: string;
}

const metaPills: MetaPill[] = [
  { icon: "📍", text: "Laguna, Philippines" },
  { icon: "🎓", text: "BS Computer Science" },
  { icon: "🏛️", text: "LSPU — Sta. Cruz Campus" },
  { icon: "📅", text: "4th Year (2023 – Present)" }
];

export function About() {
  return (
    <section id="about" className="section section--about">
      <div className="container">
        <div className="sketch-section-header">
          <span className="sketch-label">Entry 02 — Background</span>
          <h2 className="sketch-section-title">A Bit About Who I Am</h2>
          <p className="sketch-section-subtitle">
            Computer science student, software builder, and data analytics enthusiast.
          </p>
        </div>

        <div className="sketch-about__grid">

          {/* Portrait Column */}
          <div className="sketch-about__portrait-wrap">
            <div className="sketch-polaroid">
              <div className="sketch-polaroid__tape" aria-hidden="true" />
              <div className="sketch-polaroid__photo">
                <Image
                  src="/assets/img/profile-400.jpg"
                  alt="Aeron Jhed V. Lachano — portrait in formal attire"
                  width={340}
                  height={380}
                  className="sketch-polaroid__img"
                />
              </div>
              <div className="sketch-polaroid__footer">
                <span className="handwritten-caption">
                  Aeron Jhed V. Lachano ✎
                </span>
              </div>
            </div>

            <div className="sketch-about__margin-note" aria-hidden="true">
              <span className="handwritten-note">
                &ldquo;Turning ideas into working software&rdquo;
              </span>
            </div>
          </div>

          {/* Bio & Details Column */}
          <div className="sketch-about__bio-card">
            <div className="sketch-about__bio-text">
              <p>
                I&apos;m a fourth-year Computer Science student at Laguna State
                Polytechnic University &mdash; Sta. Cruz Campus, preparing for a
                career in software development and data analytics. My academic
                projects span web applications, mobile platforms, machine learning,
                game design, and networking.
              </p>
              <p>
                I learn best by building practical solutions. Whether
                contributing interactive modules to a community fire safety
                education platform, structuring cross-platform mobile apps in
                Flutter, or analyzing datasets with Python, I enjoy the discipline
                of turning conceptual models into functional code. I&apos;m eager
                to bring this focus and curiosity to an OJT or internship role.
              </p>
            </div>

            {/* Metadata Pills */}
            <div className="sketch-about__pills">
              {metaPills.map((pill) => (
                <div key={pill.text} className="sketch-pill">
                  <span className="sketch-pill__icon" aria-hidden="true">
                    {pill.icon}
                  </span>
                  <span className="sketch-pill__text">{pill.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
