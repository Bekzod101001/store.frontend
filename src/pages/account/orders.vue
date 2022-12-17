<template>
  <div class="pages">
    <a-table
        :columns="columns"
        :dataSource="dataSource"
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
</template>

<script>

export default {
  name: "accountOrders",
  data: () => ({
    dataSource: [
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