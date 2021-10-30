<template>
  <div class="row border-bottom pb-3">
    <h2 class="py-3">{{groupData[0].groupName}}</h2>

    <Item
        v-for="item in groupData"
        :key="item.id"
        :product-data="item"
    />

  </div>
</template>

<script>
import Item from "./Group-Item";

export default {
  name: "Group",
  components: {
    Item
  },
  props: {
    groupData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {}
  },
  methods: {
    addToCart(data) {
      console.log(data)
    }
  },
}

</script>

<style scoped>
  .row:hover {
    background-color: aliceblue;
  }
</style>