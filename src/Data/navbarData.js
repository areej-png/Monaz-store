// export const navbarData = {
//     logo: "/images/logo.png",
//     navLinks: [
//         { id: 1, label: "New Arrivals", href: "/category/new-arrivals" },
//         { id: 2, label: "PJ Sets", href: "/category/pj-sets" },
//         { id: 3, label: "Bras", href: "/category/bras" },
//         { id: 4, label: "Panties", href: "/category/panties" },
//         { id: 5, label: "Bra Panty Sets", href: "/category/bra-panty-sets" },
//         { id: 6, label: "Body Shapers", href: "/category/body-shapers" },
//         { id: 7, label: "Lingerie", href: "/category/lingerie" },
//         { id: 9, label: "Tops", href: "/category/tops" },
//         { id: 10, label: "Bottoms", href: "/category/bottoms" },
//     ],
// };
export const navbarData = {
    logo: "/images/LOGO.svg",
    navLinks: [
        { id: 1, label: "New Arrivals", href: "/category/new-arrivals" },
        {
            id: 2, label: "PJ Sets", href: "/category/pj-sets",
            subLinks: [
                { label: "Plain PJ Sets", href: "/category/pj-sets/plain" },
                // { label: "Satin PJ Sets", href: "/category/pj-sets/satin" },
                { label: "Printed PJ Sets", href: "/category/pj-sets/printed" },
                // { label: "Winter PJ Sets", href: "/category/pj-sets/winter" },
            ]
        },
        {
            id: 3, label: "Bras", href: "/category/bras",
            subLinks: [
                { label: "Push-Up Bras", href: "/category/bras/push-up" },
                { label: "T-Shirt Bras", href: "/category/bras/t-shirt" },
                { label: "Sports Bras", href: "/category/bras/sports" },
                { label: "Wireless Bras", href: "/category/bras/wireless" },
                { label: "Strapless Bras", href: "/category/bras/strapless" },
            ]
        },
        {
            id: 4, label: "Panties", href: "/category/panties",
            subLinks: [
                { label: "Briefs", href: "/category/panties/briefs" },
                { label: "Thongs", href: "/category/panties/thongs" },
                { label: "Boyshorts", href: "/category/panties/boyshorts" },
                { label: "High Waist", href: "/category/panties/high-waist" },
                { label: "Bikini", href: "/category/panties/bikini" },
            ]
        },
        {
            id: 5, label: "Bra Panty Sets", href: "/category/bra-panty-sets",
            subLinks: [
                { label: "Lace Sets", href: "/category/bra-panty-sets/lace" },
                { label: "Cotton Sets", href: "/category/bra-panty-sets/cotton" },
                { label: "Satin Sets", href: "/category/bra-panty-sets/satin" },
                { label: "Bridal Sets", href: "/category/bra-panty-sets/bridal" },
            ]
        },
        {
            id: 6, label: "Body Shapers", href: "/category/body-shapers",
            subLinks: [
                { label: "Waist Cinchers", href: "/category/body-shapers/waist" },
                { label: "Full Body", href: "/category/body-shapers/full-body" },
                { label: "Shorts", href: "/category/body-shapers/shorts" },
            ]
        },
        {
            id: 7, label: "Lingerie", href: "/category/lingerie",
            subLinks: [
                { label: "Babydolls", href: "/category/lingerie/babydolls" },
                { label: "Teddies", href: "/category/lingerie/teddies" },
                { label: "Corsets", href: "/category/lingerie/corsets" },
                { label: "Garter Sets", href: "/category/lingerie/garter-sets" },
            ]
        },
        { id: 9, label: "Tops", href: "/category/tops" },
        { id: 10, label: "Bottoms", href: "/category/bottoms" },
    ],
};