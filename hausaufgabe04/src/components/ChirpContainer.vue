<template>
  <b-container>
    <b-row>
      <b-col cols='12' md='6' lg='4' v-for="chirp in chirps" :key="chirp.id">
        <chirp-card :chirp="chirp"></chirp-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ChirpCard from "./ChirpCard.vue"

export default {
  name: "ChirpContainer",
  components:{
    'chirp-card': ChirpCard,
  },
  props:{
    chirps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>