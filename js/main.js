$(() => {
  function cssControl() {
    windowWidth = parseInt($(window).width());
    mainWidth = parseInt($(".main").width());

    backbroundControl();

    if (window.pageYOffset > 30 || document.documentElement.scrollTop > 30) {
      row.addClass("row-down");
    } else {
      row.removeClass("row-down");
    }

    if (windowWidth <= 931) {
      rowMenu.width(windowWidth + scrollWidth() * 2);
      rowMenuItem.width(windowWidth + scrollWidth());
    } else {
      rowMenu.width("auto");
      rowMenuItem.width("auto");
    }

    rowLogo.css({ "margin-left": (windowWidth - mainWidth) / 2 });

    if (windowWidth > 931) {
      user.width(windowWidth - parseInt(search.offset().left) - search.width());
      user.css({ left: 0 });
    } else {
      user.width(windowWidth - parseInt(search.offset().left));
      user.css({ left: -search.width() });
    }

    if (windowWidth <= 667) {
      rowLogo.attr("src", "img/logo2.png");
    } else {
      rowLogo.attr("src", "img/logo1.png");
    }

    searchInput.css({ "margin-left": searchButton.width() });

    backgroundControl(header, headerBackground);

    backgroundControl(rectangle, rectangleBackground);

    backgroundControl(footer, footerBackground);

    productHover.height(productImg.height());

    let productCount = 0;

    product.each((id, el) => {
      if ($(el).css("display") != "none") {
        productCount++;
      }
    });

    if (!productCount) {
      mesageForAllProducrsOn.css({ display: "block" });
    } else {
      mesageForAllProducrsOn.css({ display: "none" });
    }

    if (windowWidth > 780) {
      realityContant.width(760);
      realityContantSlide.width(760);
    } else {
      realityContant.width(mainWidth);
      realityContantSlide.width(mainWidth);
    }

    if (windowWidth > 480) {
      footerFollowAndCopyright.append(footerCopyright);
    } else {
      footerContant.append(footerCopyright);
    }
  }

  function backbroundControl() {
    logIn.css({
      width: windowWidth - (searchButton.offset().left + searchButton.width()),
    });
    logInBackground.css({
      width: windowWidth - (searchButton.offset().left + searchButton.width()),
    });
  }

  function searchButtonActiveF() {
    if (searchButtonActive) {
      searchInput.css({ width: 0, padding: 0 });
      searchInput.blur();
      searchInput.val("");
    } else {
      if (windowWidth > 1012) {
        searchInput.css({
          width:
            windowWidth - (searchButton.offset().left + searchButton.width()),
          padding: 20,
        });
      } else if (windowWidth > 667) {
        searchInput.css({
          width:
            windowWidth - (searchButton.offset().left + searchButton.width()),
          padding: 15,
        });
      } else if (windowWidth > 0) {
        searchInput.css({
          width:
            windowWidth - (searchButton.offset().left + searchButton.width()),
          padding: 10,
        });
      }

      searchInput.focus();
    }
  }

  function productFiltred() {
    product.each((id, el) => {
      if (
        typeof $(el).attr(`data-product-${productFilterConfig.menu}`) !==
        typeof undefined &&
        $(el).attr(`data-product-${productFilterConfig.menu}`) !== false
      ) {
        if (
          typeof $(el).attr(`data-product-${productFilterConfig.cities}`) !==
          typeof undefined &&
          $(el).attr(`data-product-${productFilterConfig.cities}`) !== false
        ) {
          if ($(el).attr("data-product-type") == "home") {
            if (productFilterConfig.filter.home) {
              $(el).css({ display: "flex" });
            } else {
              $(el).hide();
            }
          }

          if ($(el).attr("data-product-type") == "people") {
            if (productFilterConfig.filter.people) {
              $(el).css({ display: "flex" });
            } else {
              $(el).hide();
            }
          }

          if ($(el).attr("data-product-type") == "student") {
            if (productFilterConfig.filter.student) {
              $(el).css({ display: "flex" });
            } else {
              $(el).hide();
            }
          }

          if ($(el).attr("data-product-type") == "miusic") {
            if (productFilterConfig.filter.miusic) {
              $(el).css({ display: "flex" });
            } else {
              $(el).hide();
            }
          }

          if ($(el).attr("data-product-type") == "transport") {
            if (productFilterConfig.filter.transport) {
              $(el).css({ display: "flex" });
            } else {
              $(el).hide();
            }
          }
        } else {
          $(el).hide();
        }
      } else {
        $(el).hide();
      }
    });
  }

  function rectangleFilterTextClick() {
    let windowWidth = parseInt($(window).width());

    if (667 >= windowWidth) {
      if (!rectangleFilterUlHide) {
        rectangleFilterContainer.css({
          "border-left": "1px solid #ddd",
          "border-bottom": "1px solid #ddd",
          "z-index": 5,
        });
      } else {
        rectangleFilterContainer.css({
          "border-left": "1px solid #fff",
          "border- bottom": "1px solid #fff",
        });
        setTimeout(() => {
          rectangleFilterContainer.css({ "z-index": 2 });
        }, 450);
      }
    } else {
      rectangleFilterContainer.css({
        "border-left": "0px",
        "border- bottom": "1px solid #fff",
      });
    }
  }

  function realityContantSlideControl() {
    let slide1left = 0;
    let slide2left = -parseInt($(".realityContant__slide").width());
    let slide3left = -parseInt($(".realityContant__slide").width()) * 2;
    let slide4left = -parseInt($(".realityContant__slide").width()) * 3;
    let slide5left = -parseInt($(".realityContant__slide").width()) * 4;

    switch (nomberRealityContantSlide) {
      case "1":
        $(".realityContant__slideContainer").css({ left: slide1left });
        break;
      case "2":
        $(".realityContant__slideContainer").css({ left: slide2left });
        break;
      case "3":
        $(".realityContant__slideContainer").css({ left: slide3left });
        break;
      case "4":
        $(".realityContant__slideContainer").css({ left: slide4left });
        break;
      case "5":
        $(".realityContant__slideContainer").css({ left: slide5left });
        break;
    }
  }

  function loginControl() {
    let activeAcId = localStorage.getItem(`activeAcId`);

    if (activeAcId < 0) {
      logIn.css({ display: "flex" });
      $(".ddm5").css({ display: "none" });
    } else {
      let acLogo = localStorage.getItem(`logo${activeAcId}`);

      logIn.css({ display: "none" });
      $(".ddm5").css({ display: "flex" });
      $(".user__logo").attr("src", `${acLogo}`);
    }
  }

  function setRaitingStars() {
    let activeAcId = localStorage.getItem(`activeAcId`);

    if (activeAcId != "-1") {
      for (let item of JSON.parse(
        localStorage.getItem(`raitingProducts${activeAcId}`)
      )) {
        let productId = item.productId;
        let starId = item.starId;

        let starTarget = $(`#${productId}`).find(".productHover__estimate").children(`.fa-star:eq(${starId - 1})`);
        let container = $(`#${productId}`).find(".productHover__estimate");

        container.attr("data-select", "true");

        container.children().each(function (id, el) {
          $(el).attr("data-prefix", "far");
        });

        let prevStar = starTarget;

        while (true) {
          if (prevStar.length == 0) break;

          prevStar.attr("data-prefix", "fas");

          prevStar = prevStar.prev();
        }
      }
    }
  }

  let windowWidth;
  let mainWidth;

  let popUpClose = $(".popUp__close");
  let windowLogInPleaseButton = $(".windowLogInPlease__button");
  let windowAreYouSure = $(".windowAreYouSure");
  let windowAreYouSureButtonY = $(".windowAreYouSure__buttonY");
  let windowAreYouSureButtonC = $(".windowAreYouSure__buttonC");
  let loading = $(".background__loading");
  let row = $(".row");
  let rowLogo = $(".row__logo");
  let rowMenu = $(".row__menu");
  let rowMenuItem = $(".row__menuItem");
  let search = $(".search");
  let searchInput = $(".search__input");
  let searchButton = $(".search__button");
  let logIn = $(".logIn");
  let user = $(".user");
  let personAlarea = $(".user__personalArea");
  let logOut = $(".user__logOut");
  let logInBackground = $(".logIn__background");
  let header = $(".header");
  let headerBackground = $(".background__header");
  let cities = $(".header__cities");
  let education = $(".header__education");
  let headerInputContainer = $(".header__inputContainer");
  let headerInput = $(".header__input");
  let headerInputPlaceholder = $(".header__inputPlaceholder");
  let rectangle = $(".rectangle");
  let rectangleBackground = $(".background__rectangle");
  let rectangleMenu = $(".rectangle__menu");
  let rectangleMenuItem = $(".rectangle__menuItem");
  let rectangleCities = $(".rectangle__cities");
  let rectangleMapButton = $(".rectangle__mapButton");
  let rectangleFilterContainer = $(".rectangle__filterContainer");
  let rectangleFilterText = $(".rectangle__filterText");
  let rectangleFilterUl = $(".rectangle__filterUl");
  let map = $(".map");
  let product = $(".product");
  let productHover = $(".product__hover");
  let productHoverButton = $(".productHover__button");
  let productHoverComment = $(".productHover__comment");
  let productImg = $(".product__img");
  let mesageForAllProducrsOn = $(".products__mesageForAllProducrsOn");
  let servicesMenu = $(".servicesMenu");
  let servicesMenuInem = $(".servicesMenu__inem");
  let realityContant = $(".realityContant");
  let realityContantSlide = $(".realityContant__slide");
  let footer = $(".footer");
  let footerBackground = $(".background__footer");
  let footerFollowAndCopyright = $(".footer__followAndCopyright");
  let footerContant = $(".footer__contant");
  let footerInputContainer = $(".footer__inputContainer");
  let footerInput = $(".footer__input");
  let footerInputPlaceholder = $(".footer__inputPlaceholder");
  let footerCopyright = $(".footer__copyright");

  let searchButtonActive = true;
  let rectangleFilterUlHide = true;
  let nomberRealityContantSlide = "1";

  let productFilterConfig = {
    menu: "highlights",
    cities: "all-cities",
    filter: {
      home: true,
      people: true,
      student: true,
      miusic: true,
      transport: true,
    },
  };

  if (
    !localStorage.getItem(`activeAcIdShelfLife`) ||
    localStorage.getItem(`activeAcIdShelfLife`) < Date.now()
  ) {
    localStorage.setItem(`activeAcId`, `-1`);
  }

  if (localStorage.getItem(`commentsStorage`) == "" || !localStorage.getItem(`commentsStorage`)) {
    localStorage.setItem(`commentsStorage`, `${JSON.stringify([])}`)
    console.log(1)
  }

  setInterval(() => {
    cssControl();
    rectangleFilterTextClick();
    realityContantSlideControl();
    productFiltred();
    loginControl();
    searchButtonActiveF();
  }, 0);

  setRaitingStars();

  burgerMenuControl(rowMenu, rowMenuItem, row, 930, true, 0);

  dropDownUlControl(cities, "City", 99999, 0);

  dropDownUlControl(education, "Education", 99999, 1);

  dropDownUlControl(rectangleCities, "All cities", 99999, 2);

  dropDownUlControl($(".footer__menu:eq(0)"), "Ipsum quis", 99999, 3);

  dropDownUlControl($(".footer__menu:eq(1)"), "Ipsum quis", 99999, 4);

  dropDownUlControl(user, `<img class='user__logo'>`, 99999, 5);

  hideContentControlVertical(
    rectangleMapButton,
    'Show map <i class="fas fa-map-marker-alt"></i>',
    'Hide map <i class="fas fa-map-marker-alt"></i>',
    map,
    99999
  );

  burgerMenuControl(rectangleMenu, rectangleMenuItem, rectangle, 931, false, 1);

  hideContentControlHorizontal(
    rectangleFilterText,
    "FILTER:",
    "FILTER:",
    rectangleFilterUl,
    667
  );

  ratingStars("productHover__estimate", "fa-star", "far", "fas");

  hideContentToNRowControl(
    $(".products__hideButton"),
    'Load more <i class="fas fa-long-arrow-alt-right"></i>',
    "Hide",
    $(".products"),
    $(".product"),
    10,
    2,
    99999
  );

  popUpClose.on("click", (event) => {
    $(event.target).closest(".popUp").hide();
  });

  windowLogInPleaseButton.on("click", () => {
    location.href = "logIn.html";
  });

  windowAreYouSureButtonY.on("click", () => {
    localStorage.setItem("activeAcId", "-1");
    windowAreYouSure.hide();
    location.reload();
  });

  windowAreYouSureButtonC.on("click", () => {
    windowAreYouSure.hide();
  });

  searchButton.on("click", () => {
    if (searchButtonActive) {
      searchButtonActive = false;
    } else {
      searchButtonActive = true;
    }
  });

  headerInputContainer.on("click", () => {
    headerInput.focus();
    headerInputPlaceholder.hide();
    headerInput.css({ "background-color": "rgba(255, 255, 255, 0.4)" });
  });

  headerInput.on("blur", () => {
    if (headerInput.val() == "") {
      headerInputPlaceholder.show();
    }
    headerInput.css({ "background-color": "rgba(255, 255, 255, 0.2)" });
  });

  footerInputContainer.on("click", () => {
    footerInput.focus();
    footerInputPlaceholder.hide();
    footerInput.css({ "background-color": "rgba(255, 255, 255, 0.4)" });
  });

  footerInput.on("blur", () => {
    if (footerInput.val() == "") {
      footerInputPlaceholder.show();
    }
    footerInput.css({ "background-color": "rgba(255, 255, 255, 0.2)" });
  });

  rectangleMenu.on("mouseup", (event) => {
    let item = $(event.target).closest(".rectangle__menuItem");

    if (item.length == 0) return;

    rectangleMenuItem.removeClass("active");
    item.addClass("active");

    if (
      typeof item.attr("data-product-recommended") !== typeof undefined &&
      item.attr("data-product-recommended") !== false
    ) {
      productFilterConfig.menu = "recommended";
    } else if (
      typeof item.attr("data-product-latest") !== typeof undefined &&
      item.attr("data-product-latest") !== false
    ) {
      productFilterConfig.menu = "latest";
    } else if (
      typeof item.attr("data-product-highlights") !== typeof undefined &&
      item.attr("data-product-highlight") !== false
    ) {
      productFilterConfig.menu = "highlights";
    }
  });

  rectangleCities.on("mouseup", (event) => {
    let item = $(event.target).closest(".rectangle__citiesItem");

    if (item.length == 0) return;

    let buttonText = $(".ddmb2").text();
    let itemText = item.text();

    $(".ddmb2").text(itemText);
    item.text(buttonText);

    if (
      typeof item.attr(`data-product-dubai`) !== typeof undefined &&
      item.attr(`data-product-dubai`) !== false
    ) {
      productFilterConfig.cities = "dubai";
      item.removeAttr("data-product-dubai");
    } else if (
      typeof item.attr(`data-product-moscow`) !== typeof undefined &&
      item.attr(`data-product-moscow`) !== false
    ) {
      productFilterConfig.cities = "moscow";
      item.removeAttr("data-product-moscow");
    } else if (
      typeof item.attr(`data-product-new-york`) !== typeof undefined &&
      item.attr(`data-product-new-york`) !== false
    ) {
      productFilterConfig.cities = "new-york";
      item.removeAttr("data-product-new-york");
    } else if (
      typeof item.attr(`data-product-all-cities`) !== typeof undefined &&
      item.attr(`data-product-all-cities`) !== false
    ) {
      productFilterConfig.cities = "all-cities";
      item.removeAttr("data-product-all-cities");
    }

    if (buttonText == "All cities") {
      item.attr("data-product-all-cities", "");
    } else if (buttonText == "Moscow") {
      item.attr("data-product-moscow", "");
    } else if (buttonText == "Dubai") {
      item.attr("data-product-dubai", "");
    } else if (buttonText == "New York") {
      item.attr("data-product-new-york", "");
    }
  });

  rectangleFilterText.on("click", () => {
    if (rectangleFilterUlHide) rectangleFilterUlHide = false;
    else rectangleFilterUlHide = true;
  });

  rectangleFilterUl.on("mouseup", (event) => {
    let item = $(event.target).closest(".rectangle__filterItem");

    if (item.length == 0) return;

    let itemType = item.attr("data-product-type");

    item.toggleClass("active");

    if (itemType == "home") {
      if (productFilterConfig.filter.home) {
        productFilterConfig.filter.home = false;
      } else {
        productFilterConfig.filter.home = true;
      }
    }

    if (itemType == "people") {
      if (productFilterConfig.filter.people) {
        productFilterConfig.filter.people = false;
      } else {
        productFilterConfig.filter.people = true;
      }
    }

    if (itemType == "student") {
      if (productFilterConfig.filter.student) {
        productFilterConfig.filter.student = false;
      } else {
        productFilterConfig.filter.student = true;
      }
    }

    if (itemType == "miusic") {
      if (productFilterConfig.filter.miusic) {
        productFilterConfig.filter.miusic = false;
      } else {
        productFilterConfig.filter.miusic = true;
      }
    }

    if (itemType == "transport") {
      if (productFilterConfig.filter.transport) {
        productFilterConfig.filter.transport = false;
      } else {
        productFilterConfig.filter.transport = true;
      }
    }
  });

  productHoverButton.on("click", (event) => {
    let productTarget = $(event.target).closest('.products__item');
    let reiting = 0;

    productTarget.find('.product__stars').children('').each((id, el) => {
      if ($(el).attr('data-prefix') == "fas") reiting++
    })


    let ptoductСharacteristic = {
      id: `${productTarget.attr('id')}`,
      productType: `${productTarget.attr('data-product-type')}`,
      img: `${productTarget.find('.product__img').attr('src')}`,
      prise: `${productTarget.find('.product__prise').text()}`,
      title: `${productTarget.find('.product__title').text()}`,
      type: `${productTarget.find('.product__type').text()}`,
      reiting: `${reiting}`,
      ratedPeople: `${productTarget.find('.product__ratedPeople').text()}`,
    }

    localStorage.setItem('ptoductСharacteristic', `${JSON.stringify(ptoductСharacteristic)}`)
    location.href = "product.html";
  })

  productHoverComment.on("mouseup", (event) => {
      let productTarget = $(event.target).closest('.products__item');
      let reiting = 0;

      productTarget.find('.product__stars').children('').each((id, el) => {
        if ($(el).attr('data-prefix') == "fas") reiting++
      })


      let ptoductСharacteristic = {
        id: `${productTarget.attr('id')}`,
        productType: `${productTarget.attr('data-product-type')}`,
        img: `${productTarget.find('.product__img').attr('src')}`,
        prise: `${productTarget.find('.product__prise').text()}`,
        title: `${productTarget.find('.product__title').text()}`,
        type: `${productTarget.find('.product__type').text()}`,
        reiting: `${reiting}`,
        ratedPeople: `${productTarget.find('.product__ratedPeople').text()}`,
      }

      localStorage.setItem('ptoductСharacteristic', `${JSON.stringify(ptoductСharacteristic)}`)
      location.href = "product.html#comment";
    })

  productHoverComment.on("mouseover", (event) => {
    let item = $(event.target).closest(".fa-comments");

    if (item.length == 0) return;

    item.html('<i class="fas fa-comments"></i>');
  });

  productHoverComment.on("mouseleave", (event) => {
    $(event.target)
      .closest(".productHover__comment")
      .html('<i class="far fa-comments"></i>');
  });

  servicesMenu.on("click", (event) => {
    let item = $(event.target).closest(".servicesMenu__inem");
    let itemId = item.attr("data-id");

    if (item.length == 0) return;

    servicesMenuInem.removeClass("active");
    item.addClass("active");

    nomberRealityContantSlide = itemId;
  });

  personAlarea.on("click", () => {
    location.href = "personAlarea.html";
  });

  logOut.on("click", () => {
    windowAreYouSure.css({ display: "flex" });
  });

  loading.hide();
  row.css({ position: "fixed" });

});
