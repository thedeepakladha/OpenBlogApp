import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (


    <header className='py-3 shadow bg-gray-700'>
    <Container>
        <nav className='flex items-center justify-between'>
            {/* Logo Section */}
            <div className='flex items-center'>
                <Link to='/'>
                    <img 
                        src="https://img.icons8.com/material-outlined/24/leaf.png" 
                        alt="Leaf Logo" 
                        width='70' 
                        className='rounded-none' 
                    />
                </Link>
            </div>

            {/* Navigation Links */}
            <ul className='flex space-x-4 ml-auto'>
                {navItems.map((item) =>
                    item.active ? (
                        <li key={item.name}>
                            <button
                                onClick={() => navigate(item.slug)}
                                className='px-6 py-2 bg-transparent text-white hover:bg-blue-700 rounded-full duration-200'
                            >
                                {item.name}
                            </button>
                        </li>
                    ) : null
                )}
                {authStatus && (
                    <li>
                        <LogoutBtn className='text-white' />
                    </li>
                )}
            </ul>
        </nav>
    </Container>
</header>






  )
}

export default Header