// backend/controllers/UsersController.js
import data from '../data.json' assert { type: 'json' };

const internalServerErrMsg = 'Internal Server Error';

// method to get additional values tax and profit
const getModifiedproducts = (productsArray) => {
  const result = productsArray.map((product) => {
    const tax =
      (product.quantitySold > 10 ? product.quantitySold - 10 : 0) * 0.08;
    const profit =
      (product.soldPrice - product.costToBusiness) * product.quantitySold - tax;
    return { ...product, tax, profit };
  });
  return result;
};

let products = getModifiedproducts(data.products);

/**
 * /api/users
 *   get:
 *     tags:
 *       - users
 *     @description : returns the array of users
 *     response:
 *       200:
 *          description: returns the array of users
 */
export const getProducts = async (req, res) => {
  const { page } = req.query;

  try {
    // sliced product considering pageSize 5
    let result = products.slice(page * 5, page * 5 + 5);
    let totalPages = Math.floor(products.length / 5);

    res.json({ products: result, page, totalPages });
  } catch (error) {
    console.error('Error fetching data from the external API:', error);
    res.status(500).json({ error: internalServerErrMsg });
  }
};
