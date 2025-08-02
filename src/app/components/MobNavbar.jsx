import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag, HiShoppingBag } from 'react-icons/hi';
import {IoMenuOutline} from 'react-icons/io5';
import {AiOutlineHome, AiOutlineAppstore} from 'react-icons/ai';


const MobNavbar = () => {
  return (
    <div>
    <div>
        <IoMenuOutline/>
        <div>
            <HiShoppingBag/>
            <div>0</div>
        </div>
    </div>

    <AiOutlineHome/>
    <div>
        <FiHeart/>
        <div>0</div>
    </div>
    <AiOutlineAppstore/>
    </div>
  )
}

export default MobNavbar