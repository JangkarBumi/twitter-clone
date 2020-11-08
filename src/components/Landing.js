import React from 'react';
import { BsChat, BsSearch } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';

export default function Landing() {
  return (
    <div>
      <div className="flex h-90v">
        <div className="bg-blue-500 w-3/6 flex items-center justify-center">
          <ul className="text-left text-white text-xl font-semibold">
            <li className="flex">
              <BsSearch />
              <p>Follow your interests.</p>
            </li>

            <li className="flex">
              <FiUsers />
              <p>Hear what people are talking about.</p>
            </li>

            <li className="flex">
              <BsChat />
              <p> Join the conversation.</p>
            </li>
          </ul>
        </div>
        <div className="bg-gray-900 w-3/6 flex items-center justify-center text-left text-white">
          <div>
            <FaTwitter />
            <h2>See what's happening in the world right now</h2>
            <p>Join Twitter today.</p>
            <button className="block w-full bg-blue-600 rounded-xl p-1">
              Sign Up
            </button>
            <button className="block w-full border-2 rounded-xl p1 border-blue-600 mt-6">
              Log in
            </button>
          </div>
        </div>
      </div>
      <footer className="h-10v bg-gray-900">
        <ul className="flex justify-around  text-white">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Help Center</a>
          </li>
          <li>
            <a href="/">Terms of Service</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
