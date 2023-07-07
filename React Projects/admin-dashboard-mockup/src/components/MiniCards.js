import React from 'react';
import Card from './Card';
import {FiMenu} from 'react-icons/fi';

const MiniCards = () => {
  return (
    <div className='h-36 flex flex-row gap-8'>
        <Card>
            <div className='w-full h-full flex flex-col px-6 py-2 gap-2 relative'>
                <h1 className='text-lg font-semibold'>Orders Created</h1>
                <p className='text-xs text-gray-400'>Oct 16 / 21 - Nov 14 / 21</p>
                <h2 className='text-xl text-gray-500'>$134,970</h2>
                <h3 className='text-xs text-gray-400'>$328.451</h3>
                <div className='absolute text-sm bottom-7 rounded-lg right-4 bg-[#e3fa95] py-1 px-2 font-semibold'>+12.98% ↑</div>
            </div>
        </Card>
        <Card>
            <div className='w-full h-full flex flex-col bg-black rounded-3xl px-6 py-2 gap-2 relative'>
                <h1 className='text-lg font-semibold text-white'>Total Sales</h1>
                <p className='text-xs text-gray-400'>Oct 16 / 21 - Nov 14 / 21</p>
                <h2 className='text-xl text-gray-300'>$26334,970</h2>
                <h3 className='text-xs text-gray-400'>$8.451</h3>
                <div className='absolute text-sm bottom-7 rounded-lg right-4 bg-[#fec6f4] py-1 px-2 font-semibold'>+2.98% ↑</div>
            </div>
        </Card>
        <Card>
            <div className='w-full h-full flex flex-col px-6 py-2 gap-2 relative'>
                <h1 className='text-lg font-semibold'>PPC Sales</h1>
                <p className='text-xs text-gray-400'>Oct 16 / 21 - Nov 14 / 21</p>
                <h2 className='text-xl text-gray-500'>$2334,970</h2>
                <h3 className='text-xs text-gray-400'>$728.451</h3>
                <div className='absolute text-sm bottom-7 rounded-lg right-4 bg-[#e3fa95] py-1 px-2 font-semibold'>+8.98% ↑</div>
            </div>
        </Card>
        <Card>
            <div className='w-full h-full flex flex-col px-6 py-2 gap-2 relative'>
                <h1 className='text-lg font-semibold'>Units Sales</h1>
                <p className='text-xs text-gray-400'>Oct 16 / 21 - Nov 14 / 21</p>
                <h2 className='text-xl text-gray-500'>$734,970</h2>
                <h3 className='text-xs text-gray-400'>$178.451</h3>
                <FiMenu className='absolute text-[white] bg-[black] w-10 h-8 p-1 rounded-xl bottom-7 right-4'/>
            </div>
        </Card>
        <Card>
            <div className='w-full h-full flex flex-col px-6 py-2 gap-2 relative'>
                <h1 className='text-lg font-semibold'>Organic Sales</h1>
                <p className='text-xs text-gray-400'>Oct 16 / 21 - Nov 14 / 21</p>
                <h2 className='text-xl text-gray-500'>$934,970</h2>
                <h3 className='text-xs text-gray-400'>$28.451</h3>
                <div className='absolute text-sm bottom-7 rounded-lg right-4 bg-[#e3fa95] py-1 px-2 font-semibold'>+5.98% ↑</div>
            </div>
        </Card>
    </div>
  )
}

export default MiniCards