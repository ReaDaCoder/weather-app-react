import React, { useEffect } from 'react';

function Dark() {
  
  let darkmode = localStorage.getItem('darkmode');

  
  const enableDark = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
  };

  const disableDark = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
  };


  useEffect(() => {
    if (darkmode === 'active') enableDark();

    const themeSwitch = document.getElementById('theme-switch');


    themeSwitch.addEventListener('click', () => {
      darkmode = localStorage.getItem('darkmode');
      darkmode !== 'active' ? enableDark() : disableDark();
    });

    return () => {
      themeSwitch.removeEventListener('click', () => {});
    };
  }, [darkmode]);

  return (
    <div className="dark-mode">
      <button className="toggle" id="theme-switch">Switch Theme</button>
    </div>
  );
}

export default Dark;



  /*
  const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');
    
    toggle.onClick = function(){
        toggle.classList.toggle('active');
        body.classList.toggle('active');
    }
  
    
    return(
        <div className="dark-mode">
            <button className="toggle" id="toggle">Switch Theme</button>
        </div>
    )
  
  
  
  
  
  const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');
    
    toggle.onClick = function(){
        toggle.classList.toggle('active');
        body.classList.toggle('active');*/


        /*import React from 'react';
  
  function Dark(){

    let darkmode = localStorage.getItem('darkmode');
    const themeSwitch = document.getElementById('theme-switch');

    const enableDarK = () =>{
      document.body.classList.add('darkmode');
      localStorage.setItem('darkmode', 'active');
    }

    const disableDark = () => {
      document.body.classList.remove('darkmode')
      localStorage.setItem('darkmode', null);
    }

    if(darkmode === "active") enableDark()

      themeSwitch.addEventListener("click", ()=>{
        darkmode !== "active" ? enableDark() :disableDark()
      })

    return(
      <div className="dark-mode">
          <button className="toggle" id="theme-switch">Switch Theme</button>
      </div>
  )

  }

  export default Dark*/