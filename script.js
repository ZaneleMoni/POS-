let products = [
  {
    title: "Hair Dryer",
    category: "electronics",
    Price: "R800.00",
    img: "https://i.postimg.cc/kgk9J5Rf/hairdryer.webp",
  },
  {
    title: "Microwave",
    category: "electronics",
    Price: "R1500.00",
    img: "https://i.postimg.cc/4nkb4VZX/microwave.png",
  },
  {
    title: "Steamer",
    category: "electronics",
    Price: "R2500.00",
    img: "https://i.postimg.cc/cJwKZ2Ct/steamer.webp",
  },
  {
    title: "Blender",
    category: "electronics",
    Price: "R3000.00",
    img: "https://i.postimg.cc/NFMfyzs4/blender.webp",
  },
];

//CREATE

function readProducts(products) {
  document.querySelector("#products").innerHTML = "";
  products.forEach((product, i) => {
    document.querySelector("#products").innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="${product.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-danger" onclick="deleteProducts(${i})">Delete</button>
     <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit-modal${i}">Edit</button>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="edit-modal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Title <input type="text" id="update-title${i}"><br>
        Price <input type="text" id="update-price${i}"placeholder="enter price in Rands"><br>
        Category <input type="text" id="update-category${i}"><br>
        Image <input type="text" id="update-img${i}"placeholder="enter image-link">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="edit-modal(${i})"  data-bs-target="modal" data-bs-target="#edit-modal"${i}" >Create</button>
      </div>
    </div>
  </div>
</div>
`;
  });
}
readProducts(products);

//create
function createProduct() {
    let title = document.querySelector(`update-title`).value;
      let category = document.querySelector(`update-category`).value;
  let price = document.querySelector(`update-price`).value;
  let img = document.querySelector(`update-img`).value;


  try {
    if (!title||!category||!price||!img) throw new Error("Please type in a product of yor choice");
    products.push({
        title,
        category,
        price,
      img,
    });
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

//delete
function deleteProduct(i) {
  let confirmation = confirm("Are you sure you want to delete this product?");
  if (confirmation) {
    products.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}
//update
function updateProduct(i) {
  let title = document.querySelector(`update-title${i}`).value;
  let category = document.querySelector(`update-category${i}`).value;
  let price = document.querySelector(`update-price${i}`).value;
  let img = document.querySelector(`update-img${i}`).value;
  try {
    if (!title || !category || !price || !img)
      throw new Error(`Please insert product name before updating`);
    products[i] = {
      title,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}
