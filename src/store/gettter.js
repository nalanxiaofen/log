//进入起爆控制的进度
export const fireMainProgress = state => {
    let progress = state.controllerScreen.FIRE_MAIN.progress;
    return {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , #f5f5f5 0%)`
    }
}

//起爆授权的进度
export const fireAuthProgress = state => {
    let progress = state.controllerScreen.FIRE_AUTH.progress;
    return {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , #f5f5f5 0%)`
    }
}

//起爆充电的进度
export const fireChargeProgress = state => {
    let progress = state.controllerScreen.FIRE_CHARGE.progress;
    return {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , #f5f5f5 0%)`
    }
}

//爆破的进度
export const fireFireProgress = state => {
    let progress = state.controllerScreen.FIRE_FIRE.progress;
    return {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , #f5f5f5 0%)`
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