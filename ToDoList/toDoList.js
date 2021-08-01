document.addEventListener("DOMContentLoaded", function () {
    var inputTextField = document.getElementById("input-text-field");
    var list = document.getElementById("list");
    var errorMessage = document.querySelector(".error-message");

    document.getElementById("button").addEventListener("click", function () {
        var text = inputTextField.value;
        var savedTextBeforeCancel;

        if (text === "") {
            errorMessage.textContent = "Please enter text";
            return;
        }

        errorMessage.textContent = "";

        function setViewMode() {
            listItem.innerHTML = "<span class='text'></span><button class='edit-button' type='button'>Edit</button><button class='delete-button' type='button'>Delete</button>"

            listItem.querySelector(".text").textContent = text;

            listItem.querySelector(".delete-button").addEventListener("click", function () {
                listItem.parentNode.removeChild(listItem);
            });

            listItem.querySelector(".edit-button").addEventListener("click", function () {
                listItem.innerHTML = "<input class='edit-text'/><button class='save-button' type='button'>Save</button><button class='cancel-button' type='button'>Cancel</button>";
                listItem.querySelector(".edit-text").value = text;
                savedTextBeforeCancel = text;

                listItem.querySelector(".save-button").addEventListener("click", function () {
                    text = listItem.querySelector(".edit-text").value;

                    if (text === "") {
                        errorMessage.textContent = "Please enter text";
                        return;
                    }

                    setViewMode();
                });

                listItem.querySelector(".cancel-button").addEventListener("click", function () {
                    errorMessage.textContent = "";
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