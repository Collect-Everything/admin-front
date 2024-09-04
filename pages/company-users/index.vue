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
  
<template>
    <div class="flex flex-col items-center center-component w-full space-y-6 p-6">
      <span class="text-xl font-bold">{{ $t('company-users.title') }}</span>
    </div>
</template>
  