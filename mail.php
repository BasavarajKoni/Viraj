<?php
		
         $to = "chandra.hydromak@gmail.com";
         $subject = " ".$_REQUEST['fname']." ".$_REQUEST['lname']." from ".$_REQUEST['city'];
         
         $message = "<b>Dear Sir,</b><br/><br/>";
         $message .= "<b>I am ".$_REQUEST['fname']." ".$_REQUEST['lname']." from ".$_REQUEST['city'].". ".$_REQUEST['comments']."</b><br/>";
		 $message .= "<b><br/>Looking for your reply.</b><br/><br/>";
		 $message .= "<b>Yoursfaithful</b><br/>";
		 $message .= $_REQUEST['fname']." ".$_REQUEST['lname']."<br/><br/>";
		 $message .= "<b>Date : </b>".$_REQUEST['date']."<br/>";
		 $message .= "<b>Contact No : </b>".$_REQUEST['phnumber']."<br/>";
		 $message .= "<b>Company Name : </b>".$_REQUEST['company']."<br/>";
         $message .= "<b>Email: </b>".$_REQUEST['email'];
		 
         $header = "From:".$_REQUEST['email'];//+Tr.Shakuntala@somedomain.com \r\n";
         $header .= " Cc: \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            header('Location:enquiry.html');
         }else {
            echo "Message could not be sent...";
         }
		 
      ?>