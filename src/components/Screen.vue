<template>
  <div class="view" :class="otherStyle">
    <div class="header" :class="otherStyle">
        <div class="left">
            <span>电流：0.0 mA</span>
        </div>
        <div class="center">
            <span>电压：0.0 V</span>
        </div>
        <div class="right">
            <img :src="locationSrc" alt="定位">
            <img :src="bluetoothSrc" alt="蓝牙">
            <img :src="wifiSrc" alt="wifi">
            <div class="battery battery60" :class="otherStyle"></div>
        </div>
    </div>
    <div class="content">

    </div>
  </div>
</template>
<script>
export default {
  name: "Screen",
  data() {
    return {
      styleType:'bj',//屏幕样式模式jd经典，yw夜晚，标准bj
    };
  },
  computed:{
    //定位图标
    locationSrc(){
      switch (this.styleType) {
        case 'jd':
          return require('../assets/icon_location_jd.png');
        case 'yw':
          return require('../assets/icon_location_yw.png');
        default:
          return require('../assets/icon_location.png');
      }
    },
    //蓝牙图标
    bluetoothSrc(){
      switch (this.styleType) {
        case 'jd':
          return require('../assets/icon_bluetooth_jd.png');
        case 'yw':
          return require('../assets/icon_bluetooth_yw.png');
        default:
          return require('../assets/icon_bluetooth.png');
      }
    },
    //wifi图标
    wifiSrc(){
      switch (this.styleType) {
        case 'jd':
          return require('../assets/icon_wifi_jd.png');
        case 'yw':
          return require('../assets/icon_wifi_yw.png');
        default:
          return require('../assets/icon_wifi.png');
      }
    },
    //不同模式样式
    otherStyle(){
      switch (this.styleType) {
        case 'jd':
          return {
            'jd':true,
            'yw':false
          };
        case 'yw':
          return {
            'jd':false,
            'yw':true
          };
        default:
          return {
            'jd':false,
            'yw':false
          };
      }
      
    }
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
}
.view.yw{
  background: #555;
}
.header {
  width: 100%;
  height: 20px;
  padding: 0 5px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  flex-direction: row;
  color: #f64704;
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
      .jd{
        border: 1px solid #555;
        background: #555;
        background-clip: content-box;
      }
      .yw{
        border: 1px solid #ae9b9b;
        background: #ae9b9b;
        background-clip: content-box;
        &:after{
          content: '';
          display: block;
          background: #ae9b9b;
        }
      }
      .battery80{
        background-image: linear-gradient(to right, rgba(0,0,0,0) 80% , #f5f5f5 0%);
      }
      .battery70{
        background-image: linear-gradient(to right, rgba(0,0,0,0) 70% , #f5f5f5 0%);
      }
      .battery60{
        background-image: linear-gradient(to right, rgba(0,0,0,0) 60% , #f5f5f5 0%);
      }
      .battery50{
        background-image: linear-gradient(to right, rgba(0,0,0,0) 50% , #f5f5f5 0%);
      }
      .battery40{
        background-image: linear-gradient(to right, rgba(0,0,0,0) 40% , #f5f5f5 0%);
      }
      .battery30{
        background-image: linear-gradient(to right, rgba(0,0,0,0) 30% , #f5f5f5 0%);
      }
      .battery20{
        border: 1px solid rgb(233, 20, 20);
        background-image: linear-gradient(to right, rgba(0,0,0,0) 20% , #f5f5f5 0%);
      }
      .battery10{
        border: 1px solid rgb(233, 20, 20);
        background-image: linear-gradient(to right, rgba(0,0,0,0) 10% , #f5f5f5 0%);
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
