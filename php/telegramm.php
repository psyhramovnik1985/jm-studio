<?php
 
$phone = $_POST['user_phone'];
 
$token2 = "*********************************************";  
$token = "*********************************************";  

$chat_id2 = "*********"; 
$chat_id = "*********";

$arr = array(
  'Телефон: ' => $phone
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
$sendToTelegram2 = fopen("https://api.telegram.org/bot{$token2}/sendMessage?chat_id={$chat_id2}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo header('Location: http://jm-studio.ru/index.html');
} else {
  echo "Error";
}
?>