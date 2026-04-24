import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../components/Header";
import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";

function Layout({ searchQuery, setSearchQuery, cartItems }) {
    const location = useLocation();

    const showBanner = location.pathname === "/";

    return (
        <>
            <ScrollToTop />

            <TopBar />

            <Navbar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            />

            {/* ✅ Banner only on Home */}
            {showBanner && (
                <PromoBanner
                    images={[
                        {
                            desktop: "/images/banner1des.jpeg",
                            tablet: "/images/Tabbanner1.jpeg",
                            mobile: "/images/Mobban1.jpeg",
                            alt: "Lingerie Collection"
                        },
                        {
                            desktop: "/images/banner2-01.jpeg",
                            tablet: "/images/banne2-02.jpeg",
                            mobile: "/images/banner2-03.jpeg",
                            alt: "Pyjama Collection"
                        },
                        {
                            desktop: "/images/DESKTOPBANNER-01.jpeg",
                            tablet: "/images/BANNERTABLET-01.jpeg",
                            mobile: "/images/BANNERMOBILE-02.jpeg",
                            alt: "Innerwear Collection"
                        },
                    ]}
                />
            )}

            {/* Pages render here */}
            <Outlet />

            <Footer />
        </>
    );
}

export default Layout;