import { createContext } from "react"
const ExpenseContext = createContext()
const InitialState = {
    expense : [],
    loading: false,
    error: null
}