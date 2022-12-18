import {mapMutations} from "vuex";

export default {
    props: {
        info: {
            type: Object,
            default: () => ({})
        },
    },
    data: () => ({
        product: {
            amount: 0,
            type: '',
            images: [],
            name: '',
            small_description: '',
            price: '',
            oldPrice: '',
            id: '',
            discount_percent: '',
        }
    }),
    methods: {
        ...mapMutations('basket', ['setProduct', 'setAmount']),

        addToBasket() {
            if(!this.product.amount) this.product.amount++
            this.setProduct(this.product)
        },

        changeAmount (operation) {
            if (operation === 'minus') {
                if(this.product.amount) this.product.amount--
            }
            else if (operation === 'plus') {
                this.product.amount++
            }

            this.setAmount({
                id: this.product.id,
                amount: this.product.amount
            })
        }
    },
    mounted() {
        this.product = {...this.product, ...this.info}
        if(!Object.keys(this.product).includes('amount')) {
            this.product.amount = 0
        }
    }
}