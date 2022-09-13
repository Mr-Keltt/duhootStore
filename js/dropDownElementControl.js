// link: <script src="js/dropDownElementControl.js"></script>

function hideContentControlVertical(
  button,
  buttonContent1,
  buttonContent2,
  content,
  windowWidthActive
) {
  content.css({ overflow: "hidden" });

  let hide = true;
  let on = true;
  let on2 = true;

  let contentHeight = content.height();

  button.on("click", () => {
    if (hide) {
      hide = false;
    } else {
      hide = true;
    }
  });

  setInterval(() => {
    let windowWidth = parseInt($(window).width());

    if (windowWidthActive >= windowWidth) {
      if (on2) {
        hide = true;
        on = true;

        on2 = false;
      }

      if (hide) {
        if (on) {
          content.animate({ height: 0 }, 500);
          button.html(buttonContent1);

          on = false;
        }
      } else {
        if (!on) {
          content.animate({ height: contentHeight }, 500);
          button.html(buttonContent2);

          on = true;
        }
      }
    } else {
      if (hide) {
        hide = false;
        on = false;

        content.animate({ height: contentHeight }, 500);
        button.html(buttonContent2);

        on2 = true;
      }
    }
  }, 0);
}

function hideContentControlHorizontal(
  button,
  buttonContent1,
  buttonContent2,
  content,
  windowWidthActive
) {
  content.css({ overflow: "hidden" });

  let hide = true;
  let on = true;
  let on2 = true;

  let contentWidth = content.width();

  button.on("click", () => {
    if (hide) {
      hide = false;
    } else {
      hide = true;
    }
  });

  setInterval(() => {
    let windowWidth = parseInt($(window).width());

    if (windowWidthActive >= windowWidth) {
      if (on2) {
        hide = true;
        on = true;

        on2 = false;
      }

      if (hide) {
        if (on) {
          content.animate({ width: 0 }, 500);
          button.html(buttonContent1);

          on = false;
        }
      } else {
        if (!on) {
          content.animate({ width: contentWidth }, 500);
          button.html(buttonContent2);

          on = true;
        }
      }
    } else {
      if (hide) {
        hide = false;
        on = false;

        content.animate({ width: contentWidth }, 500);
        button.html(buttonContent2);

        on2 = true;
      }
    }
  }, 0);
}

function hideContentToNRowControl(
  button,
  buttonContent1,
  buttonContent2,
  content,
  item,
  itemVerticalIndent,
  toNRow,
  windowWidthActive
) {
  content.css({ overflow: "hidden" });

  let hide = true;
  let on = true;
  let on2 = true;

  button.on("click", () => {
    if (hide) {
      hide = false;
    } else {
      hide = true;
    }
  });

  let rectangle = $(".rectangle");

  rectangle.on("mouseup", () => {
    setTimeout(() => {
      hide = true;
      on = true;
    }, 100);
  });

  setInterval(() => {
    let windowWidth = parseInt($(window).width());
    let itemCount = 0;
    let itemHeigth;
    let contentPreviewHeight;

    item.each((id, el) => {
      if ($(el).css("display") != "none") itemCount++;
    });

    if (itemCount) {
      itemHeigth = item.height();
    } else {
      itemHeigth = 0;
    }

    let countRow = Math.ceil(
      itemCount / Math.floor(content.width() / item.width())
    );

    let contentHeight =
      countRow * itemHeigth + (countRow - 1) * itemVerticalIndent + 2;

    if (countRow > toNRow) {
      contentPreviewHeight =
        itemHeigth * toNRow + itemVerticalIndent * (toNRow - 1) + 2;
      button.show();
    } else {
      contentPreviewHeight = contentHeight;
      button.hide();

      if (on2) {
        hide = true;
        on = true;

        on2 = false;
      }
    }

    if (windowWidthActive >= windowWidth) {
      if (on2) {
        hide = true;
        on = true;

        on2 = false;
      }

      if (hide) {
        if (on) {
          content.animate({ height: contentPreviewHeight }, 500);
          button.html(buttonContent1);

          on = false;
        }
      } else {
        if (!on) {
          content.animate({ height: contentHeight }, 500);
          button.html(buttonContent2);

          on = true;
        }
      }
    } else {
      if (hide) {
        hide = false;
        on = false;

        content.animate({ height: contentHeight }, 500);
        button.html(buttonContent2);

        on2 = true;
      }
    }
  }, 0);
}

function hideTextControl(
  textContainer,
  prevueText,
  hideText,
  hidderButton,
  hidderButtonText1,
  hidderButtonText2
) {
  let hidderTextFule = false;
  let on = false;
  let hidderButtonFontSize;

  if ($(window).width() <= 859) {
    hidderButtonFontSize = "20px";
    hidderButton.css({ "font-size": hidderButtonFontSize });
  } else {
    hidderButtonFontSize = "25px";
    hidderButton.css({ "font-size": hidderButtonFontSize });
  }

  hidderButton.on("click", () => {
    if (hidderTextFule) {
      hidderTextFule = false;
    } else {
      hidderTextFule = true;
    }
  });

  setInterval(() => {
    if (hidderTextFule) {
      if (on) {
        textContainer.text(hideText);
        hidderTextFule = true;
        on = false;
      }
    } else {
      if (!on) {
        textContainer.text(prevueText);
        hidderTextFule = false;
        on = true;
      }
    }
  }, 10);
}

function dropDownUlControl(ul, buttonText, windowWidthForActive, id) {
  ul.css({ overflow: "hidden" });

  ul.addClass(`drop-down-menu-ul ddmu${id}`);

  let on = true;
  let hideUlActive = true;
  let ulHeight =
    parseInt(ul.height()) +
    parseInt(ul.css("padding-top")) +
    parseInt(ul.css("padding-bottom"));

  ul.before($(`<div class='drop-down-menu ddm${id}'></div>`));

  let dropDownMenu = $(`.ddm${id}`);

  dropDownMenu.append(
    $(`<div class="drop-down-menu-button-container ddmbc${id}"></div>`)
  );
  dropDownMenu.append(ul);

  let buttonContainer = $(`.ddmbc${id}`);

  buttonContainer.append(
    $(`<div class='drop-down-menu-button ddmb${id}'>${buttonText}</div>`)
  );
  buttonContainer.append(
    $(`<div class='drop-down-menu-button-arrow ddmba${id}'></div>`)
  );

  let buttonArrow = $(`.ddmba${id}`);

  buttonContainer.on("click", (e) => {
    if (hideUlActive) {
      hideUlActive = false;
    } else {
      hideUlActive = true;
    }
  });

  let mainWidth = parseInt($(".main").width());

  if (mainWidth <= windowWidthForActive) {
    ul.animate({ height: 0 }, 300);
    buttonContainer.css({ display: "flex" });

    hideUlActive = true;
    on = true;
  } else {
    ul.animate({ height: ulHeight }, 300);
    buttonContainer.css({ display: "none" });
    console.log(mainWidth);
    hideUlActive = false;
    on = false;
  }

  setInterval(() => {
    if (hideUlActive) {
      if (on) {
        ul.animate({ height: 0 }, 300);

        buttonArrow.css({ transform: "rotate(0deg)" });

        on = false;
      }
    } else {
      if (!on) {
        ul.animate({ height: ulHeight }, 300);

        buttonArrow.css({ transform: "rotate(90deg)" });

        on = true;
      }
    }
  }, 10);

  $(window).on("resize", () => {
    setTimeout(() => {
      let mainWidth = parseInt($(".main").width());

      if (mainWidth <= windowWidthForActive) {
        ul.animate({ height: 0 }, 300);
        buttonContainer.css({ display: "flex" });
        hideUlActive = true;
        on = true;
      } else {
        ul.animate({ height: ulHeight }, 300);
        buttonContainer.css({ display: "none" });

        hideUlActive = false;
        on = false;
      }
    }, 10);
  });
}
