<!--
 * @Descripttion:
 * @version: X3版本
 * @Author:
 * @Date: 2021-03-02 10:14:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 17:57:26
-->
<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <order-footer></order-footer>
    订单主结构
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import OrderFooter from '../components/OrderFooter'
export default {
  name: 'Order',
  props: [''],
  data() {
    return {}
  },

  components: {
    OrderHeader,
    OrderFooter
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
}
</script>
<style lang="sass" scoped></style>
