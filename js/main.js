const emailBtn = document.querySelectorAll('.alertBtn')

emailBtn.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        if (btn.tagName == "BUTTON") {
            e.preventDefault();

            Swal.fire({
                title: 'Awesome!',
                text: 'Thank you for clicking our super secret button! 😎',
                icon: 'success',
                confirmButtonText: 'Cool'
              }) 
        }
        Swal.fire({
            title: 'Awesome!',
            text: 'Thank you for clicking our super secret button! 😎',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    });
})