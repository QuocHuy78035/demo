// src/types/redux.d.ts
import { store } from '../app/store'

export type RootState = ReturnType<typeof store.getState>
