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
            <img :src="locationIcon" alt="定位">
            <img :src="blueToothIcon" alt="蓝牙">
            <img :src="wifiIcon" alt="wifi">
            <div class="battery battery60" :class="otherStyle"></div>
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
      'otherStyle'
    ]),
    ...mapState([
      'itemScreenMpdal'
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
