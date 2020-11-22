import React, { useState } from 'react';
import { BsChat, BsSearch } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Landing() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <div className="flex h-90v">
        <div className="bg-blue-500 w-3/6 flex items-center justify-center">
          <ul className="text-left text-white text-xl font-semibold">
            <li className="flex">
              <BsSearch className="mr-3 mt-1 text-3xl" />
              <p>Follow your interests.</p>
            </li>

            <li className="flex mt-10">
              <FiUsers className="mr-3 mt-1 text-3xl" />
              <p>Hear what people are talking about.</p>
            </li>

            <li className="flex mt-10">
              <BsChat className="mr-3 mt-1 text-3xl" />
              <p> Join the conversation.</p>
            </li>
          </ul>
        </div>
        <div className="bg-gray-900 w-3/6 flex items-center text-left text-white flex-col">
        
          <div className="mt-12 mx-32">
                     <h1 className="text-blue-500 font-extrabold text-5xl">
          Millie!
          </h1>
            <h2 className="text-3xl font-bold mt-6">
              See what's happening in the world right now
            </h2>
            <p className="mt-12 font-semibold">Join Millie! today.</p>

            <Link to="/signup" className="block w-full bg-blue-600 rounded-xl p-1 py-2 mt-6 font-semibold focus:outline-none text-center">
              Sign Up
            </Link>

            <Link to="/signin" className="block w-full border-2 rounded-xl p-1 py-2 border-blue-600  text-blue-600 mt-6 font-semibold focus:outline-none text-center">
              Log in
            </Link>

          </div>
        </div>
      </div>
      <footer className="h-10v bg-gray-900">
        <ul className="flex justify-around text-white justify-center pt-3">
          <li>
            <a href="/" className="hover:underline text-sm text-gray-500">
              About Us
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline text-sm text-gray-500">
              Help Center
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline text-sm text-gray-500">
              Terms of Service
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
