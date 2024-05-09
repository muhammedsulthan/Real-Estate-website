import React, { useState } from 'react'
import{
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
}from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../accordion'
const Value = () => {
  return (
    <section className="v-wrapper">
      <div id='value' className="v-container paddings innerWidth flexCenter">
        
        {/*Left side*/ }
        
        <div className='v-left'>
        <div className="image-container">
          <img src="./value.png" alt="" />
        </div>
        </div>

         {/*Right side*/}

          <div className="v-right flexColStart">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value We Give to You</span>
            <span className='secondaryText'>We always ready to help by providijng the best services for you.We beleive a good blace to live can make your life better</span>
  
            <Accordion allowMultipleExpanded={false} preExpanded={[0]} className='accordion'>
             {
               data.map((item,i)=>{
                return(
               <AccordionItem className={`accordionItem $ {className}`} key={i} uuid={i}>
                    <AccordionItemHeading>

                      <AccordionItemButton className='flexCenter accordionButton'>
                  
                        <div className='icon flexCenter'>
                            {item.icon}
                        </div>
                        <span className="primaryText">
                          {item.heading}
                        </span>
                        <div className="icon flexCenter">
                          <MdOutlineArrowDropDown size={20}/>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                     <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>

               </AccordionItem>
                )
               })
             }
            </Accordion>
          </div>

      </div>
    </section>
  )
}

export default Value
