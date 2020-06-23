<template>
    <div class="page">
        <div class="header">
            单发雷管检测
        </div>
        <ul class="list">
            <li class="list-item">
                <div class="item-left">
                    编码:
                </div>
                <div class="item-right">
                    <div class="text1 origen f18 pl10">0000000000000</div>
                </div>
            </li>
            <li class="list-item">
                <div class="item-left">
                    延时时间:
                </div>
                <div class="item-right">
                    <div class="text origen">0</div>
                    <div class="danwei">ms</div>
                </div>
            </li>
            <li class="list-item">
                <div class="item-left">
                    检测数量:
                </div>
                <div class="item-right">
                    <div class="text origen">0</div>
                    <div class="danwei">发</div>
                </div>
            </li>
            <li class="list-item">
                <div class="item-left">
                    检测状态:
                </div>
                <div class="item-right">
                    <div class="text1 blue pl20">等待检测...</div>
                </div>
            </li>
        </ul>
        <div class="footer">
            <div class="f-item">
                <div class="btn bg-yellow">F1检测</div>
            </div>
            <div class="f-item">
                <div class="btn bg-yellow">F2检测</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Single'
}
</script>
<style lang="less" scoped>
.blue{
    color: blue;
}
.origen{
    color: #e4393e;
}
.bg-yellow{
    background-color: #ede8c7;
}
.f18{font-size: 18px;padding-top: 4px;}
.pl10{padding-left: 10px;}
.pl20{padding-left: 30px;}
.page{
    flex: 1;
    display: flex;
    flex-direction: column;
    .header{
        padding-top: 10px;
        padding-bottom: 5px;
        text-align: center;
        font-weight: bold;
        font-size: 17px;
        letter-spacing: 2px;
    }
    .list{
        flex: 1;
        display: flex;
        flex-direction: column;
        .list-item{
            flex: 1;
            display: flex;
            flex-direction: row;
            padding: 0 40px;
            .item-left{
                font-size: 13px;
                font-weight: bold;
                display: flex;
                align-items: center;
            }
            .item-right{
                font-size: 13px;
                flex: 1;
                display: flex;
                flex-direction: row;
                .text1{
                    flex: 1;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    letter-spacing: 2px;
                }
                .text{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .danwei{
                    flex: 1;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }
            }
        }
    }
    .footer{
        display: flex;
        flex-direction: row;
        padding: 5px 30px;
        .f-item{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            .btn{
                padding: 1px 16px 2px 16px;
                border: 1px solid #333333;
                border-radius: 3px;
            }
        }
    }
}
</style>