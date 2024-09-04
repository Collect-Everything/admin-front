<template>
  <div
    class="flex flex-col items-center space-y-6 p-6 center-component w-full md:lg:w-1/3"
  >
    <div class="flex flex-col items-center space-y-4 w-full">
      <span class="text-xl font-bold">{{ $t('login.login') }}</span>

      <div class="flex flex-col space-y-1 text-gray-500 w-full">
        <label for="email">{{ $t('login.email') }}</label>
        <input id="email" v-model="email" type="email" class="input" />
      </div>

      <div class="flex flex-col space-y-1 text-gray-500 w-full">
        <label for="password">{{ $t('login.password') }}</label>
        <input id="password" v-model="password" type="password" class="input" />
        <span
          class="text-xs text-black text-right cursor-pointer"
          @click="$router.push('/forgot-password')"
        >
          {{ $t('login.forgotPassword') }}
        </span>
      </div>
    </div>

    <button class="btn-secondary w-full" @click="login()">
      <fa-icon :icon="['fas', 'sign-in-alt']" />
      <span>{{ $t('login.login') }}</span>
    </button>

    <div class="flex items-center space-x-2 w-full">
      <div class="border-b w-full border-gray-500" />
      <span class="text-gray-500">{{ $t('general.or') }}</span>
      <div class="border-b w-full border-gray-500" />
    </div>

    <button class="btn-skeleton-secondary w-full" @click="oauthLogin()">
      <fa-icon :icon="['fab', 'google']" />
      <span>{{ $t('login.oauthLogin') }}</span>
    </button>

    <div class="border-b w-full border-gray-300" />

    <span v-if="errorMessage" class="text-red-500">{{ $t(errorMessage) }}</span>

    <div class="flex items-center space-x-1">
      <span class="text-sm text-gray-500">{{ $t('login.noAccount') }}</span>
      <span
        class="text-sm font-semibold cursor-pointer text-secondary"
        @click="$router.push('/register')"
      >
        {{ $t('login.register') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store'

const config = useRuntimeConfig()
const { setUser } = useMainStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

async function login() {
  try {
    const { data } = await $fetch(
      `${config.public.API_GATEWAY_URL}/auth/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email: email.value,
          password: password.value,
        },
      }
    )

    errorMessage.value = ''

    const user = {
      payload: data.payload,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    }

    setUser(user)

    router.push('/').then(() => {
      window.location.reload()
    })
  } catch (error) {
    errorMessage.value = 'login.error'
  }
}
function oauthLogin() {
  // TODO
}
</script>
