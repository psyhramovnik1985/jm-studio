let buttonCall = document.getElementById('callMe');
let buttonCallMeClick = document.getElementById('callMeClick');

let formRequestCall = document.getElementById('formRequestCall');
let inputPhoneNumber = document.getElementById('inputPhoneNumber');

let alertMessage = document.getElementsByClassName('form-control-alert-message');
let buttonCloseForm = document.getElementById('closeForm');

function noShowFormCall (event) {
	if ((event.target.id === 'formRequestCall') 
	        || (event.target.id === 'callMe')
	 		|| (event.target.id === 'callMeClick') 
			|| (event.target.id === 'inputPhoneNumber')) {
		buttonCallMeClick.style.display = "none";
		formRequestCall.style.display = "block";
// 		inputPhoneNumber.value = "";
	} else {
		formRequestCall.style.display = "none";
		buttonCallMeClick.style.display = "block";
	}
};

function submitOrNot () {
	if (inputPhoneNumber.value.length === 0) {
		buttonCall.removeAttribute("type"); 
		buttonCall.setAttribute('type', 'reset');
		alertMessage[0].style.display = 'block';
		setTimeout( ()=> {
			buttonCall.removeAttribute("type"); 
			buttonCall.setAttribute('type', 'submit');
			alertMessage[0].style.display = 'none';
		}, 3000);
	} else {
		if (inputPhoneNumber.value.length < 9) {
			buttonCall.removeAttribute("type"); 
			buttonCall.setAttribute('type', 'reset');
			alertMessage[1].style.display = 'block';
			setTimeout( ()=> {
				buttonCall.removeAttribute("type"); 
				buttonCall.setAttribute('type', 'submit');
				alertMessage[1].style.display = 'none';
			}, 3000);
		}
	}
};

buttonCall.addEventListener('click', submitOrNot);
document.addEventListener('click', noShowFormCall);
buttonCloseForm.addEventListener('click', (event)=> {event.preventDefault()});
buttonCloseForm.addEventListener('click', noShowFormCall);