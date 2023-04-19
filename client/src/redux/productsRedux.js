/* selectors */
export const getAll = ({ products }) => products;

export const getProductById = ({ products }, productId) =>
  products.find(product => product.id === productId);

// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');

// action creators
export const updateProducts = (payload) => ({ type: UPDATE_PRODUCTS, payload });

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default productsReducer;