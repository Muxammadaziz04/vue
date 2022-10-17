<template>
    <div>
        <h1>
            Dinamic page {{ id }}
        </h1>
    </div>
</template>

<script>
export default {
    name: "DinamicPage",
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>
  