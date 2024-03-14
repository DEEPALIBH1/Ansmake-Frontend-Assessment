import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendar,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
function App() {
  return (
    <div className='bg-[#111446] pb-9 '>
      <Header />
      <Middle />
      <Login />
    </div>
  );
}

function Header() {
  return (
    <div className='pt-24 pb-20'>
      <div className='flex justify-around flex-wrap'>
        <div className='font flex flex-col gap-10 px-16'>
          <span>
            <div class='text-white text-3xl md:text-5xl'>
              COVID-19 Vaccination
              <br />
              Got Easier With,
            </div>
            <div class='text-[#17c2ec] text-4xl'>Vaccination.ng</div>
          </span>
          <h3 className=' font-bold text-white opacity-70'>
            Vaccination.ng will help you find the nearest
            <br />
            centre for vaccination, in all 36 states in Nigeria.
          </h3>
          <div className='flex gap-4 text-white '>
            <button className=' font-bold border-2 px-5 py-2 rounded-xl border-[#17c2ec]  bg-[#26265e]  hover:bg-[#17c2ec]  ease-in-out duration-150'>
              Get vaccine
            </button>
            <button className='font-bold border-2 px-5 py-2 rounded-xl border-[#17c2ec]  bg-[#26265e] hover:bg-[#17c2ec]  ease-in-out duration-150'>
              Help Centre
            </button>
          </div>
        </div>
        <div className='lg:py-2 image lg:w-96 lg:h-[26rem] w-72 pt-7'>
          <img
            src='/pic.jpg'
            alt='vax'
            className='w-full h-full my-4 rounded-3xl'
          />
        </div>
      </div>
    </div>
  );
}
function Middle() {
  return (
    <div className='flex md:flex-row flex-wrap  md:justify-evenly py-7 my-12 justify-start gap-y-3 flex-col items-start px-9 md:px-2 bg-[#25365aa4] w-50rem mx-6 rounded-xl'>
      <div className=' text-white flex gap-7 justify-center items-center align-baseline'>
        <div className='px-3 py-3 bg-[#3058a9] rounded-lg bg-opacity-40'>
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ color: "#74C0FC" }}
            size='xl'
          />
        </div>
        <span>
          <h5 className='text-[#a7a7a7] font-bold '>Loaction</h5>
          <p>Ikeja Lagos, Nigeria</p>
        </span>
      </div>

      <div className=' text-white flex gap-7 justify-center items-center align-baseline'>
        <div className='px-3 py-3 bg-[#3058a9] rounded-lg bg-opacity-40'>
          <FontAwesomeIcon
            icon={faCalendar}
            size='xl'
            style={{ color: "#17c4ec" }}
          />
        </div>
        <div>
          <h5 className='text-[#a7a7a7] font-bold'>Date</h5>
          <p>29 February, 2022</p>
        </div>
      </div>

      <div className=' text-white flex gap-7 justify-center items-center align-baseline'>
        <div className=' px-3 py-3 bg-[#3058a9] rounded-lg bg-opacity-40'>
          <FontAwesomeIcon
            icon={faShield}
            size='xl'
            style={{ color: "#17c4ec" }}
          />
        </div>
        <span>
          <h5 className='text-[#a7a7a7] font-bold'>Vaccine Type</h5>
          <p>Mordena</p>
        </span>
      </div>

      <button className='font-bold border-2 px-5 py-2 rounded-xl border-[#17c2ec]  bg-[#3c3c84]  hover:bg-[#17c2ec]  ease-in-out duration-150 text-white w-32'>
        Submit
      </button>
    </div>
  );
}

function Login() {
  return (
    <>
      <div className=' rounded-xl bg-[#2c44706c] pb-6 mx-11 flex flex-col gap-7'>
        <div className='flex justify-start items-center align-middle bg-[#2c44709b] w-full py-5 px-2 rounded-xl'>
          <p className='text-white font-semibold text-lg bg px-6'>
            Check your COVID-19 result on our Database
          </p>
        </div>
        <div className='flex gap-7 bg-transparent px-6 justify-evenly flex-wrap'>
          <input
            type='text'
            placeholder='Location'
            className=' font-semibold  text-white bg-transparent border-2 border-[#86878d7f] px-5 rounded-xl py-2 outline-[#17c2ec]'
          />
          <input
            type='text'
            placeholder='NIK Number'
            className=' font-semibold  text-white bg-transparent border-2 border-[#86878d7f] px-5 rounded-xl py-2 outline-[#17c2ec]'
          />
          <input
            type='submit'
            value='Check'
            className='font-bold border-2 px-5 py-2 rounded-xl border-[#17c2ec]  bg-[#3c3c84]  hover:bg-[#17c2ec]  ease-in-out duration-150 text-white w-32'
          />
        </div>
      </div>
    </>
  );
}
<style></style>;
export default App;
