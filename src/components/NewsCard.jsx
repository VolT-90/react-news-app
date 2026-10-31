import { Link } from "react-router-dom";
import { formatDate } from "../api/newsApi";
import FavoriteButton from "./FavoriteButton";

function NewsCard({ article }) {
  return (
    <article className="card">
      {article.image_url ? (
        <img src={article.image_url} alt={article.title} loading="lazy" />
      ) : (
        <div className="img-placeholder" aria-hidden="true">📰</div>
      )}
      <div className="card-body">
        <p className="meta">{article.news_site} · {formatDate(article.published_at)}</p>
        <h2><Link to={`/article/${article.id}`}>{article.title}</Link></h2>
        <p className="summary">{article.summary}</p>
        <div className="actions">
          <Link to={`/article/${article.id}`} className="read">Read article →</Link>
          <FavoriteButton article={article} />
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
