import React from "react";

export function Footer() {
  return (
    <footer className="sketch-footer">
      <div className="container sketch-footer__inner">
        <p className="sketch-footer__copyright">
          &copy; 2026 Aeron Jhed V. Lachano. All rights reserved.
        </p>
        <p className="sketch-footer__attribution">
          Original template foundation by{" "}
          <a
            href="https://bootstrapmade.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            BootstrapMade
          </a>
          . Distributed by{" "}
          <a
            href="https://themewagon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            ThemeWagon
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
