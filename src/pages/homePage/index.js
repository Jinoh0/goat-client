import { PostCard } from "../../components/homePage/postCard";
import { CreateQuestion } from "../../components/homePage/toolBar/createQuestion";
export function HomePage() {
  return (
    <div className="">
      <h1 className="">
        <CreateQuestion />
        <PostCard />
      </h1>
    </div>
  );
}
