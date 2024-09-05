<script lang="ts">
import { useStore } from '~/store'

export default {
  async setup() {
    const store = useStore()
    await store.fetchAdminUsers()
  },
  data() {
    const store = useStore()
    return {
      adminUsers: store.adminUsers,
    }
  },
}
</script>

<template>
  <div class="container mx-auto px-4 py-8 sm:py-12">
    <!--  -->
    <h1 class="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
      {{ $t('admin-users.title') }}
    </h1>
    <!--  -->
    <div class="flex items-center justify-between my-2">
      <p>
        {{ adminUsers.length }} {{ $t('admin-users.amount')
        }}{{ adminUsers.length > 1 ? 's' : '' }}
      </p>
    </div>
    <!--  -->
    <div v-if="adminUsers.length > 0">
      <table class="text-left [&_td]:p-3 [&_th]:p-3 w-full divide-y">
        <thead>
          <tr>
            <th>{{ $t('admin-users.table.id') }}</th>
            <th>{{ $t('admin-users.table.email') }}</th>
            <th>{{ $t('admin-users.table.firstname') }}</th>
            <th>{{ $t('admin-users.table.lastname') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="adminUser in adminUsers" :key="adminUser.id">
            <td>{{ adminUser.id }}</td>
            <td>{{ adminUser.email }}</td>
            <td>{{ adminUser.firstname }}</td>
            <td>{{ adminUser.lastname }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--  -->
  </div>
</template>
