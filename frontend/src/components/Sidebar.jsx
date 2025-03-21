import React, { useEffect } from 'react'
import SidebarSkeleton from './skeletons/SidebarSkeleton';
import { useChatStore } from '../store/useChatStore';
export default function Sidebar() {

    const { getUsers, users, selectedUser, setSelectedUser, isUserLoading } = useChatStore();

    const onlineUsers = [];

    useEffect(() => { getUsers() }, [getUsers]);

    if(isUserLoading) return <SidebarSkeleton />



  return (
    <aside className='h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200'>
        <div>
            
        </div>
        
    </aside>
  )
}
