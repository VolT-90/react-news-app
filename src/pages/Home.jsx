import NewsFeed from "../components/NewsFeed";
import { listUrl } from "../api/newsApi";

function Home() {
  return (
    <>
      <h1>Latest news</h1>
      <NewsFeed url={listUrl()} />
    </>
  );
}

export default Home;
