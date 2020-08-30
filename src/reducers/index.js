import {
  LOADING_LIST,
  FETCH_LIST,
  LOADING_PRODUCT,
  FETCH_PRODUCT,
} from "../actions/types";

const INITIAL_STATE = {
  loadingList: false,
  categories: [],
  productList: [],
  loadingProduct: false,
  productDetail: {},
  productActive: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_LIST:
      return { ...state, loadingList: true, productActive: false };
    case FETCH_LIST:
      return {
        ...state,
        productList: action.payload.items,
        categories: action.payload.categories,
        loadingList: false,
      };
    case LOADING_PRODUCT:
      return { ...state, loadingProduct: true };
    case FETCH_PRODUCT:
      return {
        ...state,
        productDetail: action.payload.items,
        loadingProduct: false,
        productActive: true,
      };

    default:
      return state;
  }
};
