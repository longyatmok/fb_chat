navCondition = true;

/**
 * Toggle the view of nav
 * if True: login view, False: list view
 */
function toggleNav() {
    navCondition = !navCondition;
    if (navCondition){
        $('.content.list').hide();
        $('.content.login').show();
    } else {
        $('.content.login').hide();
        $('.content.list').show();
    }
}

// $('#list-nav').click(toggleNav);
// $('#login-nav').click(toggleNav);