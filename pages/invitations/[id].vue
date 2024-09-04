<template>
  <div
    v-if="invitationOk"
    class="flex flex-col items-center center-component w-full space-y-6 p-6"
  >
    <span class="text-xl font-bold">
      {{ $t('invitations.validated.title') }}
    </span>

    <span>
      {{ $t('invitations.validated.text1') }}
    </span>
    <span>
      {{ $t('invitations.validated.text2') }}
    </span>

    <button class="btn-secondary" @click="$router.push('/shopconfig')">
      <fa-icon :icon="['fas', 'cog']" />
      <span>{{ $t('invitations.configShop') }}</span>
    </button>
  </div>
  <div
    v-else
    class="flex flex-col items-center center-component w-full space-y-6 p-6"
  >
    <span class="text-xl font-bold">{{ $t('invitations.error.title') }}</span>

    <span>
      {{ $t('invitations.error.text1') }}
    </span>
    <span>
      {{ $t('invitations.error.text2') }}
    </span>

    <button class="btn-secondary" @click="$router.push('/login')">
      <fa-icon :icon="['fas', 'sign-in-alt']" />
      <span>{{ $t('invitations.error.login') }}</span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      invitationOk: true,
    }
  },
}
</script>
