function createItem() {

    const db = firebase.firestore();
    const name = document.querySelector("#name");
    const effect = document.querySelector("#effect");
    const quantity = document.querySelector("#quantity");

    db.collection("Items").add({
        name:name.value, 
        effect:effect.value, 
        quantity: parseInt(quantity.value)
    });

    name.value = "";
    effect.value = "";
    quantity.value = "";
};

async function deleteItem(itemId) {

    const db = firebase.firestore();
    let item = await db.collection("Items").doc(itemId).get()
    item.ref.delete()

}
