function loginValidat() {
  if (login.val() != "") {
    let acId = 0;
    while (true) {
      if (localStorage.getItem(`login${acId}`)) {
        if (localStorage.getItem(`login${acId}`) != login.val()) {
          acId++;
        } else {
          login.addClass("notValid");
          login.removeClass("valid");
          infoTextLogin.text("Login is busy");
          infoTextLogin.removeClass("validText");
          infoTextLogin.addClass("notValidText");
          return (logInValid = false);
        }
      } else {
        login.addClass("valid");
        login.removeClass("notValid");
        infoTextLogin.text("Login is free");
        infoTextLogin.removeClass("notValidText");
        infoTextLogin.addClass("validText");
        return (logInValid = true);
      }
    }
  } else {
    login.addClass("notValid");
    login.removeClass("valid");
    infoTextLogin.text("Enter login");
    infoTextLogin.removeClass("validText");
    infoTextLogin.addClass("notValidText");
    logInValid = false;
  }
}

function passwordValidat() {
  if (password.val() != "") {
    password.addClass("valid");
    password.removeClass("notValid");
    infoTextPassword.text("Passwords match");
    infoTextPassword.removeClass("notValidText");
    infoTextPassword.addClass("validText");
    passwordValid = true;
  } else {
    password.addClass("notValid");
    password.removeClass("valid");
    infoTextPassword.text("Enter password");
    infoTextPassword.removeClass("validText");
    infoTextPassword.addClass("notValidText");
    passwordValid = false;
  }
}

function repeatPasswordValidat() {
  if (repeatPassword.val() == "") {
    repeatPassword.addClass("notValid");
    repeatPassword.removeClass("valid");
    infoTextRepeatPassword.removeClass("validText");
    infoTextRepeatPassword.addClass("notValidText");
    infoTextRepeatPassword.text("Confirm password");
    repeatPasswordValid = false;
  } else {
    if (password.val() == repeatPassword.val()) {
      repeatPassword.addClass("valid");
      repeatPassword.removeClass("notValid");
      infoTextRepeatPassword.text("Passwords match");
      infoTextRepeatPassword.removeClass("notValidText");
      infoTextRepeatPassword.addClass("validText");
      repeatPasswordValid = true;
    } else {
      repeatPassword.addClass("notValid");
      repeatPassword.removeClass("valid");
      infoTextRepeatPassword.removeClass("validText");
      infoTextRepeatPassword.addClass("notValidText");
      infoTextRepeatPassword.text("Password mismatch");
      repeatPasswordValid = false;
    }
  }
}

function getAccountId() {
  let acId = 0;

  while (true) {
    if (localStorage.getItem(`login${acId}`)) {
      acId++;
    } else {
      return acId;
    }
  }
}

let signUp = $(".signUp")
let form = $(".signUp__form");
let login = $("#login");
let password = $("#password");
let repeatPassword = $("#repeatPassword");
let infoText = $(".infoText");
let infoTextLogin = $(".infoTextLogin");
let infoTextPassword = $(".infoTextPassword");
let infoTextRepeatPassword = $(".infoTextRepeatPassword");
let button = $(".signUp__button");

let logInValid;
let passwordValid;
let repeatPasswordValid;

setInterval(() => {
  infoText.css({
    "padding-left":
      parseInt(login.offset().left) - parseInt(form.offset().left) - 10,
  });

  if (parseInt($(window).height()) - parseInt(form.height()) - parseInt(form.css('padding-top')) - parseInt(form.css('padding-bottom')) > 0) {
    signUp.css({ 'top': (parseInt($(window).height()) - parseInt(form.height()) - parseInt(form.css('padding-top')) - parseInt(form.css('padding-bottom'))) / 2 - 5 })
  }
}, 0);

login.on("input", () => {
  loginValidat();
});

password.on("input", () => {
  passwordValidat();
});

repeatPassword.on("input", () => {
  repeatPasswordValidat();
});

button.on("mouseup", () => {
	if (logInValid && passwordValid && repeatPasswordValid) {
		let accountId = getAccountId();
    	loginValidat();

		localStorage.setItem(`login${accountId}`, `${login.val()}`);
    localStorage.setItem(`password${accountId}`, `${password.val()}`);
    localStorage.setItem(`logo${accountId}`, `img/userLogo.png`);
    localStorage.setItem(`raitingProducts${accountId}`, `[]`);
    localStorage.setItem('activeAcId', `${accountId}`);
    localStorage.setItem('activeAcIdShelfLife', `${Date.now() + 86400000}`);
		location.href = '../index.html';

  	} else {
  	  if (!logInValid) {
  	    loginValidat();
  	  }

  	  if (!passwordValid) {
  	    passwordValidat();
  	  }

  	  if (!repeatPasswordValid) {
  	    repeatPasswordValidat();
  	  }
  	}
});