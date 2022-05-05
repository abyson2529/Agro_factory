const News = require("../Models/news");

//Show List of Fertilizer
const showNews = async (req, res, next) => {
  News.find()
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





//Add Fertilizers
const addNews = async (req, res, next) => {
  let fertilizer = new News({
    title:req.body.title,
    description:req.body.description,
    date:req.body.date,
    image:req.body.image,
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
};

//Update Fertilizer
const updateNews = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    title: body.title,
    description: body.description,
    date: body.date,
    image: body.image
  };
  News.findByIdAndUpdate(body.newsId, { $set: updatedUser })
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

//Delete a Fertilizer
const deleteNews = async (req, res, next) => {
  let newsId = req.body.newsId;
  News.findByIdAndRemove(newsId)
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
  showNews,
  deleteNews,
  addNews,
  updateNews
};
