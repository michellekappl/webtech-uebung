<template>
    <div>
        <b-col><b-button v-b-modal.modal-1>Neuer Eintrag</b-button></b-col>
        <b-modal>
        </b-modal>
    </div>
</template>

<script>
    export default {
        computed: {
            titleState() {
                return this.newEntry.title.length >= 4 ? true:false
            },
            dateState() {
                return this.newEntry.date!='' ? true:false
            },
            contentState() {
                return this.newEntry.content.length>=4 ? true:false
                
            },
            styleState() {
                return this.newEntry.style.length>=3 ? true:false
            },
            invalidFeedback() {
                if (this.newEntry.title.length > 4) {
                    return ''
                } else if (this.newEntry.title.length > 0) {
                    return 'Geben Sie mindestens vier Zeichen ein.'
                } else {
                    return 'Bitte geben Sie etwas ein.'
                }
            },
            validFeedback() {
                return this.titleState === true ? 'Danke' : ''
            }
        },
        methods: {
            addEntry(bvModalEvt) {
                if (this.titleState && this.dateState && this.contentState && this.styleState) {
                    this.$emit('added-entry', this.newEntry);
                    this.newEntry={
                        title: '',
                        date:'',
                        style:'',
                        content: ''
                    };
                    return
                }
                else {
                    bvModalEvt.preventDefault();
                    return
                }
            }
        },
        data() {
            return {
                name: '',
                newEntry: {
                    title: '',
                    date: '',
                    style: '',
                    content: ''
                },
                content: '',
                options: [
                    { value: 'light', text: 'Normal' },
                    { value: 'danger', text: 'Kritisch' },
                    { value: 'success' , text: 'Positiv' },
                    { value: 'info', text: 'Solala'}
                ]
            }
        }
    }
</script>