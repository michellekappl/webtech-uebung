<template>
    <b-card
    :bg-variant="cardStyle"
    tag="article"
    style="max-width: 66vw; margin-bottom: 25px"
    >
    <b-row no-gutters>
        <b-col md='3' style="margin-right: 15px">
            <b-card-title v-text="entry.title"></b-card-title>
            <b-card-text>{{entry.date}}</b-card-text>
        </b-col>
        <b-col>
        <b-card-text>
            {{entry.content}}
        </b-card-text>
        </b-col>
    </b-row>
    </b-card>
</template>

<script>
export default {
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    computed: {
        cardStyle: function() {
            return this.entry.style;
        }
    }
}
</script>