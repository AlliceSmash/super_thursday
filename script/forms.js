$(document).ready(function () {
    loadStoredFormInfo();
    var item = document.getElementById("email_addr_confirm");
    item.addEventListener("blur", verifyEmail, false);

    function verifyEmail(input) {
        input = input.srcElement || input.target;
        if (input.value != document.getElementById("email_addr").value) {
            input.setCustomValidity("Your email addresses do not match! Please try again!");
        } else {
            input.setCustomValidity('');
        }
    }

    function saveData() {
        if (Modernizr.localstorage) {
            localStorage["username"] = $('#username').val();
            localStorage["email_addr"] = $('#email_addr').val();
            localStorage["enrollDate"] = $('#enrollDate').val();
            localStorage["favbk"] = $('#favbk').val();
        }
    }

    function loadStoredFormInfo() {
        if (Modernizr.localstorage) {
            var usrName = localStorage["username"];
            var email = localStorage["email_addr"];
            var dateToEnroll = localStorage["enrollDate"];
            var favbreakfast = localStorage["favbk"];

            if (usrName) {
                $('#username').val(usrName);
            }
            if (email) {
                $('#email_addr').val(email);
            }
            if (dateToEnroll) {
                $('#enrollDate').val(dateToEnroll);
            }
            if (favbreakfast) {
                $('#favbk').val(favbreakfast);
            }
        }
    }

    $("#questions").submit(function (evt) {
        var validFieldCount = 0;
            $(this).find('input').each(function () {
                if ($(this)[0].validity.valid === true) validFieldCount += 1;
            });

            if (validFieldCount != $(this).find('input').length) {
                $('#myModal').modal('hide');
                evt.preventDefault();
            }
            else {
                saveData();
                $('#myModal').modal('show');
                evt.preventDefault();
            }
    })
});