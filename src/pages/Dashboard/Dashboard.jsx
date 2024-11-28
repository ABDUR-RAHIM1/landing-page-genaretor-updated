import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import images from '../../constans/Constans';
import DashboardLayout from './DashboardLayout';
import Loader from '../../PageComponents/Loader';
import { formContext } from '../../ContextApi/ContextApi';
import { IoIosMan, IoMdBusiness } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FcBusinessman } from 'react-icons/fc';
import LogoRotator from '../../Helpers/LogoRotator';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const { getUser, userInfo } = useContext(formContext);
  const { user, page, orders } = userInfo;
  const { username } = useParams();

  const logoImages = page.map(p => p.hero.logo).filter(Boolean);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        await getUser();
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <DashboardLayout>
      {/* Profile Section */}
      <div className="mb-10">
        <div className="w-full h-[350px] relative">
          <img src={images.coverPhoto} className="w-full h-full object-cover rounded-t-lg" alt="Cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white drop-shadow-md">Your Profile</h1>
            <p className="text-white mt-2">Increase Your Sales</p>
          </div>
        </div>

        <div className="relative w-[200px] h-[200px] m-auto rounded-full -mt-32 mb-20 flex justify-center">
          {logoImages.length > 0 ? (
            <LogoRotator images={logoImages} />
          ) : (
            <img src={images.profilePhoto} className="w-[150px] h-[150px] rounded-full border-4 border-white shadow-lg" alt="Default Logo" />
          )}
        </div>

        <div className="bg-gray-100 py-6 px-8 rounded-b-lg shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-semibold flex items-center gap-2 text-gray-800">
              <FcBusinessman className="text-4xl" />
              {user.name}
            </h2>
            <p className="text-lg flex items-center gap-2 text-gray-600">
              <MdEmail className="text-2xl text-orange-500" />
              {user.email}
            </p>
            <p className="text-lg flex items-center gap-2 text-gray-600">
              <IoMdBusiness className="text-2xl text-orange-500" />
              {user.username}
            </p>
          </div>

          <div className="flex justify-between mt-8">
            <Link to={`/dashboard/${username}/page-manage`} className="w-[48%] py-6 px-5 text-center bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-xl font-medium">Total Pages</p>
              <p className="text-2xl font-bold">{page?.length || 0}</p>
            </Link>
            <Link to={`/dashboard/${username}/orders`} className="w-[48%] py-6 px-5 text-center bg-orange-400 hover:bg-orange-500 text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <p className="text-xl font-medium">Total Orders</p>
              <p className="text-2xl font-bold">{orders?.length || 0}</p>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
