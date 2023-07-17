// password reset section
resetPassword=document.querySelector("#passwordReset a");
resetPassword.addEventListener("click",passReset);
function passReset(){
    oldPassword=prompt("Enter old password");
    newPassword=prompt("Enter new password");
    confirmPassword=prompt("Confirm new password");
    if(oldPassword==newPassword){
        alert("Old password can't be used as new password. Kindly use a new password!")
    }else if(oldPassword != newPassword && newPassword==confirmPassword)
        {
            alert("Password set successfully! Your new password is "+newPassword)
    }else if(newPassword!=confirmPassword){
        alert("Password mismatch, confirm new password")
    }else{
        alert("Password set successfully! Your new password is "+newPassword)

    }
}

let submit2=document.querySelector("#submit2");
submit2.addEventListener("click",submit2Click);
function submit2Click(){
    alert("Page not ready. Site under development!")
}