let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

while (true) {
    let search = prompt("Search for a contact (or Cancel to quit)");

    if (search === null) {
        break;
    }

    let result = "";

    for (let contact of contacts) {
        if (contact.name.toLowerCase().includes(search.toLowerCase())) {
            result += `Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}\n\n`;
        }
    }

    if (result === "") {
        alert("No contact found for: " + search);
    } else {
        alert(result);
    }
}