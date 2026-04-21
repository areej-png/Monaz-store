import { useSearchParams } from "react-router-dom";
import { productsData } from "../Data/productsData";
import { hitArticlesData } from "../Data/hitArticlesData";
import ProductCard from "../components/ProductCard";
import "../styles/SearchResultsPage.css";

const SearchResultsPage = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // productsData se filter
  const matchedProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // hitArticlesData se filter
  const matchedHits = hitArticlesData.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults = matchedProducts.length + matchedHits.length;

  return (
    <main className="search-results-page">
      <div className="search-results-header">
        <h2>
          Search Results for <span>"{query}"</span>
        </h2>
        <p>{totalResults} results found</p>
      </div>

      {/* Products Section */}
      {matchedProducts.length > 0 && (
        <section className="search-section">
          <h3 className="search-section-title">Products</h3>
          <div className="products-grid">
            {matchedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </section>
      )}

      {/* Hit Articles Section */}
      {matchedHits.length > 0 && (
        <section className="search-section">
          <h3 className="search-section-title">Featured Items</h3>
          <div className="products-grid">
            {matchedHits.map((item, index) => (
              <div key={index} className="hit-result-card">
                <img src={item.image} alt={item.label} />
                <p className="hit-result-name">{item.label}</p>
                <p className="hit-result-price">Rs {item.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Kuch nahi mila */}
      {totalResults === 0 && (
        <div className="no-results">
          <p>"{query}" ka koi product nahi mila.</p>
          <p>Dobara try karein ya category browse karein.</p>
        </div>
      )}
    </main>
  );
};

export default SearchResultsPage;