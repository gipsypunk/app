<?php

// Get data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Token
$token = '6024918774:AAGqOR8nTQz_dEoamxDHTEZ7MYiU2L0PNsw';

// Chat ID
$chat_id = '-1002048714712';

// Message
$decor= "------------------------------------------------";
$message = "Ser you have a new order:\n$decor\nName: $name\nEmail: $email\nPhone number: $phone";

// URL 
$telegram_url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($message);

// Send request to API Telegram
$response = file_get_contents($telegram_url);

// Check the result
if ($response === false) {
    echo 'Something went wrong, please try again.';
} else {
    echo 'Your request has been sent.';
}
?>
