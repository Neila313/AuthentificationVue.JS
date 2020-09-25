<template>
  <div>
 <p v-if="msg == true">Pas bien </p>
            <p>Email:</p>
            <b-form-input v-model="my_email" placeholder="Enter email"></b-form-input> <br>
            <p>Password:</p>
            <b-form-input type="password" id="password" aria-describedby="password-help-block" v-model="my_password" placeholder="Enter your secret password"></b-form-input>
                <b-button @click="registeredIn" variant="success">SignIn</b-button>

</div>
</template>

<script>

import axios from 'axios'


export default {
    name: 'SignInForm',

    data(){
        return {
            my_email: "",
            my_password:"",
            msg:false,
            loading: true,
           errored: false,
        } 

    },

    methods: {
        registeredIn(){
            let that = this

            axios.post('http://localhost:3000/sign-in',{
                email: that.my_email,
                password: that.my_password,
            })

            .then(response=>{
                console.log(response);
                if(response.data.token){
                 that.$store.dispatch("SENDTOKEN", response.data.token)
                 that.$router.push('/dashboard')
                 console.log(response.data)
                } else {
                    that.msg = true

                }
               
                 
            })

            .catch(err =>{
                console.log(err)
                that.msg =  err

            })

            }

            
        }

    }

</script>

<style scoped>
p {
    text-align: left
}

button {
    display: flex;
    margin-top: 20px;
}
</style>

