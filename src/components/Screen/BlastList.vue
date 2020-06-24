<template>
    <div class="page">
        <div class="header">
            爆破记录
        </div>
        <div class="content">
            <ul class="list pr">
                <li class="list-item bgc-1">
                    <div class="order">序号</div>
                    <div class="download-time">时间</div>
                    <div class="num">数量</div>
                    <div class="expiry-date">上传</div>
                </li>
                <li class="list-item">
                    <div class="order"></div>
                    <div class="download-time"></div>
                    <div class="num"></div>
                    <div class="expiry-date"></div>
                </li>
                <li class="list-item">
                    <div class="order"></div>
                    <div class="download-time"></div>
                    <div class="num"></div>
                    <div class="expiry-date"></div>
                </li>
                <li class="list-item">
                    <div class="order"></div>
                    <div class="download-time"></div>
                    <div class="num"></div>
                    <div class="expiry-date"></div>
                </li>
                <li class="list-item">
                    <div class="order"></div>
                    <div class="download-time"></div>
                    <div class="num"></div>
                    <div class="expiry-date"></div>
                </li>
                <li class="list-item">
                    <div class="order"></div>
                    <div class="download-time"></div>
                    <div class="num"></div>
                    <div class="expiry-date"></div>
                </li>
                <li class="list-item">
                    <div class="order"></div>
                    <div class="download-time"></div>
                    <div class="num"></div>
                    <div class="expiry-date"></div>
                </li>
            </ul>
            <ul class="list pa">
                <li class="list-item bgc-1">
                    <div class="order">序号</div>
                    <div class="download-time">下传时间</div>
                    <div class="num">数量</div>
                    <div class="expiry-date">有效期</div>
                </li>
                <li class="list-item">
                    <div class="order">1</div>
                    <div class="download-time">2020/06/23 22:15</div>
                    <div class="num">2</div>
                    <div class="expiry-date">未上传</div>
                </li>
                <li class="list-item active">
                    <div class="order">2</div>
                    <div class="download-time">2020/06/23 22:23</div>
                    <div class="num">2</div>
                    <div class="expiry-date">未上传</div>
                </li>
                <li class="list-item">
                    <div class="order">3</div>
                    <div class="download-time">2020/06/23 22:55</div>
                    <div class="num">2</div>
                    <div class="expiry-date">未上传</div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="btn bg-yellow">F2标记未上传</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'BlastList'
}
</script>
<style lang="less" scoped>
.bgc-1{
    background-color: #82fbff;
}
.pr{position: relative;z-index: 99;}
.bg-yellow{
    background-color: #ede8c7;
}
.active{
    background-color: tomato;
    color: #ffffff;
}
.page{
    flex: 1;
    display: flex;
    flex-direction: column;
    .header{
        padding: 5px 0;
        font-size: 18px;
    }
    .content{
        flex: 1;
        padding: 0 5px;
        position: relative;
        .list{
            display:flex;
            flex-direction: column;
            border: 1px solid #333333;
            .list-item{
                display: flex;
                flex-direction: row;
                font-size: 12px;
                height: 17px;
                border-bottom: 1px solid #333333;
                &:last-child{
                    border-bottom: none;
                }
                .order{
                    width: 50px;
                    border-right: 1px solid #333333;
                }
                .download-time{
                    flex: 1;
                    border-right: 1px solid #333333;
                }
                .num{
                    width: 50px;
                    border-right: 1px solid #333333;
                }
                .expiry-date{
                    width: 80px;
                }
            }
        }
        .pa{
            position:absolute;
            top: 0;
            left: 5px;
            right: 5px;
            border: none;
            .list-item{border-bottom: none;
                line-height: 18px;
                .order{
                    width: 50px;
                    border-right: 1px solid transparent;
                }
                .download-time{
                    flex: 1;
                    border-right: 1px solid transparent;
                }
                .num{
                    width: 50px;
                    border-right: 1px solid transparent;
                }
                .expiry-date{
                    width: 80px;
                }
            }
        }
    }
    .footer{
        padding: 0 30px 3px 30px;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .btn{
            padding: 1px 16px 2px 16px;
            border: 1px solid #333333;
            font-size: 12px;
            border-radius: 3px;
        }
    }
}
</style>