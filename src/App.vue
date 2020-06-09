<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
body{font-size: 16px;color: #333333;}
body,div,p,h1,h2,h3,h4,h5,h6,ul,ol,li{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul,ol,li{
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>
