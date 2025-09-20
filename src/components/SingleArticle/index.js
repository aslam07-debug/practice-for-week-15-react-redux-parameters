import "./SingleArticle.css";
import { useParams } from "react-router-dom";
import ArticleList from "../ArticleList";
import { useDispatch, useSelector } from "react-redux";

const SingleArticle = () => {
  const { id } = useParams();

  const articles = useSelector((state) => state.articleState.entries);
  const article = articles.find((article) => article.id == id);
  if (!article) {
    return <h2>Loading article...</h2>; // or "Article not found"
  }
  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt="home" />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
