import React from "react";
import { PageLayout } from "../components/page-layout";

export const PublicPage: React.FC = () => {


  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Public Page
        </h1>

      </div>
    </PageLayout>
  );
};
