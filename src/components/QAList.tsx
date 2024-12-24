import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface QA {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// Sample data - replace with your Excel data
const sampleQAs: QA[] = [
  {
    id: 1,
    question: "What is bariatric surgery?",
    answer: "Bariatric surgery includes various procedures performed on people who are obese. It involves making changes to your digestive system to help you lose weight.",
    category: "General",
  },
  {
    id: 2,
    question: "Who is eligible for bariatric surgery?",
    answer: "Generally, bariatric surgery is recommended for people with a BMI of 40 or higher, or a BMI of 35-39.9 with serious weight-related health problems.",
    category: "Eligibility",
  },
  {
    id: 3,
    question: "What are the different types of bariatric surgery?",
    answer: "The main types include gastric bypass, sleeve gastrectomy, adjustable gastric band, and biliopancreatic diversion with duodenal switch.",
    category: "Procedures",
  },
];

interface QAListProps {
  searchQuery?: string;
}

const QAList = ({ searchQuery = "" }: QAListProps) => {
  const filteredQAs = sampleQAs.filter((qa) =>
    qa.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredQAs.map((qa) => (
        <Link to={`/qa/${qa.id}`} key={qa.id}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">{qa.question}</CardTitle>
              <ChevronRight className="h-5 w-5 text-medical-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 line-clamp-2">{qa.answer}</p>
              <span className="inline-block mt-2 text-xs font-medium text-medical-600 bg-medical-100 px-2 py-1 rounded-full">
                {qa.category}
              </span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default QAList;