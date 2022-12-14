<template>
  <footer class="footer" data-aos="fade-down" data-aos-duration="300" data-aos-delay="500">
    <div class="container">
      <div class="footer-wrapper">
        <a-row type="flex" :gutter="[{ lg: 8, sm: 16, xs: 16 }, { lg: 8, sm: 16, xs: 16 }]" justify="center">
          <a-col :lg="6" :md="8" :sm="24" :xs="24">
            <div class="footer-logo">
              <img src="@/assets/images/logo-2.svg" alt="logo">
              <span>
                <i class="icon-branch"></i>
                Amal bilan ko‘rsating
              </span>
            </div>
          </a-col>
          <a-col :lg="6" :md="8" :sm="12" :xs="24">
            <div class="footer-menu">
              <ul>
                <li>
                  <router-link to="/about">Biz haqimizda</router-link>
                </li>

                <li>
                  <router-link to="/delivery">Yetkazib berish</router-link>
                </li>

                <li>
                  <router-link to="/offerta">Oferta</router-link>
                </li>
              </ul>
            </div>
          </a-col>
          <a-col :lg="6" :md="8" :sm="12" :xs="24">
            <div class="footer-menu">
              <ul>
                <li>
                  <router-link to="/partners">Hamkor do‘konlar</router-link>
                </li>

                <li>
                  <router-link to="/contact">Bog‘lanish</router-link>
                </li>
              </ul>
            </div>
          </a-col>
          <a-col :lg="6" :md="24" :sm="24" :xs="18">
            <div class="footer-contact">
              <ul>
                <li>
                  <a href="tel:+998951435550">
                    <i class="icon-phone"> </i>
                    <span>
                      +998 95 143-55-50
                    </span>
                  </a>
                </li>

                <li>
                  <a href="https://goo.gl/maps/hAtMkd5uhMwatszE8" target="_blank">
                    <i class="icon-pin"></i>
                    <span>
                      Toshkent shahar, Zarqaynar ko'chasi, 2A
                      Mo'ljal: Xadra maydoni bekati
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" class="icon-youtube">
                  </a>
                  <a href="" class="icon-instagram">
                  </a>
                  <a href="" class="icon-telegram">
                  </a>
                  <a href="" class="icon-facebook">
                  </a>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
        <div class="footer-bottom">
          <span>
            © 2022 Internet-do‘kon azonkitoblari.uz / Barcha huquqlar himoyalangan.
          </span>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
};
</script>

<style>

</style>
