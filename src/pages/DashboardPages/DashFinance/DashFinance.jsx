import React from 'react'
import HeaderCard from '../../../components/common/DashHeaderCard'
import moneyGfx from '../../../assets/Img/dashMoneyImg.svg'
import pieChart from '../../../assets/Img/pieChart2.svg'
import InputTextBoxFinance from '../../../components/DashboardComponents/Finance/InputTextBoxFinance'

export default function DashFinance() {
  return (
    <div>
      <div className='flex items-center gap-4'>
                      <HeaderCard
                  title="Master Your Money with Confidence"
                  description="Learn how to budget, track spending, and build smart saving habits to manage your money wisely each month."
                  image={moneyGfx}
                  gradientColors="from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)]"
                  className=" py-8"
                />
            
                <div className='bg-white flex gap-3 flex-col items-center justify-center p-4 border rounded-xl'>
                  <img src={pieChart} alt="pic chart img" />
                  <p className='text-gray-500'>You’ve completed 1 of 12 months.</p>
                </div>
               </div>
               <InputTextBoxFinance/>
    </div>
  )
}
