import * as actionType from "./types";
const URL = "http://localhost:4000";

export const search = (productSearch) => async (dispatch) => {
  dispatch(loadingList(productSearch));
  const resp = await fetch(`${URL}/api/items?q=${productSearch}`);
  const productList = await resp.json();
  dispatch({
    type: actionType.FETCH_LIST,
    payload: productList,
  });
};

const loadingList = (productSearch) => {
  return { type: actionType.LOADING_LIST, payload: productSearch };
};

export const category = (productId) => async (dispatch) => {
  const resp = await fetch(`${URL}/api/category/${productId}`);
  const categories = await resp.json();
  dispatch({
    type: actionType.FETCH_CATEGORY,
    payload: categories,
  });
};

export const product = (productId) => async (dispatch) => {
  dispatch(loadingProduct(productId));
  const resp = await fetch(`${URL}/api/items/${productId}`);
  const productData = await resp.json();
  dispatch({
    type: actionType.FETCH_PRODUCT,
    payload: productData,
  });
};

export const loadingProduct = (productId) => {
  return { type: actionType.LOADING_PRODUCT, payload: productId };
};

export const clearList = () => {
  return { type: actionType.CLEAR_LIST };
};
export const clearSearch = () => {
  return { type: actionType.CLEAR_SEARCH };
};
export const clearProduct = () => {
  return { type: actionType.CLEAR_PRODUCT };
};
