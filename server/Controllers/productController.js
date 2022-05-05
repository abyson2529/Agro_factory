const Product = require("../Models/product");
const Fertilizer = require("../Models/fertilizer");

//Show List of Products
const index = async (req, res, next) => {
  Product.find()
    .then((response) => {
      return res.status(200).send({
        response,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};
//Show List of Fertilizer
const showFertilizer = async (req, res, next) => {
  Fertilizer.find()
    .then((response) => {
      return res.status(200).send({
        response,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

//Show Single Product
const show = async (req, res, next) => {
  let productId = req.body.productId;
  Product.findById(productId)
    .then((response) => {
      return res.status(200).send({
        response,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

//Show product by category
const productCategory = async (req, res, next) => {
  let categoryId = req.body.categoryId;
  Product.find({ categoryId: categoryId })
    .then((response) => {
      return res.status(200).send({
        response,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

//Add Category
const addProduct = async (req, res, next) => {
  let product = new Product({
    productname: req.body.name,
    productDesc: req.body.description,
    categoryId: req.body.categoryId,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  product
    .save()
    .then((product) => {
      return res.status(200).send({
        message: product,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};
//Add Fertilizers
const addFertilizer = async (req, res, next) => {
  let fertilizer = new Fertilizer({
    name:req.body.name,
    price:req.body.price,
    desc:req.body.desc,
    quantity:req.body.quantity,
  });
  fertilizer
    .save()
    .then((product) => {
      return res.status(200).send({
        message: product,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
  // let imgArr = []
  
  // if (req.files) {
  //   let coverImage = req.files.coverImage;
  //   console.log("HI",coverImage);
  //   coverImage.forEach(cover =>{
  //     let coverName = Date.now();
  //     cover.mv("H:/org_project/Agro_factory/Node-basic/routes/images/" + coverName + ".jpg");
  //     imgArr.push(coverName + ".jpg")
  //   })
  // }

  // let Courses = new Fertilizer({
  //   name: req.body.name,
  //   price: req.body.price,
  //   desc: req.body.desc,
  //   quantity: req.body.quantity,
  //   courseVideos: imgArr,
  // });

  // console.log("My" + Courses);

  // Courses
  //   .save()
  //   .then((Fertilizer => {
  //     return res.status(200).send({
  //       message: Fertilizer,
  //     });
  //   })
  //   )
  //   .catch((error) => {
  //     return res.status(500).send({
  //       message: error.message,
  //     });
  //   });
};

//Update Fertilizer
const updateFertilizer = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    name: body.name,
    price: body.price,
    desc: body.desc,
    quantity: body.quantity
  };
  Fertilizer.findByIdAndUpdate(body.fertilizerId, { $set: updatedUser })
    .then((user) => {
      return res.status(200).send({
        
        message: "Updated Details Successfully",
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};
//Delete a Product
const destroy = async (req, res, next) => {
  let productId = req.body.productId;
  Product.findByIdAndRemove(productId)
    .then((product) => {
      return res.status(200).send({
        message: product,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};
//Delete a Fertilizer
const deleteFertilizer = async (req, res, next) => {
  let fertilizerId = req.body.fertilizerId;
  Fertilizer.findByIdAndRemove(fertilizerId)
    .then((product) => {
      return res.status(200).send({
        message: product,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

module.exports = {
  index,
  show,
  destroy,
  addProduct,
  productCategory,
  showFertilizer,
  deleteFertilizer,
  addFertilizer,
  updateFertilizer
};
