function setRaitingStars() {
  let activeAcId = localStorage.getItem(`activeAcId`);

  if (activeAcId != "-1") {
    for (let item of JSON.parse(
      localStorage.getItem(`raitingProducts${activeAcId}`)
    )) {
      let productId = item.productId;
      let starId = item.starId;

      let starTarget = $(`#${productId}`)
        .find(".estimate__starsContainer")
        .children(`.fa-star:eq(${starId - 1})`);
      let container = $(`#${productId}`).find(".estimate__starsContainer");

      container.attr("data-select", "true");

      container.children().addClass("far");

      let prevStar = starTarget;

      while (true) {
        if (prevStar.length == 0) break;

        prevStar.removeClass("far");
        prevStar.addClass("fas");

        prevStar = prevStar.prev();
      }
    }
  }
}

function setCommentsInCommentsStorege() {
  	let commentsStorage = JSON.parse(localStorage.getItem("commentsStorage"));
	let commentId;

	if (commentsStorage[0]) {
		commentId = commentsStorage[0].commentId + 1;
	} else {
		commentId = 0;
	}

  	let commentObj = {
	  	productId: ptoductСharacteristic.id,
	  	commentId: commentId,
    	acId: localStorage.getItem(`activeAcId`),
    	commentText: leaveACommentComment.val(),
  	};

	commentsStorage.unshift(commentObj);
  	localStorage.setItem("commentsStorage", JSON.stringify(commentsStorage));

  	leaveACommentComment.val("");
}

function fillCommentContainer() {
	let commentsStorage = JSON.parse(localStorage.getItem("commentsStorage"));
	let activeAcId = localStorage.getItem(`activeAcId`);
	
	productContainerCommentContainer.html('<p class="commentContainer__notComment">This product has no comments yet.</p>');

	for (let item of commentsStorage) {
		if (item.productId == ptoductСharacteristic.id) {

      		commentContainerEmpty = false;

			let userLogoSrc = localStorage.getItem(`logo${item.acId}`);
			let userLogin = localStorage.getItem(`login${item.acId}`);
      		let raiting;
			let commentText = item.commentText;
			let commentId = item.commentId;

      		for (let item2 of JSON.parse(
      		  localStorage.getItem(`raitingProducts${item.acId}`)
      		)) {
      		  let productId = item2.productId;
      		  let starId = item2.starId;
			
      		  if (item.productId == productId) {
          switch (starId) {
            case "1":
              raiting = `
								<i class="fas fa-star"></i>
								<i class="far fa-star"></i>
								<i class="far fa-star"></i>
								<i class="far fa-star"></i>
								<i class="far fa-star"></i>
							`;
              break;
            case "2":
              raiting = `
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="far fa-star"></i>
								<i class="far fa-star"></i>
								<i class="far fa-star"></i>
							`;
              break;
            case "3":
              raiting = `
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="far fa-star"></i>
								<i class="far fa-star"></i>
							`;
              break;
            case "4":
              raiting = `
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="far fa-star"></i>
							`;
              break;
            case "5":
              raiting = `
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
							`;
              break;
          }
      		  }
      		}

			productContainerCommentContainer.append(
        	$(`
					<div class="comment" id="commentId-${commentId}">
						<img class="userLogo" src="${userLogoSrc}">

						<div class="comment__content">
							<p class="userLogIn">${userLogin}</p>

							<div class="comment__raiting">
								${raiting}
							</div>

							<p class="comment__text">${commentText}</p>
							<textarea class="comment__textEditer"></textarea>
						</div>
					</div>
				`));
			
			comment = $(".comment");
			userLogoComment = $(".userLogo");
			commentContent = $(".comment__content");
			
			commentTextControl();
			
			if (item.acId == activeAcId) {
				$(`#commentId-${commentId}`).append(
					$(`
						<div class="commentControl">
							<p class="editComment">EDIT</p>
							<p class="removeComment">REMOVE</p>
						</div>

						<div class="commentControlEdit">
							<div class="commentControlEdit__buttonY button">EDIT</div>
							<div class="commentControlEdit__buttonC button">CANSEL</div>
						</div>

						<div class="commentControlRemove">
							<div class="commentControlRemove__buttonY button">REMOVE</div>
							<div class="commentControlRemove__buttonC button">CANSEL</div>
						</div>
					`)
				)
			}
		}
	}
	
	if (!commentContainerEmpty) {
		$(".commentContainer__notComment").hide()
	} else {
		$(".commentContainer__notComment").show()
	}
}

function leaveACommentF() {
	setCommentsInCommentsStorege();
	fillCommentContainer();
	location.reload();
}

function commentTextControl() {
	let windowWidth = parseInt($(window).width());

	let commentWidth = parseInt(comment.width());
	let userLogoWidth = parseInt(userLogoComment.width());
	let commentContentWidth;

	if (windowWidth > 667) {
		commentContentWidth = commentWidth - userLogoWidth - 20;
	} else if (windowWidth > 460) {
		commentContentWidth = commentWidth - userLogoWidth - 15;
	} else {
		commentContentWidth = commentWidth - userLogoWidth - 9;
		$(".comment__text").css({'margin-left': -80})
	}
	

	commentContent.width(commentContentWidth)
}

function userLogInControl() {
	let windowWidth = parseInt($(window).width());

	for (let item of JSON.parse(localStorage.getItem("commentsStorage"))) {
		let acLogin = localStorage.getItem(`login${item.acId}`);
		let loginCountSumbol;

		if (windowWidth > 950) {
			loginCountSumbol = 30;
		} else if (windowWidth > 667) {
			loginCountSumbol = 25;
		} else if (windowWidth > 460) {
			loginCountSumbol = 20;
		} else if (windowWidth > 380) {
			loginCountSumbol = 15;
		} else if (windowWidth > 0) {
			loginCountSumbol = 10;
		}

		let loginLength = 0;
		let loginLine = "";

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

		$(`#commentId-${item.commentId}`).find('.userLogIn').text(loginLine);
	}
}

let productContainer = $(".productContainer");
let productContainerImg = $(".productContainer__img");
let productContainerPrise = $(".productContainer__prise");
let productContainerTitle = $(".productContainer__title");
let productContainerType = $(".productContainer__type");
let productContainerAssessmentStars = $(".productContainer__assessmentStars");
let productContainerAssessmentText = $(".productContainer__assessmentText");
let productContainerEstimate = $(".productContainer__estimate");
let productContainerContent = $(".productContainer__content");

let productContainerCommentContainer = $(".productContainer__commentContainer");
let logInPleaseButton = $(".logInPleaseButton");
let leaveAComment = $(".leaveAComment");
let userLogo = $(".userLogo");
let commentContainerNotComment = $(".commentContainer__notComment")
let leaveACommentComment = $(".leaveAComment__comment");
let leaveACommentButton = $(".leaveAComment__button");

let windowLogInPlease = $(".windowLogInPlease");
let windowLogInPleaseClose = $(".windowLogInPlease__close");
let windowLogInPleaseButton = $(".windowLogInPlease__button");

let productsItem = $(".products__item");
let estimate = $(".estimate");
let estimateStarsContainer = $(".estimate__starsContainer");
let estimateClose = $(".estimate__close");
let estimateButtonC = $(".estimate__buttonC");

let comment;
let userLogoComment;
let commentContent;

let productsText = {
  productText0:
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum amet inventore minima consectetur ab eius nulla eos debitis placeat in vel animi nam nobis, saepe quo. Mollitia corrupti consectetur eos nobis, explicabo perferendis veniam animi sunt doloremque, sapiente quam error, excepturi voluptates eum eligendi veritatis molestiae minus amet asperiores hic at! Necessitatibus saepe tenetur sed quam rem accusamus illum! Omnis, quam ad eaque dicta optio perspiciatis qui natus repellat facilis consectetur fugiat commodi dolorum possimus expedita! Quaerat ratione explicabo enim cum? Temporibus voluptatibus veniam alias delectus omnis id corporis, quasi, nisi maxime mollitia accusantium obcaecati voluptates incidunt et modi.</p>",
  productText1:
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus ex dolorum numquam nemo, ut doloribus sunt veniam fugiat assumenda ad praesentium magnam cupiditate earum dolore aliquid excepturi rerum iste molestias recusandae placeat? Beatae fugiat laboriosam soluta mollitia! Dolor quos velit molestias natus aspernatur facere. Id cumque omnis dolor labore reprehenderit. Aut officiis quas repellat accusantium deleniti veritatis repellendus mollitia sit facere modi quisquam animi, ea perferendis numquam magni, inventore fugiat rerum beatae nulla eveniet praesentium dolore? Dolores quaerat inventore quos cum id placeat tempore dicta veniam corporis dolore voluptatibus quasi facilis itaque, exercitationem ex commodi voluptas. Dolores voluptate accusamus ipsum!</p>",
  productText2:
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a, minima, sint praesentium nulla delectus at tempora aspernatur, quis dolorum temporibus sunt maiores perferendis magnam tempore doloribus natus consectetur sapiente labore deserunt? Vero eveniet dignissimos sunt aspernatur optio, similique minima assumenda beatae, ut iusto sapiente rerum rem? Dolores neque eaque mollitia earum, sint molestias nulla laudantium temporibus est ullam nemo laboriosam tempora cumque velit quo pariatur vitae architecto, expedita, possimus eum animi autem saepe? Omnis at soluta dolorum illum nostrum ut odio quae, ea sed placeat impedit. Recusandae illum, aspernatur dignissimos optio quibusdam repudiandae repellendus sunt numquam libero iusto.</p>",
  productText3:
    "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam veritatis quidem doloribus molestiae fuga sunt unde nihil! Tempore officia sequi minus. Aperiam laborum aliquid temporibus voluptates inventore at dolorem. Veniam impedit quisquam rem, aliquam ratione deleniti ipsam, laudantium, officia vitae aut similique labore nihil voluptate reiciendis fuga. Saepe quae aut soluta laudantium recusandae doloribus aspernatur eligendi libero facilis doloremque facere consequuntur, temporibus deserunt totam mollitia? Quia quos dolore vero obcaecati debitis? Hic harum numquam tempore ex, fugit tenetur unde commodi totam aliquam explicabo itaque illo accusamus aliquid, nesciunt maxime sapiente. Aliquid voluptate accusamus delectus soluta ducimus, praesentium culpa!</p>",
  productText6:
    "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quibusdam optio? Delectus placeat voluptatem consequuntur voluptatibus sit sint accusamus quis nam commodi, eius necessitatibus laudantium maxime blanditiis atque illum aliquam a cum distinctio? Magnam, optio beatae. Iure aspernatur quod, laudantium soluta dolor vel facilis maxime magnam odit, quis illo! Recusandae fuga, quos nam rerum nulla corrupti id amet aut animi placeat expedita? Reiciendis ex labore cum itaque vitae rem maxime aliquam tenetur ipsa possimus voluptas facere autem obcaecati, dignissimos reprehenderit sequi consectetur harum quia saepe sed necessitatibus ratione molestiae aspernatur! Neque fuga vero cumque enim asperiores recusandae placeat debitis illo architecto sed!</p>",
  productText7:
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae assumenda sapiente, deleniti tenetur quaerat expedita debitis! Repudiandae debitis dolor harum odio error eaque ullam porro sed natus perferendis sapiente neque ipsam quam nisi eligendi nesciunt, quia illo. At dicta quaerat nostrum dignissimos, magnam officia veniam cum ipsum totam, illo eveniet. Omnis nemo quia, ea iusto repellendus in explicabo eveniet quaerat quam possimus? Quaerat eveniet animi optio ab, aperiam aliquid reiciendis in quos provident nobis nostrum adipisci deleniti, ea sequi sunt ducimus dolores expedita explicabo officiis, temporibus reprehenderit. Voluptatibus et velit, aliquam ratione quisquam perspiciatis eius. Molestiae, inventore! Quibusdam excepturi laboriosam qui eligendi!</p>",
  productText8:
    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non mollitia molestiae sed vel reprehenderit provident tenetur quis modi cupiditate ullam unde, et iste soluta aperiam voluptatibus placeat magnam asperiores delectus amet, similique explicabo illum aliquam eaque? Quam porro soluta labore expedita minus, perferendis corporis. Aut, voluptatum? Recusandae labore esse necessitatibus sed odio. Fuga laudantium, assumenda porro iusto corrupti repellat a magni molestiae reiciendis eos ea facilis, voluptate eius, nihil pariatur accusamus. Molestias ullam consequuntur rem harum voluptates at rerum veniam! At, quod pariatur eaque excepturi illo illum molestias reprehenderit facilis, ex obcaecati dolorem, cupiditate nisi! Aperiam, obcaecati.</p>",
  productText9:
    "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quae voluptatum eum molestiae placeat adipisci, est labore soluta voluptate necessitatibus esse fugit recusandae quaerat dolorem magni consectetur nemo! Ipsam ducimus dolorum aut perspiciatis nostrum fuga neque iusto sapiente sit, impedit placeat iure soluta laudantium aperiam id, animi iste eligendi a eum? Repellat consequuntur esse rerum beatae quo eos iusto est possimus tempore ad molestias perspiciatis, minus placeat sint ducimus numquam facere. A, beatae quisquam doloribus, non numquam suscipit nisi ut asperiores unde laudantium consequuntur natus esse maiores quae. Id placeat corporis cum culpa excepturi? Quasi, voluptate.",
  productText11:
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita mollitia, qui aspernatur hic molestias nam inventore dicta obcaecati quas ut amet consequatur quod odit rerum esse, ducimus veniam quis at fugiat cupiditate autem sunt suscipit! Provident quo minima ea excepturi, dolorem, laborum eius a enim facilis corporis quod voluptatibus! Ut doloribus quia ipsa eos praesentium, repellendus veritatis est, recusandae odit quisquam, nemo molestiae! Fugit facere, libero alias non, facilis temporibus quo nam ipsum, pariatur eius numquam distinctio. Excepturi repudiandae perspiciatis magni eligendi, laudantium nam ipsam neque corporis necessitatibus ullam modi quam? Exercitationem reiciendis nemo rerum perspiciatis voluptatibus voluptates, est quibusdam voluptate ullam in?</p>",
  productText12:
    "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam assumenda omnis quisquam maxime reiciendis ipsum, et sapiente eum, cum obcaecati facere tenetur sed nostrum. Voluptatibus provident aperiam, voluptates fugiat saepe debitis suscipit eum reiciendis repellat, maxime adipisci quasi, mollitia maiores porro expedita. Asperiores, ad numquam. Consequatur, vel non impedit excepturi modi necessitatibus ipsum, asperiores ut iste accusantium, dignissimos eveniet totam eum. Tenetur voluptatem cumque dolorum, maiores consectetur cupiditate quis architecto, perferendis exercitationem corporis, velit veniam quidem. Sit facere consequuntur exercitationem repellendus iusto dignissimos harum sint, quibusdam non ex provident reprehenderit amet autem obcaecati! Neque minus dolores harum libero laboriosam cumque ullam ipsam nihil culpa autem?</p>",
};

let commentContainerEmpty = true;

let ptoductСharacteristic = JSON.parse(
  `${localStorage.getItem("ptoductСharacteristic")}`
);

productsItem.attr("id", `${ptoductСharacteristic.id}`);
productContainer.attr(
  "data-product-type",
  `${ptoductСharacteristic.productType}`
);
productContainerImg.attr("src", `${ptoductСharacteristic.img}`);
productContainerPrise.text(`${ptoductСharacteristic.prise}`);
productContainerTitle.text(`${ptoductСharacteristic.title}`);
productContainerType.text(`${ptoductСharacteristic.type}`);
productContainerAssessmentStars.children().each((id, el) => {
  if (id + 1 <= ptoductСharacteristic.reiting) {
    $(el).addClass("fas");
  } else {
    $(el).addClass("far");
  }
});
productContainerAssessmentText.text(`${ptoductСharacteristic.ratedPeople}`);

switch (ptoductСharacteristic.id) {
  case "productId-0":
    productContainerContent.html(`${productsText.productText0}`);
    break;
  case "productId-1":
    productContainerContent.html(`${productsText.productText1}`);
    break;
  case "productId-2":
    productContainerContent.html(`${productsText.productText2}`);
    break;
  case "productId-3":
    productContainerContent.html(`${productsText.productText3}`);
    break;
  case "productId-4":
    productContainerContent.html(`${productsText.productText4}`);
    break;
  case "productId-5":
    productContainerContent.html(`${productsText.productText5}`);
    break;
  case "productId-6":
    productContainerContent.html(`${productsText.productText6}`);
    break;
  case "productId-7":
    productContainerContent.html(`${productsText.productText7}`);
    break;
  case "productId-8":
    productContainerContent.html(`${productsText.productText8}`);
    break;
  case "productId-9":
    productContainerContent.html(`${productsText.productText9}`);
    break;
  case "productId-10":
    productContainerContent.html(`${productsText.productText10}`);
    break;
  case "productId-11":
    productContainerContent.html(`${productsText.productText11}`);
    break;
  case "productId-12":
    productContainerContent.html(`${productsText.productText12}`);
    break;
}

let activeAcId = localStorage.getItem(`activeAcId`);
let userLogoSrc = localStorage.getItem(`logo${activeAcId}`);

if (activeAcId != "-1") {
  logInPleaseButton.hide();
  leaveAComment.css("display", "grid");
  userLogo.attr("src", `${userLogoSrc}`);
} else {
  logInPleaseButton.css("display", "grid");
  leaveAComment.hide();
}

ratingStars("estimate__starsContainer", "fa-star", "far", "fas");
setRaitingStars();
fillCommentContainer();


comment = $(".comment");
userLogoComment = $(".userLogo");
commentContent = $(".comment__content");
let userLigIn = $(".userLigIn");
let commentText = $(".comment__text");
let editComment = $(".editComment");
let removeComment = $(".removeComment");
let commentControlEditButtonY = $(".commentControlEdit__buttonY");
let commentControlEditButtonC = $(".commentControlEdit__buttonC");
let commentControlRemoveButtonY = $(".commentControlRemove__buttonY");
let commentControlRemoveButtonC = $(".commentControlRemove__buttonC");

setInterval(() => {
	commentTextControl();
	userLogInControl();
}, 20);

productContainerEstimate.on("click", () => {
  let activeAcId = localStorage.getItem(`activeAcId`);

  if (activeAcId != "-1") {
    estimate.css({ display: "flex" });
  } else {
    windowLogInPlease.css({ display: "flex" });
  }
});

windowLogInPleaseButton.on("click", () => {
  location.href = "logIn.html";
});

logInPleaseButton.on("click", () => {
  location.href = "logIn.html";
});

windowLogInPleaseClose.on("click", () => {
	windowLogInPlease.hide();
});

estimateStarsContainer.on("mouseup", () => {
	estimate.hide();
	fillCommentContainer();
});

estimateClose.on("click", () => {
  estimate.hide();
});

estimateButtonC.on("click", () => {
  estimate.hide();
});

leaveACommentButton.on("click", () => {
  if (leaveACommentComment.val() == "") {
    leaveACommentComment.addClass("notValidComent");
  } else if (estimateStarsContainer.attr("data-select") != "true") {
    leaveACommentComment.addClass("notValidComent");

    let activeAcId = localStorage.getItem(`activeAcId`);

    if (activeAcId != "-1") {
      estimate.css({ display: "flex" });
    } else {
      windowLogInPlease.css({ display: "flex" });
    }
  } else {
    leaveACommentComment.removeClass("notValidComent");

    leaveACommentF();
  }
});

editComment.on("mouseup", (event) => {
	let commentTarget = $(event.target).closest(".comment");
	let commentTargetTextContainer = commentTarget.find(".comment__text");
	let commentTargetText = commentTargetTextContainer.text();
	let commentTargetTextEditer = commentTarget.find(".comment__textEditer");
	let commentControl = $(event.target).closest(".commentControl");
	let commentTargetControlEdit = commentTarget.find(".commentControlEdit");

	commentTargetTextContainer.hide();
	commentTargetTextEditer.show();
	commentControl.hide();
	commentTargetControlEdit.css({ 'display': 'flex'});
	commentTargetTextEditer.val(commentTargetText);
});

commentControlEditButtonY.on("mouseup", (event) => {
	let commentTarget = $(event.target).closest(".comment");
	let commentTargetId = commentTarget.attr('id');
	let commentTargetTextContainer = commentTarget.find(".comment__text");
	let commentControl = commentTarget.find(".commentControl");
	let commentTargetTextEditer = commentTarget.find(".comment__textEditer");
	let commentTargetTextEditerText = commentTarget.find(".comment__textEditer").val();
	let commentTargetControlEdit = commentTarget.find(".commentControlEdit");

	commentTargetTextContainer.show();
	commentTargetTextEditer.hide();
	commentControl.css({ 'display': 'flex' });
	commentTargetTextContainer.text(commentTargetTextEditerText);
	commentTargetControlEdit.hide();

	let commentsStorage = JSON.parse(localStorage.getItem("commentsStorage"))

	for (let comment of commentsStorage) {
		if ("commentId-" + comment.commentId == commentTargetId) {
			comment.commentText = commentTargetTextEditerText;
			break;
		}
	}

	localStorage.setItem("commentsStorage", JSON.stringify(commentsStorage));
})

commentControlEditButtonC.on("mouseup", (event) => {
	let commentTarget = $(event.target).closest(".comment");
	let commentTargetId = commentTarget.attr('id');
	let commentControl = commentTarget.find(".commentControl");
	let commentTargetTextContainer = commentTarget.find(".comment__text");
	let commentTargetTextEditer = commentTarget.find(".comment__textEditer");
	let commentTargetControlEdit = commentTarget.find(".commentControlEdit");

	let commentsStorage = JSON.parse(localStorage.getItem("commentsStorage"));
	let commentTargetTextContainerText;

	for (let comment of commentsStorage) {
		if ("commentId-" + comment.commentId == commentTargetId) {
			commentTargetTextContainerText = comment.commentText;
			break;
		}
	}

	commentTargetTextContainer.show();
	commentTargetTextEditer.hide();
	commentControl.css({ 'display': 'flex' });
	commentTargetTextContainer.text(commentTargetTextContainerText);
	commentTargetControlEdit.hide();
})

removeComment.on("mouseup", (event) => {
	let commentTarget = $(event.target).closest(".comment");
	let commentControl = $(event.target).closest(".commentControl");
	let commentTargetControlRemove = commentTarget.find(".commentControlRemove");

	commentControl.hide()
	commentTargetControlRemove.css({ "display": "flex"});
});

commentControlRemoveButtonY.on("mouseup", (event) => {
	let commentTarget = $(event.target).closest(".comment");
	let commentTargetId = commentTarget.attr('id');
	commentContainerEmpty = true;

	let commentsStorage = JSON.parse(localStorage.getItem("commentsStorage"))

	let i = 0

	for (let comment of commentsStorage) {
		if ("commentId-" + comment.commentId == commentTargetId) {
			commentsStorage.splice(i, 1);
			break;
		}
		i++
	}

	localStorage.setItem("commentsStorage", JSON.stringify(commentsStorage));
	location.reload();
})

commentControlRemoveButtonC.on("mouseup", (event) => {
	let commentTarget = $(event.target).closest(".comment");
	let commentControl = commentTarget.find(".commentControl");
	let commentTargetControlRemove = commentTarget.find(".commentControlRemove");

	commentControl.css({ "display": "flex" });
	commentTargetControlRemove.hide();
})