import React from "react";

export function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <div className="sketch-section-header">
          <span className="sketch-label">Entry 07 — Get In Touch</span>
          <h2 className="sketch-section-title">Let&apos;s Connect</h2>
          <p className="sketch-section-subtitle">
            I&apos;m actively open to OJT, internship, and entry-level software
            development opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="sketch-contact__wrap">

          {/* Primary Action: Email Card */}
          <a
            href="mailto:aeronlachano@gmail.com"
            className="sketch-contact-card sketch-contact-card--primary"
            id="contact-email"
          >
            <div className="sketch-contact-card__icon-box">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="sketch-contact-card__content">
              <span className="sketch-contact-card__sublabel">
                PRIMARY CONTACT &bull; DIRECT EMAIL
              </span>
              <span className="sketch-contact-card__value">
                aeronlachano@gmail.com
              </span>
            </div>
            <span className="sketch-contact-card__action" aria-hidden="true">
              Send Email →
            </span>
          </a>

          {/* Secondary Links Row */}
          <div className="sketch-contact__secondary-row">

            {/* Phone */}
            <a
              href="tel:+639922740033"
              className="sketch-contact-card sketch-contact-card--secondary"
              id="contact-phone"
            >
              <div className="sketch-contact-card__icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="sketch-contact-card__content">
                <span className="sketch-contact-card__sublabel">PHONE</span>
                <span className="sketch-contact-card__value">
                  +63 992 274 0033
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Lakano2499"
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-contact-card sketch-contact-card--secondary"
              id="contact-github"
            >
              <div className="sketch-contact-card__icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div className="sketch-contact-card__content">
                <span className="sketch-contact-card__sublabel">GITHUB</span>
                <span className="sketch-contact-card__value">Lakano2499</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aeron-jhed-lachano-a6b87637b/"
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-contact-card sketch-contact-card--secondary"
              id="contact-linkedin"
            >
              <div className="sketch-contact-card__icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="sketch-contact-card__content">
                <span className="sketch-contact-card__sublabel">LINKEDIN</span>
                <span className="sketch-contact-card__value">
                  Aeron Jhed Lachano
                </span>
              </div>
            </a>

          </div>

          {/* Location Supporting Text */}
          <div className="sketch-contact__location">
            <span className="location-pin" aria-hidden="true">📍</span>
            <p className="location-text">
              <strong>Laguna, Philippines</strong> &mdash; Open to on-site OJT in
              Laguna / nearby areas and remote software engineering opportunities.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
