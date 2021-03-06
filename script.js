const accordion = document.getElementsByClassName("contentBx")

/* 
window.addEventListener('load', function(){
   accordion[0].classList.toggle("active")
 });
*/

for (i=0; i<accordion.length;i++){    
    accordion[i].addEventListener("click",function(e){      
      this.classList.toggle("active")               
    })                                            
}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})