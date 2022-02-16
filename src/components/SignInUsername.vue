<template>
    <div class="sign-form">
        <div class="sign-form__title">
            Username
        </div>
        <div class="sign-form__input">
            <input required 
                    type="text" 
                    name="username" 
                    placeholder="johndoe@gmail.com" 
                    v-bind:value = "username" 
                    v-on:input="$emit('input', $event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    props: ["username"],
}
</script>