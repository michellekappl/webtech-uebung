<template>
    <b-container-fluid>
        <b-row align-h="center">
            <b-col cols="auto"><h1>Lockdown Journal</h1></b-col>
        </b-row>
        <b-row class="mb-3" align-h="center">
            <lj-modal v-on:added-entry="addEntry"></lj-modal>
        </b-row>
        <b-row align-h="center">
            <b-col cols="8">
            <b-card-group columns style="column-count:1">
                <lj-card v-for="entry in entries" v-bind:key="entry.title" v-bind:entry="entry"></lj-card>
            </b-card-group>
        </b-col></b-row>
    </b-container-fluid>
</template>

<script>
import LJCard from './LJCard.vue';
import LJModal from './LJModal.vue' 
    
export default {
    components: {
        'lj-card': LJCard,
        'lj-modal': LJModal
    },
    methods: {
        addEntry(newEntry) {
            this.entries.unshift(newEntry)
        }
    },
    data: function () {
        return {
              entries: [
                {
                    title: 'Mein Tutor ist die Beste',
                    date: '02.Februar.2021',
                    style:'success',
                    content: 'Mein Tutor konnte alle meine Fragen beantworten, jetzt verstehe ich nicht nur Vue, sondern auch Bootstrap-Vue. Die nächste Hausaufgabe wird ein Kinderspiel!'
                },
                {
                    title: 'Was soll ich jetzt machen?',
                    date: '30.12.2020',
                    style: 'light',
                    content: 'Ich hab das ganze Netflix Sortiment durchgeschaut, auch Youtube hab ich komplett durch. Das wird noch Langweilig die nächsten Monate'
                },
                {
                    title: 'Nikolaus hat mich vergessen',
                    date: '06.Dezember.2020',
                    style: 'info',
                    content: 'Heute morgen waren meine Schuhe so leer wie mein Magen. Langsam wird das ganze echt deprimierend. Zumindest ist meine K/D bei Counterstrike noch ok.'
                },
                {
                    title: 'Toilettenpapier is aus!',
                    date: '18.November.2020',
                    style: 'danger',
                    content: 'Verflixter Lockdown, mir ist das Toilettenpapier ausgegangen. Und im Laden gibts auch nichts mehr. Zum Glück hab ich noch meine Aufzeichnungen der Vorlesungen aus dem letzten Semester, die müssen jetzt herhalten.'
                },
                {
                    title: 'Vorlesungen sind jetzt Online',
                    date: '28.August.2020',
                    style: 'info',
                    content: 'Der Präsenzbetrieb an der Uni wurde entgültig eingestellt. Jetzt habe ich wirklich keinen grund mehr das Haus zu verlassen. Leider ist meine Internetverbindung für Zoom zu langsam.'
                },
                {
                    title: 'Gehamstert',
                    date: '17.Juni.2020',
                    style: 'light',
                    content: 'Beim Aldi nebenan gab es noch genügend Konservendosen. Um den Lockdown unbeschadet zu überstehen, habe ich erstmal ein paar dutzend gekauft. Bohnen geben mir zwar Blähungen, aber niemand hat verboten ab und an das Haus zu lüften.'
                },
            ]
        }

    },
}    
</script>