import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import { orderConfMail } from "../utils/orderConfMail.js";
import { orderStatusMail } from "../utils/orderStatusMail.js";

//create new
export const createOrder = async (req, res) => {
 
  try {
    const { cart, phone } = req.body;
    const userId = req.user._id;
    const userDetails = await userModel.findById({ _id: userId });
    let total = 0;
    cart.map((i) => {
      total += i.price;
    });
    if (cart) {
      const order = new orderModel({
        products: cart,
        phone: phone,
        buyer: req.user._id,
      }).save();
      if (order) {
        orderConfMail(order, userDetails);
      }
      res.json({ ok: true });
    } else {
      res.status(500).send(error);
    }
  } catch (error) {
    console.log(error);
  }
};

//orders
export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Geting Orders",
      error,
    });
  }
};
//orders
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};

//order status
export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status, verifiCodeAdmin, verifiCodeUser } = req.body;

    const orders = await orderModel.findByIdAndUpdate(
      orderId,
      { status, verifiCodeAdmin, verifiCodeUser },
      { new: true }
    );
    const userDetails = await userModel.findOne({ _id: orders.buyer });
    if (orders) {
      orderStatusMail(status, userDetails);
    }

    if (
      orders.verifiCodeAdmin !== "" &&
      orders.verifiCodeUser !== "" &&
      orders.verifiCodeAdmin === orders.verifiCodeUser
    ) {
      await orderModel.findByIdAndUpdate(
        orderId,
        { payment: "Verified" },
        { new: true }
      );
    }
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing Order",
      error,
    });
  }
};

export const verifiPaymentStatusUser = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { verifiCodeUser } = req.body;

    const order = await orderModel.findById(orderId);

    if (order.verifiCodeAdmin === verifiCodeUser) {
      await orderModel.findByIdAndUpdate(
        orderId,
        { verifiCodeUser, payment: "Verified" },
        { new: true }
      );
      res.status(200).json(order);
    } else {
      res.status(400).json({
        success: false,
        message: "Verification code is not matching",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while updating order",
      error: error.message,
    });
  }
};
