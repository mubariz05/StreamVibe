export const plans = [
    {
        id: "basic",
        name: "Basic Plan",
        description:
            "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        monthlyPrice: 9.99,
        yearlyPrice: 7.99,
        isPopular: false,
    },
    {
        id: "standard",
        name: "Standard Plan",
        description:
            "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
        monthlyPrice: 12.99,
        yearlyPrice: 10.39,
        isPopular: true,
    },
    {
        id: "premium",
        name: "Premium Plan",
        description:
            "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
        monthlyPrice: 14.99,
        yearlyPrice: 11.99,
        isPopular: false,
    },
];

export const planFeatures = [
    {
        feature: "Price",
        basic: "$9.99/Month",
        standard: "$12.99/Month",
        premium: "$14.99/Month",
    },
    {
        feature: "Content",
        basic: "Access to a wide selection of movies and shows, including some new releases.",
        standard: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        premium: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    },
    {
        feature: "Devices",
        basic: "Watch on one device simultaneously",
        standard: "Watch on Two device simultaneously",
        premium: "Watch on Four device simultaneously",
    },
    {
        feature: "Free Trial",
        basic: "7 Days",
        standard: "7 Days",
        premium: "7 Days",
    },
    {
        feature: "Cancel Anytime",
        basic: "Yes",
        standard: "Yes",
        premium: "Yes",
    },
    {
        feature: "HDR",
        basic: "No",
        standard: "Yes",
        premium: "Yes",
    },
    {
        feature: "Dolby Atmos",
        basic: "No",
        standard: "Yes",
        premium: "Yes",
    },
    {
        feature: "Ad-Free",
        basic: "No",
        standard: "Yes",
        premium: "Yes",
    },
    {
        feature: "Offline Viewing",
        basic: "No",
        standard: "Yes, for select titles.",
        premium: "Yes, for all titles.",
    },
    {
        feature: "Family Sharing",
        basic: "No",
        standard: "Yes, up to 5 family members.",
        premium: "Yes, up to 6 family members.",
    },
];