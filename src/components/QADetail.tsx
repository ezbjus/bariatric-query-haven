import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { QA } from "./QAList";

// Sample data - replace with your Excel data
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
            {qa.title}
          </CardTitle>
          <p className="mt-2 text-gray-600">{qa.question}</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{qa.answer}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QADetail;