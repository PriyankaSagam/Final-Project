const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const orderSchema = mongoose.Schema(
  {
    user: { type: String, required: true, default:'' },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },

      },
        ],
    
    totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;