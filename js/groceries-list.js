function addGroceries() {

    // Clear any existing additions to the div
    //document.getElementById("groceries").innerHTML = "";

    // Get the number of subjects entered by the student
    let item = document.getElementById("addItem").value;

    let list = document.getElementById("groceriesList");
    let listItem = document.createElement("li");
    listItem.id = item;

    listItem.append(item);
    list.append(listItem);

}

function removeGroceries() {

    // Get the number of subjects entered by the student
    let item = document.getElementById("removeItem").value;
    let listItem = document.getElementById(item);
    listItem.remove();
}

function clearList() {

    // Clear all items from the grocery list
    document.getElementById("groceriesList").innerHTML = "";
}
