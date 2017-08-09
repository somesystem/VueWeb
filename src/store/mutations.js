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
    },
    setSearchKey: (state,key) => {
        state.searchKey = key;
    },
    setSearchNum: (state,num) => {
        state.searchNum = num;
    },
    setZixunId: (state,id) => {
        state.zixun.id = id;
        state.zixun.isOpen = true;
    },
    closeZixun: (state) => {
        state.zixun.isOpen = false;
    }
}
