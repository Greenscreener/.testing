function navClick(tabClicked) {
    switch (tabClicked) {
        case "home":
            document.getElementById('content').innerHTML = homeContent;
            break;
        case "profile":
            document.getElementById('content').innerHTML = profileContent;
            break;
    }
}
