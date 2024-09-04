<script lang="ts">
import { useStore } from '~/store'
import VueApexCharts from "vue3-apexcharts";

export default {
  async setup() {
    const isAuthenticated = !!localStorage.getItem('user')

    if (!isAuthenticated){
      await navigateTo('/login')
    }
    const store = useStore();
    await store.fetchCompanies();
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    const store = useStore();
    return {
      "companies" : store.companies,
      "series" : [store.countCompanies(true), store.countCompanies(false)],
      "chartOptions" : {
            chart: {
              width: 100,
              type: 'pie',
            },
            labels: ["Entreprises abonnées", "Entreprises non abonnées"],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  height: 100
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }
    };
  },
}
</script>

<template>
  <div class="container mx-auto px-4 py-8 sm:py-12">
    <div class="mx-20">
      <apexchart :options="chartOptions" :series="series" height="380" width="720"></apexchart>
    </div>
  </div>
</template>