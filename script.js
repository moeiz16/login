
      let array = [];
      function signup() {
        const name = document.getElementById("nameField").value;
        const age = document.getElementById("ageField").value;
        const email = document.getElementById("emailField").value;
        const password = document.getElementById("passField").value;
        

        let gender = document.getElementsByName("gender");
        let gender_value = null;
        for (let i = 0; i < gender.length; i++) {
          if (gender[i].checked) {
            gender_value = gender[i].value;
          }
        }

        if (name == "") {
          alert("Enter a Name");
        } else if (age == "" || isNaN(age) || parseInt(age) <= 0) {
          alert("Enter a Valid Age");
        } else if (gender_value == null) {
          alert("Select a Gender Please");
        } else if(password==""){
            alert("Enter a Password");
        }
        else {
          let pushObject = {
            Name: name,
            Age: age,
            Gender: gender_value,
            Email: email,
            Password:password
          };
          array.push(pushObject);
          alert("Sign Up Successful");
          document.getElementById("nameField").value = "";
          document.getElementById("ageField").value = "";
          document.getElementById("emailField").value = "";
          document.getElementById("passField").value = "";
        }

      }
      function authenticate(){
        const enteredLoginEmail=document.getElementById('loginEmailField').value;
        const enteredLoginPass=document.getElementById('loginPassField').value;
        let found=false;
        for(let i=0;i<array.length;i++){
            if(array[i].Email==enteredLoginEmail && array[i].Password==enteredLoginPass){
                found=true;
                break;
            }
        }
            if(found==true){
                alert("Authentication Successful");
            }else{
                alert("Authentication Unsuccessful");
                
            }
           
            document.getElementById("loginEmailField").value = "";
            document.getElementById("loginPassField").value = "";
      }
