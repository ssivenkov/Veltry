<?php
	$email = $_POST['email'];
	$from = 'Veltry.site';
	$replyto = 'Message@Veltry.site';
	$subject = "=?utf-8?B?".base64_encode("Email has been processed")."?=";
	$message = "Welcome. Veltry.site has been processed your email: {$email}. The function of sending emails works and can send you new messages.";
	$headers = "From: $from\r\nReply-to: $replyto\r\nContent-type: text/html;charset=utf-8\r\n";
	
	mail($email, $subject, $message, $headers);

	header('Location: /');
?>