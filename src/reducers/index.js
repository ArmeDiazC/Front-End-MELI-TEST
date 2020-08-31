import {
  LOADING_LIST,
  FETCH_LIST,
  LOADING_PRODUCT,
  FETCH_PRODUCT,
  CLEAR_LIST,
  CLEAR_SEARCH,
} from "../actions/types";

const INITIAL_STATE = {
  productSearch: "",
  loadingList: false,
  categories: [],
  productList: [],
  productActive: "",
  loadingProduct: false,
  productDetail: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_LIST:
      return { ...state, loadingList: true, productSearch: action.payload };
    case FETCH_LIST:
      return {
        ...state,
        productList: action.payload.items,
        categories: action.payload.categories,
        loadingList: false,
      };
    case LOADING_PRODUCT:
      return { ...state, loadingProduct: true, productActive: action.payload };
    case FETCH_PRODUCT:
      return {
        ...state,
        productDetail: action.payload.items,
        loadingProduct: false,
      };
    case CLEAR_LIST:
      return { ...state, productList: [], categories: [] };
    case CLEAR_SEARCH:
      return { ...state, productSearch: "" };

    default:
      return state;
  }
};
