const Cart = require("../Models/cart");

//Show List of Fruits
const showCart = async (req, res, next) => {
  Cart.find({userId:req.body.userId})
    .then((response) => {
      return res.status(200).send({
        message:response,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};





//Add Carts
const addCart = async (req, res, next) => {
    let ifPresentCart = await Cart.find({ userId: req.body.userId, productId:req.body.productId}).catch((e)=>console.log(e));
    if(ifPresentCart.length == 0){
        let cart = new Cart({
          userId: req.body.userId,
          productId: req.body.productId,
          quantity: req.body.quantity,
          category: req.body.category
        });
        cart
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
    }
};

//Update Fruit
const updateCart = async (req, res, next) => {
  let updatedUser = {
    productId: req.body.productId,
          quantity: req.body.quantity,
          category: req.body.category
  };
  Cart.findByIdAndUpdate(req.body.cartId, updatedUser)
    .then((user) => {
      return res.status(200).send({
        
        message: user,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

//Delete a Fruit
const deleteCart = async (req, res, next) => {
  let cartId = req.body.cartId;
  Cart.findByIdAndRemove(cartId)
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
  showCart,
  deleteCart,
  addCart,
  updateCart
};
