// src/features/users/userSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface User {
  id: string
  name: string
  email: string
}

const initialState: Array<User> = [
  {
    id: '1',
    name: 'longvu',
    email: 'longvu@test.com'
  }
]

// // Async thunk to fetch users
// export const fetchUsers = createAsyncThunk<User[]>(
//   "users/fetchUsers",
//   async () => {
//     const response = await fetch("/api/users");
//     if (!response.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     const data = await response.json();
//     return data as User[];
//   }
// );

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload)
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.findIndex((user) => user.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((user) => user.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    }
  }
  //  extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchUsers.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
  //       state.loading = false;
  //       state.users = action.payload;
  //     })
  //     .addCase(fetchUsers.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message ?? "Something went wrong";
  //     });
  // },
})

export const { addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer
