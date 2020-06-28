<template>
  <div class="page">
    <div class="header">参数设置</div>
    <ul class="content">
      <li class="item">
        <div class="item-left">
          <span class="blue active">屏幕亮度:</span>
        </div>
        <div class="item-right">
          <ul class="light-bar">
            <li class="light bg-green"></li>
            <li class="light bg-green"></li>
            <li class="light bg-green"></li>
            <li class="light bg-green"></li>
            <li class="light bg-green"></li>
          </ul>
        </div>
      </li>
      <li class="item">
        <div class="item-left">
          <span class="blue">键盘背光:</span>
        </div>
        <div class="item-right">
          <ul class="light1-bar">
            <li class="light1 bg-green"></li>
            <li class="light1 bg-green"></li>
            <li class="light1 bg-green"></li>
          </ul>
        </div>
      </li>
      <li class="item">
        <div class="item-left">
          <span class="blue">按键声音:</span>
        </div>
        <div class="item-right">
          <span class="blue">关</span>
        </div>
      </li>
      <li class="item">
        <div class="item-left">
          <span class="blue">组网方式:</span>
        </div>
        <div class="item-right">
          <ul class="btn-list">
            <li class="btn active">单机</li>
            <li class="btn">从机</li>
            <li class="btn">主机</li>
          </ul>
        </div>
      </li>
      <li class="item">
        <div class="item-left">
          <span class="blue">页面风格:</span>
        </div>
        <div class="item-right">
          <ul class="btn-list">
            <li class="btn">经典</li>
            <li class="btn active">标准</li>
            <li class="btn">夜间</li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="footer">
      <div class="btn-box">
        <div class="btn">F1校准检测电流</div>
      </div>
      <div class="btn-box">
        <div class="btn f-active">F2回复默认设置</div>
      </div>
    </div>
    <!-- 弹框 -->
    <div class="hit-modal">
      <div class="card">
        <div class="title yellow">警告</div>
        <div class="hit-content origen">按确定键将回复出厂设置，按返回键取消！</div>
        <div class="btn-box">
          <div class="btn">
            <button>取消</button>
          </div>
          <div class="btn">
            <button>确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Setting"
};
</script>
<style lang="less" scoped>
.blue {
  color: blue;
}
.origen {
  color: #e4393e;
}
.yellow {
  color: #fbff00;
}
.bg-green {
  background-color: chartreuse;
}
.active {
  background-color: blue;
  color: #ffffff;
}
.f-active{
    background-color: #f85712;
    color: #ffffff;
}
.page {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  .header {
    padding: 5px 0;
    text-align: center;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .item {
      flex: 1;
      display: flex;
      flex-direction: row;
      padding: 0 10px;
      .item-left {
        padding-right: 10px;
        font-size: 14px;
        display: flex;
        align-items: center;
        span {
          border-radius: 2px;
          padding: 1px 3px;
        }
      }
      .item-right {
        flex: 1;
        display: flex;
        align-items: center;
        .light-bar {
          width: 120px;
          height: 18px;
          border: 1px solid #333;
          border-radius: 2px;
          display: flex;
          flex-direction: row;
          .light {
            width: 24px;
            padding: 1.5px 1px;
            background-clip: content-box;
          }
        }
        .light1-bar {
          width: 120px;
          height: 18px;
          border: 1px solid #333;
          border-radius: 2px;
          display: flex;
          flex-direction: row;
          .light1 {
            width: 40px;
            padding: 1.5px 1px;
            background-clip: content-box;
          }
        }
        .btn-list {
          display: flex;
          flex-direction: row;
          .btn {
            width: 54px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid blue;
            border-radius: 3px;
            margin-right: 10px;
            font-size: 13px;
          }
        }
      }
    }
  }
  .footer {
    padding: 7px 15px 3px 15px;
    display: flex;
    flex-direction: row;
    .btn-box {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn {
        padding: 0 12px;
        border: 1px solid #333;
        border-radius: 2px;
        font-size: 14px;
      }
    }
  }
  .hit-modal {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.1);
    z-index: 99;
    display: flex;
    justify-content: center;
    padding-top: 12px;
    .card {
      width: 70%;
      height: 120px;
      border-radius: 2px;
      border: 1px solid #7b8d6f;
      background-color: #c1cfca;
      display: flex;
      flex-direction: column;
      .title {
        text-align: center;
        height: 24px;
        width: 100%;
        padding-bottom: 3px;
        background: #7b8d6f;
        border-bottom: 1px solid #7b8d6f;
      }
      .hit-content {
        flex: 1;
        padding: 5px 10px;
        font-size: 14px;
        display: flex;
        text-align: left;
        align-items: center;
      }
      .btn-box {
        padding: 5px 0;
        display: flex;
        flex-direction: row;
        .btn {
          flex: 1;
          padding-bottom: 3px;
          button {
            border-radius: 2px;
            padding: 3px 12px;
            border: 1px solid #a67760;
            background-color: #cfd4ac;
          }
        }
      }
    }
  }
}
</style>