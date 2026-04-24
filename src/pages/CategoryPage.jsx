import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../Data/productsData";
import { categoryBannersData } from "../Data/categoryBannersData";
import ProductCard from "../components/ProductCard";
import "../styles/CategoryPage.css";

// Screen size ke hisaab se products per page
const getProductsPerPage = (width) => {
  if (width < 480) return 4;
  if (width < 768) return 6;
  if (width < 1024) return 9;
  return 12;
};

// subCategory name ko URL slug mein convert karo
const toSlug = (name) =>
  name?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

// URL slug ko subCategory name mein convert karo
const fromSlug = (slug, subCategories) =>
  subCategories.find((s) => toSlug(s.name) === slug)?.name || null;

const CategoryPage = ({ onAddToCart }) => {
  const { category, subcategory } = useParams(); // subcategory = URL slug
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(
    getProductsPerPage(window.innerWidth)
  );

  // Window resize
  useEffect(() => {
    const handleResize = () => {
      setProductsPerPage(getProductsPerPage(window.innerWidth));
      setCurrentPage(1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Page change on category/subcategory switch
  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category, subcategory]);

  const banner = categoryBannersData.find(
    (b) => b.category?.toLowerCase() === category?.toLowerCase()
  );
  const subCategories = banner?.subCategories || [];

  // Active subCategory name (from URL slug)
  const activeSubCatName = subcategory
    ? fromSlug(subcategory, subCategories)
    : null;

  // Sab products is category ke
  const allCategoryProducts = productsData.filter(
    (p) => p.category?.toLowerCase() === category?.toLowerCase()
  );

  // Filter by subCategory if URL mein subcategory hai
  const filteredProducts = activeSubCatName
    ? allCategoryProducts.filter((p) => p.subCategory === activeSubCatName)
    : allCategoryProducts;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(start, start + productsPerPage);

  // SubCategory card click → navigate to subcategory URL
  const handleSubCatClick = (subCatName) => {
    const slug = toSlug(subCatName);
    if (activeSubCatName === subCatName) {
      // Same pe click → back to all
      navigate(`/category/${category}`);
    } else {
      navigate(`/category/${category}/${slug}`);
    }
  };

  // Back button → category page
  const handleBack = () => {
    navigate(`/category/${category}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Coming Soon state: subcategory selected hai, products nahi hain
  const isSubCatSelected = !!subcategory;
  const isComingSoon = isSubCatSelected && filteredProducts.length === 0;

  return (
    <main>
      {/* ── SUBCATEGORY VIEW: Koi subcategory select nahi ── */}
      {!isSubCatSelected && subCategories.length > 0 && (
        <section className="subcategory-section">
          <h1 className="category-title">{banner?.label}</h1>
          <div className="subcategory-grid">
            {subCategories.map((sub) => (
              <div
                key={sub.name}
                className="subcategory-card"
                onClick={() => handleSubCatClick(sub.name)}
              >
                <img src={sub.image} alt={sub.name} />
                <div className="subcategory-label">{sub.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── BACK BUTTON: Subcategory selected hai ── */}
      {isSubCatSelected && (
        <section className="subcategory-header">
          <button className="back-btn" onClick={handleBack}>
            &#8592; Back to {banner?.label || "All"}
          </button>
          <h2 className="subcategory-title">
            {activeSubCatName || subcategory}
          </h2>
        </section>
      )}

      {/* ── COMING SOON: Subcategory ── */}
      {isComingSoon ? (
        <section className="coming-soon-section">
          <div className="coming-soon-content">
            <span className="coming-soon-icon">🛍️</span>
            <h2>Coming Soon</h2>
            <p>
              We're working hard to bring you amazing{" "}
              <strong>{activeSubCatName || subcategory}</strong> products.
              <br />
              Check back soon!
            </p>
            <button className="back-btn outline" onClick={handleBack}>
              &#8592; Browse {banner?.label || "All Products"}
            </button>
          </div>
        </section>
      ) : (
        /* ── PRODUCTS SECTION ── */
        <section className="category-products">
          <div className="products-info-bar">
            <span>{filteredProducts.length} products</span>
            {totalPages > 1 && (
              <span>
                Page {currentPage} of {totalPages}
              </span>
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

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`pg-btn ${currentPage === page ? "active" : ""}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              )}

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
      )}
    </main>
  );
};

export default CategoryPage;