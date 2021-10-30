<template>

  <div class=" col-6 col-sm-4 col-md-3">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title mb-3">{{productData.name}}</h4>
        <h6 class="card-subtitle mb-3 text-muted">{{productData.groupName}}</h6>
        <div class="card-text mb-4">
          <p class="mb-1">Цена: <b>{{productData.price}} руб.</b></p>
          <p class="mb-1">Остаток: {{productData.parts}} шт.</p>
        </div>
        <button @click="addToCart" class="btn btn-sm btn-primary float-end">В корзину</button>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "Item",
  props: {
    productData:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    ...mapActions(['ADD_TO_CART']),

    addToCart(){
      this.ADD_TO_CART(this.productData)
    }
  }
}
</script>

<style scoped>

</style>