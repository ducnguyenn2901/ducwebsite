function btnClick() {
    document.getElementById("myButton1").click()
    document.getElementById("chooseColor").click()
    document.getElementById("sale1").click()
}

$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        moreText: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    infinite: false,
                    moreText: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    infinite: false
                }
            }
        ]
    });
})
function price_1() {
    document.getElementById("ten").innerHTML = "iPhone 14 Pro Max 128GB"
    document.getElementById("myButton1").style.borderColor = "#007bff";
    document.getElementById("myButton2").style.borderColor = "#e1dfdf";
    document.getElementById("myButton3").style.borderColor = "#e1dfdf";
    document.getElementById("myButton4").style.borderColor = "#e1dfdf";
    document.getElementById("gia-ban").innerHTML = "26.990.000VND"
    document.getElementById("gia-goc").innerHTML = "34.990.000VND"
}
function price_2() {
    document.getElementById("ten").innerHTML = "iPhone 14 Pro Max 256GB"
    document.getElementById("myButton1").style.borderColor = "#e1dfdf";
    document.getElementById("myButton2").style.borderColor = "#007bff";
    document.getElementById("myButton3").style.borderColor = "#e1dfdf";
    document.getElementById("myButton4").style.borderColor = "#e1dfdf";
    document.getElementById("gia-ban").innerHTML = "29.790.000VND"
    document.getElementById("gia-goc").innerHTML = "37.490.000VND"
}
function price_3() {
    document.getElementById("ten").innerHTML = "iPhone 14 Pro Max 512GB"
    document.getElementById("myButton1").style.borderColor = "#e1dfdf";
    document.getElementById("myButton2").style.borderColor = "#e1dfdf";
    document.getElementById("myButton3").style.borderColor = "#007bff";
    document.getElementById("myButton4").style.borderColor = "#e1dfdf";
    document.getElementById("gia-ban").innerHTML = "35.890.000VND"
    document.getElementById("gia-goc").innerHTML = "43.990.000VND"
}
function price_4() {
    document.getElementById("ten").innerHTML = "iPhone 14 Pro Max 1TB"
    document.getElementById("myButton1").style.borderColor = "#e1dfdf";
    document.getElementById("myButton2").style.borderColor = "#e1dfdf";
    document.getElementById("myButton3").style.borderColor = "#e1dfdf";
    document.getElementById("myButton4").style.borderColor = "#007bff";
    // document.getElementById("gia-ban").innerHTML = "41.990.000VND"
    // document.getElementById("gia-goc").innerHTML = "49.990.000VND"
    var checked1 = document.getElementById("sale1").checked
    var checked2 = document.getElementById("sale2").checked
    var checked3 = document.getElementById("sale3").checked
    if (checked1 === true){
        document.getElementById("sale2").checked = false
        document.getElementById("sale3").checked = false
        document.getElementById("gia-ban").innerHTML = "41.990.000VND"
        document.getElementById("gia-goc").innerHTML = "49.990.000VND"

    }
    if (checked2 === true){
        document.getElementById("sale1").checked = false
        document.getElementById("sale3").checked = false
        document.getElementById("gia-ban").innerHTML = "45.490.000VND"
        document.getElementById("gia-goc").innerHTML = "49.990.000VND"
    }
    if (checked3 === true){
        document.getElementById("sale1").checked = false
        document.getElementById("sale2").checked = false
        document.getElementById("gia-ban").innerHTML = "41.590.000VND"
        document.getElementById("gia-goc").innerHTML = "49.990.000VND"
    }
}
function color1() {
    document.getElementById("myColor1").style.borderColor = "#007bff"
    document.getElementById("myColor2").style.borderColor = "white"
    document.getElementById("myColor3").style.borderColor = "white"
    document.getElementById("myColor4").style.borderColor = "white"
}
function color2() {
    document.getElementById("myColor1").style.borderColor = "white"
    document.getElementById("myColor2").style.borderColor = "#007bff"
    document.getElementById("myColor3").style.borderColor = "white"
    document.getElementById("myColor4").style.borderColor = "white"
}
function color3() {
    document.getElementById("myColor1").style.borderColor = "white"
    document.getElementById("myColor2").style.borderColor = "white"
    document.getElementById("myColor3").style.borderColor = "#007bff"
    document.getElementById("myColor4").style.borderColor = "white"
}
function color4() {
    document.getElementById("myColor1").style.borderColor = "white"
    document.getElementById("myColor2").style.borderColor = "white"
    document.getElementById("myColor3").style.borderColor = "white"
    document.getElementById("myColor4").style.borderColor = "#007bff"
}

function discount1() {
    document.getElementById("sale1").checked = true
    document.getElementById("sale2").checked = false
    document.getElementById("sale3").checked = false
    // var tenSanpham = document.getElementById("ten").textContent
    // if (tenSanpham == "iPhone 14 Pro Max 128GB") {
    //     document.getElementById("gia-ban").innerHTML = "26.990.000VND"
    //     document.getElementById("gia-goc").innerHTML = "34.990.000VND"
    // }
    // else if (tenSanpham == "iPhone 14 Pro Max 256GB") {
    //     document.getElementById("gia-ban").innerHTML = "29.790.000VND"
    //     document.getElementById("gia-goc").innerHTML = "37.490.000VND"
    // }
    // else if (tenSanpham == "iPhone 14 Pro Max 512GB") {
    //     document.getElementById("gia-ban").innerHTML = "35.890.000VND"
    //     document.getElementById("gia-goc").innerHTML = "43.990.000VND"
    // }
    // else if (tenSanpham == "iPhone 14 Pro Max 1TB") {
    //     document.getElementById("gia-ban").innerHTML = "41.990.000VND"
    //     document.getElementById("gia-goc").innerHTML = "49.990.000VND"
    // }
}
function discount2() {
    document.getElementById("sale1").checked = false
    document.getElementById("sale2").checked = true
    document.getElementById("sale3").checked = false
    // var tenSanpham = document.getElementById("ten").textContent
    // if (tenSanpham == "iPhone 14 Pro Max 128GB") {
    //     document.getElementById("gia-ban").innerHTML = "29.490.000VND"
    //     document.getElementById("gia-goc").innerHTML = "34.990.000VND"
    // }
    // if (tenSanpham == "iPhone 14 Pro Max 256GB") {
    //     document.getElementById("gia-ban").innerHTML = "28.790.000VND"
    //     document.getElementById("gia-goc").innerHTML = "37.490.000VND"
    // }
    // if (tenSanpham == "iPhone 14 Pro Max 512GB") {
    //     document.getElementById("gia-ban").innerHTML = "40.590.000VND"
    //     document.getElementById("gia-goc").innerHTML = "43.990.000VND"
    // }
    // if (tenSanpham == "iPhone 14 Pro Max 1TB") {
    //     document.getElementById("gia-ban").innerHTML = "45.490.000VND"
    //     document.getElementById("gia-goc").innerHTML = "49.990.000VND"
    // }
}
function discount3() {
    document.getElementById("sale1").checked = false
    document.getElementById("sale2").checked = false
    document.getElementById("sale3").checked = true
    // var tenSanpham = document.getElementById("ten").textContent
    // if (tenSanpham == "iPhone 14 Pro Max 128GB") {
    //     document.getElementById("gia-ban").innerHTML = "26.590.000VND"
    //     document.getElementById("gia-goc").innerHTML = "34.990.000VND"
    // }
    // else if (tenSanpham == "iPhone 14 Pro Max 256GB") {
    //     document.getElementById("gia-ban").innerHTML = "29.390.000VND"
    //     document.getElementById("gia-goc").innerHTML = "37.490.000VND"
    // }
    // else if (tenSanpham == "iPhone 14 Pro Max 512GB") {
    //     document.getElementById("gia-ban").innerHTML = "35.490.000VND"
    //     document.getElementById("gia-goc").innerHTML = "43.990.000VND"
    // }
    // else if (tenSanpham == "iPhone 14 Pro Max 1TB") {
    //     document.getElementById("gia-ban").innerHTML = "41.590.000VND"
    //     document.getElementById("gia-goc").innerHTML = "49.990.000VND"
    // }
}

function describeBtn1() {
    document.getElementById("describeBtn1").style.borderColor = "#007bff"
    document.getElementById("describeBtn2").style.borderColor = "#e1dfdf"
    document.getElementById("describeBtn3").style.borderColor = "#e1dfdf"
    document.getElementById("describeBtn4").style.borderColor = "#e1dfdf"
    document.getElementById("table").style.display = "none"
    document.getElementById("contentT").style.display = "inline"
    document.getElementById("timHieu").style.display = "inline"
}
function describeBtn2() {
    document.getElementById("describeBtn2").style.borderColor = "#007bff"
    document.getElementById("describeBtn1").style.borderColor = "#e1dfdf"
    document.getElementById("describeBtn3").style.borderColor = "#e1dfdf"
    document.getElementById("describeBtn4").style.borderColor = "#e1dfdf"
    document.getElementById("table").style.display = "none"
    document.getElementById("contentT").style.display = "inline"
    document.getElementById("timHieu").style.display = "inline"
}
function describeBtn3() {
    document.getElementById("describeBtn3").style.borderColor = "#007bff"
    document.getElementById("describeBtn1").style.borderColor = "#e1dfdf"
    document.getElementById("describeBtn2").style.borderColor = "#e1dfdf"
    document.getElementById("describeBtn4").style.borderColor = "#e1dfdf"
    document.getElementById("table").style.display = "inline"
    document.getElementById("contentT").style.display = "none"
    document.getElementById("timHieu").style.display = "none"
}
function describeBtn4() {
    document.getElementById("describeBtn4").style.borderColor = "#007bff"
    document.getElementById("describeBtn1").style.borderColor = "#e1dfdf"
    document.getElementById("describeBtn2").style.borderColor = "#e1dfdf"
    document.getElementById("describeBtn3").style.borderColor = "#e1dfdf"
    document.getElementById("table").style.display = "none"
    document.getElementById("contentT").style.display = "inline"
    document.getElementById("timHieu").style.display = "inline"
}

function moreFunction() {
    var icon1 = document.getElementById("icon1")
    var icon2 = document.getElementById("icon2")
    var moreText = document.getElementById("more");
    var linkText = document.getElementById("myLink");
    if (moreText.style.display != "none") {
        linkText.innerHTML = "More";
        moreText.style.display = "none";
        icon1.style.display = "inline"
        icon2.style.display = "none"
    }
    else {
        linkText.innerHTML = "Less";
        moreText.style.display = "inline";
        icon1.style.display = "none"
        icon2.style.display = "inline"
    }
}

function uploadImage() {
    var input = document.getElementById("imageUpload");
    var file = input.files[0];
    var read = new FileReader();

    read.onload = function (e) {
        var img = document.createElement("img");
        img.src = e.target.result;
        img.style.maxWidth = "100px"
        img.style.height = "100px"
        document.getElementById("previewContainer").appendChild(img);
    };
    read.readAsDataURL(file);
}

let selectedRating = 0;
function rateProduct(rating) {
    selectedRating = rating;
    const stars = document.getElementsByClassName('star');
    for (let i = 0; i < stars.length; i++) {
        if (i < rating) {


            stars[i].classList.add('selected');
        } else {

            stars[i].classList.remove('selected');
        }
    }
}

function send() {
    var reviewerName = document.getElementById("text_1").value
    var reviewText = document.getElementById("text_2").value
    var reviewImage = document.getElementById("imageUpload").files[0];
    if (reviewerName == "" || reviewText == "") {
        document.getElementById("err_text").innerHTML = "Error, please check your comment"
    }
    if (reviewerName != "" && reviewText != "") {
        document.getElementById("err_text").innerHTML = "Thanks for your comment"
        document.getElementById("noCmt").style.display = "none"
        var reviewItem1 = document.createElement("li");
        var reviewItem2 = document.createElement("li")
        var reviewItem3 = document.createElement("li")
        var reviewItem4 = document.createElement("li")
        var reviewContent1 = document.createElement("p");
        var imageElement = document.createElement("img")
        imageElement.src = 'https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg';

        imageElement.style.width = "40px"
        imageElement.style.height = "40px"
        imageElement.style.borderRadius = "50%"
        imageElement.style.marginRight = "10px"

        reviewContent1.textContent = reviewerName;
        reviewContent1.style.fontSize = "20px"
        reviewContent1.style.fontWeight = "800"
        reviewContent1.style.marginTop = "5px"


        reviewItem1.appendChild(imageElement)
        reviewItem1.appendChild(reviewContent1);

        reviewItem1.style.display = "flex";

        var reviewStar = document.createTextNode('⭐'.repeat(selectedRating))
        reviewItem2.appendChild(reviewStar)

        var reviewContent3 = document.createElement("p");
        reviewContent3.textContent = reviewText;
        reviewItem3.appendChild(reviewContent3);
        reviewContent3.style.fontSize = "15px";
        reviewContent3.style.marginLeft = "5px"
        if (reviewImage) {
            var imageElement = document.createElement("img");
            imageElement.src = URL.createObjectURL(reviewImage);
            imageElement.style.width = "100px";
            imageElement.style.height = "100px";
            imageElement.style.marginBottom = "15px"
            reviewItem4.appendChild(imageElement);
        }
        var reviewList = document.getElementById("review-list");
        reviewList.appendChild(reviewItem1);
        reviewList.appendChild(reviewItem2);
        reviewList.appendChild(reviewItem3);
        reviewList.appendChild(reviewItem4);

    }
}

function checkregist() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var check = document.getElementById('inputEmail').value
    if (check.match(mailformat)) {
        document.getElementById('err_email').innerHTML = "Thanks for using our services"
    }
    else {
        document.getElementById('err_email').innerHTML = "Please retype your email"
    }
}
