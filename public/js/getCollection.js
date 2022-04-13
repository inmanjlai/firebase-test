const getCollection = async(collection) => {
    const db = firebase.firestore();

    const itemsCollection = db.collection(collection);
    const items = await itemsCollection.get();

    return items;
}