import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface QA {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// Updated Q&A data from provided content
const sampleQAs: QA[] = [
  {
    id: 1,
    question: "I just had surgery, any advice is appreciated!",
    answer: "I'm laying in the hospital bed right now. If you guys have any advice for the next month that would be great! How do I sleep? What was the best things for you for your diet? How did you get through the pain? How did you get through the liquid diet phase easier? How do you bathe? (They haven't went over this with me yet, hopefully they do before I leave here). Any other tips are appreciated!",
    category: "General",
  },
  {
    id: 2,
    question: "10 days post op. I'm over it",
    answer: "I'm over liquids! I can't take another drink of something or I'll go nuts! I've had some applesauce/pudding/yogurt. It went down fine. Would it absolutely kill me if I had some cottage cheese? Ricotta bake? Refried beans? Something pureed? I feel like id be okay. My post op appt is 12/5 and honestly idk if I can wait till then to even talk to my surgeon about advancing my diet.",
    category: "General",
  },
  {
    id: 3,
    question: "How to get past 'missing out'",
    answer: "I'm brand new to this journey and want to see how you all got past (or are working on getting past) the feeling of 'missing out'? Example: my husband and I usually go out for a nice anniversary dinner; how do you deal with that? My daughter and I bake like crazy for the holidays. It's a real bonding experience for us. How do you get past that?",
    category: "General",
  },
  {
    id: 4,
    question: "What changes did you experience after weight loss?",
    answer: "Hi everyone! I'm a 20F (CW: 290), and I'm scheduled for gastric bypass surgery on 12/11. My pre-op liquid diet starts tomorrow, and everything is starting to feel very real. Honestly, I'm excited but also terrified. For those of you who have gone through significant weight loss—whether from surgery or other methods—what positive changes did you notice in your life? What surprised you the most? What gave you joy?",
    category: "Nutrition",
  },
  {
    id: 5,
    question: "What does 'full' feel like after surgery for you?",
    answer: "I was watching a YouTube video today about VSG and they said that the sensation of being full is different after surgery. I would appreciate some more explanation and hearing about personal experiences with feelings of fullness before vs after surgery.",
    category: "Nutrition",
  },
  {
    id: 6,
    question: "Having some doubts about surgery",
    answer: "Hey I (26F) have some doubts about surgery that I was wondering if anyone could dispel. My doctor said I would most likely get gastric bypass or duodenal switch surgery since I have PCOS and insulin resistance and both of those surgeries have been shown to be great for insulin resistance. I'm worried about dumping syndrome and the fact that I will probably never be able to eat sugar or fat if I get either surgery.",
    category: "Nutrition",
  }
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