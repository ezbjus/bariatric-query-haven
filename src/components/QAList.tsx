import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { qaData } from "@/data/qaData";

export interface QA {
  id: number;
  title: string;
  question: string;
  answer: string;
}

interface QAListProps {
  searchQuery?: string;
}

const QAList = ({ searchQuery = "" }: QAListProps) => {
  const filteredQAs = qaData.filter((qa) =>
    qa.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    qa.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredQAs.map((qa) => (
        <Link to={`/qa/${qa.id}`} key={qa.id}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">{qa.title}</CardTitle>
              <ChevronRight className="h-5 w-5 text-medical-500" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 line-clamp-2">{qa.question}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default QAList;