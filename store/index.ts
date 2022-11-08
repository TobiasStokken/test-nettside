export const state = () => ({
    fact: "",
    reverseMelding: "",
  });
  
  export const getters = {
    getFact(state:any) {
      return state.fact;
    },
    getReverseMelding(state:any) {
      return state.reverseMelding
    }
  };
  
  export const mutations = {
    nyFact(state:any,payload:any) {
      state.fact = payload;
    },
    nyReverseMelding(state:any,payload:any) {
      state.reverseMelding = payload
    }
  };
  