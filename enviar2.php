<?php
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$text = htmlspecialchars($_POST['text']);

$header = 'From: noreply@dominio.ca' . " \r\n";
$header .= 'Reply-To:' . $email . " \r\n" .;
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$text = "Message sent by " . $name . ",\r\n";
$text .= "Email" . $email . " \r\n";
$text .= "Message: " . $text . " \r\n";
$text .= "Enviado el " . date('d/m/Y', time());

$to = 'info@cochraneroofingalberta.ca';
$subject = 'Mensaje de mi sitio web';

mail($to, $subject, utf8_decode($text), $header);

header("Location:contact.html");

?>