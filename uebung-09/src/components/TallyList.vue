<template>
   <div>
      <input @keydown.enter="addTally" v-model="nextTallyTitle" placeholder="add new tally" />

      <tally-list-item v-for="newTally in tallies" :key="newTally.id" :tally="newTally" />
   </div>
</template>

<script>
import TallyListItem from "./TallyListItem.vue";

let nextTallyId = 0;

export default {
   components: {
      TallyListItem,
   },
   data() {
      return {
         nextTallyTitle: "",
         tallies: [
            {
               id: nextTallyId++,
               title: "UFO Sightings",
               count: 0,
            },
            {
               id: nextTallyId++,
               title: "Birds killed with one stone",
               count: 2,
            },
            {
               id: nextTallyId++,
               title: "Days studied for WebTech exam",
               count: 0,
            },
         ],
      };
   },
   methods: {
      addTally() {
         const trimmedTitle = this.nextTallyTitle.trim();
         if (trimmedTitle) {
            this.tallies.push({
               id: nextTallyId++,
               title: trimmedTitle,
               count: 0,
            });
            this.nextTallyTitle = "";
         }
      },
   },
};
</script>
