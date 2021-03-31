<template>
    <div>
        <b-col><b-button v-b-modal.modal-1>Neuer Eintrag</b-button></b-col>
        <b-modal id="modal-1" title="Neuer Eintrag" @ok="addEntry">
            <b-form >
                <b-form-group
                    id="title-group"
                    label="Titel:"
                    label-for="title-input"
                >
                <b-form-input
                    placeholder="Gib den neuen Titel an"
                    id="title-input"
                    v-model="newEntry.title"
                    :state="titleState"
                >
                </b-form-input>
                    <b-form-invalid-feedback :state="titleState">
                        {{invalidFeedback}}
                    </b-form-invalid-feedback>
                     <b-form-valid-feedback :state="titleState">
                         {{validFeedback}}
                    </b-form-valid-feedback>
                </b-form-group>

                <b-form-group
                    id="date-group"
                    label="Datum:"
                    label-for="date-input"
                >
                <b-form-datepicker
                    placeholder="Gib ein Datum an"
                    id="date-input"
                    v-model="newEntry.date"
                    :state="dateState"
                >
                </b-form-datepicker>
                </b-form-group>

                <b-form-group
                    id="content-group"
                    label="Inhalt:"
                    label-for="content-input"
                >
                <b-form-textarea
                    placeholder="Gib einen neuen Eintrag an"
                    id="conent-input"
                    v-model="newEntry.content"
                    :state="contentState"
                >
                </b-form-textarea>
                    <b-form-invalid-feedback :state="contentState">
                        Der Inhalt muss mind. 4 Buchstaben lang sein.
                    </b-form-invalid-feedback>
                     <b-form-valid-feedback :state="contentState">
                         {{validFeedback}}
                    </b-form-valid-feedback>
                </b-form-group>
                <b-form-group
                    id="style-group"
                    label="Stimmung:"
                    label-for="style-input"
                >
                    <b-form-select
                        placeholder="Gib deine Stimmung an"
                        id="style-input"
                        v-model="newEntry.style"
                        :options="options"
                    >
                    </b-form-select>
                </b-form-group>
            </b-form>
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