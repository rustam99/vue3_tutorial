import { createStore } from "vuex";
import catalog from "./catalog";
import products from "./products";
import cart from "./cart";
import auth from "./auth";

export default createStore({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		catalog,
		products,
		cart,
		auth,
	}
});
