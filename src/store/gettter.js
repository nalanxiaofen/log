//进入起爆控制的进度
export const fireMainProgress = state => {
    let progress = state.controllerScreen.FIRE_MAIN.progress;
    let colorStr = '#33d80a';
    let barColor = '#f5f5f5';
    if(state.styleType==='jd'){
        colorStr = '#555';
    }else if(state.styleType==='yw'){
        colorStr = '#fff';
        barColor = '#555'
    }
    return {
        background: colorStr,
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , ${barColor} 0%)`
    }
}

//起爆授权的进度
export const fireAuthProgress = state => {
    let progress = state.controllerScreen.FIRE_AUTH.progress;
    let colorStr = '#33d80a';
    let barColor = '#f5f5f5';
    if(state.styleType==='jd'){
        colorStr = '#555';
    }else if(state.styleType==='yw'){
        colorStr = '#fff';
        barColor = '#555'
    }
    return {
        background: colorStr,
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , ${barColor} 0%)`
    }
}

//起爆充电的进度
export const fireChargeProgress = state => {
    let progress = state.controllerScreen.FIRE_CHARGE.progress;
    let colorStr = '#33d80a';
    let barColor = '#f5f5f5';
    if(state.styleType==='jd'){
        colorStr = '#555';
    }else if(state.styleType==='yw'){
        colorStr = '#fff';
        barColor = '#555'
    }
    return {
        background: colorStr,
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , ${barColor} 0%)`
    }
}

//爆破的进度
export const fireFireProgress = state => {
    let progress = state.controllerScreen.FIRE_FIRE.progress;
    let colorStr = '#33d80a';
    let barColor = '#f5f5f5';
    if(state.styleType==='jd'){
        colorStr = '#555';
    }else if(state.styleType==='yw'){
        colorStr = '#fff';
        barColor = '#555'
    }
    return {
        background: colorStr,
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , ${barColor} 0%)`
    }
}

//异常扫描的进度
export const errorProgress = state => {
    let progress = state.controllerScreen.FIRE_AUTH.errorProgress;
    let colorStr = '#33d80a';
    let barColor = '#f5f5f5';
    if(state.styleType==='jd'){
        colorStr = '#555';
    }else if(state.styleType==='yw'){
        colorStr = '#fff';
        barColor = '#555'
    }
    return {
        background: colorStr,
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , ${barColor} 0%)`
    }
}

//定位图标
export const locationIcon = state => {
    let styleType = state.styleType;
    switch (styleType) {
        case 'jd':
            return require('../assets/icon_location_jd.png');
        case 'yw':
            return require('../assets/icon_location_yw.png');
        default:
            return require('../assets/icon_location.png');
    }
}

//蓝牙图标
export const blueToothIcon = state => {
    let styleType = state.styleType;
    switch (styleType) {
        case 'jd':
            return require('../assets/icon_bluetooth_jd.png');
        case 'yw':
            return require('../assets/icon_bluetooth_yw.png');
        default:
            return require('../assets/icon_bluetooth.png');
    }
}

//WIFI图标
export const wifiIcon = state => {
    let styleType = state.styleType;
    switch (styleType) {
        case 'jd':
            return require('../assets/icon_wifi_jd.png');
        case 'yw':
            return require('../assets/icon_wifi_yw.png');
        default:
            return require('../assets/icon_wifi.png');
    }
}

//充电图标
export const chargeIcon = state => {
    let styleType = state.styleType;
    switch (styleType) {
        case 'jd':
            return require('../assets/icon_charge_jd.png');
        case 'yw':
            return require('../assets/icon_charge_yw.png');
        default:
            return require('../assets/icon_charge.png');
    }
}

//电量
export const eqIcon = state => {
    let progress = state.statusBar.EQ;
    let colorStr = '#33d80a';
    let barColor = '#f5f5f5';
    let borderColor = '#20be17';
    if(state.styleType==='jd'){
        colorStr = '#555';
        borderColor = '#555';
    }else if(state.styleType==='yw'){
        colorStr = '#fff';
        barColor = '#555';
        borderColor = '#fff';
    }
    if(progress<20){
        borderColor = 'rgb(233, 20, 20)';
    }
    return {
        border: `1px solid ${borderColor}`,
        background: colorStr,
        backgroundClip: 'content-box',
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , ${barColor} 0%)`
    }
}

//为不同的屏幕模型添加不同的class样式
export const otherStyle = state => {
    let styleType = state.styleType;
    switch (styleType) {
        case 'jd':
            return {
                'jd': true,
                'yw': false
            };
        case 'yw':
            return {
                'jd': false,
                'yw': true
            };
        default:
            return {
                'jd': false,
                'yw': false
            };
    }
}