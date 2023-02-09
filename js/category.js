fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  //looper og kalder showCategory
  cats.forEach(showCategory);
  fetch("https://kea-alt-del.dk/t7/api/mmdspring2023holdb")
    .then((res) => res.json())
    .then(showSubcategories);
}

function showCategory(cat) {
  console.log(cat);

  //fang template
  const template = document.querySelector("#categoryPageTemplate").content;
  //Lav en kopi
  const copy = template.cloneNode(true);
  copy.querySelector("article").dataset.category = cat.category;
  //Ændre indhold
  copy.querySelector("h4").textContent = cat.category;
  copy.querySelector("a").href = `productlist.html?category=${cat.category}`;
  //Append
  document.querySelector(".categoryPage").appendChild(copy);
}

function showSubcategories(subcats) {
  subcats.forEach(showSubcategory);
}

function showSubcategory(subcat) {
  console.log(subcat);

  //fang template
  const template = document.querySelector("#subcategoryPageTemplate").content;
  //Lav en kopi
  const copy = template.cloneNode(true);
  //Ændre indhold
  copy.querySelector("a").textContent = subcat.subcategory;
  copy.querySelector("a").href = `productlist.html?subcategories=${subcat.category}`;
  //Append
  document.querySelector(`[data-category="${subcat.category}"] .subcategories-list`).appendChild(copy);
}
