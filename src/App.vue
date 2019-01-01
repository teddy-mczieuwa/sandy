<template>
    <app-content></app-content>
</template>

<script>
import AppContent from './components/AppContent.vue'
export default {
    components: {
        'app-content': AppContent
    },
    data(){
        return {
            msg : 'Hello world'
        }
    }
}
</script>



<style lang="scss">
    @import './assets/sass/main.scss';
</style>
