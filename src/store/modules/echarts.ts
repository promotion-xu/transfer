const echarts = {
  state: {
    chartsTheme: 'halloween',
  },
  getters: {

  },
  mutations: {
    SAVE_THEME(state: any, payload: any) {
      state.chartsTheme = payload;
    }
  },
  actions: {
    
  }
}

export default echarts;