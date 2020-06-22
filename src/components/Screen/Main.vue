<template>
    <div class="page">
        <div class="header">主菜单</div>
        <ul class="list">
            <li class="list-item">
                <div class="item">
                    <div class="btn bg-yellow active">1.单发检测</div>
                </div>
                <div class="item">
                    <div class="btn bg-yellow">2.延时方案</div>
                </div>
            </li>
            <li class="list-item">
                <div class="item">
                    <div class="btn bg-yellow">3.组网检测</div>
                </div>
                <div class="item">
                    <div class="btn bg-yellow">4.起爆控制</div>
                </div>
            </li>
            <li class="list-item">
                <div class="item">
                    <div class="btn bg-yellow">5.爆破授权</div>
                </div>
                <div class="item">
                    <div class="btn bg-yellow">6.爆破记录</div>
                </div>
            </li>
        </ul>
        <div class="footer blue">
            F1查看参数，F2设置参数
        </div>
    </div>
</template>

<script>
export default {
    name:'Main'
}
</script>

<style lang="less" scoped>
.blue{
    color:blue;
}
.origen{
    color: #df4e09;
}
.bg-yellow{
    background-color: #ede8c7;
}
.active{
    background-color: #df4e09;
    color: #ffffff;
}
.page{
    flex: 1;
    display: flex;
    flex-direction: column;
    .header{
        padding-top: 10px;
        text-align: center;
        font-size: 18px;
    }
    .list{
        flex: 1;
        display: flex;
        flex-direction: column;
        .list-item{
            flex: 1;
            display: flex;
            flex-direction: row;
            padding: 0 30px;
            .item{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 10px;
                .btn{
                    border: 1px solid #333333;
                    border-radius: 3px;
                    padding: 2px 16px 3px 16px;
                    font-size: 14px;
                }
            }
        }
    }
    .footer{
        padding: 3px 5px;
        text-align: left;
        border-top:1px solid #333333;
    }
}
</style>