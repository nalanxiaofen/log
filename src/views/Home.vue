<template>
  <div class="page">
    <!--页面左部-->
    <div class="page-left"></div>
    <!-- 页面中部 -->
    <div class="page-center">
      <header>
        <img class="logo" alt="Vue logo" src="../assets/logo.png" />
        <span class="title">起爆器操作日志复现</span>
      </header>
      <div class="content">
        <Detonator></Detonator>
      </div>
    </div>
    <!-- 页面右部 -->
    <div class="page-right"></div>
  </div>
</template>

<script>
import Detonator from './detonator/Detonator';

export default {
  name: "Home",
  components: {
    Detonator
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
}
//页面右部
.page-right {
  flex: 1;
  background: cornflowerblue;
}
//页面中间
.page-center {
  width: 500px;
  display: flex;
  flex-direction: column;
  header {
    padding-top: 5px;
    padding-bottom: 3px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
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
      bottom: 0px;
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
