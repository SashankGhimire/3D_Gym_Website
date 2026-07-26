import React, { useEffect } from 'react';

export const SeoHead: React.FC = () => {
  useEffect(() => {
    // Inject structured JSON-LD schema into head
    const gymSchema = {
      "@context": "https://schema.org",
      "@type": "HealthClub",
      "name": "Gym Station - Luxury Fitness & Wellness Sanctuary",
      "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      "@id": "https://gymstation.com",
      "url": "https://gymstation.com",
      "telephone": "+912288889999",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 42, Elite Towers, CBD Worli",
        "addressLocality": "Mumbai",
        "postalCode": "400018",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.0176,
        "longitude": 72.8172
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "05:00",
          "closes": "23:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "06:00",
          "closes": "21:00"
        }
      ],
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Technogym & Hammer Strength Equipment", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Eleiko Olympic Weightlifting Platforms", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Eucalyptus Steam & Cold Plunge Recovery", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "30-Meter Indoor Sprint Turf", "value": true }
      ]
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://gymstation.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Memberships",
          "item": "https://gymstation.com/#memberships"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "BMI Calculator",
          "item": "https://gymstation.com/#bmi-calculator"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are Gym Station's operating hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gym Station is open Monday through Saturday from 5:00 AM to 11:00 PM, and Sunday from 6:00 AM to 9:00 PM. Black Label VIP members receive 24/7 keycard access."
          }
        },
        {
          "@type": "Question",
          "name": "Is personal coaching included with memberships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Full Gym and Black Label VIP memberships include complimentary monthly 1-on-1 coaching consultations and InBody 770 composition scans."
          }
        },
        {
          "@type": "Question",
          "name": "Can I bring a guest with my membership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Black Label VIP members receive 2 complimentary VIP guest passes per month. Off-Peak and Full Gym members can purchase day passes at a discounted rate."
          }
        }
      ]
    };

    const scriptGym = document.createElement('script');
    scriptGym.type = 'application/ld+json';
    scriptGym.id = 'jsonld-gym';
    scriptGym.innerHTML = JSON.stringify(gymSchema);

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.id = 'jsonld-breadcrumb';
    scriptBreadcrumb.innerHTML = JSON.stringify(breadcrumbSchema);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.id = 'jsonld-faq';
    scriptFaq.innerHTML = JSON.stringify(faqSchema);

    document.head.appendChild(scriptGym);
    document.head.appendChild(scriptBreadcrumb);
    document.head.appendChild(scriptFaq);

    return () => {
      const existingGym = document.getElementById('jsonld-gym');
      const existingBreadcrumb = document.getElementById('jsonld-breadcrumb');
      const existingFaq = document.getElementById('jsonld-faq');
      if (existingGym) existingGym.remove();
      if (existingBreadcrumb) existingBreadcrumb.remove();
      if (existingFaq) existingFaq.remove();
    };
  }, []);

  return null;
};
