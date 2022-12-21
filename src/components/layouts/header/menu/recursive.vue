<template>
  <li>
    <template v-if="menu.categories && menu.categories.length">
      <span>
        {{ menu.name }}
        <i class="icon-angle-right"></i>
      </span>
      <ul>
        <Recursive
            v-for="item in menu.categories"
            :menu="item"
            :key="item.name + ' ' +  item.id"
        />
      </ul>
    </template>
    <router-link
        v-else
        :to="{
          name: 'categoryId',
          params: {
            categoryId: menu.id
          }
        }"
    >
      {{ menu.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "Recursive",
  props: {
    menu: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {};
  },
};
</script>

<style
    lang="scss"
    scoped
>
li {
  position: relative;
}

li > ul {
  //transform: translate(-24px, -3px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  position: absolute;
  // left: 0;
}

li:hover > ul {
  visibility: visible;
  opacity: 1;
  //transform: translate(-24px, -3px);
}
</style>
