<template>
  <div class="page">
    <!--页面左部-->
    <div class="page-left"></div>
    <!-- 页面中部 -->
    <div class="page-center">
      <header>
        <img class="logo" alt="Vue logo" src="../assets/logo.png" />
        <span class="title">起爆器操作日志复现</span>
        <span class="timer">{{timerStr}}</span>
      </header>
      <div class="content">
        <Detonator></Detonator>
      </div>
    </div>
    <!-- 页面右部 -->
    <div class="page-right">
      <EventOrder></EventOrder>
    </div>
  </div>
</template>

<script>
import Detonator from './detonator/Detonator';
import EventOrder from '../components/EventOrder';
import { mapActions, mapState } from "vuex";
import dataObj from "../demoData";
export default {
  name: "Home",
  components: {
    Detonator,
    EventOrder
  },
  computed:{
    ...mapState([
      'timerStr'
    ])
  },
  methods:{
    ...mapActions([
      "changeTimerAction",
      "changeKeyCodeAction",
      "changeScreenModalAction",
      "changeScreenTypeAction",
      "changeFIRE_MAIN_Action",
      "changeFIRE_CONFIRM_Action",
      "changeFIRE_AUTH_Action",
      "changeFIRE_CHARGE_Action",
      "changeFIRE_FIRE_Action",
      "changeIAction",
      "changeVAction",
      "changeEQAction"
    ]),
    getDate(timeStr) {
      const time = new Date(timeStr);
      const y = time.getFullYear();
      const m = time.getMonth() + 1;
      const d = time.getDate();
      const hh = time.getHours();
      const mm = time.getMinutes();
      const ss = time.getSeconds();
      return `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d} ${
        hh < 10 ? "0" + hh : hh
      }:${mm < 10 ? "0" + mm : mm}:${ss < 10 ? "0" + ss : ss}`;
    },
    demoFire() {
      let startTimes = new Date(dataObj.logModal[0].event_time).getTime();
      let endTimes = new Date(dataObj.logModal[dataObj.logModal.length-1].event_time).getTime(); 
      let timeout = setInterval(() => {
        let timeStr = this.getDate(startTimes);
        startTimes += 1000;
        this.changeTimerAction(timeStr);
        let demoData = dataObj.logModal;
        let itemObj = [];
        demoData.map(item => {
          if (item.event_time === timeStr) {
            itemObj.push(item);
          }
        });
        for (let i = 0; i < itemObj.length; i++) {
          let item = itemObj[i];
          if (item.source === "SCREEN") {
            this.changeScreenModalAction(item.content.id);
            if (item.content.id === "FIRE") {
              this.changeScreenTypeAction(item.content.code);
              let param = item.content.param;
              this.changeIAction(param.I);
              this.changeVAction(param.V);
              this.changeEQAction(param.EQ);
              switch (item.content.code) {
                case "FIRE-MAIN":
                  this.changeFIRE_MAIN_Action({
                    times: param.time,
                    progress: param.progress
                  });
                  break;
                case "FIRE-CONFIRM":
                  this.changeFIRE_CONFIRM_Action({
                    onLineLG: param.onLineLG,
                    schemeNum: param.schemeNum,
                    delayRange: param.delayRange,
                    isModelBox: param.isModal,
                    hitMsg: param.hitMsg
                  });
                  break;
                case "FIRE-AUTH":
                  this.changeFIRE_AUTH_Action({
                    progress: param.progress || 0,
                    authStatus: param.status || 0,
                    lgNum: param.lgNum || 0,
                    TNum: param.TNum || 0,
                    DNum: param.DNum || 0,
                    CNum: param.CNum || 0
                  });
                  break;
                case "FIRE-CHARGE":
                  this.changeFIRE_CHARGE_Action({
                    progress: param.progress || 0,
                    chargeStatus: param.status || 0,
                    chargeTime: param.chargeTime || 0
                  });
                  break;
                case "FIRE-FIRE":
                  this.changeFIRE_FIRE_Action(param.progress);
                  break;
                default:
                  break;
              }
            }
          } else if (item.source === "KEYBOARD") {
            this.changeKeyCodeAction([item.content]);
          }
        }

        if(startTimes>endTimes){
          clearInterval(timeout);
        }
      }, 1000);
    },
    chargeTime(){
      let num = 0;
      let timeout = setInterval(()=>{
        let FIRE_CHARGE = this.$store.state.controllerScreen.FIRE_CHARGE;
        if(FIRE_CHARGE.chargeStatus===1){
          num++;
          this.changeFIRE_CHARGE_Action({
            progress: FIRE_CHARGE.progress,
            chargeStatus: FIRE_CHARGE.chargeStatus,
            chargeTime: num
          });
        }else if(FIRE_CHARGE.chargeStatus===2){
          num = 0;
          clearInterval(timeout);
        }
      },1000);
    }
  },
  mounted() {
    this.demoFire();
    this.chargeTime();
  }
};
</script>
<style lang="less" scoped>
@keyframes warningAnimation {
  0% {
    box-shadow: 0 0 0 0 rgba(248, 36, 36, 0) inset;
  }
  50% {
    box-shadow: 0 0 40px 10px rgba(248, 36, 36, 0.4) inset;
  }
  100% {
    box-shadow: 0 0 0 0 rgba(248, 36, 36, 0) inset;
  }
}
.warning {
  box-shadow: 0 0 30px 10px rgba(248, 36, 36, 0.5) inset;
  animation: warningAnimation 0.8s infinite;
}
.page {
  flex: 1;
  display: flex;
  flex-direction: row;
}
//页面左部
.page-left {
  flex: 1;
  background: cornflowerblue;
  display: flex;
  flex-direction: column;
}
//页面右部
.page-right {
  flex: 1;
  background: cornflowerblue;
  display: flex;
  flex-direction: column;
}
//页面中间
.page-center {
  width: 500px;
  display: flex;
  flex-direction: column;
  header {
    padding-top: 5px;
    padding-bottom: 18px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    .timer{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 99;
      font-size: 12px;
      font-weight: bold;
      color: blue;
      text-shadow: 1px 1px 1px #f27a04;
    }
    .logo {
      width: 70px;
    }
    .title {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 8px;
      text-shadow: 1px 1px 2px #d07114;
    }
    &:after {
      content: "";
      display: block;
      width: 346px;
      height: 1px;
      border-top: 1px solid #333;
      border-bottom: 1.5px solid #333;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 15px;
      margin: auto;
      z-index: 10;
    }
  }
  .content {
    flex: 1;
    display: flex;
  }
}
</style>
