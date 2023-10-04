window.addEventListener('DOMContentLoaded', ()=>{
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabParent = document.querySelector('.tabheader__items');

    function hideTabContent (){
        tabsContent.forEach( item => {
            item.classList.remove('show', 'fade');
            item.classList.add('hide');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent (i = 0){
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');

        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', event => {
        const target = event.target;
        if(target.classList.contains("tabheader__item")){
            hideTabContent();
            tabs.forEach((item,i)=>{
                if(target == item){
                    showTabContent(i);  
                }
            })
        }
    });




    //Timer

    const deadline = '2024-01-11';
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date());
        let days = Math.floor(t/(1000*60*60*24));
        let hours = Math.floor((t/(1000*60*60))%24);
        let minutes = Math.floor((t/(1000*60))%60);
        let seconds = Math.floor(t/1000%60);

        return{
            total: t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function addZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`
        }
        return num;
    }

    function setClock(selector,endtime){
        const timer = document.querySelector(selector);
        let days = timer.querySelector('#days');
        let hours = timer.querySelector('#hours');
        let minutes = timer.querySelector('#minutes');
        let seconds = timer.querySelector('#seconds');
        let timeInterval = setInterval(updateClock,1000);
        updateClock()

        function updateClock(){
            const t = getTimeRemaining(endtime);

            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);
            
            if(t.total <= 0 ){
                clearInterval(timeInterval)
            }
        }

    }
    setClock('.timer', deadline)


    //Modal
    let openModal = document.querySelectorAll('[data-modal]');
    let modal = document.querySelector('.modal');
    let close = modal.querySelector('[data-close]');

    function closeModal(){
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = 'visible';
    }

    openModal.forEach((item)=>{
        item.addEventListener('click', () => {
            modal.classList.remove('hide');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        })
    });

    close.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            closeModal()
        }
    })

    document.addEventListener('keydown', (e)=>{
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    })
});