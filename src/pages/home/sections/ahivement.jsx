import React from 'react'

export default function Achivement() {

const achivement = [
    {
        id:"01",
        title:"250",
        text:"clients"
    },
    {
        id:"02",
        title:"500",
        text:"Projects"
    },
     {
        id:"03",
        title:"400",
        text:"Good Feedback"
    },
     {
        id:"04",
        title:"420",
        text:"Satisfied"
    }
]

  return (
    <div>
        <h2>Achivements</h2>
        <div className="achivement-container">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="achievement">
                    <img src="https://via.placeholder.com/100" alt="Achievement 1" />
                    <h3>Achievement 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="achievement">
                    <img src="https://via.placeholder.com/100" alt="Achievement 2" />
                    <h3>Achievement 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="achievement">
                    <h4>Last we Achived</h4>
                    <div className="achive-number grid grid-cols-1 md:grid-cols-2 gap-y-3">
                        {
                            achivement.map((items, i)=>{
                                return(
                                     <div key={i} className="single-achievement">
                                        <h5>{items.title}</h5>
                                        <p>{items.text}</p>
                                     </div>
                                )
                            })
                        }
                    </div>
                </div> 
                
                <div className="achievement">
                    <img src="https://via.placeholder.com/100" alt="Achievement 3" />
                    <h3>Achievement 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
