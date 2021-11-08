<template>
  <div class="py-5">
    <Exchange :currencies="CURRENCIES"/>

    <Group
        v-for="(item, index) in GOODS_BY_GROUPS"
        :key="index"
        :group-data="item"
    />

    <Cart
        v-if="CART.length"
        :cart-data="CART"
    />

  </div>
</template>

<script>
import Group from "./Group";
import Cart from "./Cart";
import Exchange from './Exchange'

import {mapActions, mapGetters} from "vuex";

export default {
  name: "Shop",
  components: {
    Group, Cart, Exchange
  },

  computed: {
    ...mapGetters(['CART', 'GOODS_BY_GROUPS', 'CURRENCIES'])
  },

  methods: {
    ...mapActions(['GET_NAMES', 'GET_GOODS']),
  },

  mounted() {
    this.GET_NAMES();
    this.GET_GOODS();
  }
}
</script>

<style scoped>

</style>