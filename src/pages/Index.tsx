import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import QAList from "@/components/QAList";
import { Helmet } from "react-helmet";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Helmet>
        <title>Bariatric Surgery Q&A - Find Expert Answers</title>
        <meta name="description" content="Get reliable information about bariatric surgery, its procedures, and what to expect. Search our comprehensive database of questions and answers." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is bariatric surgery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bariatric surgery includes various procedures performed on people who are obese. It involves making changes to your digestive system to help you lose weight."
              }
            }]
          })}
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