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
    const db = firebase.firestore();
    const itemToDelete = db.collection("Items").where('id', '==', itemid);

    itemToDelete.get().then((querySnapshot) => {
        console.log("QUERY SNAPSHOT:",querySnapshot)
        querySnapshot.forEach((doc) => {
            console.log("DOC:", doc)
            doc.ref.delete();
        });
    });

    console.log(itemToDelete)
}
