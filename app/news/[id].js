import axios from 'axios';

const ArticleDetail = ({ article }) => (
  <div>
    <h1>{article.title}</h1>
    <p>{article.content}</p>
    <p>{article.publishedAt}</p>
  </div>
);

export async function getServerSideProps({ params }) {
  const res = await axios.get(`https://newsapi.org/v2/everything?q=${params.id}&apiKey=YOUR_API_KEY`);
  const article = res.data.articles[0];

  return { props: { article } };
}

export default ArticleDetail;
