
    $('a[href*="#"]').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 100);
        return false;
    });

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
