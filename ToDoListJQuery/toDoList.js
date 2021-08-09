$(document).ready(function () {
    var inputTextField = $("#input-text-field");
    var list = $(".list");
    var errorMessage = $(".error-message");

    $("#add-button").click(function () {
        var text = inputTextField.val().trim();
        var savedTextBeforeCancel;

        if (text === "") {
            errorMessage.text("Please enter text");
            return;
        }

        errorMessage.text("");

        function setViewMode() {
            listItem.html("<span class='text'></span><button class='edit-button' type='button'>Edit</button><button class='delete-button' type='button'>Delete</button>");

            listItem.find(".text").text(text);

            listItem.find(".delete-button").click(function () {
                listItem.remove();
            });

            listItem.find(".edit-button").click(function () {
                listItem.html("<input class='edit-text'/><button class='save-button' type='button'>Save</button><button class='cancel-button' type='button'>Cancel</button>");
                listItem.find(".edit-text").val(text);
                savedTextBeforeCancel = text;

                listItem.find(".save-button").click(function () {
                    text = listItem.find(".edit-text").val().trim();

                    if (text === "") {
                        errorMessage.text("Please enter text");
                        return;
                    }

                    setViewMode();
                });

                listItem.find(".cancel-button").click(function () {
                    errorMessage.text("");
                    text = savedTextBeforeCancel;
                    setViewMode();
                });
            });
        }

        var listItem = $("<li>");

        setViewMode();

        list.append(listItem);

        inputTextField.val("");
    });
});