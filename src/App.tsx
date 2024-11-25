/* eslint-disable @typescript-eslint/no-unused-vars */

import EventsExample from './components/EventsExample'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserPage from './components/UserPage'
import PostsPage from './components/PostsPage'
import { NavLink } from 'react-router-dom'
import UserItemPage from './components/UserItemPage'
import PostItemPage from './components/PostItemPage'

const App = () => {
  // interface BrowserRouterProps {
  //   future: {
  //     v7_startTransition: boolean
  //     v7_relativeSplatPath: boolean
  //   }
  // }

  // future={{ v7_startTransition: true, v7_relativeSplatPath: true }}

  return (
    <div>
      <BrowserRouter>
        <div>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <Routes>
            <Route path="/users" element={<UserPage />}></Route>
            <Route path="/posts" element={<PostsPage />}></Route>
            <Route path="/users/:id" element={<UserItemPage />}></Route>
            <Route path="/posts/:id" element={<PostItemPage />}></Route>
            <Route path="/" element={<EventsExample />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
