// src/features/users/UserPage.tsx;
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { type User, addUser, deleteUser, updateUser } from './userSlice'

function UserPage() {
  const [users, setUsers] = useState<User[]>([])
  const [newUserName, setNewUserName] = useState('')
  const [newUserEmail, setNewUserEmail] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const selectedUsers = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setUsers(selectedUsers)
    return () => {
      console.log('component unmounting...')
    }
  }, [selectedUsers])

  const handleAddUser = () => {
    if (!newUserName || !newUserEmail) return

    const newUser: User = {
      id: (users.length + 1).toString(),
      name: newUserName,
      email: newUserEmail
    }

    dispatch(addUser(newUser))
    setNewUserName('')
    setNewUserEmail('')
  }

  const handleUpdateUser = () => {
    if (!newUserName || !newUserEmail) return

    const updatedUser: User = {
      id: (users.length + 1).toString(),
      name: newUserName,
      email: newUserEmail
    }

    dispatch(updateUser(updatedUser))
    setNewUserName('')
    setNewUserEmail('')
    setIsEditing(false)
  }

  return (
    <div className='flex justify-center w-full items-center max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6'>
      <h1 className='text-2xl font-semibold text-center text-gray-800'>User List</h1>

      <ul className='space-y-2'>
        {users.map((user) => (
          <li key={user.id} className='border border-gray-200 p-3 rounded-md'>
            <span className='font-medium text-gray-700'>{user.name}</span> <br />
            <span>{user.email}</span>
            <button
              onClick={() => {
                setIsEditing(true)
                setNewUserEmail(user.email)
                setNewUserName(user.name)
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                setIsEditing(false)
                dispatch(deleteUser(user.id))
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className='space-y-4'>
        <input
          type='text'
          placeholder='Name'
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          className='w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
        />
        <input
          type='email'
          placeholder='Email'
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
          className='w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
        />
        <button
          onClick={isEditing ? handleUpdateUser : handleAddUser}
          className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition'
        >
          {isEditing ? 'Update User' : 'Add User'}
        </button>
      </div>
    </div>
  )
}

export default UserPage
