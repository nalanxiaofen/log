<template>
  <div class="view" :class="otherStyle">
    <div class="header" :class="otherStyle">
        <div class="left">
            <span v-if="statusBar.isTime">{{statusBar.itemTime}}</span>
            <span v-else>电流：{{statusBar.I}} mA</span>
        </div>
        <div class="center" v-show="!statusBar.isTime">
            <span>电压：{{statusBar.V}} V</span>
        </div>
        <div class="right">
            <img :src="locationIcon" alt="定位" v-show="statusBar.isLocation" />
            <img :src="blueToothIcon" alt="蓝牙" v-show="statusBar.isBlueTooth" />
            <img :src="wifiIcon" alt="wifi" v-show="statusBar.isWIFI" />
            <div class="battery" :style="eqIcon" :class="otherStyle"></div>
            <img class="charge" :src="chargeIcon" alt="充电中" v-show="statusBar.isCharge" />
        </div>
    </div>
    <div class="content">
      <FireScreen v-if="itemScreenMpdal==='FIRE'"></FireScreen>
    </div>
  </div>
</template>
<script>
import FireScreen from './FireScreen';
import { mapGetters, mapState } from 'vuex';
export default {
  name: "Screen",
  components:{
    FireScreen
  },
  computed:{
    ...mapGetters([
      'locationIcon',
      'blueToothIcon',
      'wifiIcon',
      'chargeIcon',
      'eqIcon',
      'otherStyle'
    ]),
    ...mapState([
      'itemScreenMpdal',
      'statusBar'
    ])
  }
};
</script>
<style lang="less" scoped>
.hidden{
  display: none;
}
.view {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #defff6;
}
.view.yw{
  background: #555;
}
.view.jd{
  background: #ffffff;
}
.header {
  width: 100%;
  height: 20px;
  padding: 0 5px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  flex-direction: row;
  color: #f64704;
  background: rgba(44, 62, 80, 0.1);
  .left{
      flex: 1;
      text-align: left;
      span{
          font-size: 10px;
          font-weight: bold;
      }
  }
  .center{
      flex: 1;
      span{
          font-size: 10px;
          font-weight: bold;
      }
  }
  .right{
      flex: 1;
      text-align: right;
      img{
          width: 12px;
          vertical-align: middle;
      }
      .charge{
        width: 18px;
        position: absolute;
        top: 1px;
        right: 3px;
        z-index: 99;
      }
      .battery{
          display: inline-block;
          vertical-align: middle;
          margin-left: 4px;
          height: 10px;
          width: 16px;
          padding: 1px;
          padding-right: 0;
          border-radius: 2px;
          border: 1px solid #20be17;
          background: #20be17;
          background-clip: content-box;
          position: relative;
          &:after{
              content: '';
              display: block;
              width: 2px;
              height: 5px;
              background: #555;
              border-top-right-radius: 2px;
              border-bottom-right-radius: 2px;
              position: absolute;
              top: 0;
              bottom: 0;
              right: -3px;
              margin: auto;
          }
      }
      .yw{
        &:after{
          content: '';
          display: block;
          background: #f5f5f5;
        }
      }
  }
}
.jd{
  color: #555;
}
.yw{
  color: #f5f5f5;
}
.content {
  flex: 1;
  display: flex;
}
</style>
