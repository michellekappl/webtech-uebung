<template>
    <div id="app">
        <lj-grid></lj-grid>
    </div>
</template>

<script>
import LJGrid from './components/LJGrid.vue'

export default {
    name: 'app',
	components: {
		'lj-grid': LJGrid
	}
}
</script>
