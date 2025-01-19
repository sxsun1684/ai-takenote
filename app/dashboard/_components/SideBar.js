"use client";
import {Progress} from '@/components/ui/progress';
import {Drum, Layers} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import UploadPdfDialog from './UploadPdfDialog';
import {useUser} from '@clerk/nextjs';
import {useQuery} from 'convex/react';
import {api} from '@/convex/_generated/api';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {Button} from "@/components/ui/button";

function SideBar () {
    const {user} = useUser ();
    const path = usePathname ();
    const GetUserInfo = useQuery (api.user.GetUserInfo, {
        userEmail : user?.primaryEmailAddress?.emailAddress
    });
    
    console.log (GetUserInfo);
    
    const fileList = useQuery (api.fileStorage.GetUserFiles, {
        userEmail : user?.primaryEmailAddress?.emailAddress
    });
    console.log (fileList?.length);
    
    return (
        <div className="shadow-md h-screen p-7">
            <Image src={'/logo.png'} alt="logo" width={190} height={140}/>
            
            <div className="mt-10">
                <UploadPdfDialog isMaxFile={(
                    fileList?.length >= 5 && !GetUserInfo.upgrade
                ) ? true : false}>
                    <Button className="w-full">Upload PDF</Button>
                </UploadPdfDialog>
                <Link href={'/dashboard'}>
                    <div className={`flex gap-2 items-center p-3 mt-5
             hover:bg-rose-100 rounded-lg cursor-pointer
             ${path == '/dashboard' && 'bg-rose-200'}
             `}>
                        <Drum/>
                        <h2>Workspace</h2>
                    </div>
                </Link>
                <Link href={'/dashboard/upgrade'}>
                    <div className={`flex gap-2 items-center p-3 mt-1
             hover:bg-rose-100 rounded-lg cursor-pointer
             ${path == '/dashboard/upgrade' && 'bg-rose-200'}
             `}>
                        <Layers/>
                        <h2>Upgrade</h2>
                    </div>
                </Link>
            </div>
            {!GetUserInfo?.upgrade && <div className="absolute bottom-24 w-[80%]">
                <Progress value={(
                    fileList?.length / 5
                ) * 100}/>
                <p className="text-sm mt-1">{fileList?.length} out of 5 Pdf Uploaded</p>
                
                <p className="text-sm text-gray-400 mt-2">Upgrade to Upload more PDFs</p>
            
            </div>}
        </div>
    );
}

export default SideBar;
