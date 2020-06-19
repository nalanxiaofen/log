<template>
  <div class="wrap">
    <div class="card">
      <div class="list-header">
        <div class="header">
            <h5>全局信息</h5>
            <div class="all-info">
                操作员：李超； 时间：2020-06-19； 项目名：xx山爆破项目
            </div>
        </div>
        <div class="th">
          <div class="th-item1">UID</div>
          <div class="th-item">SN</div>
          <div class="th-item">状态</div>
          <div class="th-item">延时</div>
        </div>
      </div>
      <div class="content">
        <ul class="list-content">
          <li class="list-item">
            <div class="item1">20200619223112</div>
            <div class="item">K01</div>
            <div class="item">OK</div>
            <div class="item">1200ms</div>
          </li>
          <li class="list-item">
            <div class="item1">20200619223112</div>
            <div class="item">K01</div>
            <div class="item">OK</div>
            <div class="item">1200ms</div>
          </li>
          <li class="list-item">
            <div class="item1">20200619223112</div>
            <div class="item">K01</div>
            <div class="item">OK</div>
            <div class="item">1200ms</div>
          </li>
          <li class="list-item">
            <div class="item1">20200619223112</div>
            <div class="item">K01</div>
            <div class="item">OK</div>
            <div class="item">1200ms</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
@borderColor: #aaaaaa;
.list-content::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 1px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.list-content::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.list-content::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
.wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card {
    padding: 10px;
    width: 80%;
    height: 80%;
    max-height: 596px;
    background: #f9f9f9;
    border: 1px solid #dddddd;
    border-radius: 8px;
    box-shadow: 1px 1px 5px #333;
    display: flex;
    flex-direction: column;
    .list-header {
      width: 100%;
      border-top: 1px solid @borderColor;
      border-left: 1px solid @borderColor;
      border-right: 1px solid @borderColor;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #e5fffe;
      .header{
          width: 100%;
          display: flex;
          flex-direction: row;
          padding: 10px;
          h5 {
              font-size: 16px;
              text-align: left;
              padding-right: 10px;
          }
          .all-info{
              flex: 1;
              text-align: left;
              font-size: 12px;
              font-weight: bold;
              text-align: justify;
              text-shadow: 1px 1px 0 #ff9c65;
          }
      }
      .th {
        width: 100%;
        display: flex;
        flex-direction: row;
        font-size: 14px;
        font-weight: bold;
        border-top: 1px solid @borderColor;
        .th-item {
          flex: 1;
          border-right: 1px solid @borderColor;
          padding: 5px 0;
          &:last-child{
              border: none;
          }
        }
        .th-item1 {
          flex: 2;
          border-right: 1px solid @borderColor;
          padding: 5px 0;
        }
      }
    }
    .content {
      flex: 1;
      overflow: auto;
      border: 1px solid @borderColor;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      position: relative;
      display: flex;
      &:after {
        content: "";
        display: block;
        width: 0;
        height: 100%;
        background-color: #aaaaaa;
        position: absolute;
        top: 0;
        left: 40%;
        z-index: 99;
      }
      .list-content {
        flex: 1;
        overflow: auto;
        position: relative;
        .list-item {
          width: 100%;
          border-bottom: 1px solid #dddddd;
          display: flex;
          flex-direction: row;
          &:nth-child(even){
            background-color: #e3efd4;
          }
          &:hover{
              background-color: #2f8df7;
              color: #f9f9f9;
          }
          .item {
            flex: 1;
            padding: 5px 0;
            font-size: 12px;
          }
          .item1 {
            flex: 2;
            padding: 5px 0;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>