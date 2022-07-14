import React from 'react'

export default function About({mode}) {
   document.title = "Know about us | TextDo";
  return (
    <div className='container'>
      <div className="accordion" id="accordionExample">

        <div className={`accordion-item my-2 bg-${mode}`}>
          <h2 className="accordion-header " id="headingOne">
            <button className={`accordion-button bg-${mode} text-primary`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is TextDo ?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corporis atque ullam quia laudantium tempora quos modi reiciendis voluptate voluptatibus hic asperiores eos nulla iure, sapiente est fugit. Animi, earum.
            </div>
          </div>
        
        </div>
        
        <div className={`accordion-item my-2 bg-${mode}`}>
          <h2 className="accordion-header" id="headingTwo">
            <button className={`accordion-button bg-${mode} text-primary`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Who can use TextDo ?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maiores eius nostrum adipisci consectetur harum voluptate? Ipsa debitis laudantium ab itaque iusto numquam nisi magnam consectetur libero voluptas, repellendus odio.
            </div>
          </div>
        
        </div>

        <div className={`accordion-item my-2 bg-${mode}`}>
          <h2 className="accordion-header" id="headingThree">
            <button className={`accordion-button bg-${mode} text-primary`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
              Is TextDo paid or free ? 
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio magni, qui incidunt consectetur quibusdam aperiam laborum quaerat consequuntur possimus suscipit? Ab obcaecati accusantium, temporibus quo culpa facilis minus qui maiores.
            </div>
          </div>
        
        </div>

        <div className={`accordion-item my-2 bg-${mode}`}>
          <h2 className="accordion-header" id="headingOne">
            <button className={`accordion-button bg-${mode} text-primary`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              Who is the founder of TextDo ?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nesciunt numquam, fugiat natus animi corporis atque at perferendis sit cumque excepturi sint sequi error, dolorum ipsa aperiam ullam, ut pariatur!
            </div>
          </div>
        
        </div>

      </div>
    </div>
  )
}
