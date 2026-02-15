import React from 'react';

const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cookmytech",
        "url": "https://cookmytech.site",
        "logo": "https://cookmytech.site/logo.png", // Replace with valid logo URL if available
        "sameAs": [
            "https://twitter.com/cookmytech",
            "https://linkedin.com/company/cookmytech",
            "https://github.com/cookmytech"
        ],
        "description": "Cookmytech is a leading software solutions company in Noida specializing in website development, AI tools, SaaS solutions, and enterprise-grade tech systems.",
        "founder": {
            "@type": "Person",
            "name": "Pankaj Verma"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9911064724",
            "contactType": "customer service"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
