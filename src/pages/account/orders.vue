<template>
  <div class="pages">
    <a-table
      :columns="columns"
      :dataSource="dataSource"
    >
      <a-table-column key="name" title="name" data-index="name">
        <template slot-scope="text, record">
          <span>
            <a>Action 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
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

    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ],

    credentials: {
      email: '',
      password: ''
    },

    isRememberMeActive: false
  }),
  methods: {
    signIn() {
      this.$store.dispatch('auth/signIn', this.credentials)
    }
  }
}
</script>