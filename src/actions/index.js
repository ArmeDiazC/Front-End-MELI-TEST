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

export const activeProduct = (productId) => (dispatch) => {
  dispatch(loadingProduct());
  fetch(`/items/:${productId}`).then((product) => {
    dispatch({
      type: actionType.ACTIVE_PRODUCT,
      payload: productId,
    });
  });
};

const loadingProduct = () => {
  return { type: actionType.LOADING_PRODUCT };
};
