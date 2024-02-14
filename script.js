function login(){
  window.location='./login.html'
}

function register(){
  window.location='./register.html'
}





let bal = {
    balance: 0,
    spend: 0
  };
  
  function add() {
    let type = document.getElementById('c_type').value;
    let amount = Math.floor(parseFloat(document.getElementById('amount').value));
  
    if (type === '' || isNaN(amount) || amount <= 0) {
        alert('Enter valid Data')
    } else {
      alert('amount added sucessfully')
      bal.balance += amount;
      updateLocalStorageAndUI();
      updateUI(type, amount, 'income');
    }
  }
  
  function addexpense() {
    let type1 = document.getElementById('type1').value;
    let amount1 = Math.floor(parseFloat(document.getElementById('amount1').value));
  
    if (type1 === '' || isNaN(amount1) || amount1 <= 0) {
      alert('Enter valid data');
    } else {
      if (amount1 <= bal.balance) {
        alert('amount reduced sucessfully')
        bal.spend += amount1;
        bal.balance -= amount1;
        updateLocalStorageAndUI();
        updateUI(type1, amount1, 'expense');
      } else {
        alert(`insufficient balance`)
      }
    }
  }
  
  function updateLocalStorageAndUI() {
    localStorage.setItem('budgetData', JSON.stringify(bal));
  }
  
  function updateUI(type, amount, transactionType) {
    if (transactionType === 'income') {
      b.innerHTML = `$${bal.balance}`;
      itable.innerHTML += `<tr>
        <td>${type}</td>
        <td><span class="text-success">+${amount}</span></td>
        <td>${bal.balance}</td>
      </tr>`;
    } else if (transactionType === 'expense') {
      s.innerHTML = `$${bal.spend}`;
      b.innerHTML = `$${bal.balance}`;
      etable.innerHTML += `<tr>
        <td>${type}</td>
        <td><span class="text-danger">-${amount}</span></td>
        <td>${bal.balance}</td>
      </tr>`;
    }
  }
  window.onload = function () {
    const storedData = localStorage.getItem('budgetData');
    if (storedData) {
      bal = JSON.parse(storedData);
      b.innerHTML = `$${bal.balance}`;
      s.innerHTML = `$${bal.spend}`;
     
    }
  };
  
//clear
function clearall(){
  localStorage.removeItem(bal)
  
}


//log out

function logout(){
  window.location="./login.html"
}





//-----------------------------------

function login(){
    window.location="./log.html"
}


function register(){
    window.location="./register.html"
}

const loggedobj1=JSON.parse(localStorage.getItem('loggedobj'))
const username=loggedobj1.username;



function registerto(){


    if(uid.value==''||gid.value==''||pid.value==''){
      alert("Enter All Data")
    }
    else{
      if(uid.value in localStorage){
        alert("Account Already Exist")
        document.getElementById('rform').reset()
      }
      else{
        const userobj={
          uname:uid.value,
          gmail:gid.value,
          passwd:pid.value

        }
        localStorage.setItem(uid.value,JSON.stringify(userobj))
        alert("Registeration Succesfull")
        window.location='./log.html'
        document.getElementById('rform').reset()
      }
    }
  }



  // function loginto(){
  //   if(uname.value==''||passwd.value==''){
  //   alert("Fill All The Data")}}
  // //   }
  //   else{
  //     if(uname.value in localStorage){
  //       const accobj=JSON.parse(localStorage.getItem(uname.value))
  //       console.log(accobj);
  //       if(pswd.value==accobj.passwd){
  //         localStorage.setItem('loggedobj',JSON.stringify(accobj))
  //         alert("Login Succesfull")
  //         window.location='./cal.html'
  //       }
  //       else{
  //         alert("Incorrect Password")
  //         document.getElementById("lform").reset()
  //       }
  //     }
  //     else{
  //       alert("username does not exist")
  //       document.getElementById("lform").reset()
  //     }
  //   }
  // }

    
      function loginto(event){
        event.preventDefault();
        
        if(uname.value==''|| pswd.value==''){
            alert("Fill up all fields")
        }
        else{
            if(uname.value in localStorage){
                const accobj=JSON.parse(localStorage.getItem(uname.value))
                console.log(accobj);
                if(pswd.value==accobj.passwd){
                    localStorage.setItem('loggedobj',JSON.stringify(accobj))
                    alert("Login Successfully!")
                    window.location='./cal.html'
                                            
                }
                else{
                    alert("Incorrect Password :login Failed")
                    document.getElementById("lform").reset()
                }
            }
            else{
                alert("Username does not exist")
                document.getElementById("lform").reset()
            }
        }
        
        }
    
    

    

    
        