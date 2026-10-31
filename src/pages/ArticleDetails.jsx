import { Link, useNavigate, useParams } from "react-router-dom";
import useNews from "../hooks/useNews";
import FavoriteButton from "../components/FavoriteButton";
import { articleUrl, formatDate } from "../api/newsApi";

function ArticleDetails() {
  const { id } = useParams(); // always a string
  const navigate = useNavigate();
  const { data: article, loading, error, retry } = useNews(articleUrl(id));

  if (loading) return <p className="status" role="status">Loading article...</p>;

  if (error) {
    return (
      <div className="status">
        <p className="error">Article not found or unable to load. ({error})</p>
        <button onClick={retry}>Try Again</button> <Link to="/">Back home</Link>
      </div>
    );
  }

  return (
    <article className="details">
      <button className="secondary" onClick={() => navigate(-1)}>← Back</button>
      <h1>{article.title}</h1>
      <p className="meta">{article.news_site} · {formatDate(article.published_at)}</p>
      {article.image_url && <img src={article.image_url} alt={article.title} />}
      <p>{article.summary}</p>
      <div className="actions">
        <a className="read" href={article.url} target="_blank" rel="noreferrer">
          Read the original article ↗
        </a>
        <FavoriteButton article={article} />
      </div>
    </article>
  );
}

export default ArticleDetails;
