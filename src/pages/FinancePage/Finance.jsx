import React from 'react'
import Header from '../../components/common/Header'
import HowItWorkFinance from '../../components/FinancePageComponents/HowItWorkFinance'
import Cta from '../../components/common/Cta'
import ReflectFinanceSection from '../../components/FinancePageComponents/ReflectFinanceSection'

export default function Finance() {
  return (
    <div>
        <Header
                title="Smart Money Habits"
                subtitle="Understand budgeting, spending, and saving while tracking your monthly allowance and personal financial growth."
                btnText="Start Writing"
                btnLink="/"
              />
              <HowItWorkFinance/>
              <ReflectFinanceSection/>
              <Cta/>
    </div>
  )
}
