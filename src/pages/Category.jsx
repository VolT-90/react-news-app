import { useParams } from "react-router-dom";
import NewsFeed from "../components/NewsFeed";
import { CATEGORIES, listUrl } from "../api/newsApi";
import NotFound from "./NotFound";

function Category() {
  const { category } = useParams();
  const name = CATEGORIES.find((c) => c.toLowerCase() === category);

  if (!name) return <NotFound />;

  return (
    <>
      <h1>{name}</h1>
      <NewsFeed url={listUrl(category)} emptyMessage={`No ${name} news found.`} />
    </>
  );
}

export default Category;
