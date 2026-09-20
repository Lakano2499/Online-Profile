import React from "react";
import Image from "next/image";
import { SketchUnderline, SketchPaperclip } from "./SketchSvg";

export function Hero() {
  return (
    <section id="home" className="sketch-hero section">
      <div className="container">
        <div className="sketch-hero__inner">

          {/* Left: Text & Actions */}
          <div className="sketch-hero__content">
            <div className="sketch-hero__badge-wrap">
              <span className="sketch-label">Entry 01 — Overview</span>
              <span className="sketch-status-pill">
                <span className="status-dot" aria-hidden="true" />
                Available for OJT / Internship — Laguna &amp; Remote
              </span>
            </div>

            <p className="sketch-greeting">Hello, I&apos;m</p>

            <h1 className="sketch-hero__name">
              Aeron Jhed V. Lachano
            </h1>

            <div className="sketch-hero__headline-wrap">
              <p className="sketch-hero__headline">
                <span className="sketch-headline-highlight">
                  Computer Science Student · Software Development &amp; Data Analytics
                  <SketchUnderline className="sketch-hero-underline" />
                </span>
              </p>
            </div>

            <p className="sketch-hero__intro">
              Fourth-year Computer Science student at Laguna State Polytechnic
              University seeking OJT and internship opportunities. Experienced in
              building web platforms, mobile apps, and data-driven solutions,
              with practical teamwork contributing to the Berong SafeScape project.
            </p>

            <div className="sketch-hero__actions">
              <a href="#projects" className="btn btn--primary">
                View Projects
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
              <a
                href="/assets/docs/aeron-jhed-lachano-cv.pdf"
                download="Aeron_Jhed_Lachano_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Download CV
                <span className="btn-arrow" aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="sketch-hero__margin-note">
              <span className="handwritten-note">
                ✎ Actively seeking OJT / Internship opportunities
              </span>
            </div>
          </div>

          {/* Right: Clipped Sketchbook Page with SafeScape Preview */}
          <div className="sketch-hero__visual">
            <div className="clipped-page">
              {/* Paperclip ornament */}
              <div className="clipped-page__clip" aria-hidden="true">
                <SketchPaperclip className="paperclip-icon" />
              </div>

              {/* Tape accent */}
              <div className="clipped-page__tape" aria-hidden="true" />

              {/* Browser / Sheet Chrome */}
              <div className="clipped-page__header">
                <div className="sheet-dots" aria-hidden="true">
                  <span className="dot dot--red" />
                  <span className="dot dot--amber" />
                  <span className="dot dot--green" />
                </div>
                <div className="sheet-title-bar">
                  <span className="sheet-live-tag">LIVE</span>
                  <span className="sheet-url">bfpscberong.app</span>
                </div>
              </div>

              {/* Real project screenshot */}
              <div className="clipped-page__image-wrap">
                <Image
                  src="/assets/img/project-safescape.jpg"
                  alt="Screenshot of the Berong SafeScape fire safety platform — Aeron's flagship team project"
                  width={640}
                  height={400}
                  priority
                  className="clipped-page__image"
                />
              </div>

              {/* Hand-annotated caption */}
              <div className="clipped-page__caption">
                <span className="caption-tag">Flagship Project</span>
                <span className="handwritten-caption">
                  ★ Berong SafeScape — Task Master Module
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
