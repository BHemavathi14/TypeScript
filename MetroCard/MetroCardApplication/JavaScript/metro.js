"use strict";
let UserIdAutoIncrement = 1000;
let UserTravelIdAutoIncrement = 2000;
let TicketIdAutoIncrement = 3000;
let CurrentUserId;
let CurrentUserName;
let CurrentUserEmail;
let NewUserNameStatus = false;
let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;
//let NewUserConfirmPassword = false;
let NewUserPhoneNumberStatus = false;
class User {
    constructor(paramUserName, paramUserEmail, paramUserPassword, paramUserPhoneNumber, paramUserBalance) {
        UserIdAutoIncrement++;
        this.CardId = "MC" + UserIdAutoIncrement.toString();
        this.UserName = paramUserName;
        this.UserEmail = paramUserEmail;
        this.UserPassword = paramUserPassword;
        this.UserPhoneNumber = paramUserPhoneNumber;
        this.UserBalance = paramUserBalance;
    }
}
class TravelDetails {
    constructor(paramCardId, paramFromLocation, paramToLocation, paramDate, paramTravelCost) {
        UserTravelIdAutoIncrement++;
        this.TravelId = "TID" + UserTravelIdAutoIncrement.toString();
        this.CardId = paramCardId;
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.Date = paramDate;
        this.TravelCost = paramTravelCost;
    }
}
class TicketFairDetails {
    constructor(paramFromLocation, paramToLocation, paramTicketPrice) {
        TicketIdAutoIncrement++;
        this.TicketId = "MR" + TicketIdAutoIncrement.toString();
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.TicketPrice = paramTicketPrice;
    }
}
// adding default data 
let UserArrayList = new Array();
UserArrayList.push(new User("Hemanth", "hemanth@gmail.com", "Hemanth@123", 9789011226, 1500));
UserArrayList.push(new User("Harish", "harish@gmail.com", "Harish@123", 9445153060, 1000));
let TravelList = new Array();
//TID2001	CMRL1001	Airport	Egmore	10/10/2023	55
//TID2002	CMRL1001	Egmore	Koyambedu	10/10/2023	32
// TID2003	CMRL1002	Alandur	Koyambedu	10/11/2023	25
// TID2004	CMRL1002	Egmore	Thirumangalam	10/11/2023	25
TravelList.push(new TravelDetails("MC1001", "Airport", "Egmore", new Date(2023, 10, 10), 55));
TravelList.push(new TravelDetails("MC1001", "Egmore", "Koyambedu", new Date(2023, 10, 10), 32));
TravelList.push(new TravelDetails("MC1002", "Alandur", "Koyambedu", new Date(2023, 10, 11), 25));
TravelList.push(new TravelDetails("MC1002", "Egmore", "Thirumangalam", new Date(2023, 10, 11), 25));
let TicketFairList = new Array();
TicketFairList.push(new TicketFairDetails("Airport", "Egmore", 55));
TicketFairList.push(new TicketFairDetails("Airport", "Koyambedu", 25));
TicketFairList.push(new TicketFairDetails("Alandur", "Koyambedu", 25));
TicketFairList.push(new TicketFairDetails("Koyambedu", "Egmore", 32));
TicketFairList.push(new TicketFairDetails("Vadapalani", "Egmore", 45));
TicketFairList.push(new TicketFairDetails("Arumbakkam", "Egmore", 25));
TicketFairList.push(new TicketFairDetails("Vadapalani", "Koyambedu", 25));
TicketFairList.push(new TicketFairDetails("Arumbakkam", "Koyambedu", 16));
function checkNewUserName(paramNewUserName) {
    let newUserName = document.getElementById(paramNewUserName).value;
    let newUserNameMessage = document.getElementById(paramNewUserName + "Message");
    let newUserNameRegex = /^[a-zA-Z]{3,20}$/;
    if (newUserNameRegex.test(newUserName)) {
        NewUserNameStatus = true;
        newUserNameMessage.style.visibility = "hidden";
    }
    else {
        NewUserNameStatus = false;
        newUserNameMessage.innerHTML = "Please enter valid name";
        newUserNameMessage.style.visibility = "visible";
        newUserNameMessage.style.color = "tomato";
        newUserNameMessage.style.marginLeft = "10px";
    }
}
function checkNewUserEmail(paramNewUserEmail) {
    let newUserEmail = document.getElementById(paramNewUserEmail).value;
    let newUserEmailMessage = document.getElementById(paramNewUserEmail + "Message");
    let newUserEmailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (newUserEmailRegex.test(newUserEmail)) {
        NewUserEmailStatus = true;
        newUserEmailMessage.style.visibility = "hidden";
    }
    else {
        NewUserEmailStatus = false;
        newUserEmailMessage.innerHTML = "Please enter valid name";
        newUserEmailMessage.style.visibility = "visible";
        newUserEmailMessage.style.color = "tomato";
        newUserEmailMessage.style.marginLeft = "10px";
    }
}
function checkNewUserPassword(paramNewUserPassword) {
    let newUserPassword = document.getElementById(paramNewUserPassword).value;
    let newUserPasswordMessage = document.getElementById(paramNewUserPassword + "Message");
    let newUserPasswordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (newUserPasswordRegex.test(newUserPassword)) {
        NewUserPasswordStatus = true;
        newUserPasswordMessage.style.visibility = "hidden";
    }
    else {
        NewUserPasswordStatus = false;
        newUserPasswordMessage.innerHTML = "Please enter valid password";
        newUserPasswordMessage.style.visibility = "visible";
        newUserPasswordMessage.style.color = "tomato";
        newUserPasswordMessage.style.marginLeft = "10px";
    }
}
function checkNewUserConfirmPassword(paramNewUserPassword, paramNewUserConfirmPassword) {
    let newUserPassword = document.getElementById(paramNewUserPassword).value;
    let newUserConfirmPassword = document.getElementById(paramNewUserConfirmPassword).value;
    let newUserPasswordMessage = document.getElementById("confirmPasswordMessage");
    if (newUserPassword === newUserConfirmPassword) {
        NewUserPasswordStatus = true;
        newUserPasswordMessage.style.visibility = "hidden";
    }
    else {
        NewUserPasswordStatus = false;
        newUserPasswordMessage.innerHTML = "Password does not match";
        newUserPasswordMessage.style.visibility = "visible";
        newUserPasswordMessage.style.color = "tomato";
        newUserPasswordMessage.style.marginLeft = "10px";
    }
}
function checkNewUserPhoneNumber(paramNewUserPhoneNumber) {
    let newUserPhoneNumber = document.getElementById(paramNewUserPhoneNumber).value;
    let newUserPhoneNumberMessage = document.getElementById(paramNewUserPhoneNumber + "Message");
    let newUserPhoneNumberRegex = /^\d{10}$/;
    if (newUserPhoneNumberRegex.test(newUserPhoneNumber)) {
        NewUserPhoneNumberStatus = true;
        newUserPhoneNumberMessage.style.visibility = "hidden";
    }
    else {
        NewUserPhoneNumberStatus = false;
        newUserPhoneNumberMessage.innerHTML = "Please enter valid phone number";
        newUserPhoneNumberMessage.style.visibility = "visible";
        newUserPhoneNumberMessage.style.color = "tomato";
        newUserPhoneNumberMessage.style.marginLeft = "10px";
    }
}
// Functions
function newUserPage() {
    let homePage = document.getElementById('homePage');
    let newUserPage = document.getElementById('newUserPage');
    let dropdownId = document.getElementById('dropdown');
    let info = document.getElementById("AddInfoForm");
    info.style.display = "none";
    homePage.style.display = "none";
    newUserPage.style.display = "block";
    dropdownId.style.display = "none";
}
function signUp() {
    let signuppage = document.getElementById("newUserPage");
    signuppage.style.display = "block";
    if (NewUserNameStatus == true &&
        NewUserEmailStatus == true &&
        NewUserPasswordStatus == true &&
        NewUserPhoneNumberStatus == true) {
        let newUserName = document.getElementById('newUserName').value;
        let newUserEmail = document.getElementById('newUserEmail').value;
        let newUserPassword = document.getElementById('newUserPassword').value;
        let newUserPhoneNumber = document.getElementById('newUserPhoneNumber').value;
        let newUserBalance = document.getElementById('newUserBalance').value;
        UserArrayList.push(new User(newUserName, newUserEmail, newUserPassword, +newUserPhoneNumber, +newUserBalance));
        alert("Registration Successful");
        let homePage = document.getElementById('homePage');
        homePage.style.display = "block";
        let signuppage = document.getElementById("newUserPage");
        signuppage.style.display = "none";
        let info = document.getElementById("AddInfoForm");
        info.style.display = "none";
    }
    else {
        alert("Please fill out the form fully.");
    }
}
function existingUserPage() {
    let fairdetail = document.getElementById('ticketBooking');
    fairdetail.style.display = "none";
    let rechargeId = document.getElementById("topup");
    rechargeId.style.display = "none";
    let orderInfo = document.getElementById('travelHistory');
    orderInfo.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let fairInfo = document.getElementById('ticketFairDetails');
    fairInfo.style.display = "none";
    let info = document.getElementById("AddInfoForm");
    info.style.display = "none";
    let homePage = document.getElementById('homePage');
    let existingUserPage = document.getElementById('existingUserPage');
    let availableUser = document.getElementById('availableUser');
    homePage.style.display = "none";
    existingUserPage.style.display = "block";
    availableUser.innerHTML = "<h2>Available User</h2>";
    for (let i = 0; i < UserArrayList.length; i++) {
        availableUser.innerHTML += `User Name : ${UserArrayList[i].UserName} | User Id : ${UserArrayList[i].UserEmail}<br>`;
    }
}
function signIn() {
    let noExistingUserIdChecker = false;
    let existingUserId = document.getElementById('existingUserId').value;
    let dropdownId = document.getElementById('dropdown');
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "block";
    let existingUserIdRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (existingUserIdRegex.test(existingUserId)) {
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].UserEmail == existingUserId) {
                CurrentUserId = UserArrayList[i].CardId;
                CurrentUserName = UserArrayList[i].UserName;
                dropdownId.style.display = "block";
                existingUserPage.style.display = "none";
                alert('Login Successful');
                return;
            }
            else {
                noExistingUserIdChecker = true;
            }
        }
        if (noExistingUserIdChecker) {
            alert("Enter Valid User Id");
        }
    }
    else {
        alert("Enter Valid User Id.");
    }
    let info = document.getElementById("AddInfoForm");
    info.style.display = "none";
}
function topUp() {
    let fairdetail = document.getElementById('ticketBooking');
    fairdetail.style.display = "none";
    let orderInfo = document.getElementById('travelHistory');
    orderInfo.style.display = "none";
    let fairInfo = document.getElementById('ticketFairDetails');
    fairInfo.style.display = "none";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let info = document.getElementById("AddInfoForm");
    info.style.display = "none";
    let rechargeId = document.getElementById("topup");
    rechargeId.style.display = "block";
    let currentBalance = document.getElementById("currentBalance");
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].CardId == CurrentUserId) {
            currentBalance.innerHTML = `Your Current Balance is ${UserArrayList[i].UserBalance.toString()}`;
        }
    }
}
function recharge() {
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].CardId === CurrentUserId) {
            let amount = document.getElementById('amount').value;
            UserArrayList[i].UserBalance += parseInt(amount);
            alert('Recharge Successful');
        }
    }
    let fairdetail = document.getElementById('ticketBooking');
    fairdetail.style.display = "none";
    let fairInfo = document.getElementById('ticketFairDetails');
    fairInfo.style.display = "none";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let info = document.getElementById("AddInfoForm");
    info.style.display = "none";
    let rechargeId = document.getElementById("topup");
    rechargeId.style.display = "block";
    let currentBalance = document.getElementById('currentBalance');
    currentBalance.style.display = "block";
    let orderInfo = document.getElementById('orderHistory');
    orderInfo.style.display = "none";
}
function ShowBalance() {
    let fairdetail = document.getElementById('ticketBooking');
    fairdetail.style.display = "none";
    let rechargeId = document.getElementById("topup");
    rechargeId.style.display = "none";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let info = document.getElementById("AddInfoForm");
    info.style.display = "none";
    let orderInfo = document.getElementById('travelHistory');
    orderInfo.style.display = "none";
    let fairInfo = document.getElementById('ticketFairDetails');
    fairInfo.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "block";
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].CardId == CurrentUserId) {
            let currentBalance = document.getElementById("balance");
            currentBalance.innerHTML = `Your Available Balance is ${UserArrayList[i].UserBalance.toString()}`;
        }
    }
}
function ShowHistory() {
    let fairdetail = document.getElementById('ticketBooking');
    fairdetail.style.display = "none";
    let info = document.getElementById("AddInfoForm");
    info.style.display = "none";
    let fairInfo = document.getElementById('ticketFairDetails');
    fairInfo.style.display = "none";
    let rechargeId = document.getElementById("topup");
    rechargeId.style.display = "none";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let orderInfo = document.getElementById('travelHistory');
    orderInfo.style.display = "block";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    const tableBody = document.querySelector("#dataTable1 tbody");
    let orderCount = 0;
    tableBody.innerHTML = "";
    TravelList.forEach((item) => {
        if (item.CardId == CurrentUserId) {
            orderCount++;
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.FromLocation}</td>
        <td>${item.ToLocation}</td>
        <td>${item.TravelCost}</td>
        <td>${item.Date.toLocaleDateString()}</td>
      `;
            tableBody.appendChild(row);
        }
        if (orderCount == 0) {
            alert("Order History is empty.");
        }
    });
}
function FairDetails() {
    let fairdetail = document.getElementById('ticketBooking');
    fairdetail.style.display = "none";
    let rechargeId = document.getElementById("topup");
    rechargeId.style.display = "none";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let orderInfo = document.getElementById('travelHistory');
    orderInfo.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let fairInfo = document.getElementById('ticketFairDetails');
    fairInfo.style.display = "block";
    const tableBody = document.querySelector("#dataTable2 tbody");
    tableBody.innerHTML = "";
    TicketFairList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.FromLocation}</td>
        <td>${item.ToLocation}</td>
        <td>${item.TicketPrice}</td>
        <td>
          <button onclick="Edit('${item.TicketId}')">Edit</button>
          <button onclick="Delete('${item.TicketId}')">Delete</button>
        </td>
      `;
        tableBody.appendChild(row);
    });
}
function Travel() {
    let rechargeId = document.getElementById("topup");
    rechargeId.style.display = "none";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let orderInfo = document.getElementById('travelHistory');
    orderInfo.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let fairInfo = document.getElementById('ticketFairDetails');
    fairInfo.style.display = "none";
    let fairdetail = document.getElementById('ticketBooking');
    fairdetail.style.display = "block";
    const tableBody = document.querySelector("#dataTable3 tbody");
    tableBody.innerHTML = "";
    TicketFairList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.FromLocation}</td>
        <td>${item.ToLocation}</td>
        <td>${item.TicketPrice}</td>
        <td><button onclick="Booking('${item.TicketId}')">Book</button></td>
    
      `;
        tableBody.appendChild(row);
    });
}
function Booking(ticketId) {
    UserArrayList.forEach((item) => {
        if (item.CardId == CurrentUserId) {
            TicketFairList.forEach((fair) => {
                if (fair.TicketId == ticketId) {
                    if (item.UserBalance > fair.TicketPrice) {
                        item.UserBalance -= fair.TicketPrice;
                        TravelList.push(new TravelDetails(item.CardId, fair.FromLocation, fair.ToLocation, new Date(), fair.TicketPrice));
                        alert("Ticket Booking Successfully....");
                    }
                    else {
                        alert("Balance is too Low...");
                    }
                }
            });
        }
    });
}
function SignOut() {
    let fairdetail = document.getElementById('ticketBooking');
    fairdetail.style.display = "none";
    let rechargeId = document.getElementById("topup");
    rechargeId.style.display = "none";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let orderInfo = document.getElementById('travelHistory');
    orderInfo.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let fairInfo = document.getElementById('ticketFairDetails');
    fairInfo.style.display = "none";
    let homePage = document.getElementById('homePage');
    homePage.style.display = "block";
    let dropdownId = document.getElementById('dropdown');
    dropdownId.style.display = "none";
}
const form = document.getElementById("AddInfoForm");
const from = document.getElementById("from");
const destination = document.getElementById("destination");
const price = document.getElementById("price");
const tableBody = document.querySelector("#dataTable tbody");
let editingId = null;
function Add() {
    let info = document.getElementById("AddInfoForm");
    info.style.display = "block";
    let fairInfo = document.getElementById('ticketFairDetails');
    fairInfo.style.display = "none";
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const fromLocation = from.value.trim();
        const toLocation = destination.value.trim();
        const priceAmount = parseInt(price.value.trim());
        if (editingId !== null) {
            const index = TicketFairList.findIndex((item) => item.TicketId === editingId);
            if (index !== -1) {
                TicketFairList[index] = Object.assign(Object.assign({}, TicketFairList[index]), { FromLocation: fromLocation, ToLocation: toLocation, TicketPrice: priceAmount });
                editingId = null;
            }
        }
        else {
            const newData = {
                FromLocation: fromLocation, ToLocation: toLocation, TicketPrice: priceAmount,
                TicketId: ""
            };
            TicketFairList.push(newData);
            alert("Details Added Successfully");
            FairDetails();
            form.reset();
        }
    });
}
const efrom = document.getElementById("efrom");
const edestination = document.getElementById("edestination");
const eprice = document.getElementById("eprice");
let currentTicketId;
function Edit(items) {
    let editForm = document.getElementById("EditInfoForm");
    editForm.style.display = "block";
    const item = TicketFairList.find((item) => item.TicketId === items);
    if (item) {
        currentTicketId = item.TicketId;
        efrom.value = item.FromLocation;
        edestination.value = item.ToLocation;
        eprice.value = String(item.TicketPrice);
    }
    ;
}
function AddPush() {
    let editForm = document.getElementById("EditInfoForm");
    editForm.style.display = "block";
    const efrom = document.getElementById("efrom").value;
    const edestination = document.getElementById("edestination").value;
    const eprice = document.getElementById("eprice").value;
    if (currentTicketId == null) {
        TicketFairList.push(new TicketFairDetails(efrom, edestination, parseInt(eprice)));
        FairDetails();
    }
    else {
        for (let i = 0; i < TicketFairList.length; i++) {
            if (TicketFairList[i].TicketId == currentTicketId) {
                TicketFairList[i].FromLocation = efrom;
                TicketFairList[i].ToLocation = edestination;
                TicketFairList[i].TicketPrice = parseInt(eprice);
                FairDetails();
            }
        }
    }
}
function Delete(item) {
    TicketFairList = TicketFairList.filter((items) => items.TicketId !== item);
    FairDetails();
}
