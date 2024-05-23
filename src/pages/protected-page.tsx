import React from "react";
import { PageLayout } from "../components/page-layout";

export const ProtectedPage: React.FC = () => {

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Protected Page
        </h1>

      </div>
    </PageLayout>
  );
};
