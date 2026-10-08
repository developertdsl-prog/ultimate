import { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, excerpt, category, image, date, author }) => {
  const categoryColors = {
    Lifestyle: 'var(--tertiary)',
    Fashion: 'var(--primary)',
    DIY: 'var(--secondary)',
    Beauty: 'var(--primary)',
    SelfCare: 'var(--tertiary)'
  };

  const backgroundColor = categoryColors[category] || 'var(--primary)';

  return (
    <article className="article-card">
      <Link to={`/article/${id}`} className="card-link">
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image aspect-portrait" />
          <span className="category-chip" style={{ backgroundColor }}>{category}</span>
        </div>
        <div className="card-content">
          <h3 className="card-title text-sans">{title}</h3>
          <p className="card-excerpt">{excerpt}</p>
          <div className="card-footer flex-between">
            <span className="card-date">{date}</span>
            <span className="card-author">By {author}</span>
          </div>
        </div>
      </Link>

      <style dangerouslySetInnerHTML={{ __html: `
        .article-card {
          margin-bottom: 40px;
          transition: transform 0.3s ease;
        }
        
        .article-card:hover {
          transform: translateY(-8px);
        }
        
        .card-image-wrapper {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 20px;
          background: #ebebeb;
        }
        
        .card-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .article-card:hover .card-image {
          transform: scale(1.05);
        }
        
        .category-chip {
          position: absolute;
          top: 16px;
          left: 16px;
          color: white;
          padding: 6px 12px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        
        .card-title {
          font-size: 1.4rem;
          line-height: 1.3;
          margin-bottom: 12px;
          color: var(--dark);
          font-weight: 700;
        }
        
        .card-excerpt {
          font-size: 0.95rem;
          color: rgba(26,26,26,0.6);
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .card-footer {
          font-size: 0.8rem;
          color: rgba(26,26,26,0.5);
          padding-top: 16px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        
        .card-author {
          font-weight: 600;
          color: var(--dark);
        }
      `}} />
    </article>
  );
};

export default ArticleCard;
