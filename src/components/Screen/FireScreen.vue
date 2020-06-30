<template>
  <div class="page" :class="otherStyle">
    <!-- FIRE-MAIN进入起爆控制页面 -->
    <div class="start-view" v-if="screenType==='FIRE-MAIN'">
      <h4 class="title">警告</h4>
      <ul class="content-list">
        <li class="list-item">1.请确认总线已连接正确；</li>
        <li class="list-item">2.请确认人员已安全撤离；</li>
        <li class="list-item">
          3.时间：
          <span class="origen" :class="otherStyle">{{FIRE_MAIN.times}}</span>
        </li>
      </ul>
      <div class="progress">
        <p :style="fireMainProgress"></p>
      </div>
      <div class="hit" :class="otherStyle">
        <span>{{FIRE_MAIN.hitMsg}}</span>
      </div>
    </div>
    <!-- FIRE-CONFIRM 起爆确定页面 -->
    <div class="info-view" v-else-if="screenType==='FIRE-CONFIRM'">
      <div class="info-item pt10">
        <div class="title">在线雷管总数:</div>
        <div class="info">
          <span class="blue" :class="otherStyle">{{FIRE_CONFIRM.onLineLG}}</span>
        </div>
      </div>
      <div class="num">
        <div class="title">
          <span style="opacity: 0;">雷管总数:</span>
        </div>
        <div class="info">
          <div class="box"></div>
          <div class="box">
            <span class="long-num origen" :class="otherStyle">{{FIRE_CONFIRM.onLineLG}}</span>
          </div>
          <div class="box"></div>
          <div class="box">发</div>
        </div>
      </div>
      <div class="info-item">
        <div class="title">方案总数:</div>
        <div class="info">
          <div class="box">
            <span class="origen fbig" :class="otherStyle">{{FIRE_CONFIRM.schemeNum}}</span>
          </div>
          <div class="box">发</div>
          <div class="box"></div>
          <div class="box"></div>
        </div>
      </div>
      <div class="info-item">
        <div class="title">延时区间:</div>
        <div class="info tl">
          <div class="box">
            <span class="origen" :class="otherStyle">{{FIRE_CONFIRM.delayRange[0]}}</span>
          </div>
          <div class="box">--</div>
          <div class="box">
            <span class="origen" :class="otherStyle">{{FIRE_CONFIRM.delayRange[1]}}</span>
          </div>
          <div class="box">ms</div>
        </div>
      </div>
      <!-- 底部提示信息 -->
      <div class="hit origen" :class="otherStyle">
        <span>{{FIRE_CONFIRM.hitMsg}}</span>
      </div>
      <!-- 提示框 -->
      <div class="hit-modal" v-show="FIRE_CONFIRM.isModelBox">
        <div class="card">
          <div class="title yellow">警告</div>
          <div class="hit-content origen">
              {{FIRE_CONFIRM.hitMsg}}
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
    <!-- FIRE-AUTH 起爆授权验证 -->
    <div class="auth-view" v-else-if="screenType==='FIRE-AUTH'">
      <div class="auth-progress" v-if="FIRE_AUTH.authStatus===0">
        <div class="box">
          <h5 class="title blue" :class="otherStyle">正在进行起爆授权验证</h5>
          <div class="progress">
            <p :style="fireAuthProgress"></p>
          </div>
        </div>
      </div>
      <!-- 验证失败 -->
      <div class="auth-conclusion" v-else-if="FIRE_AUTH.authStatus===1">
        <div class="conclusion">
          <div class="hit-text origen" :class="otherStyle">验证失败</div>
          <div class="hit-num blue" :class="otherStyle">
            <span class="origen f16" :class="otherStyle">{{FIRE_AUTH.errorNum}}</span>处异常
          </div>
        </div>
        <div class="hit origen" :class="otherStyle">雷管状态异常，授权验证失败！请按确定进行扫描。</div>
      </div>
      <!-- 验证失败扫描 -->
      <div class="auth-error" v-else-if="FIRE_AUTH.authStatus===2">
        <div class="box">
          <h5 class="title blue" :class="otherStyle">异常错误扫描中...</h5>
          <div class="progress">
            <p :style="errorProgress"></p>
          </div>
        </div>
      </div>
      <!-- 验证失败的扫描结果 -->
      <div class="error-conclusion" v-else-if="FIRE_AUTH.authStatus===3">
        <h4>
          扫描到产品
          <span>{{FIRE_AUTH.lgNum}}</span>发
        </h4>
        <ul>
          <li>
            1.状态T出错
            <span>{{FIRE_AUTH.TNum}}</span>发
          </li>
          <li>
            2.状态D出错
            <span>{{FIRE_AUTH.DNum}}</span>发
          </li>
          <li>
            3.状态C出错
            <span>{{FIRE_AUTH.CNum}}</span>发
          </li>
        </ul>
      </div>
      <!-- 异常项详情 -->
      <div class="error-detail" v-else-if="FIRE_AUTH.authStatus===4">异常详情</div>
    </div>
    <!-- FIRE-CHARGE 起爆充电 -->
    <div class="charge-view" v-else-if="screenType==='FIRE-CHARGE'">
      <!-- 充电准备 -->
      <div class="charge-start" v-if="FIRE_CHARGE.chargeStatus===0">
        <ul>
          <li>
            <p :class="otherStyle">准备充电</p>
          </li>
          <li>
            <p :class="otherStyle">请撤离人员，并警戒!</p>
          </li>
          <li>
            <p :class="otherStyle">
              请按<img class="icon" src="../../assets/screen/icon_lightning.png" alt="充电" />键进行充电
            </p>
          </li>
        </ul>
      </div>
      <!-- 充电进度 -->
      <div class="charge-progress" v-else-if="FIRE_CHARGE.chargeStatus===1">
        <div class="text blue" :class="otherStyle">充电进行中，总计用时：</div>
        <div class="second origen" :class="otherStyle">{{FIRE_CHARGE.chargeTime}}</div>
        <div class="progress">
          <p :style="fireChargeProgress"></p>
        </div>
        <div class="hit blue" :class="otherStyle">
          <span>提示：正在充电中，按 [返回] 键取消</span>
        </div>
      </div>
      <!-- 充电完成，准备起爆 -->
      <div class="charge-end" v-else-if="FIRE_CHARGE.chargeStatus===2">
        <ul>
          <li>
            <p :class="otherStyle">充电完成，可以起爆了!</p>
          </li>
          <li>
            <p :class="otherStyle">请再次确认人员安全撤离!</p>
          </li>
          <li>
            <p :class="otherStyle">按 [F1+F2] 键起爆</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- FIRE-FIRE 起爆页面 -->
    <div class="fire-view" v-else-if="screenType==='FIRE-FIRE'">
      <!-- 爆破进度 -->
      <div class="fire-progress">
        <div class="text origen" :class="otherStyle">
          <p v-if="FIRE_FIRE.fireStatus===0">正在爆破...</p>
          <p v-else>爆破完成</p>
        </div>
        <div class="progress" v-show="FIRE_FIRE.fireStatus===0">
          <p :style="fireFireProgress"></p>
        </div>
        <div class="hit blue" :class="otherStyle">
          <span v-if="FIRE_FIRE.fireStatus===0">提示：正在爆破中...</span>
          <span v-else>提示：爆破完成，按 [确定] 键返回!</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters } = createNamespacedHelpers('screen');
export default {
  name: "FireScreen",
  computed: {
    ...mapState({
      screenType: state => state.controllerScreen.screenType,
      FIRE_MAIN: state => state.controllerScreen.FIRE_MAIN,
      FIRE_CONFIRM: state => state.controllerScreen.FIRE_CONFIRM,
      FIRE_AUTH: state => state.controllerScreen.FIRE_AUTH,
      FIRE_CHARGE: state => state.controllerScreen.FIRE_CHARGE,
      FIRE_FIRE: state => state.controllerScreen.FIRE_FIRE
    }),
    ...mapGetters([
        'otherStyle',
        'fireMainProgress',
        'fireAuthProgress',
        'fireChargeProgress',
        'fireFireProgress',
        'errorProgress'
    ])
  }
};
</script>
<style lang="less" scoped>
.hit {
  color: blue;
}
.origen {
  color: #e4393e;
}
.yellow {
  color: #fbff00;
}
.blue {
  color: #0303f0;
}
.page {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}
.f16 {
  font-size: 16px;
}
.pt10 {
  padding-top: 10px;
}
.tr {
  text-align: right;
}
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
//起爆控制页
.start-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 20px;
    padding: 10px 0;
  }
  .content-list {
    width: 100%;
    .list-item {
      padding: 2px 0;
    }
  }
  .progress {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      width: 80%;
      height: 22px;
      border: 1px solid #aaaaaa;
      box-shadow: 0 0 0 1px #ffffff inset;
      border-radius: 2px;
      background: #33d80a;
      background-clip: content-box;
    }
  }
  .hit {
    padding: 2px 5px;
    border-top: 1px solid #dddddd;
    font-size: 14px;
    text-align: left;
  }
}
//起爆确定页
.info-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 5px;
  .info-item {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    .title {
      font-size: 14px;
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .box {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .fbig {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
  .num {
    flex: 1;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    .title {
      font-size: 14px;
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: row;
      .box {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .long-num {
          font-size: 35px;
          font-weight: bold;
        }
      }
    }
  }
  .hit {
    padding: 2px 5px;
    border-top: 1px solid #dddddd;
    font-size: 14px;
    text-align: left;
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
//起爆授权页
.auth-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  .auth-progress {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      width: 80%;
      .title {
        font-size: 16px;
        padding: 10px;
      }
      .progress {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          width: 80%;
          height: 22px;
          border: 1px solid #aaaaaa;
          box-shadow: 0 0 0 1px #ffffff inset;
          border-radius: 2px;
          background: #33d80a;
          background-clip: content-box;
        }
      }
    }
  }
  .auth-conclusion {
    flex: 1;
    display: flex;
    flex-direction: column;
    .conclusion {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .hit-text {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 2px;
        width: 100px;
        height: 100px;
        background: #51cedb;
        border-radius: 50%;
        border: 1px solid #aaaaaa;
        font-size: 20px;
        z-index: 99;
      }
      .hit-num {
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
        padding: 10px;
        font-size: 12px;
      }
    }
    .hit {
      padding: 2px 5px;
      border-top: 1px solid #aaaaaa;
      font-size: 13px;
      font-weight: bold;
      text-align: left;
    }
  }
  .auth-error {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      width: 80%;
      .title {
        font-size: 16px;
        padding: 10px;
      }
      .progress {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          width: 80%;
          height: 22px;
          border: 1px solid #aaaaaa;
          box-shadow: 0 0 0 1px #ffffff inset;
          border-radius: 2px;
          background: #33d80a;
          background-clip: content-box;
          //background-image: linear-gradient(to right, rgba(0,0,0,0) 80% , #f5f5f5 0%);
        }
      }
    }
  }
  .error-conclusion {
    flex: 1;
    display: flex;
    flex-direction: column;
    h4 {
      padding: 10px 0;
      letter-spacing: 3px;
      span {
        display: inline-block;
        width: 50px;
      }
    }
    ul > li {
      padding: 9px 0;
      font-size: 14px;
      span {
        display: inline-block;
        width: 50px;
      }
    }
  }
  .error-detail {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
//起爆充电页
.charge-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  .charge-start {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      li {
        padding: 3px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 20px;
          background: #e9d700;
          color: #e4393e;
          padding: 2px 8px;
          border-radius: 3px;
          text-align: justify;
          letter-spacing: 3px;
          .icon {
            width: 20px;
            vertical-align: middle;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 2px;
            padding: 3px 0;
            background: #e4393c;
            border-radius: 3px;
            box-shadow: 0 0 0 1px #dddddd inset;
          }
        }
        p.jd{
            background: #555;
            color: #fff;
            .icon{
                background: #aaa;
            }
        }
        p.yw{
            background: #fff;
            color: #555;
            .icon{
                background: #555;
            }
        }
      }
    }
  }
  .charge-progress {
    flex: 1;
    display: flex;
    flex-direction: column;
    .text {
      font-size: 16px;
      font-weight: bold;
      padding: 6px 5px;
      text-align: left;
    }
    .second {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 54px;
    }
    .progress {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 80%;
        height: 22px;
        border: 1px solid #aaaaaa;
        box-shadow: 0 0 0 1px #ffffff inset;
        border-radius: 2px;
        background: #33d80a;
        background-clip: content-box;
        //background-image: linear-gradient(to right, rgba(0,0,0,0) 80% , #f5f5f5 0%);
      }
    }
    .hit {
      padding: 2px 5px;
      border-top: 1px solid #dddddd;
      font-size: 14px;
      text-align: left;
    }
  }
  .charge-end {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      li {
        padding: 3px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 20px;
          background: #e9d700;
          color: #e4393e;
          padding: 2px 8px;
          border-radius: 3px;
          text-align: justify;
          letter-spacing: 3px;
          .icon {
            width: 20px;
            vertical-align: middle;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 2px;
            padding: 3px 0;
            background: #e4393c;
            border-radius: 3px;
            box-shadow: 0 0 0 1px #dddddd inset;
          }
        }
        p.jd{
            background: #555;
            color: #fff;
            .icon{
                background: #aaa;
            }
        }
        p.yw{
            background: #fff;
            color: #555;
            .icon{
                background: #555;
            }
        }
      }
    }
  }
}
//爆破页面
.fire-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  .fire-progress {
    flex: 1;
    display: flex;
    flex-direction: column;
    .text {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 26px;
        padding: 3px 12px;
        border-radius: 3px;
        text-align: justify;
        letter-spacing: 3px;
      }
    }
    .progress {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 80%;
        height: 22px;
        border: 1px solid #aaaaaa;
        box-shadow: 0 0 0 1px #ffffff inset;
        border-radius: 2px;
        background: #33d80a;
        background-clip: content-box;
        //background-image: linear-gradient(to right, rgba(0,0,0,0) 80% , #f5f5f5 0%);
      }
    }
    .hit {
      padding: 2px 5px;
      border-top: 1px solid #dddddd;
      font-size: 14px;
      text-align: left;
    }
  }
}

//经典样式
.jd {
  background: #f9f9f9;
  color: #555;
}
//夜晚样式
.yw {
  background: rgba(0, 0, 0, 0);
  color: #f9f9f9;
}
</style>
