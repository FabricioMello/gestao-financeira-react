export interface Settings {
  theme: "light" | "dark"
  currency: string
  notifications: {
    email: boolean
    push: boolean
    budgetAlerts: boolean
  }
}