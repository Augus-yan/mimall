<!--
 * @Descripttion:
 * @version: X3版本
 * @Author:
 * @Date: 2021-03-02 10:12:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 10:54:59
-->
<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
    主架构
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
  name: 'Home',
  props: [''],
  data() {
    return {}
  },

  components: {
    NavHeader,
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
