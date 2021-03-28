<template>
    <div id="app">
        <tally-list/>
    </div>
</template>

<script>
    import TallyList from './components/TallyList.vue'
    
    export default {
        components: {
            TallyList
        }
    }
</script>

<style>
    div {
        font-family: sans-serif;
    }
</style>