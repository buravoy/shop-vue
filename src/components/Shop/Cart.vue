<template>

  <div>
    <CartItem
        v-for="(item, index) in cartData"
        :key="item.t"
        :item-data="item"
        @removeItemFromCart="removeItemFromCart(index)"
    />
  </div>

</template>

<script>
import CartItem from "./Cart-Item";
import {mapActions} from 'vuex';


export default {
  name: "Cart",
  components: {
    CartItem
  },
  props: {
    cartData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    ...mapActions(['REMOVE_FROM_CARD']),

    removeItemFromCart(index) {
      this.REMOVE_FROM_CARD(index)
    }
  }
}
</script>

<style scoped>

</style>