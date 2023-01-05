// ==UserScript==
// @name         Lolz-mouse
// @version      1.0
// @description  Добавляет мышь на сообщения
// @author       Fottes
// @match        https://zelenka.guru/threads/*
// @match        https://zelenka.guru/forums/*/create-thread*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zelenka.guru
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    var delay = 50 // ms

	unsafeWindow.on = true;
	unsafeWindow.createComplaint = function(username, link, userlink) {
		window.open(`https://zelenka.guru/forums/801/create-thread?${username}&${link}&${userlink}`, '_blank');
	}
	function setMouse() {
		for (var i = 0; i < $(".message").length; i++) {
			if ($('.message')[i].id.search("post") != -1 && typeof $(`.message > div.messageInfo > div.messageContent > div > div.publicControls > a.item.control._ratButton`)[i] == "undefined") {
				var __name = $('.message > div.messageInfo > div.userText > span > a > span')[i].innerText
				var __link = $('.message > div.messageInfo > div.userText > a')[i].href
				var __userlink = $('.message > div.messageInfo > div.userText > span > a')[i].href
				$(".message > div.messageInfo > div.messageContent > div > div.publicControls")[i].innerHTML += `<a class="item control _ratButton "> <li onclick="createComplaint('${__name}', '${__link}', '${__userlink}')"><img src="https://github.com/THE-Fottes/lolz-mouse/blob/main/mouse.png?raw=true" height="40"></li></a>`
			}
		}

		for (var i = 0; i < $(".comment").length; i++) {
			if ($('.comment')[i].id.search("post") != -1 && typeof $(`.comment > div.commentInfo > div.commentControls > div > a.item.control._ratButton`)[i] == "undefined" && typeof $(`.comment > div.commentInfo > div.commentControls > div > a.LikeLink.item.control.like`)[i] != "undefined") {
				var __name = $('.comment > div.commentInfo > div.commentContent > a')[i].innerText
				var __link = $('.comment > div.commentInfo > div.commentControls > div > a.LikeLink.item.control.like')[i].href.replace("like", "")
				var __userlink = $('.comment > div.commentInfo > div.commentContent > a')[i].href
				$(".comment > div.commentInfo > div.commentControls > div")[i].innerHTML += `<a class="item control _ratButton "> <li onclick="createComplaint('${__name}', '${__link}', '${__userlink}')"><img src="https://github.com/THE-Fottes/lolz-mouse/blob/main/mouse.png?raw=true" height="40"></li></a>`
			}
		}
	}

	interval = setInterval(function() {
		if (location.href.search("threads") != -1) {
        	setMouse()
        } else {
        	clearInterval(interval);
        }
	}, delay)

if (location.href.search("/801/create-thread") != -1) {
	var __uname = location.href.replace("https://zelenka.guru/forums/801/create-thread?", "").split("&")[0]
	var __ulink = location.href.replace("https://zelenka.guru/forums/801/create-thread?", "").split("&")[2]
	var __uthre = location.href.replace("https://zelenka.guru/forums/801/create-thread?", "").split("&")[1]
	while (typeof $("#ctrl_title_thread_create")[0] != "undefined" && $("#ctrl_title_thread_create")[0].value == ""){
		if (__uname != "https://zelenka.guru/forums/801/create-thread") {
			$("#ctrl_title_thread_create")[0].value = `Жалоба на пользователя ${__uname}`
			var ComplaintText1 = `<p>1. Никнейм нарушителя и ссылка на профиль: ${__uname} ${__ulink}</p>`
			var ComplaintText2 = `<p>2. Краткое описание жалобы:</p>`
			var ComplaintText3 = `<p>3. Доказательства: ${__uthre}</p>`
			$("#ThreadCreate > fieldset:nth-child(2) > dl.ctrlUnit.fullWidth > dd > div > div.fr-box.messageText.baseHtml.LolzteamEditor.fr-ltr.fr-basic.fr-top > div.fr-wrapper > div")[0].innerHTML += ComplaintText1
			$("#ThreadCreate > fieldset:nth-child(2) > dl.ctrlUnit.fullWidth > dd > div > div.fr-box.messageText.baseHtml.LolzteamEditor.fr-ltr.fr-basic.fr-top > div.fr-wrapper > div")[0].innerHTML += ComplaintText2
			$("#ThreadCreate > fieldset:nth-child(2) > dl.ctrlUnit.fullWidth > dd > div > div.fr-box.messageText.baseHtml.LolzteamEditor.fr-ltr.fr-basic.fr-top > div.fr-wrapper > div")[0].innerHTML += ComplaintText3
		} else {
			$("#ctrl_title_thread_create")[0].value = `Жалоба на пользователя `
			var ComplaintText1 = `<p>1. Никнейм нарушителя и ссылка на профиль: </p>`
			var ComplaintText2 = `<p>2. Краткое описание жалобы:</p>`
			var ComplaintText3 = `<p>3. Доказательства: </p>`
			$("#ThreadCreate > fieldset:nth-child(2) > dl.ctrlUnit.fullWidth > dd > div > div.fr-box.messageText.baseHtml.LolzteamEditor.fr-ltr.fr-basic.fr-top > div.fr-wrapper > div")[0].innerHTML += ComplaintText1
			$("#ThreadCreate > fieldset:nth-child(2) > dl.ctrlUnit.fullWidth > dd > div > div.fr-box.messageText.baseHtml.LolzteamEditor.fr-ltr.fr-basic.fr-top > div.fr-wrapper > div")[0].innerHTML += ComplaintText2
			$("#ThreadCreate > fieldset:nth-child(2) > dl.ctrlUnit.fullWidth > dd > div > div.fr-box.messageText.baseHtml.LolzteamEditor.fr-ltr.fr-basic.fr-top > div.fr-wrapper > div")[0].innerHTML += ComplaintText3
		}
	}
}
})();
