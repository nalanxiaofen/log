<template>
  <div class="wrap">
    <div class="detonator">
      <div class="detonator-top">
        <div class="screen">
          <div class="aerial">
            <div class="line"></div>
          </div>
          <!-- 显示屏 -->
          <div class="screen-content">
            <Screen></Screen>
          </div>
        </div>
      </div>
      <div class="connect-wrap">
        <div class="connect"></div>
      </div>
      <!-- 键盘区域 -->
      <div class="detonator-bottom">
        <!-- one -->
        <div class="row pt10">
          <div class="btn-box">
            <div class="btn-fn" :class="{'btn-active':isKeyCode('FN1')||isKeyCode('FN12')}">F1</div>
          </div>
          <div class="btn-box"></div>
          <div class="btn-box">
            <div class="btn-fn" :class="{'btn-active':isKeyCode('FN2')||isKeyCode('FN12')}">F2</div>
          </div>
        </div>
        <!-- two -->
        <div class="row pt10">
          <div class="btn-box">
            <div class="btn-handle" :class="{'btn-active':isKeyCode('BACK')}">返回</div>
          </div>
          <div class="btn-box"></div>
          <div class="btn-box">
            <div class="btn-handle" :class="{'btn-active':isKeyCode('OK')}">确定</div>
          </div>
        </div>
        <!-- three -->
        <div class="row">
          <div class="btn-box"></div>
          <div class="btn-box">
            <div class="btn-arrow" :class="{'btn-active':isKeyCode('TOP')}">&uarr;</div>
          </div>
          <div class="btn-box"></div>
        </div>
        <!-- four -->
        <div class="row pt10">
          <div class="btn-box">
            <div class="btn-arrow" :class="{'btn-active':isKeyCode('LEFT')}">&larr;</div>
          </div>
          <div class="btn-box">
            <div class="btn-arrow" :class="{'btn-active':isKeyCode('DOWN')}">&darr;</div>
          </div>
          <div class="btn-box">
            <div class="btn-arrow" :class="{'btn-active':isKeyCode('RIGHT')}">&rarr;</div>
          </div>
        </div>
        <!-- five -->
        <div class="row pt10">
          <div class="row-left">
            <div class="btn-box pt10">
              <div class="btn-charg" :class="{'btn-active':isKeyCode('CHARGE')}">
                <img class="charg" alt="Vue logo" src="../../assets/icon_lightning.png" />
              </div>
            </div>
          </div>
          <div class="row-right">
            <!-- five-one -->
            <div class="row pt10">
              <div class="btn-box">
                <div class="btn-num" :class="{'btn-active':isKeyCode('NUM1')}">1</div>
              </div>
              <div class="btn-box">
                <div class="btn-num" :class="{'btn-active':isKeyCode('NUM2')}">2</div>
              </div>
              <div class="btn-box">
                <div class="btn-num" :class="{'btn-active':isKeyCode('NUM3')}">3</div>
              </div>
            </div>
            <!-- five-two -->
            <div class="row pt10">
              <div class="btn-box">
                <div class="btn-num" :class="{'btn-active':isKeyCode('NUM4')}">4</div>
              </div>
              <div class="btn-box">
                <div class="btn-num" :class="{'btn-active':isKeyCode('NUM5')}">5</div>
              </div>
              <div class="btn-box">
                <div class="btn-num" :class="{'btn-active':isKeyCode('NUM6')}">6</div>
              </div>
            </div>
          </div>
        </div>
        <!-- six -->
        <div class="row pt10">
          <div class="btn-box">
            <div class="btn-num" :class="{'btn-active':isKeyCode('FN')}">FN</div>
          </div>
          <div class="btn-box">
            <div class="btn-num" :class="{'btn-active':isKeyCode('NUM7')}">7</div>
          </div>
          <div class="btn-box">
            <div class="btn-num" :class="{'btn-active':isKeyCode('NUM8')}">8</div>
          </div>
          <div class="btn-box">
            <div class="btn-num" :class="{'btn-active':isKeyCode('NUM9')}">9</div>
          </div>
        </div>
        <!-- seven -->
        <div class="row pt10">
          <div class="btn-box">
            <div class="btn-switch" :class="{'btn-active':isKeyCode('ONOFF')}">
              <img class="switch" alt="Vue logo" src="../../assets/icon_switch.png" />
            </div>
          </div>
          <div class="btn-box">
            <div class="btn-num" :class="{'btn-active':isKeyCode('STAR')}">
              <img class="icon" alt="Vue logo" src="../../assets/icon_xing.png" />
            </div>
          </div>
          <div class="btn-box">
            <div class="btn-num" :class="{'btn-active':isKeyCode('NUM0')}">0</div>
          </div>
          <div class="btn-box">
            <div class="btn-num" :class="{'btn-active':isKeyCode('SHARP')}">#</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '../../components/Screen/index';
export default {
  name: "Detonator",
  components:{
    Screen
  },
  data(){
    return {
      keyCode:['FN12']
    }
  },
  mounted(){
    this.timeout = setInterval(()=>{
      this.clickFn();
    },1000);
  },
  beforeDestroy(){
    clearInterval(this.timeout);
  },
  methods:{
    isKeyCode(keycode){
      let tf = this.keyCode.includes(keycode);
      return tf;
    },
    clickFn(){
      const arr = ['ONOFF','FN1','FN2','FN','FN12','TOP','DOWN','LEFT','RIGHT','CHARGE',
      'NUM0','NUM1','NUM2','NUM3','NUM4','NUM5','NUM6','NUM7','NUM8','NUM9','OK','BACK','STAR','SHARP'];
      let item = arr[Math.random() * arr.length | 0];
      this.keyCode = [item];
    }
  }
};
</script>

<style scoped lang="less">
.wrap {
  padding-bottom: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detonator {
  width: 450px;
  min-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.detonator-top {
  width: 420px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    top: 14px;
    bottom: 30px;
    left: 0;
    right: 0;
    box-shadow: 0 0 15px 3px #548e7f;
    border-radius: 10px;
    z-index: -1;
  }
  .screen {
    width: 100%;
    flex: 1;
    padding: 45px 30px 0 30px;
    background: chocolate;
    display: flex;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
    position: relative;
    //天线
    .aerial{
      width: 340px;
      height: 20px;
      background: #ffffff;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      &:after{
        content: '';
        display: block;
        width: 22px;
        height: 20px;
        background: chocolate;
        position: absolute;
        top:0;
        left: 0;
        transform: rotate(60deg) translateX(-3px) translateY(15px);
        z-index: 10;
        box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.2) inset;
      }
      &:before{
        content: '';
        display: block;
        width: 22px;
        height: 20px;
        background: chocolate;
        position: absolute;
        top:0;
        right: 0;
        transform: rotate(-60deg) translateX(3px) translateY(15px);
        z-index: 10;
        box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.2) inset;
      }
      .line{
        width: 100px;
        height: 100%;
        position: relative;
        &:before{
          content: '';
          display: block;
          width: 25px;
          height: 30px;
          box-sizing: border-box;
          border-bottom: 10px solid chocolate;
          background: #b20303;
          background-image: linear-gradient(to right, #d1221a 25%, #b20303 60%, #df4e09);
          border-radius: 6px;
          position: absolute;
          bottom: -5px;
          left: 0;
        }
        &:after{
          content: '';
          display: block;
          width: 25px;
          height: 30px;
          box-sizing: border-box;
          border-bottom: 10px solid chocolate;
          background: #b20303;
          background-image: linear-gradient(to right, #d1221a 25%, #b20303 60%, #df4e09);
          border-radius: 6px;
          position: absolute;
          bottom: -5px;
          right: 0;
        }
      }
    }
    //屏幕
    .screen-content {
      position: relative;
      margin-bottom: 10px;
      flex: 1;
      border-left: 20px solid #333;
      border-right: 20px solid #333;
      border-top: 16px solid #333;
      border-bottom: 16px solid #333;
      background: #f5f5f5;
      border-radius: 8px;
      display: flex;
      z-index: 99;
    }
  }
}
//连接处
.connect-wrap {
  width: 413px;
  height: 30px;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  .connect {
    width: 300px;
    height: 70px;
    background: chocolate;
    position: absolute;
    top: -10px;
    background-image: linear-gradient(#d2691e,rgba(190, 102, 16, 0.5) 60%, #d2691e);
    &:after {
      content: "";
      display: block;
      width: 88px;
      height: 47px;
      position: absolute;
      top: 0;
      left: 0;
      background: #d2691e;
      transform: rotate(46.5deg) translateX(-37px) translateY(42px);
      box-shadow: 0 -5px 5px 0px rgba(0, 0, 0, 0.2) inset;
      border-top-right-radius: 100px;
      border-top-left-radius: 100px;
    }
    &:before {
      content: "";
      display: block;
      width: 88px;
      height: 47px;
      position: absolute;
      top: 0;
      right: 0;
      background: #d2691e;
      transform: rotate(-46.5deg) translateX(37px) translateY(42px);
      box-shadow: 0 -5px 5px 0px rgba(0, 0, 0, 0.2) inset;
      border-top-right-radius: 100px;
      border-top-left-radius: 100px;
    }
  }
}
//底部键盘
.detonator-bottom {
  width: 300px;
  height: 330px;
  background: chocolate;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
  position: relative;
  padding: 0 30px 20px 30px;
  &:after {
    position: absolute;
    content: "";
    top: 60px;
    bottom: 14px;
    left: 0;
    right: 0;
    box-shadow: 0 0 25px 8px #548e7f;
    border-radius: 10px;
    z-index: -1;
  }
  .pt10{padding-top: 10px;}
  .row{
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 99;
    .row-left{
      flex: 1;
    }
    .row-right{
      flex: 3;
    }
    .btn-box{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn-fn{
        background: #55a00a;
        width: 80px;
        height: 30px;
        border-radius: 5px;
        line-height: 30px;
        font-size: 16px;
        color: #f5f5f5;
        font-weight: bold;
        text-shadow: 1px 1px 2px #e4393c;
        box-shadow: 0px 0px 6px #b24848 inset, 1px 1px 2px #c74242;
      }
      .btn-handle{
        background: #333;
        width: 70px;
        height: 28px;
        border-radius: 5px;
        line-height: 28px;
        font-size: 14px;
        color: #f5f5f5;
        font-weight: bold;
        text-shadow: 1px 1px 2px #e4393c;
        box-shadow: 0px 0px 7px #d1c1b9 inset, 1px 1px 2px #c74242;
      }
      .btn-arrow{
        background: #333;
        width: 50px;
        height: 25px;
        border-radius: 5px;
        line-height: 22px;
        font-size: 14px;
        color: #f5f5f5;
        font-weight: bold;
        text-shadow: 1px 1px 2px #e4393c;
        box-shadow: 0px 0px 7px #d1c1b9 inset, 1px 1px 2px #c74242;
      }
      .btn-num{
        background: #333;
        width: 50px;
        height: 28px;
        border-radius: 5px;
        font-size: 13px;
        color: #f5f5f5;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 1px 1px 2px #e4393c;
        box-shadow: 0px 0px 7px #d1c1b9 inset, 1px 1px 2px #c74242;
        .icon{
          width: 14px;
        }
      }
      .btn-switch{
        background: #e4393c;
        width: 50px;
        height: 28px;
        border-radius: 5px;
        font-size: 13px;
        color: #f5f5f5;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 1px 1px 2px #e4393c;
        box-shadow: 0px 0px 7px #5f260a inset, 1px 1px 2px #ae9b9b;
        .switch{
          width: 18px;
        }
      }
      .btn-charg{
        background: #e4393c;
        width: 50px;
        height: 66px;
        border-radius: 5px;
        font-size: 13px;
        color: #f5f5f5;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 1px 1px 2px #e4393c;
        box-shadow: 0px 0px 8px #5f260a inset, 1px 1px 2px #ae9b9b;
        .charg{
          width: 30px;
          height: 35px;
          padding: 6px 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          box-shadow: 0px 0px 1px #e2ff00;
        }
      }
      .btn-active{
        background: #0b4b1c;
        text-shadow: 1px 1px 2px #e4393c;
        box-shadow: 0px 0px 20px #00fcee inset, 1px 1px 2px #e4f505;
      }
    }
  }
}
</style>
