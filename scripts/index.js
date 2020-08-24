// GET API and add products to the div list-products
function get(url) {
  const listProduct = document.getElementById("list-products");
  const buttonMoreProducts = document.getElementById("more-products");
  axios
    .get(`https://${url}`, {})
    .then((res) => {
      console.log(res.data.nextPage);
      buttonMoreProducts.innerHTML = `<button id="more-products" onclick="get('${res.data.nextPage}')">Ainda
      mais
      produtos
      aqui!</button>`;
      res.data.products.map((product) => {
        listProduct.innerHTML += `
        <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <div class="description">
          <h1>${product.name}</h1>
          <p>${product.description}</p>
          <h2>De: R$${product.oldPrice}</h2>
          <h1>Por:R$${product.price}</h1>
          <h2>ou ${product.installments.count}x de R$${product.installments.value}0</h2>
          <button>Comprar</button>
        </div>
      </div>
        `;
      });
    })
    .catch((err) => console.log(err));
}
get("frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1");

function fMasc(objeto, mascara) {
  obj = objeto;
  masc = mascara;
  setTimeout("fMascEx()", 1);
}

function fMascEx() {
  obj.value = masc(obj.value);
}

function mCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return cpf;
}
