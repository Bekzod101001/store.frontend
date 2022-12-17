<template>
  <div class="pages">
    <div class="orders__row">
      <div
          v-for="(order, index) in orders"
          :key="index"
          class="orders__item"
      >
        <div class="orders__item__details">
          <h3 class="orders__item__details__title">Информация о заказе</h3>
          <p>
            <strong>Время создания:</strong>
            {{ new Date() }}
          </p>
        </div>
        <a-table
            :columns="columns"
            :dataSource="order.items"
            :pagination="false"
            class="orders__table"
        >
          <a-table-column
              key="name"
              title="name"
              data-index="name"
          >
            <template slot-scope="text, record">
          <span>
            <a>{{ $t('title.action') }} 一 {{ record.name }}</a>
            <a-divider type="vertical"/>
            <a>{{ $t('button.delete') }}</a>
          </span>
            </template>
          </a-table-column>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "accountOrders",
  data: () => ({
    orders: [
      {
        items: [
          {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
          },
        ]
      }
    ],
    credentials: {
      email: '',
      password: ''
    },
    isRememberMeActive: false
  }),
  computed: {
    columns() {
      return [
        {
          title: this.$t('title.name'),
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: this.$t('title.age'),
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: this.$t('title.address'),
          dataIndex: 'address',
          key: 'address',
        },
      ]
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch('auth/signIn', this.credentials)
    }
  }
}
</script>