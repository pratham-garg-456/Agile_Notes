import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
  return (
    <Layout
      title="Welcome to Agile Notes"
      description="Notes and resources for Agile"
    >
      <main>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Welcome to Agile Notes</h1>
          <p>
            Your go-to resource for Agile frameworks, mindset, and practices.
          </p>
        </div>
      </main>
    </Layout>
  );
}
