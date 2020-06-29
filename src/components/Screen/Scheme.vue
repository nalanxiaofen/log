<template>
  <div class="page">
    <div class="content">
      <div class="th bg-yb">
        <div class="num-one">序号</div>
        <div class="num">编码</div>
        <div class="num-one">延时</div>
        <div class="num-one">区号</div>
        <div class="num-one">孔号</div>
      </div>
      <div class="wrap">
        <ul class="list">
          <li class="tr">
            <div class="num-one"></div>
            <div class="num"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
          </li>
          <li class="tr">
            <div class="num-one"></div>
            <div class="num"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
          </li>
          <li class="tr">
            <div class="num-one"></div>
            <div class="num"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
          </li>
          <li class="tr">
            <div class="num-one"></div>
            <div class="num"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
          </li>
          <li class="tr">
            <div class="num-one"></div>
            <div class="num"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
          </li>
          <li class="tr">
            <div class="num-one"></div>
            <div class="num"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
            <div class="num-one"></div>
          </li>
        </ul>
        <ul class="list-data">
          <li class="tr">
            <div class="num-one">01</div>
            <div class="num">0020190506060</div>
            <div class="num-one">9000</div>
            <div class="num-one">01</div>
            <div class="num-one">02</div>
          </li>
          <li class="tr active">
            <div class="num-one">02</div>
            <div class="num">0020190506060</div>
            <div class="num-one">9000</div>
            <div class="num-one">01</div>
            <div class="num-one">02</div>
          </li>
        </ul>
      </div>
      <div class="set-info purple">
        <div class="info">
          F1时差：
          <span class="origen input-active">+ 0</span>
        </div>
        <div class="info">
          总数：
          <span class="origen">3</span>
        </div>
        <div class="info">
          F2时差：
          <span class="origen">+ 0</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="btn-box fl">
        <div class="bten bg-yellow bg-origen">FN脚线</div>
      </div>
      <div class="btn-box fl">
        <div class="bten bg-yellow">F1扫描</div>
      </div>
      <div class="btn-box fr">
        <div class="bten bg-yellow">F2扫描</div>
      </div>
      <div class="btn-box fr">
        <div class="bten bg-green"># 区号</div>
      </div>
    </div>
    <!-- 弹框 -->
    <div class="hit-modal">
      <div class="card">
        <div class="title yellow">请输入区号</div>
        <div class="hit-content">
            <div class="input-box"><span class="num-text input-active">1</span></div>
        </div>
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
  name: "Scheme"
};
</script>
<style lang="less" scoped>
.fl {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.fr {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.origen {
  color: #e4393e;
}
.yellow{
    color: yellow;
}
.purple {
  color: #7107d1;
}
.white{
    color: #ffffff;
}
.bg-blue{
    background-color: blue;
}
.bg-yellow {
  background-color: #f1cc9c;
}
.bg-green {
  background-color: darkgreen;
  color: #ffffff;
}
.bg-origen {
  background-color: #ef7b2f;
  color: #ffffff;
}
.bg-yb {
  background-color: #38fffb;
}
.active {
  background-color: #ef7b2f;
  color: #ffffff;
}
.input-active{
    background-color: blue;
    color: #ffffff;
}
.page {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  .content {
    padding: 5px 10px 0 10px;
    font-size: 13px;
    flex: 1;
    display: flex;
    flex-direction: column;
    .th {
      display: flex;
      flex-direction: row;
      border-top: 1px solid #555;
      border-left: 1px solid #555;
      border-right: 1px solid #555;
      .num-one {
        width: 40px;
        border-right: 1px solid #555;
        &:last-child {
          border: none;
        }
      }
      .num {
        flex: 1;
        border-right: 1px solid #555;
      }
    }
    .wrap {
      flex: 1;
      display: flex;
      position: relative;
      .list {
        flex: 1;
        display: flex;
        flex-direction: column;
        z-index: 2;
        .tr {
          height: 18px;
          display: flex;
          flex-direction: row;
          border-top: 1px solid #555;
          border-left: 1px solid #555;
          border-right: 1px solid #555;
          &:last-child {
            border-bottom: 1px solid #555;
          }
          .num-one {
            width: 40px;
            border-right: 1px solid #555;
            display: flex;
            align-items: center;
            justify-content: center;
            &:last-child {
              border: none;
            }
          }
          .num {
            flex: 1;
            border-right: 1px solid #555;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .list-data {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        margin: auto;
        display: flex;
        flex-direction: column;
        .tr {
          height: 18px;
          display: flex;
          flex-direction: row;
          border-top: 1px solid transparent;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          &:last-child {
            border-bottom: 1px solid transparent;
          }
          .num-one {
            width: 40px;
            border-right: 1px solid transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            &:last-child {
              border: none;
            }
          }
          .num {
            flex: 1;
            border-right: 1px solid transparent;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
    .set-info {
      display: flex;
      flex-direction: row;
      padding: 3px;
      .info {
        flex: 1;
        span {
          font-size: 15px;
          padding: 0 5px;
        }
      }
    }
  }
  .footer {
    padding: 3px 5px;
    border-top: 1px solid #aaaaaa;
    display: flex;
    flex-direction: row;
    .btn-box {
      flex: 1;
      .bten {
        padding: 1px 9px;
        border: 1px solid #aaaaaa;
        border-radius: 3px;
        font-size: 13px;
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
        justify-content: center;
        .input-box{
            width: 160px;
            height: 30px;
            border: 1px solid #555;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            .num-text{
                font-size: 16px;
                padding: 0px 8px;
            }
        }
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