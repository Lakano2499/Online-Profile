"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { certificatesData, Certificate } from "@/data/certificates";

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);

  // Close modal with reverse exit animation
  const closeModal = useCallback(() => {
    if (isClosing || !selectedCert) return;
    setIsClosing(true);
    setTimeout(() => {
      setSelectedCert(null);
      setIsClosing(false);
      // Return focus to the triggering element
      if (triggerRef.current) {
        triggerRef.current.focus();
        triggerRef.current = null;
      }
    }, 240); // Matches exit animation duration (240ms)
  }, [isClosing, selectedCert]);

  // Open modal and store trigger element for focus restoration
  const openModal = (cert: Certificate, e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget;
    scrollPositionRef.current = window.scrollY;
    setSelectedCert(cert);
    setIsClosing(false);
  };

  // Scroll locking that preserves scroll position exactly
  useEffect(() => {
    if (selectedCert) {
      const scrollY = window.scrollY;
      scrollPositionRef.current = scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll"; // Keep scrollbar space to avoid layout shift
    } else {
      const scrollY = scrollPositionRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [selectedCert]);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }

      // Focus trap within modal
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Initial focus on close button or modal container
    const timer = setTimeout(() => {
      if (modalRef.current) {
        const closeBtn = modalRef.current.querySelector<HTMLElement>(".sketch-modal__close-btn");
        if (closeBtn) {
          closeBtn.focus();
        } else {
          modalRef.current.focus();
        }
      }
    }, 50);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [selectedCert, closeModal]);

  const certCount = certificatesData.length;

  return (
    <section id="certificates" className="section section--certificates">
      <div className="container">
        {/* Section Header with Dynamic Certificate Count */}
        <div className="sketch-section-header">
          <span className="sketch-label">Entry 06 — Credentials ({certCount})</span>
          <h2 className="sketch-section-title">Certificates &amp; Training</h2>
          <p className="sketch-section-subtitle">
            Showing {certCount} verified completions, workshop credentials, and technical seminar participations.
          </p>
        </div>

        {/* Empty State when no certificates are configured */}
        {certCount === 0 ? (
          <div className="sketch-card sketch-cert-empty">
            <div className="sketch-card__tape-accent" aria-hidden="true" />
            <div className="sketch-cert-empty__inner">
              <div className="sketch-cert-empty__icon-wrap" aria-hidden="true">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sketch-cert-empty__svg"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>

              <div className="sketch-cert-empty__content">
                <span className="handwritten-chip">Certificates &amp; Credentials</span>
                <h3 className="sketch-cert-empty__title">Currently Updating Certifications</h3>
                <p className="sketch-cert-empty__desc">
                  Academic certificates, specialization badges, and workshop credentials are being
                  compiled and verified. Verified records and PDF certificates will be published here
                  shortly.
                </p>

                <div className="sketch-cert-empty__note">
                  <span className="note-pin" aria-hidden="true">📌</span>
                  <span>
                    To request verified credentials or academic records in the meantime, please reach
                    out through the{" "}
                    <a href="#contact" className="sketch-cert-link">
                      Contact section below
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Compact Responsive Certificate Cards Grid */
          <div className="sketch-cert-grid" role="list" aria-label="Certificates list">
            {certificatesData.map((cert) => (
              <article
                key={cert.id}
                className="sketch-card sketch-cert-card sketch-cert-card--compact"
                role="listitem"
              >
                <div className="sketch-card__tape-accent" aria-hidden="true" />

                <button
                  type="button"
                  className="sketch-cert-card__btn"
                  onClick={(e) => openModal(cert, e)}
                  aria-haspopup="dialog"
                  aria-label={`View certificate preview: ${cert.title}`}
                >
                  {/* Card Header: Icon + Type Badge */}
                  <div className="sketch-cert-card__top">
                    <div className="sketch-cert-card__icon" aria-hidden="true">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>

                    <span
                      className={`sketch-cert-card__type ${
                        cert.type === "Completion"
                          ? "sketch-cert-card__type--completion"
                          : "sketch-cert-card__type--participation"
                      }`}
                    >
                      {cert.type}
                    </span>
                  </div>

                  {/* Card Title & Issuer */}
                  <div className="sketch-cert-card__main">
                    <h3 className="sketch-cert-card__title">{cert.title}</h3>
                    <p className="sketch-cert-card__issuer">{cert.issuer}</p>
                  </div>

                  {/* Card Footer: Date & Preview Affordance */}
                  <div className="sketch-cert-card__bottom">
                    <div className="sketch-cert-card__date-wrap">
                      <span className="sketch-cert-card__date">
                        {cert.eventDate ? `Event: ${cert.eventDate}` : cert.issueDate}
                      </span>
                      {cert.duration && (
                        <span className="sketch-cert-card__duration">
                          • {cert.duration}
                        </span>
                      )}
                    </div>

                    <span className="sketch-cert-card__preview-hint">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Preview
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        )}

        {/* Centered Animated Modal Dialog */}
        {selectedCert && (
          <div
            className={`sketch-modal-overlay ${isClosing ? "is-closing" : "is-open"}`}
            onClick={closeModal}
            role="presentation"
          >
            <div
              ref={modalRef}
              className={`sketch-modal ${isClosing ? "is-closing" : "is-open"}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-cert-title"
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button Top Right */}
              <button
                type="button"
                onClick={closeModal}
                className="sketch-modal__close-btn"
                aria-label="Close certificate preview"
                title="Close (Esc)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Certificate Image Frame - Preserving Full Proportions */}
              <div className="sketch-modal__media-frame">
                <img
                  src={selectedCert.imageUrl}
                  alt={`Certificate for ${selectedCert.title}`}
                  className="sketch-modal__image"
                />
              </div>

              {/* Certificate Details Beneath Preview */}
              <div className="sketch-modal__details">
                <div className="sketch-modal__badge-row">
                  <span
                    className={`sketch-cert-card__type ${
                      selectedCert.type === "Completion"
                        ? "sketch-cert-card__type--completion"
                        : "sketch-cert-card__type--participation"
                    }`}
                  >
                    Certificate of {selectedCert.type}
                  </span>
                  {selectedCert.duration && (
                    <span className="sketch-modal__duration-tag">
                      Duration: {selectedCert.duration}
                    </span>
                  )}
                </div>

                <h3 id="modal-cert-title" className="sketch-modal__title">
                  {selectedCert.title}
                </h3>

                <p className="sketch-modal__issuer">
                  <strong>Issued / Organized by:</strong> {selectedCert.issuer}
                </p>

                {/* Additional Context Rows */}
                <div className="sketch-modal__meta-grid">
                  {selectedCert.eventDate && (
                    <div className="sketch-modal__meta-item">
                      <span className="meta-label">Event Date:</span>
                      <span className="meta-value">{selectedCert.eventDate}</span>
                    </div>
                  )}

                  <div className="sketch-modal__meta-item">
                    <span className="meta-label">
                      {selectedCert.eventDate ? "Issue Date:" : "Date:"}
                    </span>
                    <span className="meta-value">{selectedCert.issueDate}</span>
                  </div>

                  {selectedCert.venue && (
                    <div className="sketch-modal__meta-item">
                      <span className="meta-label">Venue / Platform:</span>
                      <span className="meta-value">{selectedCert.venue}</span>
                    </div>
                  )}

                  {selectedCert.implementedBy && (
                    <div className="sketch-modal__meta-item">
                      <span className="meta-label">Implemented by:</span>
                      <span className="meta-value">{selectedCert.implementedBy}</span>
                    </div>
                  )}

                  {selectedCert.supportedBy && (
                    <div className="sketch-modal__meta-item">
                      <span className="meta-label">Supported by:</span>
                      <span className="meta-value">{selectedCert.supportedBy}</span>
                    </div>
                  )}
                </div>

                {selectedCert.description && (
                  <p className="sketch-modal__desc">{selectedCert.description}</p>
                )}

                {/* Modal Actions */}
                <div className="sketch-modal__actions">
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary btn--sm"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                      Open original PDF
                      <span className="btn-arrow" aria-hidden="true">↗</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn btn--outline btn--sm"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
