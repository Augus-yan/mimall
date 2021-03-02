<!--
 * @Descripttion:
 * @version: X3版本
 * @Author:
 * @Date: 2021-03-02 10:15:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 11:07:15
-->
<template>
  <div>
    <order-header></order-header>
    <nav-footer></nav-footer>
    购物车
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
export default {
  name: 'Cart',
  props: [''],
  data() {
    return {}
  },

  components: {
    OrderHeader,
    NavFooter
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
}
</script>
<style lang="sass" scoped></style>
