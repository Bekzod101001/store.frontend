<template>
    <div class="card shopping">
        <a-checkbox id="all">
        </a-checkbox>
        <div class="card-image">
            <img :src="info.image" :alt="info.title">
        </div>
        <div class="card-info">
            <h3>{{ info.title }}</h3>
            <a-button>O'chirish</a-button>
        </div>
        <div class="card-price">
            <span>{{ info.price }}</span>
            <small v-if="info.oldPrice">{{ info.oldPrice }} <b v-if="info.discount">{{ info.discount }}</b></small>
        </div>
        <div class="card-action">
            <a-button @click="added_count--"><i class="icon-minus"></i></a-button>
            <span>{{ added_count }}</span>
            <a-button @click="added_count++">
                <i class="icon-plus"></i>
            </a-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            added_count: 0
        }
    }

}
</script>

<style>

</style>