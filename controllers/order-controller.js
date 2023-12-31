const Order = require("../models/Orders-schema");

const addOrder = async (req, res) => {
  const { location, user, food_orders } = req.body;
  try {
    const order = await Order.create({
      location,
      user,
      food_orders,
    });

    return res.status(202).json({ data: order });
  } catch (error) {
    console.log(error.message);
  }
};

const findOrder = async (req, res) => {
  const userId = req.query.userId;
  //console.log(req.body);
  // console.log( "userId:",userId);
  try {
    const orders = await Order.find({ user: userId });
    console.log(orders);
    return res.status(202).json({ data: orders });
  } catch (error) {
    console.log(error);
  }
};

const deleteOneOrder = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteOne = await Order.findByIdAndDelete({ _id: id });
    if (deleteOne)
      return res.status(202).json({ message: "Order is delete successfully" });
    else return res.status(202).json({ message: "Error" });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { addOrder, findOrder, deleteOneOrder };
