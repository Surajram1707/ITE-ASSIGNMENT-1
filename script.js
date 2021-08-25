


function validate() {
  var emailID = document.myForm.EMail.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  var alpha = /^[a-zA-Z]+$/;
  var number = /^[0-9]+$/;

         if( document.myForm.Name.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.style.color = "red";
            document.myForm.Name.focus() ;
            return false;
         }
         if(document.myForm.Name.value.match(number)){
           alert( "Name should contain only alphabets" );
           document.myForm.Name.focus() ;
           document.myForm.Name.style.color="red";
           return false;
         }

         if( document.myForm.EMail.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            document.myForm.EMail.style.color = "red";
            return false;
         }
         if( document.myForm.Age.value == "" || isNaN( document.myForm.Age.value ) ||
            document.myForm.Age.value < 0 || document.myForm.Age.value > 150) {

            alert( "Please provide age between 0-150" );
            document.myForm.Age.focus() ;
            document.myForm.Age.style.color="red";
            return false;
         }
         if( document.myForm.mobile.value.length < 10 ) {
            alert( "Please provide a valid Mobile Number" );
            document.myForm.mobile.style.color="red";
            return false;
         }
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.EMail.focus() ;
            document.myForm.EMail.style.color="red";
            return false;
         }
         if(document.myForm.sem.value < 1 || document.myForm.sem.value > 8){
            alert("Current sem can only be between 1 and 8")
            document.myForm.sem.focus();
            document.myForm.sem.style.color="red";
            return false;
         }
         if(document.myForm.cgpa.value > 10){
            alert("CGPA cannot be greater than 10");
            document.myForm.cgpa.focus();
            document.myForm.cgpa.style.color="red";
            return false;

         }

         alert("Form Validation Complete!! \n All attributes match the conditions \n Details Recorded");
         
      }

