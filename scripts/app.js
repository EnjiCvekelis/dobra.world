document.addEventListener('DOMContentLoaded', function(){ 
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("scrolled");
      }

    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("scrolled");
      } else {
        document.getElementById("header").classList.remove("scrolled");  
    }
    }   

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    if(document.querySelectorAll('.scroll-top')) {
        let btn = document.querySelectorAll('.scroll-top');
        btn[0].addEventListener('click', () => {
            scrollToTop();
        })
    }

    const blocks = document.querySelectorAll(".fading")

    const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("fadeIn")
        }
    })
    }

    const options = {}

    const myObserver = new IntersectionObserver(callback, options)

    blocks.forEach(item => {
        myObserver.observe(item)
      })

    let menuToggle = document.querySelector('.close-menu');
    menuToggle.addEventListener('click', () => {
        document.getElementById('headerMobile').classList.toggle('active');
    }) 

    const removeActive = () => {
        const tabs = document.querySelectorAll(".tablinks")
        const pages = document.querySelectorAll(".tabcontent")
        tabs.forEach(item => {
            item.classList.remove('active')
        })
        pages.forEach(item => {
            item.classList.remove('active')
        })
    }

      const tabs = document.querySelectorAll(".tablinks")
      tabs.forEach(item => {
        item.addEventListener('click', () => {
            removeActive()
            let id = item.getAttribute('data-href')
            document.getElementById(id).classList.add('active')
            item.classList.add('active')
        })
      })

});

