<template>
    <div class="sign-form">
        <div class="sign-form__title">
            Password
        <a href="#" class="sign-form__fogot">
            Forgot Password?
        </a>
        </div>

        <form class="sign-form__input">
            <input type="password" 
                    name="password" 
                    placeholder="******" 
                    v-bind:value = "password" 
                    v-on:input="$emit('input', $event.target.value)"
            >
        </form>
    </div>
</template>

<script>
export default {
    props: ["password"],
}
</script>