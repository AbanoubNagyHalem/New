var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");

var productList = [];

function add() {
  var Obj = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    desc: productDesc.value,
  };

  productList.push(Obj);

  for (i = 0; i < productList.length; i++) {
    box = `
      <td>${i}</td>
      <td>${productList[i].name}</td>
      <td>${productList[i].price}</td>
      <td>${productList[i].category}</td>
      <td>${productList[i].desc}</td>
     
      `;
  }

  document.getElementById("tableRow").innerHTML = box;
}
