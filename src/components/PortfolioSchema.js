import React from "react";
import { Helmet } from "react-helmet";

const PortfolioSchema = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Md Rafiqul Islam",
    "jobTitle": "Developer | Digital Marketer",
    "url": "https://yourwebsite.com",
    "sameAs": [
      "https://twitter.com/yourprofile",
      "https://linkedin.com/in/yourprofile",
      "https://facebook.com/yourprofile"
    ],
    "description": "Md Rafiqul Islam - Developer, Designer, and Digital Marketer specializing in innovative solutions.",
    "image": "https://yourwebsite.com/Assets/rafiq0.png"
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default PortfolioSchema;
