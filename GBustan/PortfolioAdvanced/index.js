
//template_se664od

//service id    service_sc8baqb


// public key  9TZzHj5C8B7xQXEeR

// 

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_sc8baqb",
        "template_6ol2yko",
        event.target,
        "9TZzHj5C8B7xQXEeR"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on email@email.com"
        );
      });
  }

/*


function contact(event) {
    event.preventDefault();

    
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
   
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log('it worked1')
    }, 1000);
     
}

/*  emailjs
    .sendForm(
        'service_sc8baqb',
        'template_se664od',
        event.target,
        '9TZzHj5C8B7xQXEeR'
    ).then(() => {
        throw new error("error");
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "The email service is temporarily unavailable. Please contact me directly at gbustan29@gmail.com"
    );
  })
 */

 

  let isModalOpen = false
  let contrastToggle = false
  const scaleFactor = 1/20

  function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i =0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0
      const boolInt = isOdd ? -1 : 1; //if its odd is negative if not it is not odd then it is positive
      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
  }

  
  function toggleContrast() {   //when clicking the dard mode option 
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark--theme"
    }

    else {
      document.body.classList.remove("dark--theme");
        }
  }

  function toggleModal() {       //togle modal 
    
    //is the modal is open return 
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }

    isModalOpen = true;

  //when toggled open modal
  document.body.classList += " modal--open";
  }


  