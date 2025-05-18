'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles/news.module.css';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();

  const handleLogout = () => {
    signOut({ callbackUrl: window.location.origin + '/login' });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Intan News</div>
      <nav className={styles.nav}>
        <button
          className={styles.logoutButton}
          onClick={handleLogout}
          type="button"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <p>Loading articles...</p>
    </div>
  );
}

function ArticleItem({ article }) {
  const openArticle = () => {
    window.open(article.url, '_blank');
  };

  return (
    <li className={styles.article}>
      <div className={styles.imageWrapper}>
        <img
          src={article.urlToImage || '/default-image.jpg'}
          alt={article.title || 'Article image'}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h2
          className={styles.articleTitle}
          onClick={openArticle}
          role="button"
          tabIndex={0}
          aria-label={`Read article: ${article.title}`}
          onKeyPress={(e) => {
            if (e.key === 'Enter') openArticle();
          }}
        >
          {article.title}
        </h2>
        <p className={styles.description}>{article.description}</p>
        <span className={styles.publishDate}>
          {article.publishedAt
            ? new Date(article.publishedAt).toLocaleString()
            : 'Unknown date'}
        </span>
        <a
          className={styles.readMore}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </li>
  );
}

export default function NewsPage() {
  const [bbcArticles, setBbcArticles] = useState([]);
  const [cnnArticles, setCnnArticles] = useState([]);
  const [bloombergArticles, setBloombergArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiKey = 'YOUR_API_KEY_HERE';
        const bbcUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6ac7061c56da40dcb6c7dc597299020f`;
        const cnnUrl = `https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=6ac7061c56da40dcb6c7dc597299020f`;
        const bloombergUrl = `https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=6ac7061c56da40dcb6c7dc597299020f`;

        const [bbcResponse, cnnResponse, bloombergResponse] = await Promise.all([
          fetch(bbcUrl),
          fetch(cnnUrl),
          fetch(bloombergUrl),
        ]);

        if (!bbcResponse.ok || !cnnResponse.ok || !bloombergResponse.ok) {
          throw new Error('Failed to fetch articles');
        }

        const bbcData = await bbcResponse.json();
        const cnnData = await cnnResponse.json();
        const bloombergData = await bloombergResponse.json();

        setBbcArticles(bbcData.articles.slice(0, 5));
        setCnnArticles(cnnData.articles.slice(0, 5));
        setBloombergArticles(bloombergData.articles.slice(0, 5));
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <Spinner />;
  if (error)
    return (
      <div className={styles.container}>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    );

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Top News Headlines</h1>

        <section>
          <h2 style={{ marginBottom: 16 }}>BBC News</h2>
          <ul className={styles.articles}>
            {bbcArticles.map((article) => (
              <ArticleItem key={article.url} article={article} />
            ))}
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: 16 }}>CNN</h2>
          <ul className={styles.articles}>
            {cnnArticles.map((article) => (
              <ArticleItem key={article.url} article={article} />
            ))}
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: 16 }}>Bloomberg</h2>
          <ul className={styles.articles}>
            {bloombergArticles.map((article) => (
              <ArticleItem key={article.url} article={article} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
