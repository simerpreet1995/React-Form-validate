<?php
//get data from form  

$username = $_POST['username'];
$email= $_POST['email'];
$birthday= $_POST['birthday'];
$password= $_POST['password'];
$confirmPassowrd= $_POST['confirmPassword'];




$to = "simerpreet2855@gmail.com";
$subject = "Mail From star coder contact form";
$txt ="username = ". $username . "\r\n  email = " . $email . "\r\n birthday =" . $birthday ."\r\n password  =" . $password;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:Thankyou.js");
?>