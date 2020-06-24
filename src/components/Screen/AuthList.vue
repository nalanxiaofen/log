<template>
    <div class="page">
        <div class="header">
            授权文件列表
        </div>
        <div class="content">
            <ul class="list pr">
                <li class="list-item bgc-1">
                    <div class="order">序号</div>
                    <div class="download-time">下传时间</div>
                    <div class="num">数量</div>
                    <div class="expiry-date">有效期</div>
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
                    <div class="download-time">2020/06/23 22:55</div>
                    <div class="num">2</div>
                    <div class="expiry-date">2020/06/23 23:59</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'AuthList'
}
</script>
<style lang="less" scoped>
.bgc-1{
    background-color: #82fbff;
}
.pr{position: relative;z-index: 99;}
.page{
    flex: 1;
    display: flex;
    flex-direction: column;
    .header{
        padding-top: 10px;
        padding-bottom: 5px;
        font-size: 18px;
    }
    .content{
        flex: 1;
        padding: 0 5px 20px 5px;
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
                    flex: 1;
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
                    flex: 1;
                }
            }
        }
    }
}
</style>