const state = () => ({
    list: [
        {
            id: 1,
            title: "Qur'onlar",
            link: "/",
            icon: 'menu1',
            child: [
                {
                    id: 1,
                    title: "Tajvidli",
                    link: "/",
                },
                {
                    id: 2,
                    title: "Mavzuli",
                    link: "/",
                },
                {
                    id: 3,
                    title: "Tajvidsiz",
                    link: "/",
                },
                {
                    id: 4,
                    title: "Poralik",
                    link: "/",
                },
                {
                    id: 5,
                    title: "Ruchkali",
                    link: "/",
                },

            ]
        },
        {
            id: 2,
            title: "Kitoblar",
            link: "/",
            icon: 'menu2',
            child: [
                {
                    id: 1,
                    title: "Badiiy kitoblar",
                    link: "/"
                },
                {
                    id: 2,
                    title: `Diniy`,
                    link: "/",
                    child: [
                        {
                            id: 1,
                            title: "Fiqhga oid",
                            link: "/"
                        },
                        {
                            id: 2,
                            title: `Aqoid kitoblari`,
                            link: "/"
                        },
                        {
                            id: 3,
                            title: `Siyrat`,
                            link: "/"
                        },
                        {
                            id: 4,
                            title: `Sahobalar va tobeinlar`,
                            link: "/"
                        },
                        {
                            id: 5,
                            title: `Hadis kitoblari`,
                            link: "/"
                        },
                        {
                            id: 6,
                            title: `Duolar kitobi`,
                            link: "/"
                        },
                        {
                            id: 7,
                            title: `Ruhiy tarbiya`,
                            link: "/"
                        },
                        {
                            id: 8,
                            title: `Darsliklar`,
                            link: "/"
                        },

                    ]
                },
                {
                    id: 3,
                    title: `Biznes va marketing`,
                    link: "/"
                },
                {
                    id: 4,
                    title: `Bolalar uchun`,
                    link: "/"
                },
                {
                    id: 5,
                    title: `Biznes va marketing`,
                    link: "/"
                },
                {
                    id: 6,
                    title: `Xorijiy tildagi kitoblar`,
                    link: "/"
                },

            ]
        },
        {
            id: 3,
            title: "Ibodat anjomlari ",
            link: "/",
            icon: 'menu3',
            child: [
                {
                    id: 1,
                    title: `Do'ppilar`,
                    link: '/',
                    child: [
                        {
                            id: 1,
                            title: `Bangladesh`,
                            link: '/'
                        },
                        {
                            id: 2,
                            title: `Chechen`,
                            link: '/'
                        },
                        {
                            id: 3,
                            title: `Milliy`,
                            link: '/'
                        },
                    ]
                },
                {
                    id: 2,
                    title: `Joynamozlar`,
                    link: '/'
                },
                {
                    id: 3,
                    title: `Tasbehlar`,
                    link: '/'
                },
                {
                    id: 4,
                    title: `Boshqa anjomlar`,
                    link: '/'
                },

            ]
        },
        {
            id: 4,
            title: "Sovg'abop / to'plamlar",
            link: '/',
            icon: 'menu4',
            child: [
                {
                    id: 1,
                    title: `Suvinerlar`,
                    link: '/',
                },
                {
                    id: 2,
                    title: `Naborlar`,
                    link: '/'
                },
            ]
        },
        {
            id: 5,
            title: "Mushklar",
            link: "/",
            icon: 'menu5',
            child: [
                {
                    id: 1,
                    title: "Ayollar",
                    link: "/",

                },
                {
                    id: 2,
                    title: "Erkaklar",
                    link: "/",
                    child: [
                        {
                            id: 1,
                            title: "Atirlar",
                            link: "/",
                        },
                        {
                            id: 2,
                            title: "Mushklar",
                            link: "/",
                        },
                    ]

                },
                {
                    id: 3,
                    title: "Muhrlar",
                    link: "/",
                }
            ]
        },
        {
            id: 6,
            title: "Tabobat",
            link: "/",
            icon: 'menu6',
            child: [
                {
                    id: 1,
                    title: "Yuz va teri parvarishi",
                    link: "/",
                },
                {
                    id: 2,
                    title: "Soch va soqol parvarishi",
                    link: "/",
                },
                {
                    id: 3,
                    title: "BFQ - vitaminlar, sedana, yog'lar;",
                    link: "/",
                },
                {
                    id: 4,
                    title: "Qo'shimchalar ",
                    link: "/",
                },
            ]
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
