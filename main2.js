let viewLoginPwd = false;

// This function will show/hide a password using jquery
function changePwdView()
{
    let getPwdView = $("#viewPwdLogin");

    if (viewLoginPwd === false)
    {
        getPwdView.attr("type", "text");
        viewLoginPwd = true;
    }
    else if (viewLoginPwd === true)
    {
        getPwdView.attr("type", "password");
        viewLoginPwd = false;
    }
}