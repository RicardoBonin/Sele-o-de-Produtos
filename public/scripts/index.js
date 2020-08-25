// GET API and add products to the div list-products
function get(url) {
  const listProduct = document.getElementById("list-products");
  const buttonMoreProducts = document.getElementById("more-products");
  axios
    .get(`https://${url}`, {})
    .then((res) => {
      buttonMoreProducts.innerHTML = `<button id="more-products" onclick="get('${res.data.nextPage}')">Ainda
      mais
      produtos
      aqui!</button>`;
      res.data.products.map((product) => {
        listProduct.innerHTML += `
        <div class="product">
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <div class="description">
          <h1 product-name>${product.name}</h1>
          <p class="product-description">${product.description}</p>
          <h2 class="product-old-price">De: R$${product.oldPrice}</h2>
          <h1 class="product-new-price">Por:R$${product.price}</h1>
          <h2 class="product-installments">ou ${product.installments.count}x de R$${product.installments.value}0</h2>
          <button class="product-buy-btn">Comprar</button>
        </div>
      </div>
        `;
      });
    })
    .catch((err) => console.log(err));
}
get("frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1");

//add masck CPF
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
  if (cpf.length == 14) {
    document.getElementById("cpf").style.borderColor = "green";
  } else {
    document.getElementById("cpf").style.borderColor = "red";
  }
  return cpf;
}

//Validate Email and Name

function validateEmail(props) {
  const email = document.getElementById(`${props}`);
  const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(email.value)) {
    document.getElementById(`${props}`).style.borderColor = "green";
    return true;
  } else {
    document.getElementById(`${props}`).style.borderColor = "red";
    return false;
  }
}

function validateName(props) {
  const name = document.getElementById(`${props}`);
  if (name.value.length == 0) {
    document.getElementById(`${props}`).style.borderColor = "red";
    return false;
  } else {
    document.getElementById(`${props}`).style.borderColor = "green";
    return true;
  }
}

//onclick registration form
function vadateInputs() {
  const email = validateEmail("email");
  const name = validateName("name");
  const cpf = document.getElementById("cpf");

  if (email && name && cpf.value.length == 14) {
    document.getElementById("cpf").style.borderColor = "green";
    document.getElementById("success-fields").style.display = "block";
  } else {
    document.getElementById("cpf").style.borderColor = "red";
    document.getElementById("error-fields").style.display = "block";
  }

  //reset values
  setTimeout(function () {
    document.getElementById("success-fields").style.display = "none";
    document.getElementById("error-fields").style.display = "none";
    document.getElementById("name").style.borderColor =
      "var(--secondary-color)";
    document.getElementById("email").style.borderColor =
      "var(--secondary-color)";
    document.getElementById("cpf").style.borderColor = "var(--secondary-color)";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cpf").value = "";
  }, 5000);
}

//Send E-mail

function sendEmail() {
  const email = validateEmail("email--friend");
  const name = validateName("name-friend");

  if (email && name) {
    document.getElementById("success-newsletter").style.display = "block";
  } else {
    document.getElementById("error-newsletter").style.display = "block";
  }

  //reset values
  setTimeout(function () {
    document.getElementById("error-newsletter").style.display = "none";
    document.getElementById("success-newsletter").style.display = "none";
    document.getElementById("name-friend").style.borderColor =
      "var(--secondary-color)";
    document.getElementById("email--friend").style.borderColor =
      "var(--secondary-color)";
    document.getElementById("name-friend").value = "";
    document.getElementById("email--friend").value = "";
  }, 5000);
}
