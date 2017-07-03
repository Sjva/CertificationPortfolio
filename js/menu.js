
var menuItems = document.getElementsByClassName("trans");

for(var i = 0; i<menuItems.length; i++){
    menuItems[i].addEventListener("click", function(){
        console.log(this.id);
        switch (this.id) {
            case "about":
                window.location = "index.html";
                break;
            case "projects":
                window.location = "projects.html";;
                break;
            case "contact":
                window.location = "contacts.html";;
                break;
            // default:
            //     alert( 'Я таких значений не знаю' );
        }
    });

}