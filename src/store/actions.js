import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

const actions = {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

      //console.log(context);

      if (oldProduct) {
        //oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct);
        resolve('商品数量+1');
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('添加商品成功');
      }
    })
  }
}


export default actions
