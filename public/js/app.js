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
            <th></th>
            </tr>
            `
            // LISTEN FOR CHANGES AND POPULATE THE TABLE WITH THE RETURNED LIST
            list.forEach(item => {

                itemList.innerHTML += 
                `
                    <tr>
                        <td>${item.data().name}</td>
                        <td>${item.data().effect}</td>
                        <td class='uses'>${item.data().quantity}</td>
                        <td>
                            <span class="material-icons" id='deleteBtn' onclick=deleteItem("${item.id}")>
                                clear
                            </span>
                        </td>
                    </tr>
                `
            })
        })
        
    }

    onload();

});
