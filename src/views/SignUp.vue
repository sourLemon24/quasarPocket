<template> 
  <div class="sign-wrapper">
    <div class="sign-up">
      <div class="sign-in__logo logo_main-color text-h5 text-weight-bold">
        Pockets
      </div>
      <div class="sign-up__title sign-title">
        Adventure starts here
      </div>
      <div class="sign-in__subtitle sign-subtitle">
        Make your app management easy and fun!
      </div>
      <form @submit.prevent="signup">
        <div class="sign-up__form sign-up__form_user" >
          <SignInUsername v-model = "username"></SignInUsername>
        </div>
        <div class="sign-up__form">
          <SignInEmail v-model = "email"></SignInEmail>
        </div>
        <div class="sign-up__form sign-up__form_hidden-link">
          <SignInPassword v-model= "password"></SignInPassword>
        </div>
        <div class="sign-up__checkbox">
          <label>
            <input required type="checkbox" name="signup-checkbox">
            <span>Я со всем согласен отпутите</span>
          </label>
        </div>
        <div class="sign-up__button">
          <SignButton :ButtonTitle="ButtonTitle"></SignButton>
        </div>
      </form>
      <div class="sign-up__footer sign-footer">Already have an account? 
          <router-link to="/auth/signin" class="sign-create-account">Sign in instead</router-link>
      </div>
    </div> 
  </div>
</template>

<script>
import SignInEmail from "@/components/SignInEmail"
import SignInPassword from "@/components/SignInPassword"
import SignInUsername from "@/components/SignInUsername"
import SignButton from "@/components/SignButton"
// import {mapMutations} from "vuex"

export default {
  data() {
    return {
      ButtonTitle: "Sign Up",
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  // watch: {
  //   error(e) {
  //     console.log(e)
  //   }
  // },
  methods: { 
    async signup() {
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      try{
        await this.$store.dispatch("AUTH_REG", formData)
        alert (`Пользователь ${this.username} с email:${this.email} успешно зарегистрирован`)
        this.$router.push("/auth/signin")
      } catch (e) {
        alert(`${this.$store.state.auth.error.username} \n${this.$store.state.auth.error.email}`)
      }
    }        
  },
  name: "app",
  components: {
    SignInEmail, SignInPassword, SignInUsername, SignButton
  }
}
</script>

<style scoped lang="scss">  
  
</style>