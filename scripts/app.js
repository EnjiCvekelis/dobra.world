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

    // function isElementVisible(el) {
    //     var rect     = el.getBoundingClientRect(),
    //         vWidth   = window.innerWidth || document.documentElement.clientWidth,
    //         vHeight  = window.innerHeight || document.documentElement.clientHeight,
    //         efp      = function (x, y) { return document.elementFromPoint(x, y) };     
    
    //     // Return false if it's not in the viewport
    //     if (rect.right < 0 || rect.bottom < 0 
    //             || rect.left > vWidth || rect.top > vHeight)
    //         return false;
    
    //     // Return true if any of its four corners are visible
    //     return (
    //           el.contains(efp(rect.left,  rect.top))
    //       ||  el.contains(efp(rect.right, rect.top))
    //       ||  el.contains(efp(rect.right, rect.bottom))
    //       ||  el.contains(efp(rect.left,  rect.bottom))
    //     );
    // }
    
    // let hand = document.getElementById("hand");
    // let feed = document.getElementById("concept");
    // // let rect = hand.getBoundingClientRect();
    // let rect1 = feed.getBoundingClientRect();
    // window.addEventListener("scroll", function() {
    //     // let max = rect.top - 90;
    //     let min = rect1.top + 90;
    //     let aligner = min +300;
    //     let test = isElementVisible(feed);
    //     console.log(test)
    //     if(test) {
    //         let rotation = aligner/window.pageYOffset*100-100;
    //         hand.style.transform = "rotate("+rotation+"deg)";
    //     }
    // });
});

