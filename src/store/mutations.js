export default {
    setPersonTitle: (state, title) => {
        state.personTitle = title;
    },
    setUpfileStep: (state, step) => {
        state.upfileStep = step;
    },
    showToast: (state,msg) => {
        state.toast.status = 1;
        state.toast.msg = msg;
    },
    setToastTimer: (state,{fn}) => {
        clearTimeout(state.toast.timer);
        state.toast.timer = fn;
    },
    hideToast: (state) => {
        state.toast.status = 2;
    }
}
