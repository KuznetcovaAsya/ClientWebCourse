document.addEventListener("DOMContentLoaded", function () {
    var inputTextField = document.getElementById("input-text-field");
    var list = document.querySelector(".list");

    document.getElementById("add-button").addEventListener("click", function () {
        var text = inputTextField.value.trim();
        var savedTextBeforeCancel;

        function clearAddErrorMessage() {
            if (document.querySelector(".form").contains(document.querySelector(".add-error-message"))) {
                document.querySelector(".add-error-message").remove();
            }
        }

        function clearEditErrorMessage() {
            if (document.querySelector(".list").contains(document.querySelector(".edit-error-message"))) {
                document.querySelector(".edit-error-message").remove();
            }
        }

        if (text === "") {
            if (!document.querySelector(".form").contains(document.querySelector(".add-error-message"))) {
                var addErrorMessage = document.createElement("div");
                addErrorMessage.className = "add-error-message";
                addErrorMessage.textContent = "Please enter text";
                list.before(addErrorMessage);
            }

            return;
        }

        clearAddErrorMessage();

        function setViewMode() {
            listItem.innerHTML = "<span class='text'></span><button class='edit-button' type='button'>Edit</button><button class='delete-button' type='button'>Delete</button>"

            listItem.querySelector(".text").textContent = text;

            listItem.querySelector(".delete-button").addEventListener("click", function () {
                clearAddErrorMessage();

                listItem.parentNode.removeChild(listItem);
            });

            listItem.querySelector(".edit-button").addEventListener("click", function () {
                listItem.innerHTML = "<input class='edit-text'/><button class='save-button' type='button'>Save</button><button class='cancel-button' type='button'>Cancel</button>";
                listItem.querySelector(".edit-text").value = text;
                savedTextBeforeCancel = text;

                clearAddErrorMessage();

                listItem.querySelector(".save-button").addEventListener("click", function () {
                    text = listItem.querySelector(".edit-text").value.trim();

                    if (text === "") {
                        if (!document.querySelector(".list").contains(document.querySelector(".edit-error-message"))) {
                            var editErrorMessage = document.createElement("div");
                            editErrorMessage.className = "edit-error-message";
                            editErrorMessage.textContent = "Please enter text";
                            listItem.after(editErrorMessage);
                        }

                        return;
                    }

                    clearAddErrorMessage();
                    clearEditErrorMessage();

                    setViewMode();
                });

                listItem.querySelector(".cancel-button").addEventListener("click", function () {
                    clearAddErrorMessage();
                    clearEditErrorMessage();

                    text = savedTextBeforeCancel;
                    setViewMode();
                });
            });
        }

        var listItem = document.createElement("li");

        setViewMode();

        list.appendChild(listItem);

        inputTextField.value = "";
    });
});