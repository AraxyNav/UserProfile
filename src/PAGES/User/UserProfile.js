import React from 'react'
import { useParams } from 'react-router-dom'
import UserSidebar from '../../COMPONENTS/UserProfile/UserSidebar'
import AccountSettings from '../../COMPONENTS/UserProfile/AccountSettings'
import './UserProfile.css'
import YourOrders from '../../COMPONENTS/UserProfile/YourOrders'
import UserAddress from '../../COMPONENTS/UserProfile/UserAddress'


const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
  return (
    <div className='userprofile'>
        {/* <Navbar/>
        <SingleBanner 
        heading={`My Profile`}
        bannerimage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
        />
        {/* UserProfile , showing {activepage}
         */} 

         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings/>}
              
              {activepage === 'yourorders' && <YourOrders/>}
              {activepage === 'address' && <UserAddress/>}
              
            </div>
         </div>
        {/* <Footer1/>
        <Footer2/> */}
        </div>
  )
}

export default UserProfile