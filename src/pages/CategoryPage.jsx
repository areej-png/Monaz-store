import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../Data/productsData";
import { categoryBannersData } from "../Data/categoryBannersData";
import ProductCard from "../components/ProductCard";
import "../styles/CategoryPage.css";

// Screen size ke hisaab se products per page
const getProductsPerPage = (width) => {
  if (width < 480) return 4;   // mobile: 2 columns × 2 rows
  if (width < 768) return 6;   // mobile large: 2 columns × 3 rows
  if (width < 1024) return 9;  // tablet: 3 columns × 3 rows
  return 12;                    // desktop: 4 columns × 3 rows
};

const CategoryPage = ({ onAddToCart }) => {
  const { category } = useParams();
  const [activeSubCat, setActiveSubCat] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(
    getProductsPerPage(window.innerWidth)
  );

  // Window resize pe automatically update ho
  useEffect(() => {
    const handleResize = () => {
      setProductsPerPage(getProductsPerPage(window.innerWidth));
      setCurrentPage(1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const banner = categoryBannersData.find((b) => b.category === category);
  const subCategories = banner?.subCategories || [];

  const allCategoryProducts = productsData.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  const filteredProducts = activeSubCat
    ? allCategoryProducts.filter((p) => p.subCategory === activeSubCat)
    : allCategoryProducts;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(start, start + productsPerPage);

  const handleSubCatClick = (name) => {
    setActiveSubCat((prev) => (prev === name ? null : name));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      {subCategories.length > 0 && (
        <section className="subcategory-section">
          <h1 className="category-title">{banner?.label}</h1>
          <div className="subcategory-grid">
            {subCategories.map((sub) => (
              <div
                key={sub.name}
                className={`subcategory-card ${activeSubCat === sub.name ? "active" : ""}`}
                onClick={() => handleSubCatClick(sub.name)}
              >
                <img src={sub.image} alt={sub.name} />
                <div className="subcategory-label">{sub.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="category-products">
        <div className="products-info-bar">
          <span>{filteredProducts.length} products</span>
          {totalPages > 1 && (
            <span>Page {currentPage} of {totalPages}</span>
          )}
        </div>

        {paginatedProducts.length > 0 ? (
          <div className="products-grid">
            {paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <p className="no-products">No products found.</p>
        )}

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pg-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &#8592;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pg-btn ${currentPage === page ? "active" : ""}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}

            <button
              className="pg-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &#8594;
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default CategoryPage;