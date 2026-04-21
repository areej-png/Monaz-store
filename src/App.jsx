import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./components/Header";
import PromoBanner from "./components/PromoBanner";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import BlogList from "./components/BlogList";
import BlogPostPage from "./pages/BlogPostPage";
import NightSuitBlogList from "./components/Nightsuitbloglist";
import NightSuitBlogPostPage from "./pages/Nightsbppage";
import CheckoutPage from "./pages/CheckoutPage";
import MistakesBlogList from "./components/MistakesBlogList";         
import MistakesBlogPostPage from "./pages/MistakesblogPostPage";
import BraCalculatorPage from "./pages/BraCalculatorPage";
import Footer from "./components/Footer";
import FAQPage from "./pages/FAQPage";
import ReturnsPage from "./pages/ReturnsPage";
import AffiliatePage from "./pages/AffiliatePage";
import AboutPage from "./pages/AboutPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import SitemapPage from "./pages/SitemapPage";
import "./App.css";

// ← App function ke BAHAR
// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// }
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
}

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
      <ScrollToTop />
      <TopBar />
      <PromoBanner
  images={[
    {
      desktop: "/images/banner1des.jpeg",
      tablet:  "/images/Tabbanner1.jpeg",
      mobile:  "/images/Mobban1.jpeg",
      alt:     "Lingerie Collection"
    },
    {
      desktop: "/images/banner2-01.jpeg",
      tablet:  "/images/pj-tablet.webp",
      mobile:  "/images/pj-mobile.webp",
      alt:     "Pyjama Collection"
    },
    {
      desktop: "/images/under-desktop.webp",
      tablet:  "/images/under-tablet.webp",
      mobile:  "/images/under-mobile.webp",
      alt:     "Innerwear Collection"
    },
  ]}
/>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/category/:category" element={<CategoryPage onAddToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetailPage onAddToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onRemove={removeFromCart} onQuantityChange={changeQuantity} />} />
        <Route path="/search" element={<SearchResultsPage onAddToCart={addToCart} />} />
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/blog/nightsuits" element={<NightSuitBlogList />} />
        <Route path="/blog/nightsuits/:slug" element={<NightSuitBlogPostPage />} />
        <Route path="/blog/mistakes" element={<MistakesBlogList />} />
        <Route path="/blog/mistakes/:slug" element={<MistakesBlogPostPage />} />
        <Route path="/bra-size-calculator" element={<BraCalculatorPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;