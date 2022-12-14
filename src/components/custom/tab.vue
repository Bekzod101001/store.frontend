<template>
    <ul>
        <li v-for="(item, index) in tabs" :key="index" :class="{ active: item.value == tab.value }"
            @click="$emit('change', item)">
            {{ item.title }}
        </li>
    </ul>
</template>

<script>
export default {
    model: {
        event: "change",
        prop: "tab",
    },
    props: {
        tabs: {
            type: Array,
            default() {
                return [];
            },
        },
        tab: {
            type: Object,
            default() {
                return {
                    title: "",
                    value: "",
                };
            },
        },
    },
};
</script>

<style>

</style>
