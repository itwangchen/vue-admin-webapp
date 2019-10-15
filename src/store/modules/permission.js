import { asyncRoutes, currencyRoutes } from '@/router'

const state = {
  routes: [],
  addRoutes: []
}
const mutations = {
  SET_ROUTES(state, payload) {
    state.routes = [...currencyRoutes, ...payload]
    state.addRoutes = payload
  }
}
// 遍历asyncRoutes动态路由
function forSearchArr(route, roles) {
  //将实际的路由与权限进行比对,返回当前用户可操作的路由参数
  let arrNew = []
  for (let item of route) {
    let itemNew = { ...item } //解决浅拷贝共享同一内存地址
    console.log('权限判断',roles.includes(itemNew.name),itemNew.name);
    
    if (roles.includes(itemNew.name)) {
      if (itemNew.children) {
        itemNew.children = forSearchArr(itemNew.children, roles)
      }
      arrNew.push(itemNew)
    }
  }
  return arrNew
}
const actions = {
  //获取动态路由
  getAsyncRoutes({ commit, rootGetters }, roles) {
    return new Promise(resolve => {
      let routes = []
      //判断用户权限是否为超管
      if (rootGetters.userName === 'admin') {
        //直接取出所有动态路由,增加路由配置
        routes = asyncRoutes || ''
      } else {//
        routes = forSearchArr(asyncRoutes, roles)
      }
      commit('SET_ROUTES', routes)
      resolve(routes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
