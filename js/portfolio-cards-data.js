// Unfortunately can't statically import JSON files yet (called "JSON modules").

export default [
  {
    context: "Side Project",
    title: "Cut Optimizer",
    description:
      "Optimize your linear material cuts to reduce waste and save money. A side project for learning and utility to help with my DIY projects.",
    tech: ["react", "typescript", "xstate", "css3", "html5"], // also Netlify
    url: "https://cutoptimizer.io/",
    sourceUrl: "https://github.com/sederaa/Cutoptimizer.io",
    imageUrl: "/img/portfolio/cutoptimizer-logo.svg",
  },
  {
    context: "GOSWEETSPOT",
    title: "Shopify App",
    description:
      "Shopify App embedded in Shopify Admin for labelling and dispatching orders.",
    tech: [
      "csharp",
      "dotnetcore",
      "graphql",
      "haproxy",
      "react",
      "typescript",
      "sql",
      "xstate",
      "octopusdeploy",
    ], // Also Shopify
    url: "https://apps.shopify.com/gosweetspot-dispatch",
    sourceUrl: undefined,
    imageUrl:
      "https://cdn.shopify.com/app-store/listing_images/da8aae03f1d0d4b8f742866cd793cb86/icon/CK6K5ODN5PQCEAE=.jpeg?height=60&quality=90&width=60",
  },
  {
    context: "EMPLOYER",
    title: "Tracking Event Micro-service",
    description:
      "Micro-service to receive and store tracking events from carriers by webhook or API polling. Publishes tracking events to other internal apps for display.",
    tech: [
      "dotnetcore",
      "azureservicebus",
      "csharp",
      "microsoft-sql-server",
      "octopusdeploy",
    ],
    url: undefined,
    sourceUrl: undefined,
    imageUrl: "/img/tech-logos/android.svg",
  },
];
