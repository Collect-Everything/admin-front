<template>
  <div class="text-black h-screen w-full">
    <div
      v-if="screenWidth < 768"
      class="flex items-center justify-between border-b border-gray-300 w-full px-4"
    >
      <div class="w-1/3 flex items-center">
        <fa-icon
          :icon="['fas', 'bars']"
          class="text-2xl"
          @click="showNav = !showNav"
        />
      </div>
      <div class="w-1/3 flex justify-center">
        <NuxtLink to="/">
          <img src="~/assets/logo.png" alt="logo" class="h-20" />
        </NuxtLink>
      </div>
    </div>
    <div v-else>
      <div
        class="flex items-center justify-between border-b border-gray-300 w-full px-6"
      >
        <div class="w-1/2 flex items-center space-x-6">
          <NuxtLink to="/">
            <img src="~/assets/logo.png" alt="logo" class="h-20" />
          </NuxtLink>

          <h1 v-if="!isAuthenticated" class="text-neutral-500">
            <span>{{ $t('general.home') }}</span>
          </h1>

          <NuxtLink v-if="isAuthenticated" to="/">
            <span>{{ $t('home.home') }}</span>
          </NuxtLink>

          <NuxtLink v-if="isAuthenticated" to="/admin-users">
            <span>{{ $t('admin-users.home') }}</span>
          </NuxtLink>

          <NuxtLink v-if="isAuthenticated" to="/companies">
            <span>{{ $t('companies.home') }}</span>
          </NuxtLink>

          <NuxtLink v-if="isAuthenticated" to="/company-users">
            <span>{{ $t('company-users.home') }}</span>
          </NuxtLink>
        </div>

        <div class="w-1/2 flex items-center justify-end space-x-6">
          <button
            v-if="isAuthenticated"
            class="btn-skeleton-secondary"
            @click="handleLogout()"
          >
            <fa-icon :icon="['fas', 'sign-out-alt']" />
            <span>{{ $t('login.logout') }}</span>
          </button>
        </div>
      </div>
    </div>
    <div v-if="!showNav" class="py-6">
      <slot />
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center space-y-6 pt-6 divide-y divide-gray-300 w-full"
    >
      <NuxtLink
        to="/"
        class="flex items-center justify-center space-x-2"
        @click="showNav = false"
      >
        <fa-icon :icon="['fas', 'home']" />
        <span>{{ $t('general.home') }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store'

const { logout } = useStore()
const router = useRouter()

const isAuthenticated = !!localStorage.getItem('user')
const showNav = ref(false)
let screenWidth = ref(0).value

const handleLogout = () => {
  logout()
  router.push('/')
  window.location.reload()
}

screenWidth = window.innerWidth

window.addEventListener('resize', () => {
  screenWidth = window.innerWidth
})
</script>

<style>
.router-link-active {
  @apply font-semibold text-neutral-900 !important;
}
.router-link-active:hover {
  @apply text-neutral-600 !important;
}
</style>
