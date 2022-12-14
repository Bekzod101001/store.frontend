<template>
    <div class="menu-mobile">
        <div class="menu-mobile-wrapper">
            <div class="menu-mobile-register">
                <h4>Ro‘yxatdan o‘ting</h4>
                <p>Ro‘yxatdan o’tish orqali ko’proq <br> imkoniyatlardan foydalaning</p>
                <a-button>Ro‘yxatdan o‘tish</a-button>
            </div>
            <div class="menu-mobile-filter">
                <a-dropdown placement="bottomLeft">
                    <a-button> <i class="icon-bars"></i> Barcha bo‘limlar
                    </a-button>
                    <div class="dropdown-options" slot="overlay">
                        <ul>
                            <li>
                                <router-link to="/products">
                                    Fiqhga oid
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    Aqoid kitoblari
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    Siyrat
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    Sahobalar va tobeinlar
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    Hadis kitoblari
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    Duolar kitobi
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    Ruhiy tarbiya
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    Darsliklar
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    Barchasi
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </a-dropdown>
            </div>
            <perfect-scrollbar class="menu-mobile-menu">
                <ul>
                    <li v-for="item1 in list" :key="'1-' + item1.id">
                        <a-collapse v-model="activeKeys1" expandIconPosition="right"
                            v-if="item1.child && item1.child.length">
                            <template #expandIcon>
                                <div class="products-filter-arrow">
                                    <i class="icon-angle-collapse-down"></i>
                                </div>
                            </template>
                            <a-collapse-panel :header="item1.title" v-if="item1.child && item1.child.length"
                                :key="('1-' + item1.id)">
                                <ul>
                                    <li v-for="item2 in item1.child" :key="'2-' + item2.id">
                                        <a-collapse v-model="activeKeys2" expandIconPosition="right"
                                            v-if="item2.child && item2.child.length">
                                            <template #expandIcon>
                                                <div class="products-filter-arrow">
                                                    <i class="icon-angle-collapse-down"></i>
                                                </div>
                                            </template>
                                            <a-collapse-panel :header="item2.title" :key="'2-' + item2.id">
                                                <ul>
                                                    <li v-for="item3 in item2.child" :key="'3-' + item3.id">
                                                        <router-link to="/products">{{ item3.title }}</router-link>
                                                    </li>
                                                </ul>
                                            </a-collapse-panel>
                                        </a-collapse>
                                        <router-link to="/products" v-else>
                                            {{ item2.title }}
                                        </router-link>
                                    </li>
                                </ul>
                            </a-collapse-panel>
                            <router-link v-else to="/">{{ item.title }}</router-link>
                        </a-collapse>
                        <router-link v-else to="/">{{ item.title }}</router-link>
                    </li>
                </ul>
            </perfect-scrollbar>
        </div>
        <div class="menu-mobile-layer"></div>
        <i class="icon-close" @click="onClickMobile(false)"></i>
    </div>
</template>

<script>
export default {

    props: {
        onClickMobile: {
            type: Function,
            default() {
                return null
            }
        },
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            activeKeys1: [],
            activeKeys2: [],
            activeKeys3: [],
        }
    },
    watch: {
        activeKeys1(val) {
            console.log(val, 'dsds')
        }
    }
}
</script>

<style>

</style>