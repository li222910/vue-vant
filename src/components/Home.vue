<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">外卖</van-tabbar-item>
            <van-tabbar-item icon="search">搜索</van-tabbar-item>
            <van-tabbar-item icon="bill-o">订单</van-tabbar-item>
            <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import {Tabbar, TabbarItem} from "vant"
export default {
    name:"home",
    data() {
        return {
            active: 0,
        }
    },
    component:{
        Tabbar,
        TabbarItem
    },
}
</script>