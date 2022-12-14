<template>
    <main class="pages partners">
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
                                Hamkorlar
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="partners-wrapper">
                    <a-row type="flex" :gutter="[{ xl: 24, sm: 16, xs: 16 }, { xl: 24, sm: 16, xs: 16 }]">
                        <a-col :md="18" :sm="24" :xs="24">
                            <a-collapse v-model="activeKeys" expandIconPosition="right">
                                <template #expandIcon>
                                    <div class="ant-collapse-angle-down">
                                        <i class="icon-angle-collapse-down"></i>
                                    </div>
                                </template>
                                <a-collapse-panel key="1" header="Andijon">
                                    <ul>
                                        <li>
                                            <small> <i class="icon-phone"></i>Hamkorlik uchun:</small>
                                            <a href="tel:+998951117334">+998 95 111-73-34</a>
                                        </li>
                                        <li>
                                            <small> <i class="icon-clock"></i>Ish vaqti:</small>
                                            <a href="tel:+998951117334">9:00 - 18:00</a>
                                        </li>
                                        <li>
                                            <small> <i class="icon-pin"></i>Manzil::</small>
                                            <a href="tel:+998951117334">Azon kitoblari Andijon filiali</a>
                                        </li>
                                        <li>
                                            <ul>
                                                <li>
                                                    <small>Manzil: </small>
                                                    <span>Andijon viloyati, Andijon shahar.</span>
                                                </li>
                                                <li>
                                                    <small>
                                                        Mo’ljal:
                                                    </small>
                                                    <span>
                                                        Eski shahar Bosh masjid (sobiq devonaboy) masjidi yonida.
                                                    </span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <router-link to="/contact">Xaritada ko‘rish <i
                                            class="icon-arrow-right"></i></router-link>
                                </a-collapse-panel>
                                <a-collapse-panel key="2" header="Samarqand">
                                    <ul>
                                        <li>
                                            <small> <i class="icon-phone"></i>Hamkorlik uchun:</small>
                                            <a href="tel:+998951117334">+998 95 111-73-34</a>
                                        </li>
                                        <li>
                                            <small> <i class="icon-clock"></i>Ish vaqti:</small>
                                            <a href="tel:+998951117334">9:00 - 18:00</a>
                                        </li>
                                        <li>
                                            <small> <i class="icon-pin"></i>Manzil::</small>
                                            <a href="tel:+998951117334">Azon kitoblari Andijon filiali</a>
                                        </li>
                                        <li>
                                            <ul>
                                                <li>
                                                    <small>Manzil: </small>
                                                    <span>Andijon viloyati, Andijon shahar.</span>
                                                </li>
                                                <li>
                                                    <small>
                                                        Mo’ljal:
                                                    </small>
                                                    <span>
                                                        Eski shahar Bosh masjid (sobiq devonaboy) masjidi yonida.
                                                    </span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <router-link to="/contact">Xaritada ko‘rish <i
                                            class="icon-arrow-right"></i></router-link>
                                </a-collapse-panel>
                                <a-collapse-panel key="3" header="Farg'ona">
                                    <ul>
                                        <li>
                                            <small> <i class="icon-phone"></i>Hamkorlik uchun:</small>
                                            <a href="tel:+998951117334">+998 95 111-73-34</a>
                                        </li>
                                        <li>
                                            <small> <i class="icon-clock"></i>Ish vaqti:</small>
                                            <a href="tel:+998951117334">9:00 - 18:00</a>
                                        </li>
                                        <li>
                                            <small> <i class="icon-pin"></i>Manzil::</small>
                                            <a href="tel:+998951117334">Azon kitoblari Andijon filiali</a>
                                        </li>
                                        <li>
                                            <ul>
                                                <li>
                                                    <small>Manzil: </small>
                                                    <span>Andijon viloyati, Andijon shahar.</span>
                                                </li>
                                                <li>
                                                    <small>
                                                        Mo’ljal:
                                                    </small>
                                                    <span>
                                                        Eski shahar Bosh masjid (sobiq devonaboy) masjidi yonida.
                                                    </span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <router-link to="/contact">Xaritada ko‘rish <i
                                            class="icon-arrow-right"></i></router-link>
                                </a-collapse-panel>
                            </a-collapse>
                        </a-col>
                        <a-col :md="6" :sm="12" :xs="24">
                            <div class="partners-sidebar">
                                <div class="partners-sidebar-info">
                                    <span>Hamkorlik uchun:</span>
                                    <a href="tel:+998931335955">+998 93 133 59 55</a>
                                </div>
                                <i class="icon-phone"></i>
                            </div>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            activeKeys: []
        }
    }


}
</script>

<style>

</style>