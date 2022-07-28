import { PostCard } from "../../components/homePage/postCard";
import { CreateQuestion } from "../../components/homePage/toolBar/createQuestion";
export function HomePage() {
  return (
    <div className="">
      <CreateQuestion />
      <PostCard />
    </div>
  );
}
