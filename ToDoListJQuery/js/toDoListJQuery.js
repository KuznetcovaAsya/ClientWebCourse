$(document).ready(function () {
    var inputTextField = $("#input-text-field");
    var list = $(".list");

    $("#add-button").click(function () {
        var text = inputTextField.val().trim();
        var savedTextBeforeCancel;

        function clearAddErrorMessage() {
            if ($("div").hasClass("add-error-message")) {
                $(".add-error-message").remove();
            }
        }

        function clearEditErrorMessage() {
            if ($("div").hasClass("edit-error-message")) {
                $(".edit-error-message").remove();
            }
        }

        if (text === "") {
            if (!$("div").hasClass("add-error-message")) {
                var addErrorMessage = $("<div class=\"add-error-message\">Please enter text</div>");
                list.before(addErrorMessage);
            }

            return;
        }

        clearAddErrorMessage();

        function setViewMode() {
            listItem.html("<span class='text'></span><button class='edit-button' type='button'>Edit</button><button class='delete-button' type='button'>Delete</button>");

            listItem.find(".text").text(text);

            listItem.find(".delete-button").click(function () {
                clearAddErrorMessage();

                listItem.remove();
            });

            listItem.find(".edit-button").click(function () {
                listItem.html("<input class='edit-text'/><button class='save-button' type='button'>Save</button><button class='cancel-button' type='button'>Cancel</button>");
                listItem.find(".edit-text").val(text);
                savedTextBeforeCancel = text;

                clearAddErrorMessage();

                listItem.find(".save-button").click(function () {
                    text = listItem.find(".edit-text").val().trim();

                    if (text === "") {
                        if (!$("div").hasClass("edit-error-message")) {
                            var editErrorMessage = $("<div class=\"edit-error-message\">Please enter text</div>");
                            listItem.after(editErrorMessage);
                        }

                        return;
                    }

                    clearAddErrorMessage();
                    clearEditErrorMessage();

                    setViewMode();
                });

                listItem.find(".cancel-button").click(function () {
                    clearAddErrorMessage();
                    clearEditErrorMessage();
                    
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