<template lang="">
    <div>
        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="user.password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name:'SignIn',
    data(){
        return{
            user:{
                email:'',
                password:''
            }
        }
    },

    computed:{
      
    },
    methods:{
        ...mapActions([
            'signIn'
        ]),
        async submit(){
         this.signIn(this.user).then(() => {
            this.$router.replace({
                name:"DashBoard"
            })
         })
        }
    }
}
</script>
<style scoped>
</style>