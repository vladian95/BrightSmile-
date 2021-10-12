const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => 
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);




window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let deadline = '2021-10-14';
    
    const timer = (id, deadline) => {

        const addZero = (num) => {
            if(num <= 9) {
                return '0' + num;
                } else {
                return num;
            };
        };
    
        const getTimeRemaining = (endtime) => {
            const t = Date.parse(endtime) - Date.parse(new Date()),
                  seconds = Math.floor((t/1000) % 60),
                  minutes = Math.floor((t/1000/60) % 60),
                  hours = Math.floor((t/(1000 * 60 * 60)) % 24);
    
            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };      
        };
    
        const setClock = (selector, endtime) => {
                const timer = document.querySelector(selector),
                        hours = timer.querySelector('#hours'),
                        minutes = timer.querySelector('#minutes'),
                        seconds = timer.querySelector('#seconds'),
                        timeInterval = setInterval(updateClock, 1000);
            
            updateClock();
    
            function updateClock() { 
                const t = getTimeRemaining(endtime);
                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);
    
                if(t.total <= 0) {
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
    
                    clearInterval(timeInterval);
                }
            }
        };
    
        setClock(id, deadline);
    };
    
    timer('.container1', deadline);
});