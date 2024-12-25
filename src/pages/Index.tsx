import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import QAList from "@/components/QAList";
import { Helmet } from "react-helmet";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Create FAQ schema items from the QA list
  const faqSchemaItems = [
    {
      "@type": "Question",
      "name": "What is bariatric surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bariatric surgery includes various procedures performed on people who are obese. It involves making changes to your digestive system to help you lose weight."
      }
    },
    {
      "@type": "Question",
      "name": "Who is eligible for bariatric surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, bariatric surgery is recommended for people with a BMI of 40 or higher, or a BMI of 35-39.9 with serious weight-related health problems."
      }
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "/#organization",
        "name": "Bariatric Surgery Q&A",
        "url": "/",
        "description": "Expert answers to your bariatric surgery questions"
      },
      {
        "@type": "WebSite",
        "@id": "/#website",
        "url": "/",
        "name": "Bariatric Surgery Q&A",
        "publisher": {
          "@id": "/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "/#webpage",
        "url": "/",
        "name": "Bariatric Surgery Q&A - Expert Answers to Your Weight Loss Surgery Questions",
        "isPartOf": {
          "@id": "/#website"
        },
        "about": {
          "@id": "/#organization"
        },
        "description": "Find comprehensive answers to your bariatric surgery questions. Expert information about procedures, recovery, lifestyle changes, and post-surgery care."
      },
      {
        "@type": "FAQPage",
        "@id": "/#faq",
        "mainEntity": faqSchemaItems
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Bariatric Surgery Q&A - Find Expert Answers</title>
        <meta
          name="description"
          content="Get reliable information about bariatric surgery, its procedures, and what to expect. Search our comprehensive database of questions and answers."
        />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <main role="main" className="space-y-8">
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-medical-700">
            Find Answers to Your Bariatric Surgery Questions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get reliable information about bariatric surgery, its procedures, and what to expect. Search our comprehensive database of questions and answers.
          </p>
        </section>
        
        <section aria-label="Search section">
          <SearchBar onSearch={setSearchQuery} />
        </section>
        
        <section aria-label="Q&A List">
          <QAList searchQuery={searchQuery} />
        </section>
      </main>
    </>
  );
};

export default Index;