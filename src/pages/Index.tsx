import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import QAList from "@/components/QAList";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-medical-700">
          Find Answers to Your Bariatric Surgery Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get reliable information about bariatric surgery, its procedures, and what to expect. Search our comprehensive database of questions and answers.
        </p>
      </div>
      
      <SearchBar onSearch={setSearchQuery} />
      
      <QAList searchQuery={searchQuery} />
    </div>
  );
};

export default Index;