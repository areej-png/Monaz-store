import { useSearchParams } from "react-router-dom";
import { productsData } from "../Data/productsData";
import ProductCard from "../components/ProductCard";
import "../styles/SearchResultsPage.css";

const SearchResultsPage = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // Sab products mein se search — name, category, description sab check karo
  const matchedProducts = productsData.filter((p) =>
    p?.name?.toLowerCase().includes(query.toLowerCase()) ||
    p?.category?.toLowerCase().includes(query.toLowerCase()) ||
    p?.subCategory?.toLowerCase().includes(query.toLowerCase()) || 
    p?.description?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="search-results-page">
      <div className="search-results-header">
        <h2>
          Search Results for <span>"{query}"</span>
        </h2>
        <p>{matchedProducts.length} result{matchedProducts.length !== 1 ? "s" : ""} found</p>
      </div>

      {matchedProducts.length > 0 ? (
        <section className="search-section">
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
      ) : (
        <div className="no-results">
          <p>No results found for "{query}".</p>
          <p>Try a different keyword or browse our categories.</p>
        </div>
      )}
    </main>
  );
};

export default SearchResultsPage;