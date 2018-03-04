function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if (yourLeft + yourRight == friendsLeft + friendsRight) {
        if (yourLeft == friendsLeft || yourLeft == friendsRight || yourRight == friendsLeft || yourRight == friendsRight)
            return true;
        else return false;
    } else
        return false;
}
