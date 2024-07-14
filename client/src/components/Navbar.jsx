"use client"
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
const Navbar = () => {
const isAuth =  useAuth();
  return (
    <>
     
      <nav className="bg-purple-800 p-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-white mr-4">Home</Link>
            {isAuth ?
              (
                <Link href="/user/profile" className="text-white mr-4">Profile</Link>
              ) :
              (
                <>
                  <Link href="/account/login" className="text-white mr-4">Login</Link>
                  <Link href="/account/register" className="text-white mr-4">Registration</Link>
                </>
              )}
          </div>
          <div>
            {
             isAuth ? (isAuth.role === "admin" ? (<><div>admin sayfası</div></>) : (<><div>{isAuth.role} sayfası</div></>)) : ("")
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar