<template>
  

    <div>
  <b-tabs content-class="mt-3">
    <b-tab title="SignUp" active><p>  <SignUpForm/></p></b-tab>
    <b-tab title="SignIn"><p><SignInForm/></p></b-tab>
  </b-tabs>
</div>
  
    


   
</template>

<script>

import SignUpForm from './SignUpForm' 
import SignInForm from './SignInForm'


export default {

    name: 'FormHandler',
    components: {

        SignUpForm,
        SignInForm
       

    }

}
</script>

<style>

</style>