let contacts = [
    {
        name: "sir Yousuf",
        imgURL: "siryousuf.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `0900-78601`,
        email: `siryousuf123@example.com`,
        'chat-message': `Hey there! I am using WhatsApp.`
    },

    {
        name: "Ashba",
        imgURL: "ashba.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `0900-78601`,
        email: `ashba234@example.com`,
        'chat-message': `Stay there to prove everyone wrong.`
    },

    {
        name: "Javaid",
        imgURL: "javaid.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `0900-78601`,
        email: `javaid345@example.com`,
        'chat-message': `urgent calls only.`
    },

    {
        name: "Haris",
        imgURL: "haris.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `0900-78601`,
        email: `haris456@example.com`,
        'chat-message': `busy`
    },

    {
        name: "Tania",
        imgURL: "tania.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `0900-78601`,
        email: `tania567@example.com`,
        'chat-message': `sleeping.`
    },

    {
        name: "Arman",
        imgURL: "arman.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `0900-78601`,
        email: `arman678@example.com`,
        'chat-message': `new number.`
    },

    {
        name: "Raqeeb",
        imgURL: "raqeeb.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check"></i>`,
        number: `0900-78601`,
        email: `Raqeeb789@example.com`,
        'chat-message': `watching movie.`
    },

    {
        name: "waqas bhai",
        imgURL: "waqasbhai.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-check-double double-ticks"></i>`,
        number: `0900-78601`,
        email: `waqasbhai987@example.com`,
        'chat-message': `battery about to die.`
    },

    {
        name: "owais",
        imgURL: "owais.jpg",
        message: "blah blah blah blah blah bl...",
        icon: `<i class="fas fa-clock"></i>`,
        number: `0900-78601`,
        email: `owais892@example.com`,
        'chat-message': `At Gym.`
    }
]

function initialize() {
    let contactList = document.querySelector(".chats-list");

    for (let i = 0; i < contacts.length; i++) {
        contactList.innerHTML += `<div class="chats-list-item" onclick="showChat(${i})">
        <div class="contact-profile-pic" style="background-image: url(images/${contacts[i].imgURL});">

        </div>

        <div class="contact-chat-info">
            <div class="name-section">
                <h5>${contacts[i].name}</h5>
                <h6>Yesterday</h6>
            </div>
            
            <div>
             <p><span>${contacts[i].icon}</span> ${contacts[i].message}</p>
            </div>
        </div>

    </div>`;

    }
}


function showChat(indexNum) {
    document.querySelector(".chat-detail").style = `display: flex !important`;
    document.querySelector(".contact-photo").style["background-image"] = `url(images/${contacts[indexNum].imgURL})`;
    document.querySelector(".contact-name").innerHTML = contacts[indexNum].name;
    document.querySelector(".contact-number").innerHTML = `<span class="dial-icon"><i class="fas fa-phone"></i></span> ${contacts[indexNum].number}`;
    document.querySelector(".contact-email").innerHTML = `<span class="email-icon"><i class="far fa-envelope"></i></span> ${contacts[indexNum].email}`;
    document.querySelector(".contact-message").innerHTML = contacts[indexNum]["chat-message"];
}