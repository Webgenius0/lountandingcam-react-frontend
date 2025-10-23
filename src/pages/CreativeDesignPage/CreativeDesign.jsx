import React from 'react'
import Header from '../../components/common/Header'
import HowItWorkCreative from '../../components/CreativeDesignPageComponents/HowItWorkCreative'
import Cta from '../../components/common/Cta'
import LearnDesignSection from '../../components/CreativeDesignPageComponents/LearnDesignSection'

export default function CreativeDesign() {
  return (
    <div>
           <Header
                title="Your Imagination and Bring Ideas to Life"
                subtitle="Beaute Creative Design feature helps teens express their creativity through interactive design tools and inspiring challenges.."
                btnText="Start Editing"
                btnLink="/"
              />
              <HowItWorkCreative/>
              <LearnDesignSection/>
              <Cta/>
    </div>
  )
}
