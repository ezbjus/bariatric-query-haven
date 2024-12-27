import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface QA {
  id: number;
  title: string;
  question: string;
  answer: string;
}

// Updated Q&A data with new structure
const sampleQAs: QA[] = [
  {
    id: 1,
    title: "Post-Surgery Advice Needed",
    question: "I just had surgery, any advice is appreciated! I'm laying in the hospital bed right now. If you guys have any advice for the next month that would be great! How do I sleep? What was the best things for you for your diet? How did you get through the pain? How did you get through the liquid diet phase easier? How do you bathe?",
    answer: "Here are some key tips for your recovery: 1) Sleep elevated on your back with pillows for support. 2) Stay hydrated and follow your doctor's diet plan strictly. 3) Take prescribed pain medication as directed. 4) For the liquid diet, try different protein shake flavors and warm broths. 5) For bathing, follow your surgeon's instructions - typically sponge baths initially, then shower after cleared by your doctor. Always have someone nearby for your first shower post-surgery.",
  },
  {
    id: 2,
    title: "Struggling with Liquid Diet",
    question: "I'm over liquids! I can't take another drink of something or I'll go nuts! I've had some applesauce/pudding/yogurt. It went down fine. Would it absolutely kill me if I had some cottage cheese? Ricotta bake? Refried beans? Something pureed?",
    answer: "It's crucial to stick to your prescribed diet plan. While it's tempting to advance your diet, doing so too quickly can cause complications. Contact your surgical team before making any diet modifications. They can provide safe alternatives within your current diet phase.",
  },
  {
    id: 3,
    title: "Dealing with Social Situations",
    question: "How to get past 'missing out'? I'm brand new to this journey and want to see how you all got past (or are working on getting past) the feeling of 'missing out'?",
    answer: "Focus on what you're gaining rather than what you're giving up. Create new traditions - for example, instead of food-centered activities, try new hobbies or ways to celebrate. Remember that you can still participate in social events, just in different ways. Many patients find that the health benefits and improved quality of life far outweigh any temporary feelings of missing out.",
  }
];

interface QAListProps {
  searchQuery?: string;
}

const QAList = ({ searchQuery = "" }: QAListProps) => {
  const filteredQAs = sampleQAs.filter((qa) =>
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