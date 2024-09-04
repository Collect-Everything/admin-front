<script lang="ts">
import { useStore } from '~/store'

export default {
  async setup() {
    const store = useStore();
    await store.fetchCompanyUsers();
  },
  data() {
    const store = useStore();
    return {
      "companyUsers" : store.companyUsers,
    };
  },
}
</script>
  
<template>
  <div class="container mx-auto px-4 py-8 sm:py-12">
    <!--  -->
    <h1 class="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
      {{ $t('company-users.title') }}
    </h1>
    <!--  -->
    <div class="flex items-center justify-between my-2">
      <p>{{ companyUsers.length }} {{ $t('company-users.amount') }}{{ companyUsers.length > 1 ? 's' : '' }}</p>
    </div>
    <!--  -->
    <div v-if="companyUsers.length > 0">
      <table class="text-left [&_td]:p-3 [&_th]:p-3 w-full divide-y">
        <thead>
          <tr>
            <th>{{ $t('company-users.table.id') }}</th>
            <th>{{ $t('company-users.table.email') }}</th>
            <th>{{ $t('company-users.table.firstname') }}</th>
            <th>{{ $t('company-users.table.lastname') }}</th>
            <th>{{ $t('company-users.table.role') }}</th>
            <th>{{ $t('company-users.table.company') }}</th>
            <th>{{ $t('company-users.table.isEmailVerified') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="companyUser in companyUsers">
            <td>{{  companyUser.id  }}</td>
            <td>{{  companyUser.email  }}</td>
            <td>{{  companyUser.firstname  }}</td>
            <td>{{  companyUser.lastname  }}</td>
            <td>{{  companyUser.role  }}</td>
            <td>{{  companyUser.company  }}</td>
            <td v-if="companyUser.emailVerified" class="text-center"><fa-icon :icon="['fas', 'circle-check']" class="text-xl text-green-400" /></td>
            <td v-if="!companyUser.emailVerified" class="text-center"><fa-icon :icon="['fas', 'circle-xmark']" class="text-xl text-red-400" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--  -->
  </div>
</template>
  