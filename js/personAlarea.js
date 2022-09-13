function cssControl() {
  let windowWidth = parseInt($(window).width());
  let windowHeight = parseInt($(window).height());
  let personAlareaContainerHeight = parseInt(personAlareaContainer.height()) + parseInt(personAlareaContainer.css('padding-top')) + parseInt(personAlareaContainer.css('padding-bottom'))

  if (windowHeight > personAlareaContainerHeight) {
    personAlareaContainer.css({ "top": (windowHeight - personAlareaContainerHeight) / 2 });
  } else {
    personAlareaContainer.css({ "top": 0 });
  }

  if (windowWidth > 768) {
    contant.height('343px');
    loginСhang.height(contant.height());
    passwordChang.height(contant.height());
    deleteAccount.height(contant.height());
    loginСhang.css({ "margin-top": 0 });
    passwordChang.css({ "margin-top": 0 });
    deleteAccount.css({ "margin-top": 0 });
  } else if (windowWidth > 540) {
    contant.height(logoImg.height() + personalInfo.height() + 90);
    loginСhang.height(contant.height() + 90);
    passwordChang.height(contant.height() + 90);
    deleteAccount.height(contant.height() + 90);
    loginСhang.css({ "margin-top": -contant.height() });
    passwordChang.css({ "margin-top": -contant.height() });
    deleteAccount.css({ "margin-top": -contant.height() });
  } else if (windowWidth > 360) {
    contant.height(logoImg.height() + personalInfo.height() + 70);
    loginСhang.height(contant.height() + 70);
    passwordChang.height(contant.height() + 70);
    deleteAccount.height(contant.height() + 70);
    loginСhang.css({ "margin-top": -contant.height() });
    passwordChang.css({ "margin-top": -contant.height() });
    deleteAccount.css({ "margin-top": -contant.height() });
  } else {
    contant.height(logoImg.height() + personalInfo.height() + 10);
    loginСhang.height(contant.height() + 10);
    passwordChang.height(contant.height() + 10);
    deleteAccount.height(contant.height() + 10);
    loginСhang.css({ "margin-top": -contant.height() -30});
    passwordChang.css({ "margin-top": -contant.height() -30});
    deleteAccount.css({ "margin-top": -contant.height() -30});
  }
  
  personAlareaContainer.height(contant.height() + 10);
}

function loginControl() {
  let windowWidth = parseInt($(window).width());
  let activeAcId = localStorage.getItem(`activeAcId`);

  let acLogo = localStorage.getItem(`logo${activeAcId}`);
  let acLogin = localStorage.getItem(`login${activeAcId}`);
  let acPassword = localStorage.getItem(`password${activeAcId}`);

  let loginCountSumbol;
  let passwodCountSumbol;

  if (windowWidth > 950) {

    loginCountSumbol = 20;
    passwodCountSumbol = 20;

  } else if (windowWidth > 870) {

    loginCountSumbol = 15;
    passwodCountSumbol = 15;

  } else if (windowWidth > 800) {

    loginCountSumbol = 10;
    passwodCountSumbol = 10;

  } else if (windowWidth > 768) {

    loginCountSumbol = 7;
    passwodCountSumbol = 7;

  } else if (windowWidth > 540) {

    loginCountSumbol = 15;
    passwodCountSumbol = 14;

  } else if (windowWidth > 450) {

    loginCountSumbol = 15;
    passwodCountSumbol = 20;

  } else if (windowWidth > 360) {

    loginCountSumbol = 10;
    passwodCountSumbol = 14;

  } else if (windowWidth > 0) {

    loginCountSumbol = 6;
    passwodCountSumbol = 10;

  }
  
  let loginLength = 0;
  let loginLine = "";
  let passwodLineLength = 0;
  let passwodLine = "";

  logoImg.attr("src", acLogo);

  if (acLogin.length > loginCountSumbol) {
    loginLength = loginCountSumbol + 1;
  } else {
    loginLength = acLogin.length;
  }

  for (let i = 0; i < loginLength; i++) {
    if (i < loginCountSumbol) {
      loginLine += acLogin[i];
    } else {
      loginLine += "...";
    }
  }

  pesronalLogin.text(`${loginLine}`);

  if (acPassword.length > passwodCountSumbol) {
    passwodLineLength = passwodCountSumbol;
  } else {
    passwodLineLength = acPassword.length;
  }

  for (let i = 1; i <= passwodLineLength; i++) {
    passwodLine += '<div class="circle"></div>';
  }

  pesronalPassword.html(`${passwodLine}`);
}

function passwordChangHide() {
  passwordChang.hide();

  passwordChangRepeatNewPasswordInput.removeClass("valid");
  passwordChangRepeatNewPasswordInput.removeClass("notValid");
  passwordChangRepeatNewPasswordInputInfo.text("");
  passwordChangRepeatNewPasswordInputInfo.removeClass("validText");
  passwordChangRepeatNewPasswordInputInfo.removeClass("notValidText");

  passwordChangRepeatNewPasswordInput.removeClass("valid");
  passwordChangRepeatNewPasswordInput.removeClass("notValid");
  passwordChangRepeatNewPasswordInputInfo.text("");
  passwordChangRepeatNewPasswordInputInfo.removeClass("validText");
  passwordChangRepeatNewPasswordInputInfo.removeClass("notValidText");

  passwordChangOldPasswordInput.removeClass("notValid");
  passwordChangOldPasswordInput.removeClass("valid");
  passwordChangOldPasswordInputInfo.text("Wrong password");
  passwordChangOldPasswordInputInfo.removeClass("notValidText");
  passwordChangOldPasswordInputInfo.removeClass("validText");
}

function readFile(input) {
  let file = input.files[0];

  if (file.type == "image/png" || file.type == "image/jpeg") {
    let src = URL.createObjectURL(file);

    logoChangLogoInputInfo.text("");
    logoChangLogoImg.attr("src", src);
  } else {
    logoChangLogoInputInfo.text("Select a picture");
  }
}

setInterval(() => {
  loginControl();
  cssControl()
}, 0);


let personAlareaContainer = $('.personAlareaContainer');
let contant = $(".contant");
let popUpClose = $(".popUp__close");
let logoContainer = $(".logo");
let personalInfo = $(".personalInfo");
let logoImg = $(".logo__img");
let pesronalLogin = $(".personalInfo__login");
let personalInfoLoginButton = $(".personalInfo__loginButton");
let pesronalPassword = $(".personalInfo__password");
let personalInfoPasswordButton = $(".personalInfo__passwordButton");
let removeAc = $(".removeAc");

let loginСhang = $(".loginСhang");
let loginСhangLoginInput = $(".loginСhang__loginInput");
let loginСhangLoginInputInfo = $(".loginСhang__loginInputInfo");
let loginСhangPasswordInput = $(".loginСhang__passwordInput");
let loginСhangPasswordInputInfo = $(".loginСhang__passwordInputInfo");
let loginСhangButtonY = $(".loginСhang__buttonY");
let loginСhangButtonC = $(".loginСhang__buttonC");

let passwordChang = $(".passwordChang");
let passwordChangNewPasswordInput = $(".passwordChang__newPasswordInput");
let passwordChangNewPasswordInputInfo = $(
  ".passwordChang__newPasswordInputInfo"
);
let passwordChangOldPasswordInput = $(".passwordChang__oldPasswordInput");
let passwordChangOldPasswordInputInfo = $(
  ".passwordChang__oldPasswordInputInfo"
);
let passwordChangRepeatNewPasswordInput = $(
  ".passwordChang__repeatNewPasswordInput"
);
let passwordChangRepeatNewPasswordInputInfo = $(
  ".passwordChang__repeatNewPasswordInputInfo"
);
let passwordChangButtonY = $(".passwordChang__buttonY");
let passwordChangButtonC = $(".passwordChang__buttonC");

let deleteAccount = $(".deleteAccount");
let deleteAccountPasswordInput = $(".deleteAccount__passwordInput");
let deleteAccountPasswordInputInfo = $(".deleteAccount__passwordInputInfo");
let deleteAccountButtonY = $(".deleteAccount__buttonY");
let deleteAccountButtonC = $(".deleteAccount__buttonC");

personalInfoLoginButton.on("click", () => {
  loginСhang.css({ display: "flex" });
});

loginСhangLoginInput.on("input", () => {
  loginСhangLoginInput.removeClass("notValid");
  loginСhangLoginInputInfo.text("");
});

loginСhangPasswordInput.on("input", () => {
  loginСhangPasswordInput.removeClass("notValid");
  loginСhangPasswordInputInfo.text("");
});

loginСhangButtonY.on("click", () => {
  let activeAcId = localStorage.getItem(`activeAcId`);

  if (loginСhangLoginInput.val() == "") {
    loginСhangLoginInput.addClass("notValid");
    loginСhangLoginInputInfo.text("Enter new login");
    return;
  }

  if (loginСhangPasswordInput.val() == "") {
    loginСhangPasswordInput.addClass("notValid");
    loginСhangPasswordInputInfo.text("Enter password");
    return;
  } else if (
    loginСhangPasswordInput.val() !=
    localStorage.getItem(`password${activeAcId}`)
  ) {
    loginСhangPasswordInput.addClass("notValid");
    loginСhangPasswordInputInfo.text("Wrong password");
    return;
  }

  localStorage.setItem(`login${activeAcId}`, `${loginСhangLoginInput.val()}`);
  loginСhangLoginInput.val("");
  loginСhangPasswordInput.val("");
  loginСhang.hide();
});

loginСhangButtonC.on("click", () => {
  loginСhang.hide();
  loginСhangLoginInput.removeClass("notValid");
  loginСhangLoginInputInfo.text("");
  loginСhangPasswordInput.removeClass("notValid");
  loginСhangPasswordInputInfo.text("");
  loginСhangLoginInput.val("");
  loginСhangPasswordInput.val("");
  loginСhang.hide();
});

personalInfoPasswordButton.on("click", () => {
  passwordChang.css("display", "flex");
});

passwordChangNewPasswordInput.on("input", () => {
  passwordChangNewPasswordInput.removeClass("notValid");
  passwordChangNewPasswordInputInfo.text("");
  passwordChangRepeatNewPasswordInput.removeClass("valid");
  passwordChangRepeatNewPasswordInput.removeClass("notValid");
  passwordChangRepeatNewPasswordInputInfo.text("");
  passwordChangRepeatNewPasswordInputInfo.removeClass("validText");
  passwordChangRepeatNewPasswordInputInfo.removeClass("notValidText");
});

passwordChangRepeatNewPasswordInput.on("input", () => {
  if (passwordChangRepeatNewPasswordInput.val() == "") {
    if (passwordChangNewPasswordInput.val() == "") {
      passwordChangRepeatNewPasswordInput.removeClass("valid");
      passwordChangRepeatNewPasswordInput.removeClass("notValid");
      passwordChangRepeatNewPasswordInputInfo.text("");
      passwordChangRepeatNewPasswordInputInfo.removeClass("validText");
      passwordChangRepeatNewPasswordInputInfo.removeClass("notValidText");
    } else {
      passwordChangRepeatNewPasswordInput.addClass("notValid");
      passwordChangRepeatNewPasswordInput.removeClass("valid");
      passwordChangRepeatNewPasswordInputInfo.text("Repeat new password");
      passwordChangRepeatNewPasswordInputInfo.addClass("notValidText");
      passwordChangRepeatNewPasswordInputInfo.removeClass("validText");
    }
    return;
  } else if (
    passwordChangRepeatNewPasswordInput.val() !=
    passwordChangNewPasswordInput.val()
  ) {
    passwordChangRepeatNewPasswordInput.addClass("notValid");
    passwordChangRepeatNewPasswordInput.removeClass("valid");
    passwordChangRepeatNewPasswordInputInfo.text("Password mismatch");
    passwordChangRepeatNewPasswordInputInfo.addClass("notValidText");
    passwordChangRepeatNewPasswordInputInfo.removeClass("validText");
    return;
  } else {
    passwordChangRepeatNewPasswordInput.addClass("valid");
    passwordChangRepeatNewPasswordInput.removeClass("notValid");
    passwordChangRepeatNewPasswordInputInfo.text("Passwords match");
    passwordChangRepeatNewPasswordInputInfo.removeClass("notValidText");
    passwordChangRepeatNewPasswordInputInfo.addClass("validText");
    return;
  }
});

passwordChangOldPasswordInput.on("input", () => {
  passwordChangOldPasswordInput.removeClass("notValid");
  passwordChangOldPasswordInputInfo.text("");
});

passwordChangButtonY.on("click", () => {
  let activeAcId = localStorage.getItem(`activeAcId`);

  if (passwordChangNewPasswordInput.val() == "") {
    passwordChangNewPasswordInput.addClass("notValid");
    passwordChangNewPasswordInput.removeClass("valid");
    passwordChangNewPasswordInputInfo.text("Enter new password");
    passwordChangNewPasswordInputInfo.addClass("notValidText");
    passwordChangNewPasswordInputInfo.removeClass("validText");
    return;
  } else if (passwordChangRepeatNewPasswordInput.val() == "") {
    passwordChangRepeatNewPasswordInput.addClass("notValid");
    passwordChangRepeatNewPasswordInput.removeClass("valid");
    passwordChangRepeatNewPasswordInputInfo.text("Repeat new password");
    passwordChangRepeatNewPasswordInputInfo.addClass("notValidText");
    passwordChangRepeatNewPasswordInputInfo.removeClass("validText");
    return;
  } else if (
    passwordChangRepeatNewPasswordInput.val() !=
    passwordChangNewPasswordInput.val()
  ) {
    passwordChangRepeatNewPasswordInput.addClass("notValid");
    passwordChangRepeatNewPasswordInput.removeClass("valid");
    passwordChangRepeatNewPasswordInputInfo.text("Password mismatch");
    passwordChangRepeatNewPasswordInputInfo.addClass("notValidText");
    passwordChangRepeatNewPasswordInputInfo.removeClass("validText");
    return;
  } else {
    passwordChangRepeatNewPasswordInput.addClass("valid");
    passwordChangRepeatNewPasswordInput.removeClass("notValid");
    passwordChangRepeatNewPasswordInputInfo.text("Passwords match");
    passwordChangRepeatNewPasswordInputInfo.removeClass("notValidText");
    passwordChangRepeatNewPasswordInputInfo.addClass("validText");
  }

  if (passwordChangOldPasswordInput.val() == "") {
    passwordChangOldPasswordInput.addClass("notValid");
    passwordChangOldPasswordInput.removeClass("valid");
    passwordChangOldPasswordInputInfo.text("Enter old password");
    passwordChangOldPasswordInputInfo.addClass("notValidText");
    passwordChangOldPasswordInputInfo.removeClass("validText");
    return;
  } else if (
    passwordChangOldPasswordInput.val() !=
    localStorage.getItem(`password${activeAcId}`)
  ) {
    passwordChangOldPasswordInput.addClass("notValid");
    passwordChangOldPasswordInput.removeClass("valid");
    passwordChangOldPasswordInputInfo.text("Wrong password");
    passwordChangOldPasswordInputInfo.addClass("notValidText");
    passwordChangOldPasswordInputInfo.removeClass("validText");
    return;
  }

  localStorage.setItem(
    `password${activeAcId}`,
    passwordChangNewPasswordInput.val()
  );

  passwordChangHide();
});

passwordChangButtonC.on("click", () => {
  passwordChangHide();
});

removeAc.on("click", () => {
  deleteAccount.css({ display: "flex" });
});

deleteAccountPasswordInput.on("input", () => {
  deleteAccountPasswordInput.removeClass("notValid");
  deleteAccountPasswordInputInfo.text("");
});

deleteAccountButtonY.on("click", () => {
  let activeAcId = localStorage.getItem(`activeAcId`);

  if (deleteAccountPasswordInput.val() == "") {
    deleteAccountPasswordInput.addClass("notValid");
    deleteAccountPasswordInputInfo.text("Enter password");
    return;
  } else if (
    deleteAccountPasswordInput.val() !=
    localStorage.getItem(`password${activeAcId}`)
  ) {
    deleteAccountPasswordInput.addClass("notValid");
    deleteAccountPasswordInputInfo.text("Wrong password");
    return;
  } else {
    localStorage.removeItem(`login${activeAcId}`);
    localStorage.removeItem(`password${activeAcId}`);
    localStorage.removeItem(`logo${activeAcId}`);

    let commentsStorage = JSON.parse(localStorage.getItem("commentsStorage"));
    let i = 0;

    for (let i = commentsStorage.length - 1; i >= 0; i--) {
      if (commentsStorage[i].acId == activeAcId) {
        commentsStorage.splice(i, 1);
      }
    }

    localStorage.setItem("commentsStorage", JSON.stringify(commentsStorage));
    localStorage.setItem(`activeAcId`, "-1");
    location.href = "index.html";
  }
});

deleteAccountButtonC.on("click", () => {
  deleteAccount.hide();
  deleteAccountPasswordInput.val("");
  deleteAccountPasswordInput.removeClass("notValid");
  deleteAccountPasswordInputInfo.text("");
});
