const designs = [
  {
    title: "Soft Editorial",
    kind: "Lifestyle",
    description: "An airy, editorial layout with soft photography, generous spacing, and a calm domestic mood.",
    palette: [
      { name: "Ivory", value: "#f4efe7" },
      { name: "Linen", value: "#ded5c6" },
      { name: "Charcoal", value: "#2a2723" },
    ],
    directory: "example-1",
  },
  {
    title: "Pastel Collection",
    kind: "Collection",
    description: "A gentle collection story built from split pastel fields, centered typography, and delicate product framing.",
    palette: [
      { name: "Powder", value: "#dde8e4" },
      { name: "Blush", value: "#ead9d1" },
      { name: "Oat", value: "#e7e0d1" },
      { name: "Bronze", value: "#a58a5b" },
    ],
    directory: "example-2",
  },
  {
    title: "Dark Ritual",
    kind: "Immersive",
    description: "A cinematic, high-contrast concept that presents home fragrance as an intimate evening ritual.",
    palette: [
      { name: "Ink", value: "#14120f" },
      { name: "Porcelain", value: "#f3eae3" },
      { name: "Taupe", value: "#a89a8e" },
    ],
    directory: "example-3",
  },
  {
    title: "Minimal Blush",
    kind: "Editorial",
    description: "A quiet, centered composition with restrained controls and a warm, softly feminine atmosphere.",
    palette: [
      { name: "Blush", value: "#f2e4df" },
      { name: "Cream", value: "#f5f0e8" },
      { name: "Espresso", value: "#28221d" },
    ],
    directory: "example-4",
  },
  {
    title: "Editorial Shop",
    kind: "Commerce",
    description: "A structured storefront where oversized editorial type leads into a precise, gallery-like product grid.",
    palette: [
      { name: "White", value: "#f7f7f5" },
      { name: "Stone", value: "#deddd8" },
      { name: "Black", value: "#171717" },
    ],
    directory: "example-5",
  },
  {
    title: "Warm Showcase",
    kind: "Product led",
    description: "A balanced product-first hero using warm neutrals, refined serif type, and subtle tonal depth.",
    palette: [
      { name: "Bone", value: "#ece6d9" },
      { name: "Pale rose", value: "#eee2dd" },
      { name: "Black", value: "#211f1b" },
    ],
    directory: "example-6",
  },
];

const grid = document.querySelector("#design-grid");
const count = document.querySelector("#design-count");

count.textContent = designs.length;

designs.forEach((design, index) => {
  const number = String(index + 1).padStart(2, "0");
  const card = document.createElement("article");
  const link = document.createElement("a");
  const preview = document.createElement("div");
  const image = document.createElement("img");
  const indexLabel = document.createElement("span");
  const details = document.createElement("div");
  const numberLabel = document.createElement("p");
  const title = document.createElement("h2");
  const kind = document.createElement("p");
  const description = document.createElement("p");
  const palette = document.createElement("div");
  const paletteLabel = document.createElement("p");
  const swatches = document.createElement("ul");

  card.className = "design-card";
  link.className = "design-link";
  link.href = `${design.directory}/index.html`;
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", `Open ${design.title} homepage design`);

  preview.className = "design-preview";
  image.className = "design-image";
  image.src = `${design.directory}/.thumbnail?v=20260711-images`;
  image.alt = `${design.title} homepage preview`;
  image.loading = index > 2 ? "lazy" : "eager";
  image.decoding = "async";

  indexLabel.className = "design-index";
  indexLabel.textContent = number;

  details.className = "design-details";
  numberLabel.className = "design-number";
  numberLabel.textContent = number;
  title.className = "design-title";
  title.textContent = design.title;
  kind.className = "design-kind";
  kind.textContent = design.kind;
  description.className = "design-description";
  description.textContent = design.description;
  palette.className = "design-palette";
  paletteLabel.className = "palette-label";
  paletteLabel.textContent = "Palette";
  swatches.className = "palette-swatches";

  design.palette.forEach((color) => {
    const item = document.createElement("li");
    const swatch = document.createElement("span");
    const name = document.createElement("span");

    item.className = "palette-color";
    swatch.className = "color-swatch";
    swatch.style.backgroundColor = color.value;
    swatch.setAttribute("aria-hidden", "true");
    name.className = "color-name";
    name.textContent = color.name;
    item.title = `${color.name} ${color.value}`;
    item.append(swatch, name);
    swatches.append(item);
  });

  preview.append(image, indexLabel);
  details.append(numberLabel, title, kind);
  palette.append(paletteLabel, swatches);
  link.append(preview, details, description, palette);
  card.append(link);
  grid.append(card);
});
