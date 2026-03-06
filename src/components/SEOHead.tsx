import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalPath?: string;
    ogImage?: string;
    ogType?: string;
    structuredData?: object | object[];
}

const BASE_URL = "https://highlux.in";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-highlux.jpg`;

const SEOHead = ({
    title = "Highlux — Premium LED Lighting Solutions | Landscape, Underwater & Architectural",
    description = "Highlux offers premium LED lighting solutions including landscape lights, underwater pool lights, and architectural fixtures. Trusted by homeowners and builders across India.",
    keywords = "Highlux, Highlux lighting, LED lighting India, landscape lighting, underwater lighting, pool lights, architectural lighting, bollard lights, IP68 LED lights, New Delhi lighting",
    canonicalPath = "/",
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
    structuredData,
}: SEOHeadProps) => {
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;

    return (
        <Helmet>
            {/* Primary */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Highlux" />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content="Highlux" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@HighluxLighting" />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
