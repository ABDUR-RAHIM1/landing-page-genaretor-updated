import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaArrowAltCircleRight, FaBars, FaTimes } from 'react-icons/fa';
import { formContext } from '../../ContextApi/ContextApi';
import {
  MdDashboard,
  MdWeb,
  MdCreate,
  MdManageAccounts,
  MdOutlineShoppingCart,
  MdLogout,
} from 'react-icons/md';

export default function DashboardLayout({ children }) {
  const { logout } = useContext(formContext);
  const { username } = useParams();
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const handleShowSidebar = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (width < 768) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [width]);

  const handleLogOut = () => {
    logout();
    setTimeout(() => {
      navigate('/auth');
    }, 1000);
  };

  const sidebarItems = [
    { item: 'Dashboard', path: `/dashboard/${username}`, icon: <MdDashboard className='text-xl' /> },
    { item: 'Themes', path: `/dashboard/${username}/themes`, icon: <MdWeb className='text-xl' /> },
    { item: 'Create Page', path: `/dashboard/${username}/create-page`, icon: <MdCreate className='text-xl' /> },
    { item: 'Manage Pages', path: `/dashboard/${username}/page-manage`, icon: <MdManageAccounts className='text-xl' /> },
    { item: 'Orders', path: `/dashboard/${username}/orders`, icon: <MdOutlineShoppingCart className='text-xl' /> },
  ];

  return (
    <>
      {/* Header Section */}
      <header className='sticky top-0 w-full bg-gray-800 text-white flex justify-between items-center px-6 py-4 shadow-md z-[1000]'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-semibold'>Dashboard</h1>
          <div onClick={handleShowSidebar} className="ml-4 cursor-pointer">
            {show ? (
              <FaTimes className='text-3xl text-orange-500 duration-300 transform rotate-180' />
            ) : (
              <FaBars className='text-3xl text-orange-500 duration-300 transform rotate-0' />
            )}
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <p className='hidden md:block text-lg'>{username}</p>
          <div className='w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full border-2 border-orange-500 text-xl'>
            {username.charAt(0).toUpperCase()}
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className='relative h-screen'>
        {/* Sidebar */}
        <aside
          className={`fixed top-[64px] left-0 h-[calc(100%-64px)] w-[250px] bg-white  z-50 transform ${show ? 'translate-x-0 shadow-2xl ' : '-translate-x-full shadow-none'
            } transition-transform duration-300 overflow-y-auto py-5 md:py-0`}
        >
          <div className='border-b border-gray-300 pb-6 mb-8 text-center pt-8'>
            <h4 className='text-2xl font-semibold text-gray-700 flex gap-2 justify-center items-center'>
              <MdDashboard className='text-3xl text-orange-500' />
              Dashboard
            </h4>
            <p className='mt-2 text-lg font-medium text-gray-600'>{username}</p>
          </div>

          {/* Navigation Links */}
          <nav className='flex flex-col space-y-4 px-4'>
            {sidebarItems.map((s, i) => (
              <Link
                key={i}
                to={s.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-md hover:bg-orange-100 transition duration-300 ${location.endsWith(s.path)
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-700'
                  }`}
              >
                {s.icon}
                <span>{s.item}</span>
              </Link>
            ))}

            <div className=' my-10'></div>

            {/* Logout Button */}
            <button
              onClick={handleLogOut}
              className='w-full py-3 px-4  bg-red-600 hover:bg-red-700 text-white rounded-md mt-6 shadow-md hover:shadow-lg flex items-center gap-4 transition duration-300'
            >
              <MdLogout className='text-xl' />
              Log out
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className='w-full px-5  pt-[64px] overflow-y-auto scrolWidth h-[calc(100vh-64px)]'>
          {children}
        </main>
      </div>
    </>
  );
}
