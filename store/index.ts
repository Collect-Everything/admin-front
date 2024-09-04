import { defineStore } from 'pinia'

interface User {
  payload: {
    id: string
    email: string
    firstname: string
    lastname: string
  }
  accessToken: string
  refreshToken: string
}

export const useMainStore = defineStore({
  id: 'main-store',
  state: () => {
    const user: User | null = JSON.parse(localStorage.getItem('user') || 'null')
    return {
      user,
    }
  },
  getters: {
    getUser(): User | null {
      return this.user || JSON.parse(localStorage.getItem('user') || 'null')
    },
  },
  actions: {
    setUser(user: any) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
    async refreshToken() {
      try {
        if (!this.user) return
        const nuxtApp = useNuxtApp()
        const config = nuxtApp.$config
        const apiUrl = config.public.API_GATEWAY_URL
        const response = await fetch(
          `${apiUrl}/auth/login-with-refresh-token`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              refreshToken: this.user?.refreshToken,
            }),
          }
        )

        if (!response.ok) {
          this.logout()
          return
        }

        const data = await response.json()

        this.setUser(data.data)
      } catch (error) {
        console.error(error)
        this.logout()
      }
    },
  },
})
