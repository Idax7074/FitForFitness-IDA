fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //Lav en kopi
  const copy = template.cloneNode(true);
  //Ændre indhold
  copy.querySelector("h3").textContent = product.brandname;

  copy.querySelector("h4").textContent = product.productdisplayname;

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector(".price").textContent = product.price;

  if (product.soldout) {
    //Produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    //Produktet er på udsalg
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".procent").textContent = product.discount;
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
*/
