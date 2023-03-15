import {actionTree, getAccessorType, mutationTree, getterTree} from 'typed-vuex'
import {ProductsState, ProductType} from "~/store/types/productsType";
import axios from "axios";



export const state = (): ProductsState => ({
  products: [
    {
      name: null,
      price: null,
      productId: null,
      productImages: [{
        srcImg: '',
        fProductId: 1
      }]
    }
  ]
})

export const getters = getterTree(state, {
  allProducts: (state: ProductsState): Array<ProductType> => {
    return state.products
  }
})

export const mutations = mutationTree(state,{
  updateProducts(state, products: Array<ProductType>) {
    state.products = products
  },
  initialiseStore() {
    console.log('initialised')
  },

})

export const actions = actionTree({
  state, getters, mutations
}, {
  async getProducts({ commit, dispatch, getters, state }) {
    const products = (await axios.get('http://localhost:3001/products')).data
    commit('updateProducts', products)
  }
})

export const accessorType = getAccessorType({
  state,
  getters,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
  },
})
