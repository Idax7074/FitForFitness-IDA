const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  document.querySelector(".breadcrumbs .category").textContent = product.category;

  document.querySelector(".breadcrumbs .subcategory").textContent = product.subcategory;

  document.querySelector("h2").textContent = product.category;

  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //Lav en kopi
  const copy = template.cloneNode(true);
  //Ændre indhold
  copy.querySelector("h3").textContent = product.brandname;

  copy.querySelector("h4").textContent = product.productdisplayname;

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector(".price").textContent = product.price;

  let newPrice = product.price - (product.price * product.discount) / 100;
  newPrice = newPrice.toFixed(0);
  console.log(newPrice);

  copy.querySelector(".readMore").setAttribute("href", `product.html?id=${product.id}`);

  if (product.soldout) {
    //Produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
    console.log(copy);
    copy.querySelector(".readMore").remove();
  }

  if (product.discount) {
    //Produktet er på udsalg
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".procent").textContent = product.discount;
    copy.querySelector(".priceNow").textContent = newPrice;
  }

  //Append
  document.querySelector("main").appendChild(copy);
}

/*
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}

{
  "id": 1529,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Tee",
  "price": 1899,
  "discount": null,
  "brandname": "Puma",
  "soldout": 0
}
*/
