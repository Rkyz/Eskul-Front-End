import {AiFillFire} from 'react-icons/ai'
import {FiInfo} from 'react-icons/fi'
import {SiPhpmyadmin, SiPrivateinternetaccess} from 'react-icons/si'
import {BiUserCheck} from 'react-icons/bi'
import {HiOutlineChevronDown} from 'react-icons/hi'
import { PiCardsLight} from 'react-icons/pi'
import {MdGamepad, MdManageAccounts} from 'react-icons/md'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { BsJoystick } from 'react-icons/bs'
import { IoDiamondSharp } from 'react-icons/io5'


// eslint-disable-next-line react/prop-types
const SideNav = ({expanded, toggleExpansion}) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const [dataDropdownVisible, setDataDropdownVisible] = useState(false);
    const [hoverdataDropdownVisible, setHoverDataDropdownVisible] = useState(false);

    const toggleDataDropdown = () => {
        if (!expanded) {
          setDataDropdownVisible(!dataDropdownVisible);
        }
      };
    
      const handleMouseEnter = () => {
        if (expanded) {
          setHoverDataDropdownVisible(true);
        }
      };
    
      const handleMouseLeave = () => {
        if (expanded) {
          setHoverDataDropdownVisible(false);
        }
      };

      const handleDropdownMouseEnterData = () => {
        if (expanded) {
        setHoverDataDropdownVisible(true);
        }
      };
      
      const handleDropdownMouseLeaveData = () => {
        if (expanded) {
        setHoverDataDropdownVisible(false);
        }
      };

    const [managementDropdownVisible, setManagementDropdownVisible] = useState(false);
    const [hovermanageDropdownVisible, setHoverManageDropdownVisible] = useState(false);



    const toggleManagementDropdown = () => {
        if (!expanded) {
            setManagementDropdownVisible(!managementDropdownVisible);

        }
      };
    
      const handleMouseEnterManage = () => {
        if (expanded) {
          setHoverManageDropdownVisible(true);
        }
      };
    
      const handleMouseLeaveManage = () => {
        if (!hovermanageDropdownVisible, expanded) {
          setHoverManageDropdownVisible(false);
        }
        
      };
      const handleDropdownMouseEnter = () => {
        if (expanded) {
        setHoverManageDropdownVisible(true);
        }
      };
      
      const handleDropdownMouseLeave = () => {
        if (expanded) {
        setHoverManageDropdownVisible(false);
        }
      };

    const [infoHomeNavbar, setInfoHomeNavbar] = useState(false);


      const handleNavbarHomeMouseEnter = () => {
        if (expanded) {
        setInfoHomeNavbar(true);
        }
      };
      
      const handleNavbarHomeMouseLeave = () => {
        if (expanded) {
        setInfoHomeNavbar(false);
        }
      };
    const [infoHome2Navbar, setInfoHome2Navbar] = useState(false);


      const handleNavbarHomeMouseEnter2 = () => {
        if (expanded) {
        setInfoHome2Navbar(true);
        }
      };
      
      const handleNavbarHomeMouseLeave2 = () => {
        if (expanded) {
        setInfoHome2Navbar(false);
        }
      };

  return (
                <div>
                    {expanded &&(
                    <div className={` absolute h-[150px] border-b border-gray-600 z-50 w-full bg-white ${expanded ? 'lg:hidden':'lg:hidden'}`}>
                        <button onClick={toggleExpansion} className=' z-50 absolute capitalize font-poppins mt-[10px] cursor-pointer ml-[10px] font-bold'>close</button>
                        <div className='flex bg-transparent items-center absolute justify-center w-full h-full'>
                    <h1 className='font-poppins text-3xl uppercase'>Dalam Perbaikan Error males benerinnya</h1>
                        </div>
                </div>

                    )}
                    <nav className={`bg-white h-[100vh] z-50 transition-all duration-[700ms] overflow-scroll hidden-scroll fixed ${expanded ? 'max-lg:w-[320px] lg:w-[65px] max-lg:hidden':'max-lg:w-0 lg:w-[320px]'}`}>
                        <ul className="w-full bg-transparent flex justify-center items-center h-[72px]">
                            <h1 className={`uppercase font-semibold opacity-75 font antialiased tracking-[2px] font-poppins ${expanded ? 'lg:hidden':'max-lg:hidden'}`}>Esktrakulikuler</h1>
                            <h1 className={`uppercase font-semibold opacity-75 font antialiased tracking-[2px] font-poppins ${expanded ? 'max-lg:hidden':'max-lg:hidden lg:hidden'}`}>ek</h1>
                        </ul>
                        <ul className={`${expanded?'mb-[30px] max-lg:px-5  ':'px-5 max-lg:hidden'}`}>
                            <p className={`uppercase font-normal text-xs antialiased tracking-[1.5px] font-poppins opacity-40  ${expanded ? 'lg:hidden':''}`}>dashboard</p>
                            <div className='my-[15px]'>
                                <div className={`flex flex-col gap-y-[13px] relative  ${expanded?'px-1 max-lg:px-4':'w-full h-[55px] flex justify-center px-4'}`}>
                                    <a href='/admin/dashboard' onMouseEnter={handleNavbarHomeMouseEnter} onMouseLeave={handleNavbarHomeMouseLeave} className={`flex gap-x-[24.5px] items-center before:absolute  ${currentPath === '/admin/dashboard' ? (expanded ? 'lg:w-full lg:h-[50px] lg:bg-primary lg:rounded-md before:w-[4px] before:h-5 before:bg-primary before:-left-[20px]' : 'before:w-[4px] before:h-5 before:bg-primary before:-left-[20px]  ') : 'w-full h-[50px]'} ${expanded ? 'items-center lg:justify-center animate-fade-in-out' : ''}`}>
                                        <AiFillFire className={`opacity-100 ${expanded ? (currentPath === '/' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                                        <p href="" className={`opacity-60 text-sm ${expanded ? 'lg:hidden' : ''} transition-opacity`}>Home</p>
                                    </a>
                                    {infoHomeNavbar && (
                                        <div className={`absolute w-auto h-full bg-transparent  text-white flex items-center left-[75px] ${expanded ? 'max-lg:hidden' : 'hidden'}`}>
                                 <div className='bg-black py-[4px] px-[5px] rounded-sm '>
                                        <p className='font-semibold font-poppins text-sm z-50'>Home</p>
                                 </div>
                             </div>
                        )}
                    </div>
                </div>
            </ul>

            <ul className={`relative bg-transparent ${expanded?'mb-[30px]':' max-lg:hidden'}`}>
                <p className={`uppercase font-normal text-xs max-lg:mx-5 antialiased tracking-[1.5px] font-poppins opacity-40 ${expanded ? 'lg:hidden':'mx-5'}`}>Users</p>
                <div className={`flex flex-col gap-y-[13px] relative   ${expanded?'':'w-full h-[55px] mt-[15px] flex justify-center'}`}>
                    <div                            
                     onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`bg-transparent w-full ${expanded ? 'px-1':''}`}>
                        <button
                            onClick={toggleDataDropdown}
                            className={`relative flex items-center   ${currentPath === '/admin/data/usermanagement' ? (expanded ? 'lg:w-full lg:h-[50px] lg:bg-primary lg:rounded-md before:w-[4px] before:h-5 max-lg:px-9 before:bg-primary before:left-0 before:absolute' : ' before:w-[4px] before:h-5  before:bg-primary before:left-0 before:absolute ') : 'w-full h-[60px] '} ${currentPath === '/admin/data/adminmanagement' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-[0] before:absolute ') : 'w-full h-[60px] '} ${expanded ? 'items-center lg:justify-center animate-fade-in-out' : 'justify-between lg:px-9'}`}
                            >
                                <div className='flex gap-x-[24.5px] items-center '>
                               <MdGamepad className={`opacity-100 ${expanded ? (currentPath === '/data' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                                <p  className={`opacity-60 text-sm ${expanded ? 'lg:hidden' : ''} transition-opacity`}>Tingkatan</p>
                                </div>
                                <div className={`${expanded?'hidden':''}`}>
                                    <HiOutlineChevronDown className='text-md opacity-60'/>
                                </div>
                            </button>

                    </div>
                    <div 
                        onMouseEnter={handleDropdownMouseEnterData}
                        onMouseLeave={handleDropdownMouseLeaveData}
                        className={`absolute top-0 bg-transparent left-[65px] pl-[10px] ${expanded ? '':'hidden'} ${hoverdataDropdownVisible ? 'max-lg:hidden':''}`}>
                        {hoverdataDropdownVisible && (
                            <div className=' bg-white text-black w-[200px] rounded-md h-auto py-[20px]'>
                                <p className='opacity-60 text-sm  font-bold pb-5 border-b-[1px] border-black border-opacity-30 px-[20px]'>Tingkatan</p>
                                <a href='/admin/game/top-up' className={`py-[15px] flex gap-x-[24.5px] hover:text-primary items-center px-[20px] before:absolute `}>
                                    <p href="" className={`opacity-60 text-sm transition-opacity`}>Rombel </p>
                                </a>
                                <a href='/admin/game/joki' className={`flex gap-x-[24.5px] items-center hover:text-primary px-[20px] before:absolute py-[15px] `}>
                                    <p href="" className={`opacity-60 text-sm transition-opacity`}>Rayon</p>
                                </a>
                            </div>
                            )}
                   </div>
                </div>
                <div className={`${expanded ? 'lg:hidden':''} ${hoverdataDropdownVisible ? '':''} `}>
                     {dataDropdownVisible && (
                        <div
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                         className={`text-black mx-[45px] bg-transparent border-l-[1px] border-opacity-60 border-black before:w-20 before:h-20 before:bg-black   `}>
                             <div className={`flex flex-col bg-transparent `}>
                                <a href='/admin/game/top-up' className={` py-[15px] flex gap-x-[24.5px] items-center before:absolute ${expanded ? 'items-center justify-center animate-fade-in-out' : 'px-[30px]'}`}>
                                    <IoDiamondSharp className={`opacity-60 `}/>
                                    <p href="" className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Rombel</p>
                                </a>
                                <a href='/admin/game/joki' className={`flex gap-x-[24.5px] items-center before:absolute py-[15px] ${expanded ? 'items-center justify-center animate-fade-in-out' : 'px-[30px]'}`}>
                                    <BsJoystick className={`opacity-60`}/>
                                    <p href="" className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Rayon</p>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
                <div className={`flex flex-col relative gap-y-[13px]   ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-[37px]'}`}>
                <a
                    href='/admin/card'
                    onMouseEnter={handleNavbarHomeMouseEnter2} onMouseLeave={handleNavbarHomeMouseLeave2}
                    className={` bg-transparent relative flex gap-x-[24.5px] items-center ${currentPath === '/admin/manage/users' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${currentPath === '/admin/manage/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}
                    >
                       <PiCardsLight className={`opacity-100 ${expanded ? (currentPath === '/data' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Esktrakulikuler</p>
                    </a>
                    {infoHome2Navbar && (
                                        <div className={`absolute w-auto h-full bg-transparent  text-white flex items-center left-[75px] top-0 ${expanded ? 'max-lg:hidden' : 'hidden'}`}>
                                 <div className='bg-black py-[4px] px-[5px] rounded-sm '>
                                        <p className='font-semibold font-poppins text-sm z-50'>Card </p>
                                 </div>
                             </div>
                        )}
                </div>
                <div className={`flex flex-col gap-y-[13px] relative   ${expanded?'':'w-full h-[55px] mt-[15px] flex justify-center'}`}>
                <div                            
                    onMouseEnter={handleMouseEnterManage}
                    onMouseLeave={handleMouseLeaveManage}
                    className={`bg-transparent w-full ${expanded ? 'px-1':''}`}>
                <button
                    onClick={toggleManagementDropdown}
                    className={`relative flex items-center   ${currentPath === '/admin/manage/usermanagement' ? (expanded ? 'lg:w-full lg:h-[50px] lg:bg-primary lg:rounded-md before:w-[4px] before:h-5 max-lg:px-9 before:bg-primary before:left-0 before:absolute' : ' before:w-[4px] before:h-5 before:bg-primary before:left-0 before:absolute ') : 'w-full h-[60px] '} ${currentPath === '/admin/manage/adminmanagement' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-[0] before:absolute ') : 'w-full h-[60px] '} ${expanded ? 'items-center lg:justify-center animate-fade-in-out' : 'justify-between lg:px-9'}`}
                    >
                        <div className='flex gap-x-[24.5px] items-center '>
                       <MdManageAccounts className={`opacity-100 ${expanded ? (currentPath === '/data' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'lg:hidden' : ''} transition-opacity`}>Manage</p>
                        </div>
                        <div className={`${expanded?'hidden':''}`}>
                            <HiOutlineChevronDown className='text-md opacity-60'/>
                        </div>
                    </button>
                    </div>
                    <div 
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                        className={`absolute top-0 bg-transparent left-[65px] pl-[10px] ${expanded ? '':'hidden'}`}>
                        {hovermanageDropdownVisible && (
                            <div className=' bg-white text-black w-[200px] rounded-md h-auto py-[20px]'>
                                <p className='opacity-60 text-sm  font-bold pb-5 border-b-[1px] border-black border-opacity-30 px-[20px]'>Manage</p>
                                <a href='/admin/manage/usermanagement' className={`py-[15px] flex gap-x-[24.5px] hover:text-primary items-center px-[20px] before:absolute `}>
                                    <p href="" className={`opacity-60 text-sm transition-opacity`}>Admin Management </p>
                                </a>
                                <a href='/admin/manage/adminmanagement' className={`flex gap-x-[24.5px] items-center hover:text-primary px-[20px] before:absolute py-[15px] `}>
                                    <p href="" className={`opacity-60 text-sm transition-opacity`}>User Management</p>
                                </a>
                            </div>
                            )}
                   </div>
                </div>
                <div className={`${expanded ? 'lg:hidden':''} ${hoverdataDropdownVisible ? '':''} `}>
                     {managementDropdownVisible && (
                        <div
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                         className={`text-black mx-[45px] bg-transparent border-l-[1px] border-opacity-60 border-black before:w-20 before:h-20 before:bg-black   `}>
                             <div className={`flex flex-col bg-transparent `}>
                                <a href='/admin/game/top-up' className={` py-[15px] flex gap-x-[24.5px] items-center before:absolute ${expanded ? 'items-center justify-center animate-fade-in-out' : 'px-[30px]'}`}>
                                    <IoDiamondSharp className={`opacity-60 `}/>
                                    <p href="" className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Top Up</p>
                                </a>
                                <a href='/admin/game/joki' className={`flex gap-x-[24.5px] items-center before:absolute py-[15px] ${expanded ? 'items-center justify-center animate-fade-in-out' : 'px-[30px]'}`}>
                                    <BsJoystick className={`opacity-60`}/>
                                    <p href="" className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Joki</p>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
                <div className={`flex flex-col gap-y-[13px] relative    ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-[37px]'}`}>
                <a
                    href='/admin/card'
                    className={`relative flex gap-x-[24.5px] items-center ${currentPath === '/admin/adshfbhsdbf' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:absolute before:-left-[36px]') : 'w-full h-[60px] '} ${currentPath === '/admin/data/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}
                    >
                       <SiPrivateinternetaccess className={`opacity-100 ${expanded ? (currentPath === '/data' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Jadwal</p>
                    </a>
                </div>
                
                <div className={`flex flex-col gap-y-[13px] relative    ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-[37px]'}`}>
                <a
                    href='/admin/info'
                    className={`relative flex gap-x-[24.5px] items-center ${currentPath === '/admin/info' ?  (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:absolute before:-left-[36px]') : 'w-full h-[60px] '} ${currentPath === '/admin/data/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}
                    >
                       <FiInfo className={`opacity-100 ${expanded ? (currentPath === '/admin/info' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Program</p>
                    </a>
                </div>
                <div className={`flex flex-col gap-y-[13px] relative    ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-[37px]'}`}>
                <a
                    href='/admin/info'
                    className={`relative flex gap-x-[24.5px] items-center ${currentPath === '/admin/info' ?  (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:absolute before:-left-[36px]') : 'w-full h-[60px] '} ${currentPath === '/admin/data/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}
                    >
                       <FiInfo className={`opacity-100 ${expanded ? (currentPath === '/admin/info' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Siswa</p>
                    </a>
                </div>
                <div className={`flex flex-col gap-y-[13px] relative    ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-[37px]'}`}>
                <a
                    href='/admin/info'
                    className={`relative flex gap-x-[24.5px] items-center ${currentPath === '/admin/info' ?  (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:absolute before:-left-[36px]') : 'w-full h-[60px] '} ${currentPath === '/admin/data/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}
                    >
                       <FiInfo className={`opacity-100 ${expanded ? (currentPath === '/admin/info' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Gallery</p>
                    </a>
                </div>
                <div className={`flex flex-col gap-y-[13px] relative    ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-[37px]'}`}>
                <a
                    href='/admin/info'
                    className={`relative flex gap-x-[24.5px] items-center ${currentPath === '/admin/info' ?  (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:absolute before:-left-[36px]') : 'w-full h-[60px] '} ${currentPath === '/admin/data/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}
                    >
                       <FiInfo className={`opacity-100 ${expanded ? (currentPath === '/admin/info' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Ruangan</p>
                    </a>
                </div>
                <div className={`flex flex-col gap-y-[13px] relative    ${expanded?'px-1':'w-full h-[55px] mt-[15px] flex justify-center px-[37px]'}`}>
                <a
                    href='/admin/info'
                    className={`relative flex gap-x-[24.5px] items-center ${currentPath === '/admin/info' ?  (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:absolute before:-left-[36px]') : 'w-full h-[60px] '} ${currentPath === '/admin/data/admin' ? (expanded ? 'w-full h-[50px] bg-primary rounded-md' : 'before:w-[4px] before:h-5 before:bg-primary before:left-0 ') : 'w-full h-[60px] '} ${expanded ? 'items-center justify-center animate-fade-in-out' : ''}`}
                    >
                       <FiInfo className={`opacity-100 ${expanded ? (currentPath === '/admin/info' ? 'text-2xl opacity-100 text-white' : 'text-2xl opacity-60 text-black') : 'opacity-60'}`}/>
                        <p  className={`opacity-60 text-sm ${expanded ? 'hidden' : ''} transition-opacity`}>Instruktur</p>
                    </a>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default SideNav