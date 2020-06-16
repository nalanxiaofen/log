//进入起爆控制的进度
export const fireMainProgress = state=>{
    let progress = state.controllerScreen.FIRE_MAIN.progress;
    return {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , #f5f5f5 0%)`
    }
}

//起爆授权的进度
export const fireAuthProgress = state=>{
    let progress = state.controllerScreen.FIRE_AUTH.progress;
    return {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , #f5f5f5 0%)`
    }
}

//起爆充电的进度
export const fireChargeProgress = state=>{
    let progress = state.controllerScreen.FIRE_CHARGE.progress;
    return {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , #f5f5f5 0%)`
    }
}

//爆破的进度
export const fireFireProgress = state=>{
    let progress = state.controllerScreen.FIRE_FIRE.progress;
    return {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0) ${progress}% , #f5f5f5 0%)`
    }
}
