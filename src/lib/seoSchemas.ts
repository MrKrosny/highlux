// Centralized SEO structured data schemas for Highlux

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    "@id": "https://highlux.in/#organization",
    name: "Highlux",
    alternateName: ["Highlux Lighting", "Highlux LED", "Highlux India"],
    url: "https://highlux.in",
    logo: "https://highlux.in/favicon.ico",
    image: "https://highlux.in/images/hero-landscape.jpg",
    description:
        "Highlux is India's premium LED lighting brand offering landscape lighting, IP68 underwater pool lights, and architectural lighting solutions for homes, hotels, and commercial spaces.",
    telephone: "+918287223086",
    email: "info@highlux.in",
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
        "@type": "PostalAddress",
        streetAddress: "2584, Shyama Prasad Mukherjee Marg, Nai Basti, Katra Ghel, Khari Baoli, Chandni Chowk",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110006",
        addressCountry: "IN",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "28.6562",
        longitude: "77.2270",
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
        },
    ],
    sameAs: [
        "https://github.com/MrKrosny/highlux",
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Highlux LED Lighting Products",
        itemListElement: [
            { "@type": "OfferCatalog", name: "Landscape Lighting", url: "https://highlux.in/landscape-lighting" },
            { "@type": "OfferCatalog", name: "Underwater Lighting", url: "https://highlux.in/underwater-lighting" },
            { "@type": "OfferCatalog", name: "Architectural Lighting", url: "https://highlux.in/architectural-lighting" },
        ],
    },
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://highlux.in/#website",
    name: "Highlux",
    url: "https://highlux.in",
    description: "Premium LED Lighting Solutions — Landscape, Underwater & Architectural",
    publisher: { "@id": "https://highlux.in/#organization" },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://highlux.in/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
    },
};

export const homeFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is Highlux?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Highlux is a premium LED lighting brand based in New Delhi, India. We specialise in landscape lighting, underwater IP68-rated pool lights, and architectural lighting solutions for homes, hotels, and commercial projects.",
            },
        },
        {
            "@type": "Question",
            name: "Does Highlux offer IP68 underwater lights?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Highlux's underwater lighting range is fully IP68 rated, meaning it is submersible and safe for use in pools, fountains, and water features.",
            },
        },
        {
            "@type": "Question",
            name: "Where can I buy Highlux LED lights?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can contact us directly via our website at highlux.in, call us at +91 82872 23086, or visit our showroom at 2584 Shyama Prasad Mukherjee Marg, Chandni Chowk, New Delhi.",
            },
        },
        {
            "@type": "Question",
            name: "What warranty do Highlux products carry?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Highlux products carry up to a 5-year warranty and are rated for 50,000+ hours of operational life.",
            },
        },
    ],
};

export const breadcrumb = (items: { name: string; url: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
    })),
});
