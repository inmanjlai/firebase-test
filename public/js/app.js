document.addEventListener("DOMContentLoaded", (event) =>{
    
    const onload = async() => {

        const db = firebase.firestore();
        const itemsCollection = db.collection("Items");
        const itemList = document.querySelector(".item-list")
        
        itemsCollection.onSnapshot(list => {
            
            // CREATE A TABLE WITH THE SPECIFIED HEADERS
            itemList.innerHTML = `
            <tr>
            <th>Item Name</th>
            <th>Item Effect</th>
            <th>Item Uses</th>
            </tr>
            `
            // LISTEN FOR CHANGES AND POPULATE THE TABLE WITH THE RETURNED LIST
            list.forEach(item => {
                item = item.data()
                itemList.innerHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.effect}</td>
                        <td class='uses'>${item.quantity}</td>
                    </tr>
                `
            })
        })
        
    }

    onload();

});
