<?php

// Define some constants
define( "RECIPIENT_NAME", "YOUR NAME" );
define( "RECIPIENT_EMAIL", "YOUR EMAIL" );
define( "EMAIL_SUBJECT", "Visitor Message" );

// Read the form values
$success = false;
$senderName = isset( $_POST['senderName'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['senderName'] ) : "";
$senderEmail = isset( $_POST['senderEmail'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['senderEmail'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

$messagecontent = "\r\n Name:" . $senderName . "\r\n Email:" . $senderEmail . "\r\n Message:" . $message;

$SpamErrorMessage = "No Websites URLs permitted";
if(preg_match("/http/i", "$senderName")) {echo "$SpamErrorMessage"; exit();}
if(preg_match("/http/i", "$senderEmail")) {echo "$SpamErrorMessage"; exit();}
if(preg_match("/http/i", "$message")) {echo "$SpamErrorMessage"; exit();}

  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $senderName . " <" . $senderEmail . ">";
  $success = mail( $recipient, EMAIL_SUBJECT, $messagecontent, $headers );

?>
<html>
  <head>
    <title>Thank You</title>
  </head>
  <body style="background-color:#1b1b1b;">
  <div style="margin-left:auto; margin-right:auto; margin-top:200px; text-align:center; color:#fff !important; font-size:24px; line-height:30px; font-weight:bold; font-family:Arial;">
  <?php if ( $success ) echo "<p>Thanks for sending your message! We'll get back to you shortly.</p>" ?>
  <?php if ( !$success ) echo "<p>There was a problem sending your message. Please try again.</p>" ?>
  <p>Click your browser's Back button to return to the page.</p>
  </div>
  </body>
</html>


