<template>
    <div>
        <!-- TODO: ergänzen -->
        <h1></h1>
        <div>
            <button>+</button>
            <button>-</button>
            <tally-block />
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