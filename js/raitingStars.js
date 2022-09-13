// link: <script src="js/raitingStars.js"></script>

function ratingStars(containerClass, starClass, starPrefixD, starPrefixA) {
  let container = $(`.${containerClass}`);
  let starClear = true;

  container.on("mouseover", (event) => {
    starClear = false;

    let starTarget = $(event.target).closest(`.${starClass}`);
    let container = starTarget.closest(`.${containerClass}`);

    if (starTarget.length == 0) return;

    if (container.attr('data-select') != 'true') {
      container.children().each(function (id, el) {
        $(el).attr("data-prefix", starPrefixD);
      });

      let prevStar = starTarget;

      while (true) {
        if (prevStar.length == 0) break;

        prevStar.attr("data-prefix", starPrefixA);

        prevStar = prevStar.prev();
      }
    } else return
  });

  container.on("mouseout", () => {
    let container = $(event.target).closest(`.${containerClass}`);

    if (container.attr("data-select") != "true") starClear = true 
  });

  setInterval(() => {
    if (starClear) {
      container.children().each(function (id, el) {
        if ($(el).closest(`.${containerClass}`).attr("data-select") != "true") $(el).attr("data-prefix", starPrefixD);
      });
    }
  }, 0);

  container.on("mouseup", (event) => {
    if (localStorage.getItem('activeAcId') == '-1') {
      $('.windowLogInPlease').css({ 'display': 'flex' })
    } else {
      let starTarget = $(event.target).closest(`.${starClass}`);
      let container = starTarget.closest(`.${containerClass}`);
      let activeAcId = localStorage.getItem('activeAcId');
      let productId = starTarget.closest(`.products__item`).attr('id');

      if (starTarget.length == 0) return;


      container.attr("data-select", "true");

      container.children().each(function (id, el) {
        $(el).attr("data-prefix", starPrefixD);
      });

      let prevStar = starTarget;
      let starId = 0;

      while (true) {
        if (prevStar.length == 0) break;

        prevStar.attr("data-prefix", starPrefixA);

        starId++

        prevStar = prevStar.prev();
      }

      let raitingProducts = JSON.parse(localStorage.getItem(`raitingProducts${activeAcId}`))
      
      let productFound = false;

      for (let item of raitingProducts) {
        if (item.productId == productId) {
          item.starId = `${starId}`;
          productFound = true;
        }
      }

      if (!productFound) {
        let obj = {
          productId: `${productId}`,
          starId: `${starId}`
      }
        raitingProducts.push(obj);
      }

      localStorage.setItem(`raitingProducts${activeAcId}`, `${JSON.stringify(raitingProducts)}`)
    }
  });
}