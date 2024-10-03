import { Box, Button, Flex, Heading, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaSmileBeam } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { LiaAddressCard } from 'react-icons/lia';

import { useToast } from '@chakra-ui/react'

export default function Sign_up() {
    const toast = useToast();
    const toastIdRef = useRef();
    
    const [formData, setFormData] = useState({});
    const [formError, setFormError] = useState(false);
    const [ loading, setLoading ] = useState(false);
    let navigate = useNavigate();

    const phone = useRef(null);
    const firstname = useRef(null);
    const lastname = useRef(null);
    const homeAddress = useRef(null);
    // const password = useRef(null);

    const addToast = () => {
        formError ? toastIdRef.current = toast({
            status: 'error',
            description : formError,
            duration: 900
        }) : ''
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        try {
            setLoading(true);
            
            if (firstname.current.value === '' || firstname.current.value === null) {
                setFormError('Firstname is Required!');
                setLoading(false);
                return;
            }
            if (lastname.current.value === '' || lastname.current.value === null) {
                setFormError('Lastname is Required!');
                setLoading(false);
                return;
            }
            if (phone.current.value === '' || phone.current.value === null) {
                setFormError('Phone Number is Required!');
                setLoading(false);
                return;
            }
            if (homeAddress.current.value === '' || homeAddress.current.value === null) {
                setFormError('Home Address is Required!');
                setLoading(false);
                return;
            }

            const signup_api = 'https://adexify-api.vercel.app/api/user/auth/signup';
    
            const res = await fetch(signup_api, {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(formData),
            });
    
            const data = await res.json();
    
            if (data.success === false) {
                setFormError(data.message);
                console.log(data.message);
                setLoading(false);
                return;
            }

            setLoading(false);
            setFormError(false);
            navigate('/signin');
            console.log(formData);
            
        } catch (error) {
            setFormError(error);
            console.log(error);
            setLoading(false);
        }
    }

  const getLockPassIcon = useRef(null);
    const password = useRef(null);

    const handlePassword = () => {
        let currentPassword = password.current.type;
        let passIcon = getLockPassIcon.current;

        if (currentPassword === 'password') {
            password.current.type = 'text';
            console.log(password.current.type);
            if (password.current.type === 'text') {
                passIcon.innerHTML = `
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                    </svg>`
            }
        }
        if (currentPassword === 'text') {
            password.current.type = 'password';
            console.log(password.current.type);
            if (password.current.type === 'password') {
                passIcon.innerHTML = `
                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
                    </svg>`
            }
        }
    }
    
  return (
    <Box className='md:py-10 pt-6 pb-20 flex justify-center items-center px-2'>
        <Flex flexWrap={'wrap'} className="xl:w-[60%] w-[100%] md:p-5 p-3 bg-white rounded-xl ">
            <Flex flexDirection={'column'} gap={4} alignItems={'start'} width={{xl:'300px', base: '100%'}} mx={{md: '', base: 'auto'}} height={{xl:'465px', md: '250px'}} rounded={{md:'30px', base: '15px'}} pos={'relative'} bgGradient='linear(pink.600, gray.800)' p={3}>
                <Box className="img absolute bottom-0 xl:w-full w-[250px] right-0">
                    <img src="/side_banner1.png" alt="" className='max-w-[100%]' />
                </Box>
                <Box className="mt-5 z-10">
                    <Heading color={'white'} fontWeight={500} fontSize={25} fontFamily={''} textAlign={'start'}>Shop What You Desire On ADEXIFY</Heading>
                    <Text textAlign={'start'} color={'white'} mt={5} fontWeight={500}>We are here to save your time and money</Text>
                </Box>
                <Box>
                    <Button className='' bg={'white'} color={'black'}>Signup And Start Shopping Now</Button>
                </Box>
            </Flex>
            <Box className="flex-1 xl:mt-0 mt-5 xl:px-5">
                <Box className="flex items-center justify-center mx-auto bg-pink-200 py-1 px-2 rounded-2xl w-[140px]">
                    <MdOutlineShoppingCart className='md:text-xl animate text-pink-600'/>
                    <h1 className='md:text-xl font-medium uppercase'>Ade<span className="text-pink-600">X</span>ify</h1>
                </Box>
                <Box className="mt-5">
                    <Heading textAlign={'center'} fontWeight={500} fontSize={{md:30, base: 25}}>Welcome Back</Heading>
                    <p className='text-center text-gray-400 text-sm mt-1'>Please login to your account</p>
                </Box>
                <form className='flex w-full flex-col gap-5 mt-5' onSubmit={handleSubmit}>
                    <Flex alignItems={'center'} gap={3}>
                        <Box className="relative w-full">
                            <input onChange={handleChange} id='firstname' ref={firstname} type="text" className='placeholder:text-gray-400 outline-none border-none font-medium bg-slate-200 w-full p-3 rounded-lg pl-10' placeholder='First Name' />
                            <Box className="absolute top-4 left-3">
                                <FaUser/>
                            </Box>                    
                        </Box>
                        <Box className="relative w-full">
                            <input onChange={handleChange} id='lastname' ref={lastname} type="text" className='placeholder:text-gray-400 outline-none border-none font-medium bg-slate-200 w-full p-3 rounded-lg pl-10' placeholder='Last Name' />
                            <Box className="absolute top-4 left-3">
                                <FaUser/>
                            </Box>                    
                        </Box>
                    </Flex>
                    <Flex alignItems={'center'} gap={3}>
                        <Box className="relative w-full">
                            <input onChange={handleChange} id='email' type="email" className='placeholder:text-gray-400 outline-none border-none font-medium bg-slate-200 w-full p-3 rounded-lg pl-10' placeholder='Example@gmail.com' />
                            <Box className="absolute top-4 left-3">
                                <MdEmail/>
                            </Box>                    
                        </Box>
                        <Box className="relative w-full">
                            <input onChange={handleChange} id='phone' ref={phone} type="Number" className='placeholder:text-gray-400 outline-none border-none font-medium bg-slate-200 w-full p-3 rounded-lg pl-10' placeholder='Phone' />
                            <Box className="absolute top-4 left-3">
                                <FaPhoneAlt/>
                            </Box>                    
                        </Box>
                    </Flex>
                    <Box className="relative">
                        <input onChange={handleChange} id='address' type="text" ref={homeAddress} className='placeholder:text-gray-400 outline-none border-none font-medium bg-slate-200 w-full p-3 rounded-lg pl-10' placeholder='Home Address' />
                        <Box className="absolute top-4 left-3">
                            <LiaAddressCard/>
                        </Box>                    
                        {/* <Box className="absolute top-4 right-3">
                            <button type='button' className='outline-none border-none' onClick={handlePassword} ref={getLockPassIcon}><MdRemoveRedEye/></button>
                        </Box>                     */}
                    </Box>
                    <Box className="relative">
                        <input onChange={handleChange} id='password' type="password" ref={password} className='placeholder:text-gray-400 outline-none border-none font-medium bg-slate-200 w-full p-3 rounded-lg pl-10' placeholder='Enter Your Password' />
                        <Box className="absolute top-4 left-3">
                            <RiLockPasswordFill/>
                        </Box>                    
                        <Box className="absolute top-4 right-3">
                            <button type='button' className='outline-none border-none' onClick={handlePassword} ref={getLockPassIcon}><MdRemoveRedEye/></button>
                        </Box>                    
                    </Box>
                    <Box className="mx-auto w-full font-light">
                        <button type='submit' onClick={addToast} className='bg-slate-800 text-white w-full py-3 rounded-lg font-medium uppercase'>
                            {
                                loading ? (
                                    <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
                                        <Spinner color='pink.600' />
                                        <Text color={'pink.600'}>Loading...</Text>
                                    </Flex>
                                ) : 'Sign Up'
                            }
                        </button>
                    </Box>
                    <Box className="flex justify-center items-center">
                        <p className="w-[100px] p-[1px] bg-pink-300"></p>
                        <p className="text-gray-400 text-sm">Or Login With</p>
                        <p className="w-[100px] p-[1px] bg-pink-300"></p>
                    </Box>
                    <Box className="mx-auto w-full">
                        <button className='bg-slate-800 text-white w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium'><FaGoogle className='text-red-500'/> Google</button>
                    </Box>
                    <Box className="flex justify-start items-center gap-1 text-gray-400">
                        <p className='text-sm'>Already have an account?</p>
                        <Link to={'/signin'} className='text-red-500 font-medium'>Signin</Link>
                    </Box>
                </form>
            </Box>
        </Flex>
    </Box>
  )
}