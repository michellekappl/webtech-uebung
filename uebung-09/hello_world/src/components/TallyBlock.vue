<template>
    <div>
        <!-- TODO: ergänzen -->
        <span class="partial">
            <span>|</span>
        </span>
        <span class="full">||||</span>
    </div>
</template>

<script>
    export default {
        props: {
            // TODO: ergänzen
        },
        computed: {
            // TODO: ergänzen
        }
    }

</script>

<style scoped>
    div {
        display: inline-block;
        margin: 2px;
    }
    span {
        font-family: monospace;
    }
    .full {
        text-decoration: line-through
    }
</style>