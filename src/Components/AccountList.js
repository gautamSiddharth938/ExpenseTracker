import React, { Component } from 'react'



// class AccountList extends Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             accounts: []
//         }
//     }
//     componentDidMount(){
//         // console.log("component mounted")
//         this.createNewAccount('Checking', 500)
//         .then(() => this.createNewAccount('Savings', 100))
//     }

//     createNewAccount = (name, initialBalance) => {
//         const id = nanoid();
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(!isNaN(initialBalance)){
//                     let account = {
//                         name,
//                         id,
//                         balance: parseFloat(initialBalance)
//                         };
//                     this.setState({accounts: [...this.state.accounts, account]})
//                     resolve()
//                 } else {
//                     alert(`Invalid Initial Balance - ${initialBalance}`);
//                     reject()
//                 }
//             }, 250)

//         })
//     }
//     validateForm(){
//       let isValid = true;
//       let errorMsg = "";

//       if(this.accountName.value === ""){
//           isValid = false;
//           errorMsg += "Please enter an account name.\n";
//       }

//       if(this.balance.value === "" || isNaN(parseFloat(this.balance.value))){
//           isValid = false;
//           errorMsg += "Please provide a valid amount for the initial deposit.\n"
//       }

//       if (!/^[a-zA-Z]+$/.test(this.accountName.value)) {
//         isValid = false;
//         errorMsg += "The Account Name should contain only alphabets.\n"
//       }

//       if(errorMsg !== ""){
//          alert("Error:\n"+errorMsg);
//       }

//       return {isValid, errorMsg};
//     }
//     handleSubmit(event) {
//         event.preventDefault();
//         const {isValid, errorMsg} = this.validateForm();
//         if (isValid) {
//            // Calling the addAccount function from App class to add new account in state of App component
//            this.props.addAccount(this.accountName.value, parseFloat(this.balance.value));
//            console.log('handleSubmit called');
//            // Redirecting user to dashboard page after adding new account
//            window.location='dashboard.html';
//         }
//      }
//     makeDeposit(account){
//       /* 
//       This method will be used when user wants to deposit money into selected account.
//       It opens up a pop up where user can input the amount he wants to deposit.
//       After submitting that form it calls the makeDeposit function of App Component passing the selected account and the amount entered by the user.
//       After submitting the form it calls the depositIntoAccount function present in App Component which adds the entered amount to the balance of the selected account.
//       After submitting that form it calls the depositIntoAccount function present in App Component passing the selected account and the amount entered by the user.
//       After submitting that form it calls the makeDeposit function present in App Component passing the selected account and amount as parameters.
//       After submitting the form it calls the depositIntoAccount function which takes two arguments:
//       1. The account object on which we want to perform action.
//       2. The amount that user wants to deposit.
//       */
//       let depositAmountInput=document.getElementById('depositAmount') ;
//       let submitButton= document.getElementById('submitDeposit');
//       depositAmountInput.value="";
//       submitButton.onclick = () => { this.depositIntoAccount(account,depositAmountInput.value)};
//       var popup = new Popup();
//       popup.openPopUp();

//     }
//     makeWithdrawal(account){
//       /* 
//       This method will be used when user wants to withdraw money from selected account.
//       It opens up a pop up where user can input the amount he wants to withdraw.
//       After submitting the form it calls the withdrawFromAccount function which takes three arguments:
//       1. The account object on which we want to perform action.
//       2. The amount that user wants to withdraw.
//       3. A callback function which is executed once the transaction is completed successfully.
//          In our case it redirects user back to dashboard page.
//       */
//       let withdrawAmountInput=document.getElementById("withdrawAmount");
//       let submitButton=document.getElementById("submitWithdraw")
//       withdrawAmountInput.value=""
//       submitButton.addEventListener("click",()=>{
//           this.withdrawFromAccount(account,withdrawAmountInput.value,"/dashboard.html");
//       })
//       var popup = new Popup();
//       popup.closePopUp();
//       popup.openPopUp("withdraw");

//     }
//     handleInputChange(){
//       /* 
//       This event handler is called whenever there is any change in value of input field.
//       It checks whether entered value is positive number or not and enables/disables the Submit button accordingly.
//       We are using it here to check if entered amount is positive number or not.
//       If yes then enable the "Submit" button otherwise disable it.
//       */
//         let inputField=document.getElementById("amount");
//         let btn=document.getElementById("submit");
//         if (isPositiveNumber(inputField.value)){
//             btn.disabled=false;
//         }else{
//             btn.disabled=true;
//         }

//     }
//     createAccount(){
//       /* 
//       This method creates an instance of Account class with given details and pushes it into accounts array.
//       Then it adds newly created account's data into local storage so next time user comes to this webpage
//       he would still have his account information available.
//       Finally it redirect user to dashboard page.
//       */
//         let name=document.getElementById('name').value;
//         let email=document.getElementById('email').value;
//         let password=document.getElementById('password').value;
//         let accType=document.querySelector('input[name="accType"]:checked').id;
//         let salary=document.getElementById('salary').value;

//         //Creating a new account object
//         let newAcc=new Account(name,email,password,accType,salary);

//         //Adding new account into accounts[]
//         accounts.push(newAcc)

//         //Storing account details into Local Storage
//         localStorage.setItem("account",JSON.stringify(accounts));

//         //Redirecting user to Dashboard Page
//         window.location='dashboard.html';

//     }
//     render() {
//         return (
//             <div className="container">
//               <h2>Bank Accounts</h2>
//                 <ul>
//                   {this.state.accounts.map(account =>  
//                     <li key={account.id}>
//                       Type: {account.type} - Balance: ${account.balance}
//                       <button onClick={()=>this.makeDeposit(account)}>Deposit</button>
//                       <button onClick={()=>this.makeWithdrawal(account)}>Withdraw</button>
//                     </li>)
//                   }
//                 </ul>
//                 <br/><hr/>
//                 <h4>Create a New Account</h4>
//                 <label htmlFor='type'>Select an Account Type:</label><br />
//                 <select name='type' onChange={this.handleInputChange} >
//                   <option value='checking'>Checking</option>
//                   <option value='savings'>Savings</option>
//                 </select>
//                 <br /><br />
//                 <label htmlFor='amount'>Initial Deposit Amount:</label>
//                 <input type='number' name='amount' onChange={this.handleInputChange} />
//                 <br /><br />
//                 <button onClick={()=> this.createAccount()} disabled={!this.validateForm()}>Create Account</button>
//                 <button onClick={this.createAccount}>Create Account</button>
//                 <br /><br />
//                 <p>{this.state.error}</p>
//             </div>
//         );
//     }
// };

// export default AccountList;
