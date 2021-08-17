$(document).ready(function () {
    var lastNameInputField = $("#last-name-input-field");
    var firstNameInputField = $("#first-name-input-field");
    var phoneNumberInputField = $("#phone-number-input-field");
    var table = $(".table");

    var lastNameErrorMessage = $(".last-name-error-message");
    var firstNameErrorMessage = $(".first-name-error-message");
    var phoneNumberErrorMessage = $(".phone-number-error-message");
    var contactErrorMessage = $(".contact-error-message");

    $('body').on("input", ".input-words", function () {
        this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
    });

    $("#phone-number-input-field").mask("+7 (999) 999-99-99");

    $(".add-button").click(function () {
        var lastNameText = lastNameInputField.val().trim();
        var firstNameText = firstNameInputField.val().trim();
        var phoneNumberText = phoneNumberInputField.val().trim();

        var validLastName;
        var validFirstName;
        var validPhoneNumber;

        if (lastNameText === "") {
            lastNameErrorMessage.text("Заполните поле");
            lastNameInputField.css({"border-color": "red"});
            $(".last-name-label").css({"color": "red"});
            validLastName = false;
        } else {
            lastNameErrorMessage.text("");
            lastNameInputField.css({"border-color": "black"});
            $(".last-name-label").css({"color": "black"});
            validLastName = true;
        }

        if (firstNameText === "") {
            firstNameErrorMessage.text("Заполните поле");
            firstNameInputField.css({"border-color": "red"});
            $(".first-name-label").css({"color": "red"});
            validFirstName = false;
        } else {
            firstNameErrorMessage.text("");
            firstNameInputField.css({"border-color": "black"});
            $(".first-name-label").css({"color": "black"});
            validFirstName = true;
        }

        if (phoneNumberText === "") {
            phoneNumberErrorMessage.text("Заполните поле");
            phoneNumberInputField.css({"border-color": "red"});
            $(".phone-number-label").css({"color": "red"});
            validPhoneNumber = false;
        } else {
            phoneNumberErrorMessage.text("");
            phoneNumberInputField.css({"border-color": "black"});
            $(".phone-number-label").css({"color": "black"});
            validPhoneNumber = true;
        }

        function checkPhoneNumber() {
            $(".phone-number").each(function (i) {
                if ($(this).text() === phoneNumberText) {
                    phoneNumberErrorMessage.text("Контакт с таким номером уже существует");
                    validPhoneNumber = false;
                }
            });
        }

        checkPhoneNumber();

        $(".field").click(function () {
            lastNameErrorMessage.text("");
            firstNameErrorMessage.text("");
            phoneNumberErrorMessage.text("");
            $(".field").css({'border-color': "black"});
            $(".label").css({'color': "black"});
        });

        if (validLastName && validFirstName && validPhoneNumber) {
            var tableRow = $("<tr>");

            tableRow.html("<td class='sequence-number'></td>\n" +
                "            <td class='last-name'></td>\n" +
                "            <td class='first-name'></td>\n" +
                "            <td class='phone-number'></td>\n" +
                "            <td><button type='button' class='delete-button'>X</button></td>");

            tableRow.find(".sequence-number").text($(".table >tbody >tr").length);
            tableRow.find(".last-name").text(lastNameText);
            tableRow.find(".first-name").text(firstNameText);
            tableRow.find(".phone-number").text(phoneNumberText);

            table.append(tableRow);

            lastNameInputField.val("");
            firstNameInputField.val("");
            phoneNumberInputField.val("");
        }

        function recalculateSequenceNumber() {
            $(".sequence-number").each(function (i) {
                $(this).text(i + 1);
            });
        }

        $(".delete-button").click(function () {
            $(this).parent().parent().remove();
            recalculateSequenceNumber();

            /*$.confirm({
                title: "Удаление",
                content: "Удалить контакт?",
                buttons: {
                    "Да": function () {
                        tableRow.remove();
                    },
                    "Отмена": function () {
                    },
                }
            });*/
        });
    });
});