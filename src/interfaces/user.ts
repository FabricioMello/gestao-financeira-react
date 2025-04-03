import { Settings } from './settings'

export interface User {
    id: string
    name: string
    email: string
    avatar: string
    createdAt: string
    settings: Settings
}