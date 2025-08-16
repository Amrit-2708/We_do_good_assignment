// /* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import axios from "axios";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Navbar = () => {
  const navigate = useNavigate();
  // const [token, setToken] = useState(localStorage.getItem("user"));
  // const isAdmin = props.isAdmin;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const [ngoId, setNgoId] = useState();
  const [peopleHelped, setPeopleHelped] = useState();
  const [eventsConducted, setEventsConducted] = useState();
  const [fundsUtilized, setFundsUtilized] = useState();
  const [month, setMonth] = useState();
  const isInfoFilled = ngoId && peopleHelped && eventsConducted && fundsUtilized && month;

  function handleDialogOpen() {
    setOpen(true);
  }

  function handleDialogClose() {
    setOpen(false);
  }

  function handleClick()
  {
    navigate('/dashboard');
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/report", { ngoId, peopleHelped, eventsConducted, fundsUtilized, month })
      .then((result) => {
        console.log('ho gya bhai ho gya', result);
        navigate("/success");
      }).catch((error) => {
        console.log(error);
      });


    console.log(ngoId);
    console.log(peopleHelped);
    console.log(fundsUtilized);
    console.log(eventsConducted);
    console.log(month);
  }

  return (
    <nav className="mx-auto max-w-8xl flex items-center justify-between p-6 lg:px-8 font-bold text-gray-100 bg-pink-800">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          We Do Good
        </a>
      </div>

      <div className="flex-col">
        <div className="sm:hidden flex justify-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {!isMenuOpen ? (
              <Bars3Icon className="h-6 w-6" />
            ) : (
              <XMarkIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${isMenuOpen ? "flex flex-col items-center" : "hidden"
            } sm:flex sm:gap-x-6 md:flex md:gap-x-8 lg:flex lg:gap-x-12`}
        >
          <a
            onClick={handleDialogOpen}
            className="text-sm/6 font-semibold py-2 hover:cursor-pointer"
          >
            Submit Report
          </a>
          <a onClick={handleClick} className="text-sm/6 font-semibold py-2 hover:cursor-pointer">
            Admin Dashboard
          </a>
        </div>
      </div>

      {/* Hamburger menu for smaller screens */}
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Submit Monthly Report
                    </DialogTitle>
                    <form className="mt-2">
                      <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-6 bg-gamber-600">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm/6 font-medium text-gray-900"
                            >
                              NGO ID
                            </label>
                            <div className="mt-2">
                              <input
                                id="id"
                                name="id"
                                type="text"
                                required
                                onChange={(e) => {
                                  setNgoId(e.target.value);
                                }}
                                autoComplete="given-name"
                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label
                              htmlFor="people"
                              className="block text-sm/6 font-medium text-gray-900"
                            >
                              No. of People Helped
                            </label>
                            <div className="mt-2">
                              <input
                                id="people_helped"
                                name="people_helped"
                                required
                                type="number"
                                onChange={(e) => {
                                  const value = e.target.value;
                                  if (value <= 0) {
                                    alert("people count cannot be negative");
                                  } else {
                                    setPeopleHelped(value);
                                  }
                                }}
                                autoComplete="people"
                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label
                              // htmlFor="event"
                              className="block text-sm/6 font-medium text-gray-900"
                            >
                              No. of Events Conducted
                            </label>
                            <div className="mt-2">
                              <input
                                id="event_conducted"
                                name="event_conducted"
                                required
                                type="number"
                                onChange={(e) => {
                                  const value = e.target.value;
                                  if (value <= 0) {
                                    alert("event count cannot be negative");
                                  } else {
                                    setEventsConducted(value);
                                  }
                                }}
                                autoComplete="event"
                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-4">
                            <label
                              htmlFor="funds"
                              className="block text-sm/6 font-medium text-gray-900"
                            >
                              No. of Funds Utilized (in ₹)
                            </label>
                            <div className="mt-2">
                              <input
                                id="funds_utilized"
                                name="funds_utilized"
                                required
                                type="number"
                                onChange={(e) => {
                                  const value = e.target.value;
                                  if (value <= 0) {
                                    alert("fund count cannot be negative");
                                  } else {
                                    setFundsUtilized(value);
                                  }
                                }}
                                autoComplete="funds"
                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label
                              // htmlFor="joining-year"
                              className="block text-sm/6 font-medium text-gray-900"
                            >
                              Report for the month
                            </label>
                            <div className="mt-2">
                              <input
                                id="report"
                                name="report"
                                type="month"
                                min="2000-01"
                                max="2025-06"
                                required
                                placeholder="YYYY-MM"
                                onChange={(e) => {
                                  setMonth(e.target.value);
                                }}
                                autoComplete="monthly_report"
                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!isInfoFilled}
                  className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto ${isInfoFilled
                    ? "bg-red-600 cursor-pointer  hover:bg-red-500"
                    : "bg-gray-500 cursor-not-allowed"
                    }`}
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={handleDialogClose}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </nav>
  );
};

export default Navbar;
