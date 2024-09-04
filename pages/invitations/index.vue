<template>
  <div class="flex flex-col items-center center-component w-full space-y-6 p-6">
    <span class="text-xl font-bold">{{ $t('invitations.title') }}</span>

    <span>
      {{ $t('invitations.text1') }}
      <strong>{{ email }}</strong>
    </span>
    <span>
      {{ $t('invitations.text2') }}
    </span>

    <div class="flex space-x-4 text-sm">
      <button class="btn-secondary" @click="resendEmail()">
        <fa-icon :icon="['fas', 'paper-plane']" />
        <span>{{ $t('invitations.resendEmail') }}</span>
      </button>

      <button class="btn-skeleton-secondary" @click="contactSupport()">
        <fa-icon :icon="['fas', 'phone']" />
        <span>{{ $t('invitations.contactSUpport') }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: 'mail@example.com',
    }
  },
  methods: {
    resendEmail() {
      // TODO
    },
    contactSupport() {
      // TODO
    },
  },
}
</script>
