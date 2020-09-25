<template>

 


<div>
 <h1>This is Dashboard page</h1>

 <hr><p>Welcome to you connected user!</p><hr>

 <b-button @click="signOut" variant="success">SignOut</b-button>

</div>

   




  
</template>

<script>
export default {
    name: 'Dashboard',

    methods: {
        signOut(){
            let that = this

            that.$store.dispatch('DELETE_TOKEN');
            that.$router.push('/homepage')
        }
    }
}
</script>

<style>

</style>