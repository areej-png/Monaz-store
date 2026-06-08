export const navbarData = {
    logo: "/images/LOGO.svg",
    navLinks: [
        { id: 1, label: "Home", href: "/" },
        { id: 1, label: "New Arrivals", href: "/category/new-arrivals" },
        {
            id: 2, label: "Co-ord Sets", href: "/category/co-ord-sets",
            subLinks: [
                { label: "Plain Co-ord Sets", href: "/category/co-ord-sets/plain" },
                { label: "Printed Co-ord Sets", href: "/category/co-ord-sets/printed" },
            ]
        },
        {
            id: 3, label: "Tops", href: "/category/tops",
            subLinks: [
                { label: "Crop Tops", href: "/category/tops/crop" },
                { label: "T-Shirts", href: "/category/tops/t-shirts" },
                { label: "Shirts", href: "/category/tops/shirts" },
                { label: "Tank Tops", href: "/category/tops/tank" },
                { label: "Blouses", href: "/category/tops/blouses" },
            ]
        },
        {
            id: 4, label: "Bottoms", href: "/category/bottoms",
            subLinks: [
                { label: "Trousers", href: "/category/bottoms/trousers" },
                { label: "Shorts", href: "/category/bottoms/shorts" },
                { label: "Skirts", href: "/category/bottoms/skirts" },
                { label: "Palazzo", href: "/category/bottoms/palazzo" },
                { label: "Joggers", href: "/category/bottoms/joggers" },
            ]
        },
        {
            id: 5, label: "Dresses", href: "/category/dresses",
            subLinks: [
                { label: "Maxi Dresses", href: "/category/dresses/maxi" },
                { label: "Mini Dresses", href: "/category/dresses/mini" },
                { label: "Midi Dresses", href: "/category/dresses/midi" },
                { label: "Party Wear", href: "/category/dresses/party" },
            ]
        },
        {
            id: 6, label: "Outerwear", href: "/category/outerwear",
            subLinks: [
                { label: "Jackets", href: "/category/outerwear/jackets" },
                { label: "Coats", href: "/category/outerwear/coats" },
                { label: "Hoodies", href: "/category/outerwear/hoodies" },
            ]
        },
        {
            id: 7, label: "Activewear", href: "/category/activewear",
            subLinks: [
                { label: "Sports Tops", href: "/category/activewear/tops" },
                { label: "Leggings", href: "/category/activewear/leggings" },
                { label: "Track Suits", href: "/category/activewear/tracksuits" },
                { label: "Gym Wear", href: "/category/activewear/gym" },
            ]
        },
        { id: 8, label: "Accessories", href: "/category/accessories" },
        { id: 9, label: "Sale", href: "/category/sale" },
    ],
};