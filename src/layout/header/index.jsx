import React from 'react'
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import Cart from '../../pages/cart/cart'

const Header = () => {
  return (
    <div className='flex justify-between max-w-[1440px] mx-auto w-[95%] mt-12 items-center'>
      <div>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className='flex gap-12 text-xl'>
        <Link to={"/"}>Home</Link>
        <Link>Shop</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </div>
      <div className='flex gap-6 text-3xl'>
        <Link><UserOutlined /></Link>
        <Link><SearchOutlined /></Link>
        <Link><HeartOutlined /></Link>
        <Link to={"/cart"}><ShoppingCartOutlined /></Link>
      </div>
    </div>
  )
}

export default Header