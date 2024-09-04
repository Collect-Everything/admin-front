<script lang="ts">
import { useStore } from '~/store'
import { useDayjs } from '#dayjs'

const dayjs = useDayjs()

export default {
  async setup() {
    const store = useStore();
    await store.fetchCompanies();
  },
  data() {
    const store = useStore();
    return {
      "companies" : store.companies,
    };
  },
}
</script>
  
<template>
  <div class="container mx-auto px-4 py-8 sm:py-12">
    <!--  -->
    <h1 class="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
      {{ $t('companies.title') }}
    </h1>
    <!--  -->
    <div class="flex items-center justify-between my-2">
      <p>{{ companies.length }} {{ $t('companies.amount') }}{{ companies.length > 1 ? 's' : '' }}</p>
    </div>
    <!--  -->
    <div v-if="companies.length > 0">
      <table class="text-left [&_td]:p-3 [&_th]:p-3 w-full divide-y">
        <thead>
          <tr>
            <th>{{ $t('companies.table.id') }}</th>
            <th>{{ $t('companies.table.name') }}</th>
            <th>{{ $t('companies.table.phone') }}</th>
            <th>{{ $t('companies.table.email') }}</th>
            <th>{{ $t('companies.table.city') }}</th>
            <th>{{ $t('companies.table.country') }}</th>
            <th>{{ $t('companies.table.subscriptionStatus') }}</th>
            <th>{{ $t('companies.table.subscriptionUpdatedAt') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="company in companies">
            <td>{{ company.id }}</td>
            <td>{{ company.name }}</td>
            <td>{{ company.phone }}</td>
            <td>{{ company.email }}</td>
            <td>{{ company.city }}</td>
            <td>{{ company.country }}</td>
            <td>{{ company.subscriptionStatus }}</td>
            <td v-if="company.subscriptionUpdatedAt">{{ $dayjs(company.subscriptionUpdatedAt).format('MM/DD/YYYY') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--  -->
  </div>
</template>
  