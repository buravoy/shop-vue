<template>
 <div>
   <p>{{itemData.c}} {{itemData.t}} {{itemData.g}}</p>

   <p>quantity: {{itemData.count}}</p>
   <button @click="remove">DEL</button>
 </div>
</template>

<script>

export default {
  name: "CartItem",
  props:{
    itemData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.$set(this.itemData, 'count', 1)
  },
  methods: {
    remove() {
      this.$emit('removeItemFromCart')
    }
  }
}
</script>

<style scoped>

</style>