document.addEventListener("DOMContentLoaded", (event) =>{

    const app = firebase.app();
    const db = firebase.firestore();

    const itemList = document.querySelector(".item-list")

    // TO GET DATA IN REAL TIME

    function displayItemsRT(elementToPopulate) {

        // STORING THE COLLECTION OBJECT OF ITEMS IN VAR
        const items = db.collection("Items");

        // USING THE ON SNAPSHOT LISTENER TO WAIT FOR CHANGES THEN EXECEUTE CALLBACK
        items.onSnapshot((doc) => {
            elementToPopulate.innerHTML = ""
            doc.forEach(item => {
                data = item.data();
                elementToPopulate.innerHTML += `
                    <li>
                        ${item.id}: ${data.name}: ${data.effect}
                        <button onclick="deleteItem('${item.id}')">delete</button>
                    </li>
                `
            })
        });
    }
    displayItemsRT(itemList);

});

// HOW TO LOG IN USING THE GOOGLE AUTH PROVIDER ->

// function googleLogin(){
//     const provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)
//         .then((result) =>{
//             const user = result.user;
//             document.write(`Hello, ${user.displayName}`);
//             console.log(user);
//         });
// };
