export const state = () => ({
  fact: "",
});

export const getters = {
  getFact(state:any) {
    return state.fact;
  },
};

export const mutations = {
  nyFact(state:any,payload:any) {
    state.fact = payload;
  },
};
