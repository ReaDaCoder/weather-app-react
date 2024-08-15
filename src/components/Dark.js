  import React from 'react';
  
  function Dark(){

    const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');
    toggle.onClick = function(){
        toggle.classList.toggle('active');
        body.classList.toggle('active');
    }
    return(
        <div className="dark-mode">
            <button id="toggle">Switch Theme</button>
        </div>
    )
  }

  export default Dark