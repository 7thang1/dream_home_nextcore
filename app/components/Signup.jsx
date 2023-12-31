import React, { useState, useEffect } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
  import { IoIosClose } from "react-icons/io";
import { checkuser, register } from './API';
function Signup({onSignInClick, setIsSignupDialogOpen }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true); 
 
  const handleSignup = async () => {
    if(email === '' || name === '' || password === '' || confirmPassword === ''){
      alert('Vui lòng điền đầy đủ thông tin');
    }
    else if (password !== confirmPassword){
      alert('Mật khẩu không khớp');
    }
    else {
      try {
        const data = await register(email, name, password);
        if (data.message === 'User created'){
          alert('Đăng ký thành công');
          setIsSignupDialogOpen(false);

        }
      }
      catch (err) {
        // if (err.response.data.message === 'Email already exists'){
        //   alert('Email đã tồn tại');
        // }
        // else {
        //   alert('Đã có lỗi xảy ra');
        // }
        console.log(err);
      }
    }
  };
  const handleClose = () => {
    setIsSignupDialogOpen(false);
  }
  return (
    <Card className=' relative flex flex-col w-[497px] h-[641px] items-center bg-white rounded-2xl '>
    <button onClick={handleClose} className='w-[20px] h-[20px] mt-[19px] mr-[19px]  items-center flex justify-center self-end  absolute '><IoIosClose size={20} /></button>
    <div className="font-semibold text-lg  flex flex-col justify-self-center w-fit mt-[45px] ">
      <img src="/logo1.png" alt="DreamHome" className='w-[54px] h-[25px]' />
      <span className='capitalize text-transparent bg-gradient-to-t from-[#7A5F61] to-[#C28653] bg-clip-text'>Dream Home</span>
    </div>
    <p className='text-[#000] text-sm font-normal mt-[10px]'>Vui lòng điền thông tin bên dưới</p>
    <div className='mt-[30px] shrink-0 flex flex-col gap-2 w-[380px]  '>
        <Typography className='self-stretch text-sm font-normal text-[#111]'>
            Họ và tên
        </Typography>
        <Input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text' 
        label='Nhập họ và tên của bạn' 
        className='mb-2 w-[380px] h-[47px] p-[15px] rounded-lg border-[0.5px] border-solid border-[#d6d6d6] bg-[#f6f8fa] flex items-center '>
        </Input>
        <Typography className='self-stretch text-sm font-normal text-[#111]'>
            Email
        </Typography>
        <Input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email' 
        label='Nhập email của bạn' 
        className='mb-2 w-[380px] h-[47px] p-[15px] rounded-lg border-[0.5px] border-solid border-[#d6d6d6] bg-[#f6f8fa] flex items-center '>
        </Input>
        <Typography className='self-stretch text-sm font-normal text-[#111]'>
            Mật khẩu
        </Typography>
        <Input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password' 
        label='Nhập mật khẩu của bạn' 
        className='mb-2 w-[380px] h-[47px] p-[15px] rounded-lg border-[0.5px] border-solid border-[#d6d6d6] bg-[#f6f8fa] flex items-center '>
        </Input>
        <Typography className='self-stretch text-sm font-normal text-[#111]'>
            Xác nhận mật khẩu
        </Typography>
        <Input 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type='password' 
        label='Nhập lại mật khẩu của bạn' 
        className='w-[380px] h-[47px] p-[15px] rounded-lg border-[0.5px] border-solid border-[#d6d6d6] bg-[#f6f8fa] flex items-center '>
        </Input>
            <Button
            onClick={handleSignup}
            className='mt-[22px] inline-flex px-5 py-[15px] justify-center items-center gap-[10px] bg-[#806056]'>Tạo tài khoản</Button>
            <div className='flex justify-center gap-[5px] mt-3'>
            <Typography className='text-sm font-normal text-[#1c1d21]'>Bạn đã có tài khoản?</Typography>
            <Typography 
            as="a" 
            onClick={onSignInClick}
            className='cursor-pointer text-sm font-normal text-[#806056]'>Đăng nhập</Typography>
            </div>

    </div>
</Card>
  )
}

export default Signup;