<template>
    <fragment>
        <header class="header">
            <div class="header__banner">
                <div class="header__branding">   
                    <!-- logo image here -->
                    <h1>Branding</h1>
                </div>
                <div>
                    <p>Need a freelancer?</p>
                    <!-- add a button link to point somewhere -->
                </div>
            </div>
        </header>
    </fragment>
</template>

<script>
export default {
    methods:{
        listenForKey(e){
            if(e.keyCode === 27) {
                console.log('you pressed: ',e.keyCode)
            }
        }
    },
   created(){
       document.addEventListener('keyup', this.listenForKey)
   },

    destroyed(){
        document.removeEventListener('keyup', this.listenForKey)
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/components/_header.scss';
</style>
