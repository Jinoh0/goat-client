import { PostCard } from "../../components/homePage/postCard";
import { CreateQuestion } from "../../components/homePage/toolBar/createQuestion";
import { SearchBar } from "../../components/homePage/toolBar/searchBar";
import { FilterBar } from "../../components/homePage/toolBar/filter";
import { NavBar } from "../../components/navbar/navBar";

export function HomePage() {
  return (
    <div className="">
      <NavBar />
      <h1 className="">
        <SearchBar />
        <FilterBar />
        <CreateQuestion />
        <PostCard />
      </h1>
    </div>
  );
}
