//初始化基本信息action
export const initInfoAction = ({ commit }, payload) => {
    commit('changeInitInfo', payload);
}

//派发屏幕模式action,jd经典，bj标准，yw夜晚
export const changeStyleTypeAction = ({ commit }, payload) => {
    commit('changeStyleType', payload);
}

//记录时间
export const changeTimerAction = ({ commit }, payload) => {
    commit('changeTimer', payload);
}

//派发电流改变action
export const changeIAction = ({ commit }, payload) => {
    commit('changeStatusBar', { I: payload });
}

//派发电压改变action
export const changeVAction = ({ commit }, payload) => {
    commit('changeStatusBar', { V: payload });
}

//派发电量改变action
export const changeEQAction = ({ commit }, payload) => {
    commit('changeStatusBar', { EQ: payload });
}

//派发时间改变action
export const changeItemTimesAction = ({ commit }, payload) => {
    commit('changeStatusBar', { itemTime: payload });
}

//派发时间是否显示action
export const changeShowTimeAction = ({ commit }, payload) => {
    commit('changeStatusBar', { isTime: payload });
}

//派发状态条是否显示action
export const changeShowAction = ({ commit }, payload) => {
    commit('changeStatusBar', { isShow: payload });
}

//派发定位图标是否显示action
export const changeLocationAction = ({ commit }, payload) => {
    commit('changeStatusBar', { isLocation: payload });
}

//派发wifi图标是否显示action
export const changeWIFIAction = ({ commit }, payload) => {
    commit('changeStatusBar', { isWIFI: payload });
}

//派发蓝牙图标是否显示action
export const changeBlueToothAction = ({ commit }, payload) => {
    commit('changeStatusBar', { isBlueTooth: payload });
}

//派发充电图标是否显示action
export const changeChargeAction = ({ commit }, payload) => {
    commit('changeStatusBar', { isCharge: payload });
}

//派发当前键码action
export const changeKeyCodeAction = ({ commit }, payload) => {
    commit('changeKeyCode', payload);
    let timeout = setTimeout(() => {
        commit('changeKeyCode', []);
        clearTimeout(timeout);
    }, 300);
}

//派发当前屏幕模块action
export const changeScreenModalAction = ({ commit }, payload) => {
    commit('changeScreenModal', payload);
}

//派发起爆控制屏幕状态类型action
export const changeScreenTypeAction = ({ commit }, payload) => {
    commit('changeFireScreenType', payload);
}

//派发更改FIRE_MAIN信息action
export const changeFIRE_MAIN_Action = ({ commit }, payload) => {
    let progress = payload.progress;
    let hitMsg = progress === 100 ? '按[确定]键进入起爆流程' : '准备中...';
    commit('changeFIRE_MAIN', {
        times: payload.times,
        progress,
        hitMsg
    });
}

//派发更改FIRE_CONFIRM信息action
export const changeFIRE_CONFIRM_Action = ({ commit }, payload) => {
    commit('changeFIRE_CONFIRM', {
        onLineLG: payload.onLineLG,
        schemeNum: payload.schemeNum,
        delayRange: payload.delayRange,
        isModelBox: payload.isModelBox,
        hitMsg: payload.hitMsg
    });
}

//派发更改FIRE_AUTH信息action
export const changeFIRE_AUTH_Action = ({ commit }, payload) => {
    commit('changeFIRE_AUTH', {
        progress: payload.progress,
        authStatus: payload.authStatus,
        lgNum: payload.lgNum,
        TNum: payload.TNum,
        DNum: payload.DNum,
        CNum: payload.CNum
    });
}

//派发更改FIRE_CHARGE信息action
export const changeFIRE_CHARGE_Action = ({ commit }, payload) => {
    commit('changeFIRE_CHARGE', {
        progress: payload.progress,
        chargeStatus: payload.chargeStatus,
        chargeTime: payload.chargeTime
    });
}

//派发更改FIRE_FIRE信息action
export const changeFIRE_FIRE_Action = ({ commit }, payload) => {
    let fireStatus = payload===100?1:0;
    commit('changeFIRE_FIRE', {
        progress: payload,
        fireStatus
    });
}

