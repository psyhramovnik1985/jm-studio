<?php   
$to = 'j.malevanova@gmail.com'; // адрес получателя
$subject = 'Сообщение от заказчика'; // тема письма
$message = "Сообщение с jm-studio \r\n"; // добавляем имя в текст
$message .= "Имя: {$_POST['name']}\r\n"; // добавляем имя в текст
$message .= "Почта: {$_POST['email']}\r\n"; // добавляем адрес почты в текст
$message .= "Текст: {$_POST['text']}"; // добавляем текст в текст
$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n"; // установливаем кодировку
$headers .= 'From: info@vh395258.eurodir.ru' . "\r\n"; // добавляем отправителя
 
if( mail($to, $subject, $message, $headers) ){
 echo header('Location: http://jm-studio.ru/contacts.html');
        exit;
//  '<p style="color: green;">Ваше сообщение отправлено</p>';
}else{
 echo '<p style="color: red;">Ошибка!</p>';
}
?>
