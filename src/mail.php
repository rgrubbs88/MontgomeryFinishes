<?php 

// Global Configuration start: From here you can change the email-id of receiver, cc, from email-id & subject;
$to = "rgrubbs88@gmail.com";

// GoDaddy Email
$from = "info@montgomeryfinishes.com";
//$cc = "alok@sparxitsolutions.com";

$subject = "Montgomery Finishes Contact Us form";
// Global configuration end
$errmasg = "";

 $name = htmlentities(trim($_POST['name']));
 $email = htmlentities(trim($_POST['email']));
 $subject = htmlentities(trim($_POST['company']));
 $msg = htmlentities(trim(nl2br($_POST['msg'])));
 
if($email){
$message = "<table border='0' cellpadding='2' cellspacing='2' width='600'>
<tr><td><h2>Name: ".$name." </h2></td></tr>
<tr><td>Email: ".$email."</td></tr>
<tr><td>Subject: ".$subject."</td></tr>
<tr><td>Message:".$msg."</td></tr>
</table>";
 
 } else{
 	
$errmasg = "No Data";	
 }
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From:'.$from . "\r\n";
//$headers .= 'Cc:'.$cc . "\r\n";



if($errmasg == ""){
if(mail($to,$subject,$message,$headers)){
     echo 1;   
}else{
    echo 'Error occurred while sending email';
}
}else{
    echo $errmasg;
}
?>