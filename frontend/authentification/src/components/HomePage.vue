<template>
    <div id="jumbotron">
    
  <b-jumbotron class="text-center">
    <template v-slot:header>Connexion Interface</template>


<p>Below the formulary for signUp or signIn in our magnificient apllication!</p>

<FormHandler/>
   


  </b-jumbotron>
</div>

</template>

<script>

import FormHandler from './FormHandler'

export default {
    name: 'HomePage',
    components: {
        FormHandler,

    }

}
</script>

<style scoped>

</style>