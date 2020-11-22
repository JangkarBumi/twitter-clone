import React,{Fragment, useState} from 'react'
import {Link} from 'react-router-dom'

const Signin = () => {
 const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // login(email, password);
    console.log(email,password);
  };

  return (
 <div className="flex h-screen">
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center mx-12">
        <Link to="/" className="self-center">
          <h1 className="text-blue-500 font-extrabold text-3xl  w-full sm:w-64">
          Millie!
          </h1>
        </Link>
        <h1 className="text-2xl font-bold self-center w-full sm:w-64 ">
          Sign in to Millie!
        </h1>
        <form onSubmit={(e) => onSubmit(e)} className="w-full sm:w-64">
          <div className="mt-6">
            <h2 className="font-bold text-base">Email</h2>
            <input
             className="bg-gray-200 rounded-md py-2 px-2  w-full focus:outline-none"
              type="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="mt-4">
            <h2 className="font-bold text-base">Password</h2>
            <input
              className="bg-gray-200 rounded-md py-2 px-2  w-full focus:outline-none"
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>

          <input
            type="submit"
            className="focus:outline-none bg-blue-500 text-white mt-6 font-semibold text-lg py-2 px-12 rounded-lg w-full"
            value="Sign in"
          />
        </form>
        <p className="mt-6">
          Dont have an account?
          <Link to="/signup">
            <span className="text-blue"> Sign Up</span>
          </Link>
        </p>
      </div>
 <div
        className="w-full lg:w-2/3 hidden  bg-cover bg-blue-500 lg:flex lg:flex-col lg:justify-center lg:items-center"

      >
        <img className="w-4/6 rounded-lg lg:mb-24" src="https://image.freepik.com/free-vector/happy-people-avatars_52683-34515.jpg" alt=""/>
        <div
          className="text-white bg-black opacity-75 py-2 px-2 rounded-lg w-4/6"
        >
          <h1 className="text-3xl font-extrabold text-center">Connect with your friends!</h1>
        </div>
      </div>
    </div>
  )
}

export default Signin
