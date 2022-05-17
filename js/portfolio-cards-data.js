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
    title: "Tracking Event Microservice",
    description:
      "Microservice to receive and store tracking events from carriers by webhook or API polling. Publishes tracking events to other internal apps for display.",
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
  {
    context: "EMPLOYER",
    title: "Consumer Freight Dispatch App",
    description:
      "Web app for consumers and small businesses to dispatch their freight.",
    tech: [
      "csharp",
      "dotnetcore",
      "haproxy",
      "react",
      "typescript",
      "sql",
      "xstate",
      "octopusdeploy",
    ],
    url: undefined,
    sourceUrl: undefined,
    imageUrl: "/img/tech-logos/android.svg",
  },
  {
    context: "EMPLOYER",
    title: "Auth Server",
    description:
      "Auth server implementing OAuth 2.0 and OpenID Connect protocols providing single sign-in to the organisation with support for Google, Microsoft and Facebook sign-in.",
    tech: [
      "csharp",
      "dotnetcore",
      "haproxy",
      "sql",
      "octopusdeploy",
      "bootstrap",
      "microsoft-sql-server",
    ], // Also IdentityServer4, OIDC and OAuth2 logos
    url: undefined,
    sourceUrl: undefined,
    imageUrl: "/img/tech-logos/android.svg",
  },
  {
    context: "GOSWEETSPOT",
    title: "Zapier Integration",
    description:
      "Integration with Zapier allowing customers to include GoSweetSpot in their automations with 4000+ other popular apps and services.",
    tech: ["csharp", "dotnetframework"], // Also Zapier icon
    url: "https://zapier.com/apps/gosweetspot/integrations",
    sourceUrl: undefined,
    imageUrl: "/img/tech-logos/android.svg",
  },
  {
    context: "EMPLOYER",
    title: "Rating Microservice",
    description:
      "Microservice to store courier and bulk carrier pricing and calculating freight prices on demand from other apps.",
    tech: ["csharp", "dotnetframework", "microsoft-sql-server", "sql"],
    url: undefined,
    sourceUrl: undefined,
    imageUrl: "/img/tech-logos/android.svg",
  },
  {
    context: "EMPLOYER",
    title: "Tracking Event Microservice",
    description:
      "Microservice to receive and store tracking events from carriers by API polling, FTP CSV files and email attachments. Publishes tracking events by message broker to other internal apps for display.",
    tech: [
      "dotnetframework",
      "rabbitmq",
      "csharp",
      "microsoft-sql-server",
      "octopusdeploy",
      "teamcity",
      "sql",
    ],
    url: undefined,
    sourceUrl: undefined,
    imageUrl: "/img/tech-logos/android.svg",
  },
  {
    context: "EMPLOYER",
    title: "Courier Driver Scanner Mobile App",
    description:
      "Android native mobile app with barcode scanning, signature on glass and pick up job management for use by courier drivers. Uses built-in barcode scanner of ruggedized Motorola devices.",
    tech: ["android", "java"], // also motorola logo
    url: undefined,
    sourceUrl: undefined,
    imageUrl: "/img/tech-logos/android.svg",
  },
  {
    context: "EMPLOYER",
    title: "Business Freight Dispatch App",
    description:
      "Web app for businesses to dispatch their freight, print labels, view reporting and other related functions.",
    tech: [
      "bootstrap",
      "csharp",
      "dotnetframework",
      "react",
      "microsoft-sql-server",
      "sql",
      "octopusdeploy",
      "teamcity",
    ],
    url: undefined,
    sourceUrl: undefined,
    imageUrl: "/img/tech-logos/android.svg",
  },
];
