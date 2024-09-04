import { useMainStore } from '~/store'

export default defineNuxtRouteMiddleware((to) => {
  const user = useMainStore().user

  const publicRoutes = ['/', '/login']

  if (!user) {
    const userFromCookies = JSON.parse(localStorage.getItem('user') || 'null')
    if (userFromCookies) useMainStore().setUser(userFromCookies)
    else if (!publicRoutes.includes(to.path)) return navigateTo('/login')
  }
})
