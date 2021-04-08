<template>
  <b-card >
  <b-container>
    <b-row>
      <b-col cols='3'>
        <b-card-img :src="getImgUrl(chirp.thumbnail)" alt="profile picture" style="border-radius: 100%; max-width:100px; max-height: 100px"></b-card-img>
      </b-col>
      <b-col>          
        <b-card-body>        
          <b-card-title>{{chirp.author}}</b-card-title>
          <b-card-text>
            {{chirp.text}}
            <span style="color: cornflowerblue" v-for="ht in chirp.hashtags" :key="ht"> {{ht}} </span>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-container>

  
  
  </b-card>
</template>

<script>
export default {
  name: "ChirpCard",
  methods: {
    getImgUrl(thumbnailPath) {
      return require("../assets/" + thumbnailPath);
    },
  },
  props: {
    chirp: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style scoped>

</style>