import { useStore } from '~/store'

export default defineNuxtRouteMiddleware((to) => {
  const user = useStore().user

  const publicRoutes = ['/', '/login']

  if (!user) {
    const userFromCookies = JSON.parse(localStorage.getItem('user') || 'null')
    if (userFromCookies) useStore().setUser(userFromCookies)
    else if (!publicRoutes.includes(to.path)) return navigateTo('/login')
  }
})
