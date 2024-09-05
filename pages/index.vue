<script lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useStore } from '~/store'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  async setup() {
    const isAuthenticated = !!localStorage.getItem('user')

    if (!isAuthenticated) {
      await navigateTo('/login')
    }
    const store = useStore()
    await store.fetchCompanies()
  },
  data() {
    const store = useStore()
    return {
      companies: store.companies,
      series: [store.countCompanies(true), store.countCompanies(false)],
      chartOptions: {
        chart: {
          width: 100,
          type: 'pie',
        },
        labels: ['Entreprises abonnées', 'Entreprises non abonnées'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                height: 100,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    }
  },
}
</script>

<template>
  <div class="container mx-auto px-4 py-8 sm:py-12">
    <div>
      <span class="font-semibold">
        {{ $t('companies.subscriptions') }}
      </span>
      <apexchart
        :options="chartOptions"
        :series="series"
        height="380"
        width="720"
      />
    </div>
  </div>
</template>
