import * as actionType from "./types";

const URL = "http://localhost:4000";
export const search = (productSearch) => async (dispatch) => {
  dispatch(loadingList());
  const resp = await fetch(`${URL}/api/items?q=${productSearch}`);
  const productList = await resp.json();
  console.log(productList);
  dispatch({
    type: actionType.FETCH_LIST,
    payload: productList,
  });
};

const loadingList = () => {
  return { type: actionType.LOADING_LIST };
};

export const product = (productId) => async (dispatch) => {
  dispatch(loadingProduct());
  const resp = await fetch(`${URL}/api/items/${productId}`);
  const productData = await resp.json();
  console.log(productData);
  dispatch({
    type: actionType.FETCH_PRODUCT,
    payload: productData,
  });
};

const loadingProduct = () => {
  return { type: actionType.LOADING_PRODUCT };
};
