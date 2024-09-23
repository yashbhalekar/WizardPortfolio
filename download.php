<?php
$file = 'https://github.com/yashbhalekar/Resume/raw/main/Yash_Bhalekar_Resume(1).pdf';
header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="Yash_Bhalekar_Resume.pdf"');
readfile($file);
?>
