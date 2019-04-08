interface IAppState {
  progress: {
    status: 'start' | 'finish'
  };
}
const app = {
  state: {
    progress: {
      status: 'finish',
    }
  },
  getters: {
    progressStatus: (state: IAppState) => state.progress.status,
  },
  mutations: {
    SET_PROGRESS_STATUS: (state: IAppState, status: 'start' | 'finish') => {
      state.progress.status = status;
    }
  },
  actions: {

  },

}

export default app;