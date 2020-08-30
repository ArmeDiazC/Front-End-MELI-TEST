import {
  SEARCH,
  LOADING_LIST,
  FETCH_LIST,
  ACTIVE_PRODUCT,
  LOADING_PRODUCT,
} from "../actions/types";

const INITIAL_STATE = {
  search: "",
  loadingList: false,
  categories: [],
  productList: [],
  productActive: "",
  loadingProduct: false,
  productDetail: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, search: action.payload };
    case LOADING_LIST:
      return { ...state, loadingList: true };
    case FETCH_LIST:
      return {
        ...state,
        productList: action.payload.items,
        categories: action.payload.categories,
        loadingList: false,
      };
    case LOADING_PRODUCT:
      return { ...state, loadingProduct: true };
    case ACTIVE_PRODUCT:
      return { ...state, productActive: action.payload, loadingProduct: false };

    default:
      return state;
  }
};
