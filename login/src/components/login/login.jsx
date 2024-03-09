import React from 'react'
import './login.css'
import background from '../assetes/udemy.jpg'



const login = () =>{
    return(
        <div className='container'>
            <div className='header'>
                <div className='text'>Signup</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src='' alt='' />
                    <input type='text' />
                    </div>
                    <div className='inputs'>
                <div className='input'>
                    <img src='' alt='' />
                    <input type='email' />
                    </div>
                    </div>
                    <div className='input'>
                    <img src='' alt='' />
                    <input type='text' />
                    </div>
                    </div>
        </div>
    )
}

export default function login() {
  return (
    <div>login</div>
  )
}
