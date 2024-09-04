<script setup lang="ts">
const isAuthenticated = !!localStorage.getItem('user')

if (!isAuthenticated){
  await navigateTo('/login')
} else {
  await navigateTo('/company-users')
}
</script>

<template></template>