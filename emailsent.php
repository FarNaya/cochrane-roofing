<?php
require "PHPMailer/Exception.php";
require "PHPMailer/PHPMailer.php";
require "PHPMailer/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$oMail= new PHPMailer();
$oMail->isSMTP();
$oMail->Host="smtp.office365.com";
$oMail->Port=587;
$oMail->SMTPSecure="tls";
$oMail->SMTPAuth=true;
$oMail->Username="info@cochraneroofingalberta.ca";
$oMail->Password="hierbabuena2021";
$oMail->setFrom("info@cochraneroofingalberta");

// 

error_reporting(E_ALL);
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$comment = htmlspecialchars($_POST['comment']);

$header = 'From: noreply@dominio.ca' . " \r\n";
$header .= 'Reply-To:' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$text = "Message sent by " . $name . ",\r\n";
$text .= "Email: " . $email . " \r\n";
$text .= "Phone number: " . $phone . " \r\n";
$text .= "Message: " . $comment . " \r\n";
$text .= "Sent " . date('d/m/Y', time());

$to = 'faridanaya08@gmail.com';
$subject = 'Message from cochraneroofingalberta.ca';

mail($to, $subject, utf8_decode($text), $header);

header("Location:index.html");

?>