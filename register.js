function registerCallback(registrationId) {
	if (chrome.runtime.lastError) {
		return;
	}

	console.log(registrationId);
	document.getElementById("registrationId").innerHTML = registrationId;

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://cooluck.cooltown.me/manager/registerGCM?registration_id=" + registrationId, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			//var resp = JSON.parse(xhr.responseText);
			//console.log(xhr.responseText);
			chrome.storage.local.set({registered: true});
		}
	};
 	xhr.send();
}

// function sendRegistrationId(callback) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET", "http://cooluck.cooltown.me/manager/registerGCM?registration_id=" + registrationId, true);
// 	xhr.onreadystatechange = function() {
// 		if (xhr.readyState == 4) {
// 			// JSON.parse does not evaluate the attacker's scripts.
// 			var resp = JSON.parse(xhr.responseText);
// 			console.log(resp);
// 		}
// 	}
// 	xhr.send();
// }

window.onload = function(){
	var senderIds = ["894322249344"];
	chrome.gcm.register(senderIds, registerCallback);
}
