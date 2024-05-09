import React from 'react'
import'./Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import{HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
  <section className="c-wrapper">
    <div id='contact' className="c-container paddings innerWidth flexCenter">
        {/*left side*/}

        <div className="c-left flexColStart">
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to Contact</span>
            <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>
          
          <div className="contactModes flexColStart">

            {/* FIRST ROW*/}
            <div className="row flexStart">
                <div className="mode flexColcenter">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25}/>
                        </div>
                        <div className="detail flexColStart">
                            <span className='primaryText'>Call</span>
                            <span className='secondaryText'>021 123 145 14</span>
                        </div>
                    </div>
                    <div className=" button flexCenter">
                          Call Now
                    </div>
                </div>
                {/*SECOND MODE*/}

                <div className="mode flexColcenter">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="detail flexColStart">
                            <span className='primaryText'>Chat</span>
                            <span className='secondaryText'>021 123 145 14</span>
                        </div>
                    </div>
                    <div className=" button flexCenter">
                          Chat Now
                    </div>
                </div>
            </div>
             
             {/*SECOND ROW */}
             <div className="row flexStart">
                <div className="mode flexColcenter">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="detail flexColStart">
                            <span className='primaryText'> Video Call</span>
                            <span className='secondaryText'>021 123 145 14</span>
                        </div>
                    </div>
                    <div className=" button flexCenter">
                          Video Call Now
                    </div>
                </div>
                {/*4TH mode*/}

                <div className="mode flexColcenter">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25}/>
                        </div>
                        <div className="detail flexColStart">
                            <span className='primaryText'>Message</span>
                            <span className='secondaryText'>021 123 145 14</span>
                        </div>
                    </div>
                    <div className=" button flexCenter">
                          Message Now
                    </div>
                </div>
            </div>

          
          </div>
             
            

        </div>

        {/*right side */}

        <div className="c-right">
          <div className="image-container c-right-image">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
    </div>
  </section>
  )
}

export default Contact
