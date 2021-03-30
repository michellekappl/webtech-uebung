<template>
    <div>
        <h2>{{tally.title}}</h2>
        <div id="tally-body">
            <button @click="tally.count += 1">+</button>
            {{tally.count}}
            <button @click="tally.count > 0 ? tally.count -= 1 : tally.count -= 0">-</button>
            <tally-block
                v-for="n in tallyBlockCount"
                :key="n" :index="n"
                :tallyBlockCount="tallyBlockCount"
                :count="tally.count" />
        </div>
    </div>
</template>

<script>
    import TallyBlock from './TallyBlock.vue'
        
    export default {
        components: {
            TallyBlock
        },
        props: {
            tally: {
                type: Object,
                required: true
            }
        },
        computed: {
            tallyBlockCount: function() {
                return Math.floor(this.tally.count / 5) + 1
            }
        }
    }
</script>