const Order = require('../../models/orders.cjs');

exports.saveCartItems = async (req, res) => {
  try {
    const { userName, cartItems, totalPrice } = req.body;
    if (!userName || !cartItems || !totalPrice) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const ordersToInsert = cartItems.map(item => ({
      user: userName,  // Assuming userName is the user you are sending from the client side
      orderItems: [
        {
          name: item.name,
          qty: item.quantity,
          price: item.price,
        },
      ],
      totalPrice,  // Assuming totalPrice is the total price for the order
    }));

    await Order.insertMany(ordersToInsert);

    res.status(200).json({ message: 'Cart items saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving cart items' });
  }
};
