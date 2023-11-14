import React, { useState } from 'react'
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
function Signin({ setIsLoggedIn, setIsSigninDialogOpen, openSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const handleLogin = () => {
    if (email === 'test' && password === '1') {
      setIsLoggedIn(true);
      setIsSigninDialogOpen(false);
    } else {
      alert('Login Failed: The username or password is incorrect.');
    }
  }
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  return (
    <Card className='flex flex-col w-[497px] h-[512px] items-center bg-white rounded-2xl px-[58px]'>
        <div className="font-semibold text-lg  flex flex-col justify-self-center w-fit mt-[45px] ">
          <img src="/logo1.png" alt="DreamHome" className='w-[54px] h-[25px]' />
          <span className='capitalize text-transparent bg-gradient-to-t from-[#7A5F61] to-[#C28653] bg-clip-text'>Dream Home</span>
        </div>
        <p className='text-[#000] text-sm font-normal mt-[10px]'>Vui lòng nhập địa chỉ email và mật khẩu của bạn!</p>
        <div className='mt-[30px] w-[382px] h-[331px] shrink-0 flex flex-col gap-2'>
            <Typography className='self-stretch text-sm font-normal text-[#111]'>
                Email
            </Typography>
            <Input 
            type='email' 
            label='Nhập email của bạn'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-[380px] h-[47px] p-[15px] rounded-lg border-[0.5px] border-solid border-[#d6d6d6] bg-[#f6f8fa] flex items-center '>
            </Input>
            <Typography className='self-stretch text-sm font-normal text-[#111]'>
                Mật khẩu
            </Typography>
            <Input 
            type='password' 
            label='Nhập mật khẩu của bạn'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-[380px] h-[47px] p-[15px] rounded-lg border-[0.5px] border-solid border-[#d6d6d6] bg-[#f6f8fa] flex items-center '>
            </Input>
            <div className='flex justify-between items-center'>
                <Checkbox 
                className='w-5 h-5' 
                label='Ghi nhớ tài khoản'
                checked={rememberMe} 
                onChange={handleRememberMe}></Checkbox>
                <Typography 
                as="a" 
                href="#"  
                className='text-sm font-normal text-[#806056]'>Quên mật khẩu</Typography>
            </div>
                <Button
                onClick={handleLogin} 
                className='mt-[22px] inline-flex px-5 py-[15px] justify-center items-center gap-[10px] bg-[#806056]'>Đăng nhập</Button>
                <div className='flex justify-center gap-[5px] mt-3'>
                <Typography className='text-sm font-normal text-[#1c1d21]'>Bạn chưa có tài khoản?</Typography>
                <Typography 
                onClick={openSignup}
                as="a" 
                className='cursor-pointer text-sm font-normal text-[#806056]'>Tạo tài khoản mới </Typography>
                </div>

        </div>
    </Card>
  )
}

export default Signin