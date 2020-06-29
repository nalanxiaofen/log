<template>
    <div class="page">
        <!-- 在线扫描雷管 -->
        <div class="page-scan" v-if="status===0">
            <div class="header">
                在线雷管扫描
            </div>
            <div class="content">
                <div class="box">已扫描到<span class="num origen">4</span>发雷管</div>
            </div>
            <div class="footer">
                <div class="hit-text blue">在线扫描中...</div>
            </div>
        </div>
        <!-- 扫描结果 -->
        <div class="page-result" v-else-if="status===1">
            <div class="header">扫描到<span class="origen">1</span>发雷管</div>
            <div class="content">
                <div class="item">1.已匹配延时方案<span class="origen">1</span>发</div>
                <div class="item">2.未匹配延时方案<span class="origen">2</span>发</div>
                <div class="item">3.未在延时方案中<span class="origen">0</span>发</div>
                <div class="item">4.未在授权文件中<span class="origen">0</span>发</div>
                <div class="item">5.需下传延时数量<span class="origen">0</span>发</div>
            </div>
            <div class="footer">
                <div class="btn-wrap"><div class="btn bg-y">F1查看列表</div></div>
                <div class="btn-wrap"><div class="btn bg-y">F2下传延时</div></div>
            </div>
        </div>
        <!-- 列表页面 -->
        <div class="page-list" v-else-if="status===2">
            <div class="header">在线雷管列表</div>
            <div class="content">
                <div class="th bg-yb">
                    <div class="td">序号</div>
                    <div class="num">编码</div>
                    <div class="timer">延时</div>
                    <div class="td">区号</div>
                    <div class="td">孔号</div>
                </div>
                <div class="table">
                    <ul class="list">
                        <li class="tr">
                            <div class="td"></div>
                            <div class="num"></div>
                            <div class="timer"></div>
                            <div class="td"></div>
                            <div class="td"></div>
                        </li><li class="tr">
                            <div class="td"></div>
                            <div class="num"></div>
                            <div class="timer"></div>
                            <div class="td"></div>
                            <div class="td"></div>
                        </li><li class="tr">
                            <div class="td"></div>
                            <div class="num"></div>
                            <div class="timer"></div>
                            <div class="td"></div>
                            <div class="td"></div>
                        </li><li class="tr">
                            <div class="td"></div>
                            <div class="num"></div>
                            <div class="timer"></div>
                            <div class="td"></div>
                            <div class="td"></div>
                        </li><li class="tr">
                            <div class="td"></div>
                            <div class="num"></div>
                            <div class="timer"></div>
                            <div class="td"></div>
                            <div class="td"></div>
                        </li><li class="tr">
                            <div class="td"></div>
                            <div class="num"></div>
                            <div class="timer"></div>
                            <div class="td"></div>
                            <div class="td"></div>
                        </li>
                    </ul>
                    <ul class="list-data">
                        <li class="tr active">
                            <div class="td">1</div>
                            <div class="num">2200511902000</div>
                            <div class="timer">1600</div>
                            <div class="td">1</div>
                            <div class="td">1</div>
                        </li>
                    </ul>
                </div>
                    
            </div>
            <div class="footer">
                <span class="purple">雷管总数：</span><span class="origen">1</span>
            </div>
        </div>
        <!-- 下传延时 -->
        <div class="page-download" v-else-if="status===3">
            <div class="header">延时下载列表</div>
            <div class="content">
                当前下传第：<span class="origen">4</span>/<span class="origen">10</span>发
            </div>
            <div class="progress">
                <p></p>
            </div>
            <div class="footer blue">
                正在下传延时...
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Group',
    data(){
        return {
            status:3
        }
    }
}
</script>
<style lang="less" scoped>
.blue{
    color: blue;
}
.origen{
    color: #e4393e;
}
.purple {
  color: #7107d1;
}
.bg-yb{
    background-color: #38fffb;
}
.bg-y{
    background-color: #ffddb2;
}
.active{
    background-color: #ff8747;
    color: #ffffff;
}
.page{
    flex: 1;
    display: flex;
    position: relative;
    .page-scan{
        flex: 1;
        display: flex;
        flex-direction: column;
        .header{
            font-size: 22px;
            font-weight: bold;
            padding-top: 10px;
        }
        .content{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            .box{
                .num{
                    font-weight: bold;
                    font-size: 60px;
                    display: inline-block;
                    vertical-align: middle;
                    width: 140px;
                    text-align: center;
                }
            }
        }
        .footer{
            padding: 0 5px;
            display: flex;
            flex-direction: row;
            .hit-text{
                flex: 1;
                padding: 2px 0;
                border-top: 1px solid #aaaaaa;
                font-size: 14px;
                text-align: left;
            }
        }
    }
    .page-result{
        flex: 1;
        display: flex;
        flex-direction: column;
        .header{
            padding: 6px;
            font-weight: bold;
            span{
                display: inline-block;
                vertical-align: middle;
                width: 50px;
            }
        }
        .content{
            flex: 1;
            .item{
                span{
                    display: inline-block;
                    vertical-align: middle;
                    width: 50px;
                }
            }
        }
        .footer{
            display: flex;
            flex-direction: row;
            .btn-wrap{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                .btn{
                    padding: 1px 12px;
                    border-radius: 3px;
                    border: 1px solid #aaaaaa;
                }
            }
        }
    }
    .page-list{
        flex: 1;
        display: flex;
        flex-direction: column;
        .header{
            padding: 5px 0;
            font-size: 18px;
            font-weight: bold;
        }
        .content{
            flex: 1;
            padding: 0 10px;
            font-size: 13px;
            display: flex;
            flex-direction: column;
            .th{
                border: 1px solid #555;
                display: flex;
                flex-direction: row;
                height: 17px;
                line-height: 15px;
                .td{
                    width:40px;
                    border-right: 1px solid #555;
                    &:last-child{
                        border: none;
                    }
                }
                .num{
                    flex: 1;
                    border-right: 1px solid #555;
                }
                .timer{
                    width: 50px;
                    border-right: 1px solid #555;
                }
            }
            .table{
                flex: 1;
                display: flex;
                position: relative;
                .list{
                    flex: 1;
                    z-index: 2;
                    .tr{
                        display: flex;
                        flex-direction: row;
                        height:17px;
                        line-height: 16px;
                        border-left: 1px solid #555;
                        border-right: 1px solid #555;
                        border-bottom: 1px solid #555;
                        .td{
                            width:40px;
                            border-right: 1px solid #555;
                            &:last-child{
                                border: none;
                            }
                        }
                        .num{
                            flex: 1;
                            border-right: 1px solid #555;
                        }
                        .timer{
                            width: 50px;
                            border-right: 1px solid #555;
                        }
                    }
                }
                .list-data{
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    z-index: 1;
                    .tr{
                        display: flex;
                        flex-direction: row;
                        height:17px;
                        line-height: 16px;
                        border-left: 1px solid transparent;
                        border-right: 1px solid transparent;
                        border-bottom: 1px solid transparent;
                        .td{
                            width:40px;
                            border-right: 1px solid transparent;
                            &:last-child{
                                border: none;
                            }
                        }
                        .num{
                            flex: 1;
                            border-right: 1px solid transparent;
                        }
                        .timer{
                            width: 50px;
                            border-right: 1px solid transparent;
                        }
                    }
                }
            }
        }
        .footer{
            padding: 0 10px;
            font-size: 14px;
            text-align: left;
        }
    }
    .page-download{
        flex: 1;
        display: flex;
        flex-direction: column;
        .header{
            padding: 10px 0;
            font-size: 22px;
        }
        .content{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                display: inline-block;
                vertical-align:middle;
                width: 50px;
                text-align: center;
                font-size: 18px;
                padding-top: 4px;
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
        .footer{
            padding: 2px 10px;
            border-top: 1px solid #aaaaaa;
            text-align: left;
            font-size: 14px;
        }
    }
}
</style>