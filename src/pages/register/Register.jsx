import React from 'react'
import { Link } from 'react-router-dom';
import bgImg from '../../assets/loginBg.jpeg';

const Register = () => {

    // const navigate = useNavigate();
    
  return (
    <div className='register h-[100vh] w-[100vw] bg-indigo-400 flex items-center justify-center'>
        <div className='card flex w-1/2 rounded-md bg-white min-h-[500px] overflow-hidden'>

             <div className='left w-1/2 flex flex-col gap-10 justify-center p-[50px]'>
                <h1 className='text-[#555] text-4xl font-semibold'>Register</h1>
                <form className='flex flex-col gap-3'>
                    <input type='text' placeholder='Name' className=' py-5 px-2 border-b-2 border-b-gray-400 '  />
                    <input type='text' placeholder='Username' className=' py-5 px-2 border-b-2 border-b-gray-400 '  />
                    <input type='email' placeholder='Email' className=' py-5 px-2 border-b-2 border-b-gray-400 '  />
                    <input type='password ' placeholder='Password' className=' py-5 px-2 border-b-2 border-b-gray-400' />
                    <button className=' mt-4 w-1/2 py-2 text-xl font-semibold border-none bg-[#938eef] text-white'>Register</button>
                </form>
            </div>

            <div className="right flex-1 from-violet-500 to-violet-700 relative z-50">
                <div className='absolute z-20 flex flex-col gap-6 text-white p-[50px]'>
                    <h1 className=' text-7xl leading-[70px] font-bold'>Be Social.</h1>
                    <p className=' text-base'>
                        there you have it, a quick two-minute. Stay tuned to our channel for more in-depth tutorials on React.
                    </p>
                    <span className=' text-sm'>Do you have an account?</span>

                    <Link to='/login' >
                        <button className=' w-1/2 py-2 text-xl font-semibold border-none bg-white text-violet-800'> Login</button>
                    </Link>
                </div>
                
                <img src={bgImg} alt='bg' className='absolute z-10 top-0 h-full self-center'/>
               
            </div>

           
        </div>
    </div>
  )
}

export default Register
