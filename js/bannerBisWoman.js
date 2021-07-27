var bannerMan = document.getElementById('bannerMan');

var counterPromotion = document.getElementsByClassName('counterPromotion')[0];

var buttonEngVersion = document.getElementsByClassName('engVersion')[0];
var buttonRusVersion = document.getElementsByClassName('rusVersion')[0];

var digitTimer = counterPromotion.getElementsByTagName('span');
var textTimer = counterPromotion.getElementsByTagName('p');

var todayDate;
var promotionEndData = new Date(2021, 10, 19); // помни что месяц -1
var daysPastMonth = 32 - new Date(promotionEndData.getFullYear(), promotionEndData.getMonth() - 1, 32).getDate(); //сколько дней в месяце предшествующем месяцу    

var globalAnimation;
var promotionDateText;

var monthText;
var dayText;
var hourText;
var minutesText;
var secondText;

var promotionDateObj = {
    minMonth: null,
    minDay: null,
    minHour: null,
    minMinutes: null,
    minSeconds: null 
}; 


updateInfoPromotionTime();

function updateInfoPromotionTime() {  
    globalAnimation = requestAnimationFrame(updateInfoPromotionTime);
    funcTimeLeft (); 

    if (buttonEngVersion) {    
    
        if ((promotionDateObj.minMonth === 0) || (promotionDateObj.minMonth > 4)) {
            monthText = 'месяцев';   
        } else {
            if (promotionDateObj.minMonth === 1) {
                monthText = 'месяц';
            } else {monthText = 'месяца'}
        };

        if ((promotionDateObj.minDay % 10 === 0) || ((promotionDateObj.minDay % 10 > 4) && (promotionDateObj.minDay % 10 <= 9)) || ((promotionDateObj.minDay > 4) && (promotionDateObj.minDay <= 19))) {
            dayText = 'дней';    
        } else {
            if (promotionDateObj.minDay % 10 === 1) {
                dayText = 'день';
            } else {dayText = 'дня'}
        };

        if ((promotionDateObj.minHour % 10 === 0) || ((promotionDateObj.minHour % 10 > 4) && (promotionDateObj.minHour % 10 <= 9)) || ((promotionDateObj.minHour > 4) && (promotionDateObj.minHour <= 19))) {
            hourText = 'часов';    
        } else {
            if (promotionDateObj.minHour % 10 === 1) {
                hourText = 'час';
            } else {hourText = 'часа'}
        };

        if ((promotionDateObj.minMinutes % 10 === 0) || ((promotionDateObj.minMinutes % 10 > 4) && (promotionDateObj.minMinutes % 10 <= 9)) || ((promotionDateObj.minMinutes > 4) && (promotionDateObj.minMinutes <= 19))) {
                minutesText = 'минут';    
            } else {
                if (promotionDateObj.minMinutes % 10 === 1) {
                    minutesText = 'минута';
                } else {minutesText = 'минуты'}
            };

        if ((promotionDateObj.minSeconds % 10 === 0) || ((promotionDateObj.minSeconds % 10 > 4) && (promotionDateObj.minSeconds % 10 <= 9)) || ((promotionDateObj.minSeconds > 4) && (promotionDateObj.minSeconds <= 19))) {
            secondText = 'секунд';    
        } else {
            if (promotionDateObj.minSeconds % 10 === 1) {
                secondText = 'секунда';
            } else {secondText = 'секунды'}
        }; 
        
        if ((promotionEndData - todayDate) <= 0) {
            textTimer[0].innerText = 'Извините, акция закончилась!';
            cancelAnimationFrame(globalAnimation);        
        };
    } else {
        if ((promotionDateObj.minMonth === 0) || (promotionDateObj.minMonth > 1)) {
            monthText = 'months';   
        } else {
            monthText = 'month';
        };

        if (promotionDateObj.minDay !== 1) {
            dayText = 'days';    
        } else {
            dayText = 'day';
        };

        if (promotionDateObj.minHour !== 1) {
            hourText = 'hours';    
        } else {
            hourText = 'hour';
        };

        if (promotionDateObj.minMinutes !== 1) {
                minutesText = 'minutes';    
            } else {
                minutesText = 'minute';
            };

        if (promotionDateObj.minSeconds !== 1) {
            secondText = 'seconds';    
        } else {
            secondText = 'second';
        }; 
        
        if ((promotionEndData - todayDate) <= 0) {
            textTimer[0].innerText = 'Sorry, the promotion is over!';
            cancelAnimationFrame(globalAnimation);        
        };
    };                          
    
    

    textTimer[2].innerText = monthText;
    textTimer[4].innerText = dayText;
    textTimer[6].innerText = hourText;
    textTimer[8].innerText = minutesText;
    textTimer[10].innerText = secondText;

    digitTimer[0].innerText = Math.floor(promotionDateObj.minMonth/10);
    digitTimer[1].innerText = promotionDateObj.minMonth%10;
    digitTimer[2].innerText = Math.floor(promotionDateObj.minDay/10);
    digitTimer[3].innerText = promotionDateObj.minDay%10;
    digitTimer[4].innerText = Math.floor(promotionDateObj.minHour/10);
    digitTimer[5].innerText = promotionDateObj.minHour%10;
    digitTimer[6].innerText = Math.floor(promotionDateObj.minMinutes/10);
    digitTimer[7].innerText = promotionDateObj.minMinutes%10;
    digitTimer[8].innerText = Math.floor(promotionDateObj.minSeconds/10);
    digitTimer[9].innerText = promotionDateObj.minSeconds%10;
};

function funcTimeLeft () {  
    todayDate = new Date ();        
    
    promotionDateObj.minHour = 23 - todayDate.getHours();
    promotionDateObj.minMinutes = 59 - todayDate.getMinutes();
    promotionDateObj.minSeconds = 60 - todayDate.getSeconds();

    if (((todayDate - promotionEndData) < 0)) {           

        if ((promotionEndData.getDate() >= todayDate.getDate())) {
            promotionDateObj.minMonth = promotionEndData.getMonth() - todayDate.getMonth();
            promotionDateObj.minDay = promotionEndData.getDate() - todayDate.getDate() -1;
            
        } else {
            promotionDateObj.minMonth = promotionEndData.getMonth() - todayDate.getMonth() - 1;
            promotionDateObj.minDay = daysPastMonth + promotionEndData.getDate() - todayDate.getDate() - 1;
        };
    } else {
        for (var key in promotionDateObj) {
            promotionDateObj[key] = 0;
        }
    };    
};
