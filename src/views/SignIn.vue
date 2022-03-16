<template> 
  <div class="sign-wrapper">
    <div class="sign-in">
      <div class="sign-in__logo logo_main-color text-h5 text-weight-bold">
        Pockets
      </div>
      <div class="sign-in__title sign-title">
        Welcome to Pockets! 👋🏻
      </div>
      <div class="sign-in__subtitle sign-subtitle">
        Please sign-in to your account and start the adventure
      </div>
      <form @submit.prevent="signin">
        <div class="sign-in__form">
          <SignInEmail v-model = "signInData.email"></SignInEmail>
        </div>
        <div class="sign-in__form sign-in__form_pswd">
          <SignInPassword v-model= "signInData.password"></SignInPassword>
        </div>
        <div class="sign-up__button">
        <p class="text-red" v-if='error'>{{this.error.detail}}</p>
          <SignButton :ButtonTitle="ButtonTitle"></SignButton></div>
        <div class="sign-in__footer sign-footer">New on our platform? 
          <router-link to="/auth/signup" class="sign-create-account">Create an account</router-link>
        </div>
      </form>
    </div> 
  </div>
</template>

<script>
import SignInEmail from '@/components/SignInEmail'
import SignInPassword from '@/components/SignInPassword'
import SignButton from '@/components/SignButton'
import {mapState} from 'vuex'

export default {

  data() {
    return {
      ButtonTitle: 'Login',
      signInData: {
        email: '',
        password: '',
      }   
    }
  },
  name: 'signin',
  computed: 
    mapState({
      error: state => state.auth.error
    }),
  methods: {
    async signin() {
      try{
        await this.$store.dispatch("AUTH_REQUEST", this.signInData)
        // alert('Вы вошли в систему')
        this.$router.push("/")
      } catch (e) {
        console.log('Ошибка на уровне компонента', e)
      }
    },
  },
  components: {
    SignInEmail, SignInPassword, SignButton
  },
}
</script>

<style scoped lang="scss">
</style>