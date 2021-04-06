<template>
  <div>
    <b-button v-b-modal.modal-1 size="sm" variant="outline-light">Chirpen!</b-button>
    <b-modal id="modal-1" title="Neuen Chirp erstellen" @ok="addChirp">

      <!-- TODO -->

    </b-modal>
  </div>
</template>

<script>
export default {
  name: "CreateChirpModal",
  data() {
    return {
      hashtagString: "",
      newChirp: {
        author: "",
        text: "",
        hashtags: [],
      },
    };
  },
  methods: {
    addChirp(bvModalEvt) {
      if (this.newChirp.author && this.newChirp.text) {
        this.newChirp.hashtags = this.hashtagString
          .split(" ")
          .map((h) => "#" + h.replace("#", ""));
        this.$emit("added-chirp", this.newChirp);
        return;
      } else {
        bvModalEvt.preventDefault();
        return;
      }
    },
  },
};
</script>

<style scoped>
</style>