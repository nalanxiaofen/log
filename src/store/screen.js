import state from './state.js';
import * as mutations from './mutations.js';
import * as actions from './action.js';
import * as getters from './gettter.js';

const screen = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
export default screen;