const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML ='<i class=" fi-rr-menu-burger"></i>';
    }else{
        topNav.classList.add('showNav');
        showBtn.innerHTML ='<i class="  fi-rr-cross-small"></i>'; 
    }
});