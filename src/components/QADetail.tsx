import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { QA } from "./QAList";

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

const QADetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const qa = sampleQAs.find((q) => q.id === Number(id));

  if (!qa) {
    return <div>Question not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-medical-700">
            {qa.question}
          </CardTitle>
          <span className="inline-block mt-2 text-sm font-medium text-medical-600 bg-medical-100 px-3 py-1 rounded-full">
            {qa.category}
          </span>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QADetail;