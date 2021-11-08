<template>
  <div class="col-md-3 ms-auto mb-5">
    <p class="form-label">Цены будут пересчитаны через: <b>{{timeLeft}}</b> сек.</p>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3">Новый курс:</span>
      <input v-model="currencies.usd" type="number" min="30" max="80" class="form-control">
    </div>
  </div>
</template>

<script>

export default {
  name: "Exchange",
  props: {
    currencies:{}
  },
  data() {
    return {
      timeLeft : 15,
          }
  },
  methods: {
    reduceTimer() {
      setInterval(()=>{
        if(this.timeLeft <= 0){
          clearInterval(this.timeLeft = 15);
          this.$emit('update-price', this.currencies.usd)
          return;
        }
        this.timeLeft -= 1;
      }, 1000)
    }


  },
  mounted() {
    this.reduceTimer();
  }
}

</script>

<style scoped>

</style>