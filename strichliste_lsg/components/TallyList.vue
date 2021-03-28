<template>
    <div>
        <input
            type="text"
            v-model="nextTallyTitle"
            placeholder="Create new Tally"
            @keydown.enter="addTally" />
        <tally-list-item 
            v-for="tallyItem in tallies"
            :key="tallyItem.id"
            :tally="tallyItem" />
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