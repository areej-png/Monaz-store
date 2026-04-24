import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./Layout/layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import BlogList from "./components/BlogList";
import BlogPostPage from "./pages/BlogPostPage";
import NightSuitBlogList from "./components/Nightsuitbloglist";
import NightSuitBlogPostPage from "./pages/nightsbpp";
import CheckoutPage from "./pages/CheckoutPage";
import MistakesBlogList from "./components/MistakesblogList";
import MistakesBlogPostPage from "./pages/MistakesblogPostPage";
import BraCalculatorPage from "./pages/BraCalculatorPage";
import FAQPage from "./pages/FAQPage";
import ReturnsPage from "./pages/ReturnsPage";
import AffiliatePage from "./pages/AffiliatePage";
import AboutPage from "./pages/AboutPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/Privacypage";
import SitemapPage from "./pages/Sitemappage";


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.selectedSize === product.selectedSize
    );

    if (existingIndex !== -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += product.quantity;
      setCartItems(updated);
    } else {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const changeQuantity = (index, type) => {
    setCartItems((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        return {
          ...item,
          quantity:
            type === "inc"
              ? item.quantity + 1
              : item.quantity > 1
              ? item.quantity - 1
              : 1,
        };
      })
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              cartItems={cartItems}
            />
          }
        >
          {/* Home */}
          <Route index element={<HomePage onAddToCart={addToCart} />} />

          {/* Other Pages */}
          <Route path="category/:category" element={<CategoryPage onAddToCart={addToCart} />} />
          <Route path="/category/:category/:subcategory" element={<CategoryPage />} />

          <Route path="product/:id" element={<ProductDetailPage onAddToCart={addToCart} />} />
          <Route path="cart" element={<CartPage cartItems={cartItems} onRemove={removeFromCart} onQuantityChange={changeQuantity} />} />
          <Route path="search" element={<SearchResultsPage onAddToCart={addToCart} />} />
          <Route path="checkout" element={<CheckoutPage cartItems={cartItems} />} />

          {/* Blogs */}
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="blog/nightsuits" element={<NightSuitBlogList />} />
          <Route path="blog/nightsuits/:slug" element={<NightSuitBlogPostPage />} />
          <Route path="blog/mistakes" element={<MistakesBlogList />} />
          <Route path="blog/mistakes/:slug" element={<MistakesBlogPostPage />} />

          {/* Extra */}
          <Route path="bra-size-calculator" element={<BraCalculatorPage />} />
          <Route path="faqs" element={<FAQPage />} />
          <Route path="returns" element={<ReturnsPage />} />
          <Route path="affiliate" element={<AffiliatePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;