function createItem() {

    const db = firebase.firestore();
    const name = document.querySelector("#name").value;
    const effect = document.querySelector("#effect").value;
    const quantity = document.querySelector("#quantity").value;

    db.collection("Items").add({
        name, effect, quantity
    });

};

function deleteItem(itemid) {

    console.log(itemid);
    
}
