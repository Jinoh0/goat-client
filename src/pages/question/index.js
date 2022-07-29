import { NavBar } from "../../components/navbar/navBar";
import { QuestionCard } from "../../components/question/questionCard";
import { CommentCard } from "../../components/question/commentCard";
import { CommentSection } from "../../components/question/commentSection";
export function Question() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="ml-[16%]">
        <NavBar />
        <QuestionCard />
        <CommentSection />
        <CommentCard />
      </div>
    </div>
  );
}
