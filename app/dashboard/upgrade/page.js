"use client";
import {api} from '@/convex/_generated/api';
import {useUser} from '@clerk/nextjs';
import {PayPalButtons} from '@paypal/react-paypal-js';
import {useMutation} from 'convex/react';
import React from 'react';
import {toast} from 'sonner';

function UpgradePlans () {
    
    const userUpgradePlan = useMutation (api.user.userUpgradePlan);
    const {user} = useUser ();
    const onPaymentSuccess = async () => {
        const result = await userUpgradePlan ({userEmail : user?.primaryEmailAddress?.emailAddress});
        console.log (result);
        toast ('Plan upgraded successfully');
    };
    
    return (
        <div>
            <h2 className="font-medium text-3xl">Plans</h2>
            <p className="text-rose-800">Update your plan to upload multiple PDFs to take notes</p>
            
            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                    
                    
                    <div className="rounded-2xl border border-rose-200 p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-rose-900">
                                Free
                                <span className="sr-only">Plan</span>
                            </h2>
                            
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-rose-900 sm:text-4xl"> 0$ </strong>
                                
                                <span className="text-sm font-medium text-rose-700">/month</span>
                            </p>
                        </div>
                        
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-rose-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                </svg>
                                
                                <span className="text-rose-700"> 5 PDF Upload </span>
                            </li>
                            
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-rose-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                </svg>
                                
                                <span className="text-rose-700"> Unlimted Notes Taking </span>
                            </li>
                            
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-rose-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                </svg>
                                
                                <span className="text-rose-700"> Email support </span>
                            </li>
                            
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-rose-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                </svg>
                                
                                <span className="text-rose-700"> Help center access </span>
                            </li>
                        </ul>
                        
                        <a
                            href="#"
                            className="mt-8 block rounded-full border border-rose-600 bg-white px-12 py-3 text-center text-sm font-medium text-rose-600 hover:ring-1 hover:ring-rose-600 focus:outline-none focus:ring active:text-rose-500"
                        >
                            Current Plan
                        </a>
                    </div>
                    <div className="rounded-2xl border border-rose-200 p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-rose-900">
                                Unlimted
                                <span className="sr-only">Plan</span>
                            </h2>
                            
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-rose-900 sm:text-4xl"> 9.99$ </strong>
                                
                                <span className="text-sm font-medium text-rose-700">/One Time</span>
                            </p>
                        </div>
                        
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-rose-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                </svg>
                                
                                <span className="text-rose-700"> Unlimted PDF Upload </span>
                            </li>
                            
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-rose-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                </svg>
                                
                                <span className="text-rose-700"> Unlimited Notes Taking </span>
                            </li>
                            
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-rose-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                </svg>
                                
                                <span className="text-rose-700"> Email support </span>
                            </li>
                            
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-rose-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                </svg>
                                
                                <span className="text-rose-700"> Help center access </span>
                            </li>
                        </ul>
                        
                        {<a
                            href="#"
                            className="mt-8 block rounded-full border border-rose-600 bg-white px-12 py-3 text-center text-sm font-medium text-rose-600 hover:ring-1 hover:ring-rose-600 focus:outline-none focus:ring active:text-red-500"
                        >
                            Get Started
                        </a>}
                        <div className="mt-5">
                            <PayPalButtons
                                onApprove={() => onPaymentSuccess ()}
                                onCancel={() => console.log ("Payment Cancel")}
                                createOrder={(data, actions) => {
                                    return actions?.order?.create ({
                                        purchase_units : [
                                            {
                                                amount : {
                                                    value : 9.99,
                                                    currency_code : 'USD'
                                                }
                                            }
                                        ]
                                    });
                                }}
                            />
                        
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default UpgradePlans;
