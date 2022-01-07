import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-indigo-50 h-screen">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    {/* <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    /> */}
                    <svg className="w-48 mx-auto" viewBox="0 0 113 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75.0851 31.5854C70.5286 31.5854 67.0135 30.6052 64.5398 28.645C62.0664 26.6847 60.8296 23.8347 60.8296 20.0948C60.8296 17.8028 61.3992 15.7821 62.5382 14.0328C63.6774 12.2836 65.3211 10.9264 67.4691 9.96134C69.6498 8.99623 72.2211 8.51367 75.1827 8.51367C77.4284 8.51367 79.3163 8.70972 80.8459 9.1018C82.4081 9.49384 83.7913 10.097 84.9956 10.9114C85.3536 11.1225 85.5326 11.3939 85.5326 11.7257C85.5326 11.9669 85.4024 12.2836 85.1419 12.6756L83.1403 15.8875C82.9125 16.31 82.6359 16.5211 82.3105 16.5211C82.1151 16.5211 81.8058 16.4004 81.3829 16.1591C80.504 15.6465 79.6743 15.2693 78.893 15.0281C78.1444 14.7868 77.2006 14.6662 76.0616 14.6662C74.4341 14.6662 73.1161 15.1487 72.1071 16.1139C71.1306 17.0788 70.6424 18.4058 70.6424 20.0948C70.6424 21.814 71.1468 23.1409 72.1558 24.0757C73.1649 24.9805 74.5481 25.4329 76.3055 25.4329C77.3469 25.4329 78.291 25.2973 79.1373 25.0257C79.9835 24.7545 80.8459 24.3775 81.7247 23.8949C82.1803 23.6535 82.5057 23.5329 82.7012 23.5329C82.9939 23.5329 83.2543 23.744 83.4821 24.1664L85.679 27.6497C85.8418 27.9512 85.9232 28.1926 85.9232 28.3734C85.9232 28.645 85.7277 28.9012 85.3374 29.1426C83.9704 29.957 82.4731 30.56 80.8459 30.9522C79.251 31.3744 77.3308 31.5854 75.0851 31.5854Z" fill="#F6C74E" />
                        <path d="M2.53867 30.7625C1.59487 30.7625 0.927649 30.5814 0.537011 30.2197C0.179005 29.8577 0 29.2846 0 28.5005V2.3072C0 1.52305 0.19516 0.950019 0.585799 0.588125C0.976437 0.196052 1.62718 0 2.53867 0H14.4995C19.056 0 22.4083 0.889718 24.5567 2.6691C26.7047 4.4485 27.7787 7.10251 27.7787 10.6311C27.7787 14.1296 26.7047 16.7685 24.5567 18.5479C22.4409 20.2973 19.0887 21.1719 14.4995 21.1719H9.86164V28.5005C9.86164 29.2846 9.66648 29.8577 9.27584 30.2197C8.8852 30.5814 8.21797 30.7625 7.27417 30.7625H2.53867ZM13.7186 14.6122C15.053 14.6122 16.0783 14.2804 16.7943 13.6169C17.5426 12.9534 17.9171 11.9581 17.9171 10.6311C17.9171 9.27396 17.5426 8.26364 16.7943 7.60013C16.0783 6.93664 15.053 6.60487 13.7186 6.60487H9.86164V14.6122H13.7186Z" fill="#F6C74E" />
                        <path d="M39.308 31.4409C36.2488 31.4409 33.7916 30.5361 31.9363 28.7268C30.1136 26.8869 29.2025 24.3084 29.2025 20.9907C29.2025 18.4574 29.8209 16.2406 31.0574 14.3407C32.3269 12.4407 34.1008 10.9779 36.379 9.95253C38.6899 8.89694 41.3423 8.36914 44.3366 8.36914C46.8103 8.36914 48.991 8.62549 50.8786 9.1382C52.7988 9.62075 54.5562 10.3295 56.1511 11.2644V29.36C56.1511 29.9331 56.0374 30.31 55.8092 30.4909C55.5815 30.672 55.1259 30.7624 54.4425 30.7624H49.4627C49.1047 30.7624 48.8281 30.7172 48.633 30.6265C48.4375 30.5061 48.275 30.325 48.1448 30.0837L47.5099 28.7268C46.5661 29.6615 45.4271 30.3403 44.0926 30.7624C42.7908 31.2148 41.196 31.4409 39.308 31.4409ZM42.9698 25.2884C44.239 25.2884 45.2316 25.0018 45.9476 24.4291C46.6636 23.856 47.0216 23.0416 47.0216 21.9859V14.9288C46.4035 14.6574 45.6222 14.5216 44.6784 14.5216C42.9534 14.5216 41.5701 15.0796 40.5287 16.1954C39.5197 17.3113 39.0153 18.8796 39.0153 20.9003C39.0153 23.8258 40.3333 25.2884 42.9698 25.2884Z" fill="#F6C74E" />
                        <ellipse cx="100.397" cy="20.2568" rx="11.7582" ry="11.7431" fill="#F6C74E" />
                        <ellipse cx="100.413" cy="20.2566" rx="5.01272" ry="5.28441" fill="white" />
                    </svg>
                    <h2 className="mt-6 text-center text-3xl font-medium text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <Link to="/auth/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            create your account
                        </Link>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <div>
                                    <a
                                        href="#"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <span className="sr-only">Sign in with Facebook</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0"
                                            y="0"
                                            enableBackground="new 0 0 512 512"
                                            version="1.1"
                                            viewBox="0 0 512 512"
                                            xmlSpace="preserve"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <g>
                                                <path
                                                    d="M256 0C114.5 0 0 114.5 0 256s114.5 256 256 256 256-114.5 256-256S397.5 0 256 0zm147.1 310.9c-7.4 25.1-20.5 48.4-40 66.1-18.6 16.8-41 27.9-65.2 33.5-27 6.5-54.9 6.5-81-.9-20.5-5.6-41-15.8-57.7-28.9-17.7-14-32.6-32.6-42.8-53.1-15.8-31.7-20.5-68-14-102.4 2.8-14 7.4-27 14-40 18.6-36.3 51.2-65.2 90.3-79.1 34.4-12.1 72.6-11.2 107.1.9 18.6 6.5 36.3 17.7 51.2 31.7-4.7 5.6-10.2 10.2-15.8 15.8l-28.9 28.9c-9.3-9.3-21.4-15.8-34.4-20.5-14.9-4.7-31.7-5.6-46.5-1.9-17.7 3.7-34.4 13-47.5 26.1-10.2 10.2-18.6 23.3-23.3 37.2-6.5 19.5-6.5 41.9 0 61.4s19.5 37.2 36.3 48.4c10.2 7.4 22.3 13 35.4 14.9 12.1 2.8 25.1 1.9 38.2 0 12.1-1.9 24.2-6.5 35.4-14 16.8-11.2 28.9-28.9 31.7-49.3H259v-61.4h148.9c4.5 29.8 2.6 58.7-4.8 86.6z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </a>
                                </div>

                                <div>
                                    <a
                                        href="#"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <span className="sr-only">Sign in with GitHub</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;