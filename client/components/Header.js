'use client'
import Link from 'next/link'
import "./header.css"

export function Header() {
    return (
        <nav className=" border-gray-200 nav  bg-gray-800  bg-gray-50 p-1 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-700 ">
            eco<span className="text-white">Tashkent</span>
          </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">

                        <Link href={`/add`}
                              className="block py-2 px-3 md:p-0 text-white md:hover:text-green-700 rounded md:bg-transparent md:text-white md:dark:text-white-500 md:dark:bg-transparent"
                              aria-current="page"
                        >
                            Qo'shish
                        </Link>
                        <Link href={`/statistics`}
                              className="block py-2 px-3 md:p-0 text-white md:hover:text-green-700 rounded md:bg-transparent md:text-white md:dark:text-white-500 md:dark:bg-transparent"
                              aria-current="page"
                        >
                            Statistika

                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}