<template>
    <div class="page">
        <div class="header">设备参数 </div>
        <ul class="list">
            <li class="item">
                <div class="item-title purple">设备地址:</div>
                <div class="item-content blue">00:35:FF:F5:AF:38 [001]</div>
            </li>
            <li class="item">
                <div class="item-title purple">设备编号:</div>
                <div class="item-content blue">F9910121946</div>
            </li>
            <li class="item">
                <div class="item-title purple">系统时间:</div>
                <div class="item-content blue">2020-06-24 12:23</div>
            </li>
            <li class="item">
                <div class="item-title purple">地理坐标:</div>
                <div class="item-content blue">107.813805 26.511923</div>
            </li>
            <li class="item">
                <div class="item-title purple">编译时间:</div>
                <div class="item-content blue">2019-12-04 23:21</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'DeviceData'
}
</script>
<style lang="less" scoped>
.purple{
    color: #7107d1;
}
.blue{
    color: blue;
}
.page{
    flex: 1;
    display: flex;
    flex-direction: column;
    .header{
        padding: 5px 0;
        text-align: center;
        font-size: 18px;
    }
    .list{
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        padding-bottom: 15px;
        .item{
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 10px;
            .item-title{
                padding-right: 10px;
            }
            .item-content{
                flex: 1;
                padding-top: 4px;
                text-align: left;
                letter-spacing: 1px;
            }
        }
    }
}
</style>