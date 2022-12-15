<template>
  <main class="pages contact">
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
                Biz haqimizda
              </router-link>
            </li>
          </ul>
        </div>
        <a-row
            type="flex"
            :gutter="[{ xl: 24, sm: 16, xs: 16 }, { xl: 24, sm: 16, xs: 16 }]"
        >
          <a-col span="24">
            <div class="contact-info">
              <h2>Bog‘lanish</h2>
              <a-row
                  type="flex"
                  :gutter="[{ xl: 24, sm: 16, xs: 16 }, { xl: 24, sm: 16, xs: 16 }]"
              >
                <a-col
                    :xl="8"
                    :md="7"
                    :sm="12"
                >
                                    <span>
                                        <i class="icon-phone"></i>
                                        Bog‘lanish uchun:
                                    </span>
                  <a href="tel:+998951435550">
                    +998 95 143-55-50
                  </a>
                </a-col>
                <a-col
                    :xl="8"
                    :md="10"
                    :sm="12"
                >
                                    <span>
                                        <i class="icon-phone"></i>
                                        Hamkorlar uchun bog‘lanish:
                                    </span>
                  <a href="tel:+998931335955">
                    +998 93 133-59-55
                  </a>
                </a-col>

                <a-col
                    :xl="8"
                    :md="7"
                    :sm="24"
                >
                                    <span>
                                        <i class="icon-globe"></i>
                                        Ijtimoiy tarmoqlar:
                                    </span>
                  <div class="contact-info-social">
                    <a
                        href=""
                        class="icon-youtube"
                    ></a>
                    <a
                        href=""
                        class="icon-instagram"
                    ></a>
                    <a
                        href=""
                        class="icon-telegram"
                    ></a>
                    <a
                        href=""
                        class="icon-facebook"
                    ></a>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-col>
          <a-col
              :md="12"
              :sm="24"
          >
            <div class="contact-info">
              <h3>
                Azon Kitoblari Xadra filiali
              </h3>
              <span>
                                <i class="icon-pin"></i>
                                Manzil:
                            </span>
              <a
                  href="https://goo.gl/maps/58kCS4Vipt7Fw1Bf9"
                  target="_blank"
              >
                Toshkent shahar, Zarqaynar ko'chasi, 2A <br>
                Mo'ljal: Xadra maydoni bekati;
              </a>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3727422749243!2d69.23911155114108!3d41.322507407875634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8badf2ad5ce5%3A0x1b714768928cd6c5!2sAzon%20Kitoblari!5e0!3m2!1sru!2s!4v1670040439441!5m2!1sru!2s"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </a-col>
          <a-col
              :md="12"
              :sm="24"
          >
            <div class="contact-info">
              <h3>
                Azon Kitoblari Xadra filiali
              </h3>
              <span>
                                <i class="icon-pin"></i>
                                Manzil:
                            </span>
              <a
                  href="https://goo.gl/maps/58kCS4Vipt7Fw1Bf9"
                  target="_blank"
              >
                Toshkent shahar, Abdulla Qodiriy ko'chasi, 23 <br>
                Mo'ljal: G'ofur G'ulom metrosi bekati
              </a>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3727422749243!2d69.23911155114108!3d41.322507407875634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8badf2ad5ce5%3A0x1b714768928cd6c5!2sAzon%20Kitoblari!5e0!3m2!1sru!2s!4v1670040439441!5m2!1sru!2s"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </a-col>
        </a-row>


      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style>

</style>