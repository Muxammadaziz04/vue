<template>
    <div class="card col-md-4 m-2 d-flex flex-column justify-content-between p-2" style="width: 18rem;">
        <img :src="image" class="card-img-top" :alt="name" style="{max-height: 100px;}">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text fw-bold">{{ price }}</p>
            <p class="card-text">{{ desc }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        desc: {
            type: String,
            default: "Somethink"
        }
    }
}
</script>