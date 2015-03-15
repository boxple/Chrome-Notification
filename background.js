
// Notification
function messageReceived(message) {
	var notification = new Notification('Push', {
		icon: '/images/icon_cool.png',
		body: "Push",
	});

	notification.onclick = function () {
	}
}

function init(){
	console.log("Started");
	chrome.storage.local.get("registered", function(result) {

		if (result["registered"])
			return;

		chrome.app.window.create(
			"Register.html",
			{  width: 500,
				 height: 400,
				 frame: 'chrome'
			},
			function(appWin) {}
		);
	});

	//chrome.storage.local.set({registered: true});	
}

// Init
chrome.runtime.onStartup.addListener(init);
chrome.runtime.onInstalled.addListener(init);

// GCM Listener
chrome.gcm.onMessage.addListener(messageReceived);