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
  { icon: "📅", text: "4th Year (2022 – Present)" }
];

export function About() {
  return (
    <section id="about" className="section section--about">
      <div className="container">
        <div className="sketch-section-header">
          <span className="sketch-label">Entry 03 — Background</span>
          <h2 className="sketch-section-title">A Bit About Who I Am</h2>
          <p className="sketch-section-subtitle">
            Computer science student, builder, and aspiring full-stack developer.
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
                Polytechnic University &mdash; Sta. Cruz Campus, working toward a
                career in software development. My coursework and project
                experience span web development, mobile apps, machine learning,
                game development, and networking.
              </p>
              <p>
                I learn best by building things. Whether it&apos;s contributing
                game modules to a team-built fire safety education platform,
                training text classifiers with BERT, or designing a 2D game in
                Godot, I enjoy the process of turning ideas into working
                software. I&apos;m looking for OJT and internship opportunities
                where I can contribute, learn from experienced developers, and
                grow into a well-rounded full-stack developer.
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
