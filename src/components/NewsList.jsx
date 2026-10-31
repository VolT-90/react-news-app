import NewsCard from "./NewsCard";

function NewsList({ articles }) {
  return (
    <div className="grid">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
