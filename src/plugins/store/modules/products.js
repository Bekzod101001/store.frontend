const state = () => ({
    list: [
        {
            id: 1,
            image: require('@/assets/images/product1.png'),
            title: "“Hadis va Hayot” toʻliq toʻplami (34 juz, 32d jild)",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "1 200 000 so‘m",
            oldPrice: "1 600 000 so‘m",
            discount: "-20%"
        },
        {
            id: 2,
            image: require('@/assets/images/product2.png'),
            title: "“Ijtimoiy odoblar”",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "65 000 so‘m",
            type: "popular",
        },
        {
            id: 3,
            image: require('@/assets/images/product3.png'),
            title: "“Alloh rasulidagi oʻrnak” jurnali",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "6 000 so‘m",
        },
        {
            id: 4,
            image: require('@/assets/images/product4.png'),
            title: "“Mufassal tajvid”",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "30 000 so‘m",
            type: "new"
        },
        {
            id: 5,
            image: require('@/assets/images/product5.png'),
            title: "“Kitobnoma”",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "48 000 so‘m",

        },
        {
            id: 6,
            image: require('@/assets/images/product2.png'),
            title: "“Ijtimoiy odoblar”",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "65 000 so‘m",
            type: "popular",
        },
        {
            id: 7,
            image: require('@/assets/images/product4.png'),
            title: "“Mufassal tajvid”",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "30 000 so‘m",
            type: "new"
        },
        {
            id: 8,
            image: require('@/assets/images/product5.png'),
            title: "“Kitobnoma”",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "48 000 so‘m",

        },
        {
            id: 9,
            image: require('@/assets/images/product3.png'),
            title: "“Alloh rasulidagi oʻrnak” jurnali",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "6 000 so‘m",
        },
        {
            id: 10,
            image: require('@/assets/images/product1.png'),
            title: "“Hadis va Hayot” toʻliq toʻplami (34 juz, 32d jild)",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "1 200 000 so‘m",
            oldPrice: "1 600 000 so‘m",
            discount: "-20%"
        },
        {
            id: 11,
            image: require('@/assets/images/product5.png'),
            title: "“Kitobnoma”",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "48 000 so‘m",

        },
        {
            id: 12,
            image: require('@/assets/images/product3.png'),
            title: "“Alloh rasulidagi oʻrnak” jurnali",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "6 000 so‘m",
        },
        {
            id: 13,
            image: require('@/assets/images/product1.png'),
            title: "“Hadis va Hayot” toʻliq toʻplami (34 juz, 32d jild)",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "1 200 000 so‘m",
            oldPrice: "1 600 000 so‘m",
            discount: "-20%"
        },
        {
            id: 14,
            image: require('@/assets/images/product4.png'),
            title: "“Mufassal tajvid”",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "30 000 so‘m",
            type: "new"
        },
        {
            id: 15,
            image: require('@/assets/images/product4.png'),
            title: "“Mufassal tajvid”",
            subTitle: "“Hilol” nashriyot manbasi",
            price: "30 000 so‘m",
            type: "new"
        },
    ],
    detail: {
    }
});
const getters = {
    list(state) {
        return state.list
    },
    shortList(state) {
        return state.list.slice(0, 3)
    },
    recommendList(state) {
        return state.list.slice(0, 5)
    },
    shoppingList(state) {
        return state.list.slice(0, 4)
    },
    detail(state) {
        return state.detail
    }
};
const mutations = {
    setDetail(state, payload) {
        state.detail = state.list.find((el) => payload == el.id);
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations

}
