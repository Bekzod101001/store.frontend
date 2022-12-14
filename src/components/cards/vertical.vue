<template>
    <router-link :to="`/products/${info.id}`" class="card vertical">
        <div class="card-tags">
            <span v-if="info.discount" :class="{ discount: info.discount }">{{ info.discount }}</span>
            <span v-if="info.type" :class="info.type">{{ info.type == 'popular' ? 'Mashxur' : info.type == 'new' ?
                    'Yangi' : ''
            }}</span>
        </div>
        <div class="card-image">
            <img :src="info.image" :alt="info.title">
        </div>
        <div class="card-info">
            <h3>{{ info.title }}</h3>
            <h4>
                <i class="icon-document"></i> {{ info.subTitle }}
            </h4>
            <span>
                {{ info.price }}
                <small v-if="info.oldPrice">{{ info.oldPrice }}</small>
            </span>
            <!-- small chegirma uchun. -->
        </div>
        <div class="card-action">
            <a-button>Xarid</a-button>
            <a-button @click.prevent="added_count++" v-if="(added_count == 0)">Savatga qo‘shish</a-button>
            <button class="card-action-universal" v-else><i class="icon-minus" @click.prevent="added_count--"></i>
               <span> {{ added_count }} </span><i class="icon-plus" @click.prevent="added_count++"></i></button>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default() {
                return {}
            }
        },

    },
    data() {
        return {
            added_count: 0
        }
    },
    methods: {
      

    }

}
</script>

<style>

</style>