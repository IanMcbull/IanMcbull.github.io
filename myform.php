<?php


if($_POST["message"]) {


mail(ianmugenya@gmail.com, "Here is the subject line",


$_POST[message]. "From: email");


}


?>