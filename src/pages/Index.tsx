import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import QAList from "@/components/QAList";
import { Helmet } from "react-helmet";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Enhanced FAQ schema items
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
    },
    {
      "@type": "Question",
      "name": "What are the different types of bariatric surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common types include gastric bypass, sleeve gastrectomy, adjustable gastric band, and biliopancreatic diversion with duodenal switch (BPD/DS)."
      }
    },
    {
      "@type": "Question",
      "name": "What are the risks of bariatric surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Risks include infection, blood clots, bleeding, adverse reactions to anesthesia, and long-term vitamin and mineral deficiencies."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the recovery period after bariatric surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recovery time varies by procedure but typically ranges from 3-6 weeks. Full recovery may take several months."
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
        "description": "Expert answers to your bariatric surgery questions",
        "logo": {
          "@type": "ImageObject",
          "url": "/og-image.png"
        }
      },
      {
        "@type": "WebSite",
        "@id": "/#website",
        "url": "/",
        "name": "Bariatric Surgery Q&A",
        "publisher": {
          "@id": "/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "/?search={search_term_string}",
          "query-input": "required name=search_term_string"
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
        "description": "Find comprehensive answers to your bariatric surgery questions. Expert information about procedures, recovery, lifestyle changes, and post-surgery care.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "/",
                "name": "Home"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "/#faq",
        "mainEntity": faqSchemaItems
      },
      {
        "@type": "MedicalWebPage",
        "@id": "/#medicalwebpage",
        "about": {
          "@type": "MedicalProcedure",
          "name": "Bariatric Surgery",
          "description": "Surgical procedures performed on the stomach or intestines to induce weight loss",
          "relevantSpecialty": {
            "@type": "MedicalSpecialty",
            "name": "Bariatric Surgery"
          }
        },
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Patients considering weight loss surgery"
        },
        "lastReviewed": "2024-03-20"
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