<template>
  <div
      v-if="loaded"
      class="pages products-detail"
  >
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
              <ul v-if="detail.images">
                <li
                    v-for="(image, index) in detail.images"
                    :key="index"
                    @click="onClickTab(index)"
                >
                  <img
                      :src="image"
                      :alt="detail.title"
                  >
                </li>
              </ul>
            </div>
            <div class="products-detail-body-tab-image">
              <img
                  v-if="detail.images"
                  :src="detail.images[activeImageIndex]"
                  :alt="detail.title"
              >
            </div>
          </div>
          <div class="products-detail-body-info">
            <div class="products-detail-body-info-header">
              <b>{{ sumFormatter(detail.price) }}</b>
              <span><i class="icon-shop"></i> {{ computedStock }}</span>
              <a-row
                  type="flex"
                  :gutter="[{ xl: 20, xs: 16, sm: 16 }, 0]"
              >
                <a-col span="24">
                  <a-button
                      @click="added_count++"
                      v-if="(added_count == 0)"
                  >Savatga
                    qo‘shish
                  </a-button>
                  <button
                      class="btn-calculating"
                      v-else
                  ><i
                      class="icon-minus"
                      @click.prevent="added_count--"
                  ></i>
                    <span> {{ added_count }} </span><i
                        class="icon-plus"
                        @click.prevent="added_count++"
                    ></i></button>
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
                <span>{{detail.author}}</span>
              </li>
              <li>
                <small>Yili</small>
                <i></i>
                <span>2022 yil</span>
              </li>
              <li>
                <small>Muqova</small>
                <i></i>
                <span>{{detail.binding}}</span>
              </li>
              <li>
                <small>Sahifa</small>
                <i></i>
                <span>{{ detail.pages_amount }} bet</span>
              </li>
            </ul>
            <h3>Kitob haqida</h3>
            <p>{{detail.small_description}}</p>
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
            <swiper-slide
                v-for="item in recommendList"
                :key="item.id"
            >
              <ProductCard :info="item"/>
            </swiper-slide>
          </swiper>
        </div>
        <div class="products-detail-about">
          <h2>Tavsif</h2>
          <p>{{detail.description}}</p>
        </div>
        <div class="products-detail-comment">
          <a-row
              type="flex"
              :gutter="[{ xl: 24, sm: 16, xs: 16 }, { lg: 0, sm: 16, xs: 16 }]"
          >
            <a-col
                :xl="18"
                :lg="16"
                :sm="24"
                :xs="24"
            >
              <div class="products-detail-comment-left">
                <h2>
                  Mahsulot haqida izohlar
                </h2>
                <ul>
                  <li>
                    <div class="products-detail-comment-left-header">
                      <div class="products-detail-comment-left-header-avatar">
                        <img
                            src=""
                            alt=""
                            v-if="false"
                        >
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
                        <img
                            src=""
                            alt=""
                            v-if="false"
                        >
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
            <a-col
                :xl="6"
                :lg="8"
                :xs="24"
                :sm="24"
            >
              <div class="products-detail-comment-right">
                <div class="products-detail-comment-right-header">
                  <Mark :mark="4"/>
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
    <a-modal
        class="mark-modal"
        title="Izoh qoldirish"
        :visible="visible"
        :confirm-loading="confirmLoading"
        :footer="null"
        @cancel="handleCancel"
    >
      <template #closeIcon>
        <i class="icon-close"></i>
      </template>
      <div class="mark-modal-body">
        <div class="mark-modal-mark">
          <span>Umumiy baho:</span>
          <Mark :mark="0"/>
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
import {mapGetters} from 'vuex';
import api from "@/api";
import {strapiRetriever, sumFormatter} from "@/utils/helper";

export default {
  components: {
    Mark: () => import('@/components/custom/mark'),
    ProductCard: () => import('@/components/cards/vertical')
  },
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
      },
      detail: {},
      activeImageIndex: 0,
      loaded: false
    }
  },
  computed: {
    ...mapGetters("products", ["recommendList"]),

    computedStock () {
      return this.detail.in_stock ? 'Sotuvda mavjud' : 'Sotuvda mavjud emas'
    }
  },
  methods: {
    sumFormatter,

    onClickTab(index) {
      this.activeImageIndex = index;
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

    async getProduct () {
      this.loaded = false
      const {data} = await api.products.getSingle(this.$route.params.id, {
        populate: 'images'
      })
      const images = strapiRetriever(data.data, 'images')
      this.detail = data.data.attributes
      this.detail.images = images.map(image => process.env.VUE_APP_BASE_URL + image)
      console.log(this.detail)
      this.loaded = true
    }
  },
  mounted() {
    this.getProduct()
  }
}
</script>

<style>

</style>