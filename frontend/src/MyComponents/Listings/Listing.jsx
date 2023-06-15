import React from 'react'
import "./Listing.css"

const { useState, useEffect } = React;

const Listing = ({elem}) => {



  console.log(elem);

    // const openButton = document.getElementById('update-details');
    // const myDialog = document.getElementById('my-dialog');
    

     
 
    
    // myDialog.addEventListener('click', (event) => {
    //   const dialogDimensions = myDialog.getBoundingClientRect();
        
    //   if (
    //     event.clientX < dialogDimensions.left ||
    //     event.clientX > dialogDimensions.right ||
    //     event.clientY < dialogDimensions.top ||
    //     event.clientY > dialogDimensions.bottom
    //   ) {
    //     //close it
    //     setOpen(-1);
    //   }
    // });

    const closeModal=()=>{
      document.getElementById("modal_listing").style.display="none"
    }
    
  return (
    <>
    <div id='modal_listing' className='modal-body'>
    <dialog id="my-dialog" className="dialog"
   >
	<h3 className="dialog__header"
  
>Title</h3>
  <form className="dialog__form" method="dialog">
    <section>
    

      <div className="dialog__form-field" >
				<label className="dialog__label" >Description:</label>
			<div>some description</div>
					<label className="dialog__label">Requirements:</label>
				<div>
					<ul>
						<li>3 year exp</li>
						<li>communication skills</li>
						<li>8+ cgpa</li>
					</ul>
				</div>
				<label className="dialog__label">Roles:</label>
				<div>
					
				</div>
      </div>
    </section>
    <div className="dialog__form-footer">
      <button className="dialog__button dialog__button_grey btn2" value="cancel" formmethod="dialog" onClick={closeModal}>Cancel</button>
      <button className="dialog__button btn2" id="confirm" value="default"

      >Apply</button>
    </div>
  </form>
</dialog>
     </div>
    </>

  )
}

export default Listing