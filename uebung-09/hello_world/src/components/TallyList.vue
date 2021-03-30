<template>
    <div>
        <!-- TODO: ergänzen -->
        <input />
        <tally-list-item />
    </div>
</template>

<script>
    import TallyListItem from './TallyListItem.vue'
    
    let nextTallyId = 0
    
    export default {
        components: {
            TallyListItem
        },
        data () {
            return {
                nextTallyTitle: '',
                tallies: [
                    {
                        id: nextTallyId++,
                        title: 'UFO Sightings',
                        count: 0
                    },
                    {
                        id: nextTallyId++,
                        title: 'Birds killed with one stone',
                        count: 2
                    },
                    {
                        id: nextTallyId++,
                        title: 'Days studied for WebTech exam',
                        count: 0
                    }
                ]
            }
        },
        methods: {
            addTally () {
                const trimmedTitle = this.nextTallyTitle.trim()
                if (trimmedTitle) {
                    this.tallies.push({
                        id: nextTallyId++,
                        title: trimmedTitle,
                        count: 0
                    })
                    this.nextTallyTitle = ''
                }
            }
        }
    }
</script>