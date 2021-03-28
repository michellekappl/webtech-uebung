<template>
   <div>
      <h3>{{ tally.title }}</h3>
      <div>
         <button @click="tally.count++">+</button>
         {{ tally.count }}
         <button @click="tally.count--">-</button>
         <tally-block v-for="block in tallyBlockCount" :key="block" :idx="block" :tallyBlockCount="tallyBlockCount" :count="tally.count" />
      </div>
   </div>
</template>

<script>
import TallyBlock from "./TallyBlock.vue";

export default {
   components: {
      TallyBlock,
   },
   props: {
      tally: {
         type: Object,
         required: true,
      },
   },
   computed: {
      tallyBlockCount: function() {
         return Math.floor(this.tally.count / 5) + 1;
      },
   },
};
</script>
