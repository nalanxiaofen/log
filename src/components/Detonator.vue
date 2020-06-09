<template>
  <div class="wrap">
    <div class="detonator">
      <div class="detonator-top">
        <div class="screen">
          <div class="aerial">
            <div class="line"></div>
          </div>
          <!-- 显示屏 -->
          <div class="screen-content"></div>
        </div>
      </div>
      <div class="connect-wrap">
        <div class="connect"></div>
      </div>
      <!-- 键盘区域 -->
      <div class="detonator-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detonator",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrap {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
}
.detonator {
  width: 450px;
  min-height: 680px;
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
      margin-bottom: 15px;
      flex: 1;
      border: 15px solid #333;
      background: #f5f5f5;
      border-radius: 8px;
      display: flex;
    }
  }
}
//连接处
.connect-wrap {
  width: 413px;
  height: 50px;
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
  height: 350px;
  background: chocolate;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
  position: relative;
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
}
</style>
