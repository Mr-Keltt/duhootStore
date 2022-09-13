function getAccountId() {
  let acId = 0;
  while (true) {
    if (localStorage.getItem(`login${acId}`)) {
      if (localStorage.getItem(`login${acId}`) != loginLog.val()) {
        acId++;
      } else {
        return acId;
      }
	} else {
		return -1;
	}
  }
}

function loginValidatLog() {
	if (loginLog.val() == "") {
		loginLog.addClass("notValid");
		infoTextLoginLog.text("Enter login");
		loginValidLog = false;
	} else if (accountId == -1) {
		loginLog.addClass("notValid");
		infoTextLoginLog.text("Invalid login");
		loginValidLog = false;
	} else {
		loginValidLog = true;
	}
}

function passwordValidatLog() {
	if (passwordLog.val() == "") {
		passwordLog.addClass("notValid");
		infoTextPasswordLog.text("Enter password");
		passwordValidLog = false;
	} else {
		if (passwordLog.val() != localStorage.getItem(`password${accountId}`)) {
			passwordLog.addClass("notValid");
			infoTextPasswordLog.text("Invalid password");
			passwordValidLog = false;
		} else {
			passwordValidLog = true;
		}
	}
}

let logInLog = $(".logInLog");
let formLog = $(".logInLog__form");
let loginLog = $("#login");
let passwordLog = $("#password");
let infoTextLog = $(".infoText");
let infoTextLoginLog = $(".infoTextLogin");
let infoTextPasswordLog = $(".infoTextPassword")
let buttonLog = $(".logInLog__button");

let accountId;
let loginValidLog;
let passwordValidLog;

setInterval(() => {
	infoTextLog.css({ "padding-left": parseInt(loginLog.offset().left) - parseInt(formLog.offset().left) - 10, });

	if (parseInt($(window).height()) - parseInt(formLog.height()) - parseInt(formLog.css('padding-top')) - parseInt(formLog.css('padding-bottom')) > 0) {
		logInLog.css({ 'top': (parseInt($(window).height()) - parseInt(formLog.height()) - parseInt(formLog.css('padding-top')) - parseInt(formLog.css('padding-bottom'))) / 2 - 5 })
	}
}, 0);

loginLog.on("input", () => {
	loginLog.removeClass("notValid");
	infoTextLoginLog.text("");
})

passwordLog.on("input", () => {
	passwordLog.removeClass("notValid");
	infoTextPasswordLog.text("");
})

buttonLog.on("mouseup", () => {
	accountId = getAccountId();

	loginValidatLog()

	if (loginValidLog) {
		passwordValidatLog()
	}

	if (loginValidLog && passwordValidLog) {
		localStorage.setItem('activeAcId', `${accountId}`);
		localStorage.setItem('activeAcIdShelfLife', `${Date.now() + 86400000}`);
		location.href = '../index.html';
	}
});
