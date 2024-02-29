const pages = [
  "Services",
  "Locations",
  "Property Types",
  "Pricing",
  "About Us",
];

type HeaderTypes = Array<{
    title:string,
    items?: Array<{title:string, items?:Array<{title:string}>}>
}>

export const NAVBAR_HEADERS:HeaderTypes = [
  {
    title: "Services",
    items: [
      {
        title: "Repairs",
        items: [
          { title: "Cleaning" },
          { title: "Gardening" },
          { title: "Painting" },
        ],
      },
      {
        title: "Maintenance",
        items: [
          { title: "Cleaning" },
          { title: "Gardening" },
          { title: "Painting" },
        ],
      },
      {
        title: "Prevention",
        items: [
          { title: "Gutter cleaning" },
          { title: "Gardening" },
          { title: "Painting" },
        ],
      },
      {
        title: "Renovations",
        items: [
          { title: "Wall removal" },
          { title: "Kitchens" },
          { title: "Bathrooms" },
          { title: "Decks" },
        ],
      },
      {
        title: "Consulting",
        items: [
          { title: "Roadmap" },
          { title: "Architectural Design" },
          { title: "Interior Design" },
          { title: "Engineering" },
        ],
      },
    ],
  },
  {
    title: "Locations",
    items: [
      {
        title: "Serving Sydney Areas",
        items: [
          { title: "Sydney Eastern Suburbs" },
          { title: "Sydney North Shore" },
        ],
      },
      {
        title: "Coming next to",
        items: [
          { title: "Melbourne" },
          { title: "Brisbane" },
          { title: "Perth" },
        ],
      },
    ],
  },
  {
    title: "Property Types",
    items: [
      { title: "Single Family Homes" },
      { title: "Apartments" },
      { title: "Multi-Residential Buildings" },
    ],
  },
  { title: "Pricing" },
  {
    title: "About Us",
    items: [
      {
        title: "Phone",
        items: [{ title: "(02) 9908 4444" }],
      },
      { title: "Email", items: [{ title: "help@joinhomemade.com" }] },
      { title: "Web", items: [{ title: "joinhomemade.com" }] },
      {
        title: "Mailing",
        items: [{ title: "6/10 Kenneth Street Tamarama NSW 2026" }],
      },
    ],
  },
];
