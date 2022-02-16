<template>
    <div class="sign-form">
        <div class="sign-form__title">
            Email
        </div>
        <div class="sign-form__input">
            <input type="text" 
                    name="email" 
                    placeholder="johndoe@gmail.com" 
                    v-bind:value = "email" 
                    v-on:input="$emit('input', $event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    props: ["email"],
}
</script>