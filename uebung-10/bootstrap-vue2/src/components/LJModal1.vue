<template>
    <div>
        <b-col><b-button v-b-modal.modal-1>Neuer Eintrag</b-button></b-col>
        <b-modal id="modal-1" title="Neuer Eintrag" @ok="addEntry">

            
            <b-form-group
                id="title"
                description="Um was geht es bei diesem Eintrag?"
                label="Titel des Eintrags"
                label-for="input-1"
                :invalid-feedback="invalidFeedback"
                :valid-feedback="validFeedback"
            >
                <b-form-input id="input-1" v-model="newEntry.title" :state="titleState" trim></b-form-input>
            </b-form-group>
 

            <b-form-group
                id="date"
                label="Datum"
            > 
                <b-form-input
                    v-model="newEntry.date"
                    placeholder="dd.Monat.yyyy"
                    class="mb-3"
                    :state="dateState"
                >
                </b-form-input>
            </b-form-group>

            <b-form-group
                id="style"
                label="Stil des Eintrags"

            >
                <b-form-select
                    v-model="newEntry.style"
                    :options="options"
                    class="mb-3"
                    :state="styleState"
                >
                </b-form-select>
            </b-form-group>
 
            <b-form-group
                id="content"
                label="Beschreibung"
            >
                <b-form-textarea
                    id="textarea"
                    v-model="newEntry.content"
                    placeholder="Was ist an diesem Tag passiert?"
                    rows="3"
                    max-rows="6"
                    :state="contentState"
                ></b-form-textarea>
            </b-form-group>

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