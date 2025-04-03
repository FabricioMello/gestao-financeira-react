import { Settings } from './settings'

export interface User {
    id: number
    name: string
    email: string
    avatar: string
    createdAt: string
    settings: Settings
}