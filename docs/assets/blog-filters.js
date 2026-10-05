// Enhance keyboard access and placement; Quarto retains all filtering and counts.
window.addEventListener("load", () => {
  const panel = document.querySelector("#quarto-margin-sidebar");
  const slot = document.querySelector(".blog-filters-slot");
  const categories = [...document.querySelectorAll(".quarto-listing-category .category")];
  if (!panel || !slot || !categories.length) return;

  const originalPosition = document.createComment("Native category panel position");
  panel.before(originalPosition);
  const mobile = window.matchMedia("(max-width: 991px)");
  const placePanel = () => {
    if (mobile.matches) slot.append(panel);
    else originalPosition.after(panel);
  };
  placePanel();
  mobile.addEventListener("change", placePanel);

  const group = panel.querySelector(".quarto-listing-category");
  group.setAttribute("role", "group");
  group.setAttribute("aria-label", "Filtrar artículos por categoría");
  const updateState = () => categories.forEach(category => {
    category.setAttribute("aria-pressed", String(category.classList.contains("active")));
  });
  categories.forEach(category => {
    category.setAttribute("role", "button");
    category.tabIndex = 0;
    category.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        category.click();
      }
    });
    new MutationObserver(updateState).observe(category, { attributes: true, attributeFilter: ["class"] });
  });
  // Quarto doesn't mark "Todas" active on an unfiltered initial visit.
  if (!categories.some(category => category.classList.contains("active"))) {
    categories.find(category => category.dataset.category === "")?.click();
  }
  updateState();
});
