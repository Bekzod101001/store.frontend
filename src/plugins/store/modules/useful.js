const state = () => ({
    list: [
        {
            id: 1,
            image: require('@/assets/images/useful1.jpg'),
            link: "/"
        },
        {
            id: 2,
            image: require('@/assets/images/useful2.jpg'),
            link: "/"
        },
        {
            id: 3,
            image: require('@/assets/images/useful3.jpg'),
            link: "/"
        },
        {
            id: 4,
            image: require('@/assets/images/useful4.jpg'),
            link: "/"
        },
        {
            id: 5,
            image: require('@/assets/images/useful5.jpg'),
            link: "/"
        },
        {
            id: 6,
            image: require('@/assets/images/useful6.jpg'),
            link: "/"
        },

    ]
});
const getters = {
    list(state) {
        return state.list
    },
};

export default {
    namespaced: true,
    state,
    getters,

}
