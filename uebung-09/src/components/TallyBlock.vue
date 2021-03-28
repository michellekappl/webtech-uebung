<template>
   <div>
      <span v-if="idx === tallyBlockCount">
         <span class="partial" v-for="n in remaining" :key="n">|</span>
      </span>
      <span class="full" v-if="idx < tallyBlockCount">||||</span>
   </div>
</template>

<script>
export default {
   props: {
      tallyBlockCount: {
         type: Number,
         required: true,
      },
      count: {
         type: Number,
         required: true,
      },
      idx: {
         type: Number,
         required: true,
      },
   },
   computed: {
      remaining: function() {
         return this.count % 5;
      },
   },
};
</script>

<style scoped>
div {
   display: inline-block;
   margin: 2px;
}
span {
   font-family: monospace;
}
.full {
   text-decoration: line-through;
}
</style>
