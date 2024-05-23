import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {


  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src="https://cdn.auth0.com/blog/developer-hub/react-logo.svg"
              alt="react"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="">
              <>My App</>
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
