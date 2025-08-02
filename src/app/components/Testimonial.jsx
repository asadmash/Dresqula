import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div>
        <div>
            <h2>Testimonials</h2>
            <div>
                <div>
                    <div>
                        <Image src='/user.jpg' width={80} height={80} alt='profile'/>
                        <h2>Elsa Doe</h2>
                        <p>CEO & Founder Invision</p>
                        <Image src="/quotes.svg" width={30} height={30} alt='quotes'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <button>
                            25% DISCOUNT
                        </button>
                        <h2>Summer Collection</h2>
                        <p>Starting @ 20 <strong>shop now</strong></p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Testimonial