import { PostCard } from "../../components/homePage/postCard";
import { CreateQuestion } from "../../components/homePage/toolBar/createQuestion";
import { SearchBar } from "../../components/homePage/toolBar/searchBar";
import { FilterBar } from "../../components/homePage/toolBar/filter";
import { NavBar } from "../../components/navbar/navBar";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="ml-[16%]">
        <SearchBar />
        <FilterBar />
        <CreateQuestion />
        <PostCard />
      </div>
    </div>
  );
}
