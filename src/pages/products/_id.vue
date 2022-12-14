<template>
    <div class="pages products-detail">
        <div class="container">
            <div class="pages-wrapper">
                <div class="pages-breadcrumbs">
                    <ul>
                        <li>
                            <i class="icon-home"></i>
                            <router-link to="/">
                                Bosh sahifa
                            </router-link>
                        </li>
                        <li>
                            <i class="icon-angle-right"></i>
                            <router-link to="/">
                                Kitoblar
                            </router-link>
                        </li>
                        <li>
                            <i class="icon-angle-right"></i>

                            <router-link to="/">
                                Diniy
                            </router-link>
                        </li>
                        <li>
                            <i class="icon-angle-right"></i>
                            <router-link to="/">
                                Fiqhga oid
                            </router-link>
                        </li>
                        <li>
                            <i class="icon-angle-right"></i>
                            <router-link to="/">
                                {{ detail.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="products-detail-header">
                    <h2>{{ detail.title }}</h2>
                    <div class="products-detail-header-bottom">
                        <div class="products-detail-header-bottom-mark">
                            <Mark :mark="3"></Mark>
                            <span>{{ (detail.mark || '3.0') }}</span>
                        </div>
                        <div class="products-detail-header-bottom-comment">
                            <i class="icon-comment"></i>
                            <span>32 ta izoh</span>
                        </div>
                    </div>
                </div>
                <div class="products-detail-body">
                    <div class="products-detail-body-tab">
                        <div class="products-detail-body-tab-items">
                            <ul>
                                <li @click="onClickTab(require('@/assets/images/product4.png'))">
                                    <img :src="detail.image" :alt="detail.title">
                                </li>
                                <li>
                                    <img :src="detail.image" :alt="detail.title">
                                </li>
                            </ul>
                        </div>
                        <div class="products-detail-body-tab-image">
                            <img :src="detail.image" :alt="detail.title">
                        </div>
                    </div>
                    <div class="products-detail-body-info">
                        <div class="products-detail-body-info-header">
                            <b>{{ detail.price }}</b>
                            <span><i class="icon-shop"></i> Sotuvda mavjud</span>
                            <a-row type="flex" :gutter="[{ xl: 20, xs: 16, sm: 16 }, 0]">
                                <a-col span="12">
                                    <a-button>Xarid</a-button>
                                </a-col>
                                <a-col span="12">
                                    <a-button @click="added_count++" v-if="(added_count == 0)">Savatga
                                        qo‘shish</a-button>
                                    <button class="btn-calculating" v-else><i class="icon-minus"
                                            @click.prevent="added_count--"></i>
                                        <span> {{ added_count }} </span><i class="icon-plus"
                                            @click.prevent="added_count++"></i></button>
                                </a-col>
                            </a-row>
                        </div>
                        <ul>
                            <li>
                                <small>Nashriyot</small>
                                <i></i>
                                <span>“Hilol nashriyot” matbaasi</span>
                            </li>
                            <li>
                                <small>Muallif</small>
                                <i></i>
                                <span>Shayx Muhammad Sodiq Muhammad Yusuf</span>
                            </li>
                            <li>
                                <small>Yili</small>
                                <i></i>
                                <span>2022 yil</span>
                            </li>
                            <li>
                                <small>Muqova</small>
                                <i></i>
                                <span>Qattiq</span>
                            </li>
                            <li>
                                <small>Sahifa</small>
                                <i></i>
                                <span>456 bet</span>
                            </li>
                        </ul>
                        <h3>Kitob haqida</h3>
                        <p>Shayx Muhammad Sodiq Muhammad Yusuf hazratlarining “Ijtimoiy odoblar” deb nomlangan kitoblari
                            hisoblanadi. Ushbu kitob mazmun va mohiyati jihatidan ancha ilmlarni o’z ichiga oladi...</p>
                        <a-button v-if="false">Ko‘proq ko‘rsatish <i class="icon-angle-down"></i></a-button>
                    </div>
                </div>
                <div class="products-detail-recommend">
                    <h2>Tavsiya etiladi</h2>
                    <!-- <div class="products-detail-recommend-row">
                        <div class="products-detail-recommend-col" v-for="(item, index) in recommendList" :key="item.id"
                            data-aos="flip-left" data-aos-duration="300" :data-aos-delay="index * 100 + 500">
                        </div>
                    </div> -->
                    <swiper :options="recommendOptions">
                        <swiper-slide v-for="item in recommendList" :key="item.id">
                            <ProductCard :info="item" />
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="products-detail-about">
                    <h2>Tavsif</h2>
                    <p> Oʻzining oxirgi kitobi Qurʼoni karimni odoblarning bosh kitobi, Oʻzining oxirgi dini Islomni
                        odoblar dini, Oʻzining oxirgi nabiysi Muhammad sollallohu alayhi vasallamni odoblar nabiysi
                        qilgan Alloh taologa Oʻzining jaloliga munosib hamdu sanolar boʻlsin! <br>
                        Robbidan goʻzal odoblarni qabul qilib olib, ummatlariga omonatdorlik ila topshirgan, odobli
                        ummatni tarbiyalab, kamolga yetkazgan odoblar paygʻambari Muhammad Mustafoga, u zotning ahli
                        baytiga va sahobalariga mukammal, batamom salavotu salomlar boʻlsin!
                        Kishilarga islomiy odoblar haqidagi maʼlumotlarni yetkazish yoʻlida xizmat qilgan barcha
                        ulamolarimizga Alloh taoloning doimiy rahmati boʻlsin!</p>
                </div>
                <div class="products-detail-comment">
                    <a-row type="flex" :gutter="[{ xl: 24, sm: 16, xs: 16 }, { lg: 0, sm: 16, xs: 16 }]">
                        <a-col :xl="18" :lg="16" :sm="24" :xs="24">
                            <div class="products-detail-comment-left">
                                <h2>
                                    Mahsulot haqida izohlar
                                </h2>
                                <ul>
                                    <li>
                                        <div class="products-detail-comment-left-header">
                                            <div class="products-detail-comment-left-header-avatar">
                                                <img src="" alt="" v-if="false">
                                                <span>M</span>
                                            </div>
                                            <h3>Mansur_Alimovich</h3>
                                            <span>24.04.2022</span>
                                            <Mark></Mark>
                                        </div>
                                        <div class="products-detail-comment-left-body">
                                            <p>Performance go value-added asserts your beforehand standup quick plan
                                                should. Opportunity ideal create box is businesses manage comms in.
                                                Procrastinating keywords then picture market pretend eco-system revision
                                                pivot feelers. Cadence cross-pollination window message agile. It policy
                                                can't economy incompetent stakeholders game able sky sop. Tomorrow
                                                criticality field do believe timepoint savvy. <br>
                                                Me baseline options ui identify please manage way engagement not
                                                productize event win cross-pollination.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="products-detail-comment-left-header">
                                            <div class="products-detail-comment-left-header-avatar">
                                                <img src="" alt="" v-if="false">
                                                <span>S</span>
                                            </div>
                                            <h3>Sanobar2001</h3>
                                            <span>24.04.2022</span>
                                            <Mark></Mark>
                                        </div>
                                        <div class="products-detail-comment-left-body">
                                            <p>At prioritize model angel effects re-inventing. Cross close die spaces
                                                production. Manage due dogpile win-win-win at picture. Ideal
                                                contribution keep no-brainer vec that's issues stop meeting low-hanging.
                                                Diligence we've will first-order after now. <br>
                                                Third offline playing ladder circle flesh player-coach view build or.
                                                Breakout hours air that stakeholder also our globalize no. Air inclusion
                                                that's manage engagement skulls ladder team didn't. Money masking got
                                                speed dogpile feature yet. Decisions run accountable idea people
                                                incentivization in market.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </a-col>
                        <a-col :xl="6" :lg="8" :xs="24" :sm="24">
                            <div class="products-detail-comment-right">
                                <div class="products-detail-comment-right-header">
                                    <Mark :mark="4" />
                                    <span>4/5</span>
                                </div>
                                <ul>
                                    <li>
                                        <small>5 yulduz</small>
                                        <i>
                                            <span style="width: 100%"></span>
                                        </i>
                                        <small>41</small>
                                    </li>
                                    <li>
                                        <small>4 yulduz</small>
                                        <i>
                                            <span></span>

                                        </i>
                                        <small>0</small>
                                    </li>
                                    <li>
                                        <small>3 yulduz</small>
                                        <i>
                                            <span></span>

                                        </i>
                                        <small>0</small>
                                    </li>
                                    <li>
                                        <small>2 yulduz</small>
                                        <i>
                                            <span></span>

                                        </i>
                                        <small>0</small>
                                    </li>
                                    <li>
                                        <small>1 yulduz</small>
                                        <i>
                                            <span></span>

                                        </i>
                                        <small>0</small>
                                    </li>
                                </ul>
                                <a-button @click="showModal">
                                    <i class="icon-comment"></i>
                                    Izoh qoldirish
                                </a-button>
                            </div>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </div>
        <a-modal class="mark-modal" title="Izoh qoldirish" :visible="visible" :confirm-loading="confirmLoading"
            :footer="null" @cancel="handleCancel">
            <template #closeIcon>
                <i class="icon-close"></i>
            </template>
            <div class="mark-modal-body">
                <div class="mark-modal-mark">
                    <span>Umumiy baho:</span>
                    <Mark :mark="0" />
                </div>
                <a-form-item label="Izoh:">
                    <a-textarea placeholder="Izoh qoldiring">

                    </a-textarea>
                </a-form-item>
                <a-button @click="handleOk">Yuborish</a-button>
            </div>
        </a-modal>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            visible: false,
            confirmLoading: false,
            added_count: 0,
            recommendOptions: {
                // slidesPerView: 6,
                navigation: {
                    nextEl: '.icon-arrow-left',
                    prevEl: '.icon-arrow-right'
                },
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                // spaceBetween: 24,
                breakpoints: {
                    1752: {
                        slidesPerView: 5,
                        spaceBetween: 24
                    },
                    1552: {
                        slidesPerView: 4,
                        spaceBetween: 24
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 16

                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 16
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    0: {
                        slidesPerView: 'auto',
                        spaceBetween: 16
                    },
                }
            }
        }
    },
    components: {
        Mark: () => import('@/components/custom/mark'),
        ProductCard: () => import('@/components/cards/vertical')

    },
    methods: {
        ...mapMutations("products", ["setDetail"]),
        onClickTab(image) {
            this.detail.image = image;
        },
        showModal() {
            this.visible = true;
        },
        handleOk() {
            this.ModalText = 'The modal will be closed after two seconds';
            this.confirmLoading = true;
            setTimeout(() => {
                this.visible = false;
                this.confirmLoading = false;
            }, 2000);
        },
        handleCancel() {
            this.visible = false;
        },
    },
    computed: {
        ...mapGetters("products", ["detail", "recommendList"])
    },
    mounted() {
        this.setDetail(this.$route.params.id);
    },
    watch: {
        $route() {
            this.setDetail(this.$route.params.id);
        }
    }
}
</script>

<style>

</style>