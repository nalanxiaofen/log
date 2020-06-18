export default {
    timerStr:null,
    id: null,//日志id
    device_id:null,//设备编号
    username: null,//操作人员名字
    usercode: null,//操作人员id号
    styleType: 'bj',//屏幕样式模式jd经典，yw夜晚，bj标准
    itemKeyCode: [],//当前键盘键码
    itemScreenMpdal: 'FIRE',//当前屏幕模块controllerScreen起爆控制模块，
    statusBar: {//状态条信息
        isShow: true,//是否显示状态条
        I: '0.0',//电流
        V: '9.0',//电压
        EQ: 70,//电量
        itemTime:'2020-06-12 09:43',//当前日志时间，2020-06-12 09:43
        isTime: false,//是否显示时间
        isLocation: true,//是否有GPS信号
        isWIFI: true,//是否有WI-FI信号
        isBlueTooth: true,//是否已开启蓝牙
        isCharge: false,//是否正在给起爆器充电
    },
    controllerScreen: {//起爆控制屏幕信息
        screenType: 'FIRE-MAIN',//起爆控制FIRE-MAIN,起爆确定FIRE-CONFIRM,起爆授权FIRE-AUTH,起爆充电FIRE-CHARGE，起爆FIRE-FIRE
        FIRE_MAIN: {
            progress: 0,//进度条信息0~100
            hitMsg: '准备中...',//提示信息
            times: '2020-06-13 21:45'//时间，2020-06-13 21:45
        },
        FIRE_CONFIRM: {
            onLineLG: 0,//在线雷管总数
            schemeNum: 0,//方案总数
            delayRange: [90, 120],//延时区间
            isModelBox: false,//是否显示提示模态框
            hitMsg:''//提示信息
        },
        FIRE_AUTH: {
            progress: 0,//起爆授权进度
            authStatus: 0,//爆破授权状态0正常，1异常, 2异常检测, 3检测结果, 4异常项详情
            errorProgress:0,//异常扫描进度
            lgNum: 10,//扫描到的产品数量
            errorNum: 3,//异常数量
            TNum: 2,//状态T错误数量
            DNum: 1,//状态D错误数量
            CNum: 0,//状态C错误数量
        },
        FIRE_CHARGE: {
            chargeStatus: 0,//充电状态0准备充电，1充电中，2充电完成
            progress: 0,//充电进度0~100
            chargeTime: 0//充电用时，秒
        },
        FIRE_FIRE: {
            progress: 0,//爆破进度0~100
            fireStatus: 0//爆破状态0正在爆破，1爆破完成
        }
    }
}