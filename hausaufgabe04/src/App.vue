<template>
  <div id="app">
    <nav-bar @added-chirp="addedChirp" @filter-chirps="updateFilterString" />
    <chirp-container :chirps="filteredChirps" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ChirpContainer from "./components/ChirpContainer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    'chirp-container': ChirpContainer,
  },
  methods: {
    addedChirp(newChirp) {
      this.chirps.push({
        id: this.idCounter++,
        author: newChirp.author,
        thumbnail: "avatar" + ((this.idCounter % 6) + 1) + ".png",
        text: newChirp.text,
        hashtags: newChirp.hashtags,
        category: "other",
      });
      console.log(this.idCounter);
    },
    updateFilterString(filter) {
      this.filterString = filter;
    },
  },
  computed: {
    filteredChirps() {
      if (this.filterString.startsWith("#")) {
        return this.chirps.filter((chirp) =>
          chirp.hashtags.includes(this.filterString)
        );
      } else {
        return this.chirps.filter(
          (chirp) =>
            !this.filterString || chirp.category.includes(this.filterString)
        );
      }
    },
  },
  data() {
    return {
      idCounter: 8,
      filterString: "",
      chirps: [
        {
          id: 0,
          author: "Melvin Meyer",
          thumbnail: "avatar1.png",
          text: "Ich habe Lust auf ein Sandwich...",
          hashtags: ["#blt", "#hunger"],
          category: "featured",
        },
        {
          id: 1,
          author: "BoxOfPoptarts",
          thumbnail: "avatar2.png",
          text: "Online-Semester sind gar nicht so schlimm wie ich dachte",
          hashtags: ["#homeoffice", "#webtech"],
          category: "featured",
        },
        {
          id: 2,
          author: "Peter Pan",
          thumbnail: "avatar3.png",
          text: "Im Homeoffice kann man nicht fliegen :(",
          hashtags: ["#homeoffice", "#tinkerbell"],
          category: "friends",
        },
        {
          id: 3,
          author: "Alissa",
          thumbnail: "avatar4.png",
          text:
            "Zeit für Sommer - ich brauche endlich wieder Vitamin-D und Cocktails am Strand!",
          hashtags: ["#sommer", "#strand"],
          category: "friends",
        },
        {
          id: 4,
          author: "Peter Altmaier",
          thumbnail: "avatar5.png",
          text:
            "Hab mir gerade lecker Currywurst geholt, gibt nix besseres nach einer langen Krisensitzung.",
          hashtags: ["#hunger"],
          category: "friends",
        },
        {
          id: 5,
          author: "Der Sprücheklopfer",
          thumbnail: "avatar6.png",
          text: "Unsere größte Schwäche liegt im Aufgeben. Der sichere Weg zum Erfolg ist immer, es doch noch einmal zu versuchen. - Thomas Edison",
          hashtags: ["#motivation", "#webtech"],
          category: "other",
        },
        {
          id: 6,
          author: "MatrixNeo666",
          thumbnail: "avatar1.png",
          text: "Hat jemand die Musterlösung für HA 4? Ich komme nicht mit diesem BootstrapVue klar!",
          hashtags: ["#webtech", "#bootstrap", "#tuberlin"],
          category: "other",
        },
        {
          id: 7,
          author: "Orangen-Marmelade",
          thumbnail: "avatar2.png",
          text: "covfefe",
          hashtags: ["#oops"],
          category: "other",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
}
</style>
