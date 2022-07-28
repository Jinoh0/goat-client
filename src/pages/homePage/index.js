import { PostCard } from "../../components/homePage/postCard";
import { CreateQuestion } from "../../components/homePage/toolBar/createQuestion";
import { SearchBar } from "../../components/homePage/toolBar/searchBar";


export function HomePage() {
  return (
    <div className="">
      <h1 className="">
      <SearchBar />
        <CreateQuestion />
        <PostCard />
      </h1>
    </div>
  );
}
