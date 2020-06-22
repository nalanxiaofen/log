<template>
    <div class="page">
        <div class="header purple">
            编号：<span class="blue">F9910121946</span>
        </div>
        <div class="content">
            <P class="origen">起爆控制器<br/><span class="purple">Ver5.1.14</span></P>
        </div>
        <div class="footer blue">
            贵州全安密灵科技有限公司
        </div>
    </div>
</template>

<script>
export default {
    name:'Welcome'
}
</script>

<style lang="less" scoped>
.blue{
    color: blue;
}
.purple{
    color: #7107d1;
}
.origen{
    color:#df4e09;
}
.page{
    flex: 1;
    display: flex;
    flex-direction: column;
    .header{
        padding: 15px 20px;
        text-align: left;
    }
    .content{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            font-size: 20px;
            font-weight: bold;
            span{
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
    .footer{
        padding: 20px;
    }
}
</style>