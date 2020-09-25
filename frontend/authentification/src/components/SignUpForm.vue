<template>


  <div>
 
            <p>Name:</p>
            <b-form-input v-model="name" placeholder="Enter your name"></b-form-input> <br>
            <p>Email:</p>
            <b-form-input v-model="email" placeholder="Enter email"></b-form-input> <br>
            <p>Password:</p>
            <b-form-input type="password" id="text-password" aria-describedby="password-help-block" v-model="password" placeholder="Enter your secret password"></b-form-input>
         <b-button variant="success" @click="registerUp"> SignUp</b-button>
<p class="msgcache" v-bind:class="{active: isactive}">you have been registred go Sign-in now!</p>
</div>


</template>


<script>

import axios from 'axios'



export default {
    name: 'SignUpForm',
    data() {
        return {
           email: "",
           name: "",
           password: "",
           loading: true,
           errored: false,
           isactive: false,
        }
       
    },

    methods: {
        registerUp(){
              let that = this
             
              axios.post('http://localhost:3000/sign-up', {
                email: that.email,
                name: that.name,
                password: that.password
              })
            
            .then(response => { 
                console.log(response)
                that.email = ''
                that.name = ''
                that.password = ''
                that.isactive = true
            })

              .catch(error => {
                console.log(error)
                that.errored = true
              })
              
    
              .finally(() => that.loading = false) 
             
                    // this.$emit('inputSend', this.my_input);
                    // this.my_input= "";
        }
    }
       
  
  }



</script>

<style scoped>

.msgcache{
    display: none;
}

.active{
    display: block;
}

p {
    text-align: left
}

button {
    display: flex;
    margin-top: 20px;
}
</style>