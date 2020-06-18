//初始化基本信息
export const changeInitInfo = (state, obj={}) => {
    let {
        id=state.id,
        device_id=state.device_id,
        username=state.username,
        usercode=state.usercode,
    } = obj;
    state.id = id;
    state.device_id = device_id;
    state.username = username;
    state.usercode = usercode;
};

//更改状态条状态
export const changeStatusBar = (state,obj={}) => {
    let {
        I = state.statusBar.I,
        V = state.statusBar.V,
        EQ = state.statusBar.EQ,
        itemTime = state.statusBar.itemTime,
        isShow = state.statusBar.isShow,
        isLocation = state.statusBar.isLocation,
        isWIFI = state.statusBar.isWIFI,
        isBlueTooth = state.statusBar.isBlueTooth,
        isCharge = state.statusBar.isCharge,
        isTime = state.statusBar.isTime
    } = obj;
    state.statusBar.isShow = isShow;
    state.statusBar.I = I;
    state.statusBar.V = V;
    state.statusBar.EQ = EQ;
    state.statusBar.itemTime = itemTime;
    state.statusBar.isLocation = isLocation;
    state.statusBar.isWIFI = isWIFI;
    state.statusBar.isBlueTooth = isBlueTooth;
    state.statusBar.isCharge = isCharge;
    state.statusBar.isTime = isTime;
};

//更改屏幕模式，jd经典，bj标准，yw夜晚
export const changeStyleType = (state,value='bj') => {
    state.styleType = value
};

//记录时间
export const changeTimer = (state,value='0000-01-01 00:00:00') => {
    state.timer = value
};

//更改当前键码
export const changeKeyCode = (state,value=null) => {
    state.itemKeyCode = value;
};

//更改当前屏幕模块
export const changeScreenModal = (state,value=null) => {
    state.itemScreenMpdal = value;
};

/*============*/
//更改起爆控制屏幕状态类型
export const changeFireScreenType = (state,value='FIRE-MAIN') => {
    state.controllerScreen.screenType = value;
};

//更改FIRE_MAIN信息
export const changeFIRE_MAIN = (state,obj={}) => {
    let {
        progress = state.controllerScreen.FIRE_MAIN.progress,
        hitMsg = state.controllerScreen.FIRE_MAIN.hitMsg,
        times = state.controllerScreen.FIRE_MAIN.times
    } = obj;
    state.controllerScreen.FIRE_MAIN.progress = progress;
    state.controllerScreen.FIRE_MAIN.hitMsg = hitMsg;
    state.controllerScreen.FIRE_MAIN.times = times;
};

//更改FIRE_CONFIRM信息
export const changeFIRE_CONFIRM = (state,obj={}) => {
    let {
        onLineLG= state.controllerScreen.FIRE_CONFIRM.onLineLG,
        schemeNum= state.controllerScreen.FIRE_CONFIRM.schemeNum,
        delayRange= state.controllerScreen.FIRE_CONFIRM.delayRange,
        isModelBox= state.controllerScreen.FIRE_CONFIRM.isModelBox,
        hitMsg = state.controllerScreen.FIRE_CONFIRM.hitMsg
    } = obj;
    state.controllerScreen.FIRE_CONFIRM.onLineLG = onLineLG;
    state.controllerScreen.FIRE_CONFIRM.schemeNum = schemeNum;
    state.controllerScreen.FIRE_CONFIRM.delayRange = delayRange;
    state.controllerScreen.FIRE_CONFIRM.isModelBox = isModelBox;
    state.controllerScreen.FIRE_CONFIRM.hitMsg = hitMsg;
};

//更改FIRE_AUTH信息
export const changeFIRE_AUTH = (state, obj={}) => {
    let {
        progress= state.controllerScreen.FIRE_AUTH.progress,
        authStatus= state.controllerScreen.FIRE_AUTH.authStatus,
        lgNum= state.controllerScreen.FIRE_AUTH.lgNum,
        TNum= state.controllerScreen.FIRE_AUTH.TNum,
        DNum= state.controllerScreen.FIRE_AUTH.DNum,
        CNum= state.controllerScreen.FIRE_AUTH.CNum
    } = obj;
    state.controllerScreen.FIRE_AUTH.progress = progress;
    state.controllerScreen.FIRE_AUTH.authStatus = authStatus;
    state.controllerScreen.FIRE_AUTH.lgNum = lgNum;
    state.controllerScreen.FIRE_AUTH.TNum = TNum;
    state.controllerScreen.FIRE_AUTH.DNum = DNum;
    state.controllerScreen.FIRE_AUTH.CNum = CNum;
};

//更改FIRE_CHARGE信息
export const changeFIRE_CHARGE = (state,obj={}) => {
    let {
        chargeStatus = state.controllerScreen.FIRE_CHARGE.chargeStatus,
        progress = state.controllerScreen.FIRE_CHARGE.progress,
        chargeTime = state.controllerScreen.FIRE_CHARGE.chargeTime
    } = obj;
    state.controllerScreen.FIRE_CHARGE.chargeStatus = chargeStatus;
    state.controllerScreen.FIRE_CHARGE.progress = progress;
    state.controllerScreen.FIRE_CHARGE.chargeTime = chargeTime;
};

//更改FIRE_FIRE信息
export const changeFIRE_FIRE = (state,obj={}) => {
    let {
        progress = state.controllerScreen.FIRE_FIRE.progress,
        fireStatus = state.controllerScreen.FIRE_FIRE.fireStatus
    } = obj;
    state.controllerScreen.FIRE_FIRE.progress = progress;
    state.controllerScreen.FIRE_FIRE.fireStatus = fireStatus;
}
/*============*/