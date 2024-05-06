let UserIdAutoIncrement = 1000;
let UserTravelIdAutoIncrement = 2000;
let TicketIdAutoIncrement = 3000;

let CurrentUserId: string;
let CurrentUserName: string;
let CurrentUserEmail: string;

let NewUserNameStatus = false;
let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;
//let NewUserConfirmPassword = false;
let NewUserPhoneNumberStatus = false;

class User {

    CardId: string;
    UserName: string;
    UserEmail: string;
    UserPassword: string;
    UserPhoneNumber: number;
    UserBalance: number;

    constructor(paramUserName: string, paramUserEmail: string, paramUserPassword: string, paramUserPhoneNumber: number, paramUserBalance: number) {

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
    //     a.	TravelId (Auto Generated -TID2001)
    // b.	Card Number
    // c.	FromLocation
    // d.	ToLocation
    // e.	Date
    // f.	Travel Cost
    TravelId: string;
    CardId: string;
    FromLocation: string;
    ToLocation: string;
    Date: Date;
    TravelCost: number;

    constructor(paramCardId: string, paramFromLocation: string, paramToLocation: string, paramDate: Date, paramTravelCost: number) {

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
    //     •	TicketID (Auto Generated – MR3001)
    // •	FromLocation
    // •	ToLocation
    // •	TicketPrice

    TicketId: string;
    FromLocation: string;
    ToLocation: string;
    TicketPrice: number;

    constructor(paramFromLocation: string, paramToLocation: string, paramTicketPrice: number) {

        TicketIdAutoIncrement++;
        this.TicketId = "MR" + TicketIdAutoIncrement.toString();
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.TicketPrice = paramTicketPrice;
    }
}

// adding default data 
let UserArrayList: Array<User> = new Array<User>();

UserArrayList.push(new User("Hemanth", "hemanth@gmail.com", "Hemanth@123", 9789011226, 1500));
UserArrayList.push(new User("Harish", "harish@gmail.com", "Harish@123", 9445153060, 1000));

let TravelList: Array<TravelDetails> = new Array<TravelDetails>();

//TID2001	CMRL1001	Airport	Egmore	10/10/2023	55
//TID2002	CMRL1001	Egmore	Koyambedu	10/10/2023	32
// TID2003	CMRL1002	Alandur	Koyambedu	10/11/2023	25
// TID2004	CMRL1002	Egmore	Thirumangalam	10/11/2023	25


TravelList.push(new TravelDetails("MC1001", "Airport", "Egmore", new Date(2023, 10, 10), 55));
TravelList.push(new TravelDetails("MC1001", "Egmore", "Koyambedu", new Date(2023, 10, 10), 32));
TravelList.push(new TravelDetails("MC1002", "Alandur", "Koyambedu", new Date(2023, 10, 11), 25));
TravelList.push(new TravelDetails("MC1002", "Egmore", "Thirumangalam", new Date(2023, 10, 11), 25));

let TicketFairList: Array<TicketFairDetails> = new Array<TicketFairDetails>();

TicketFairList.push(new TicketFairDetails("Airport", "Egmore", 55));
TicketFairList.push(new TicketFairDetails("Airport", "Koyambedu", 25));
TicketFairList.push(new TicketFairDetails("Alandur", "Koyambedu", 25));
TicketFairList.push(new TicketFairDetails("Koyambedu", "Egmore", 32));
TicketFairList.push(new TicketFairDetails("Vadapalani", "Egmore", 45));
TicketFairList.push(new TicketFairDetails("Arumbakkam", "Egmore", 25));
TicketFairList.push(new TicketFairDetails("Vadapalani", "Koyambedu", 25));
TicketFairList.push(new TicketFairDetails("Arumbakkam", "Koyambedu", 16));


function checkNewUserName(paramNewUserName: string) {
    let newUserName = (document.getElementById(paramNewUserName) as HTMLInputElement).value;
    let newUserNameMessage = document.getElementById(paramNewUserName + "Message") as HTMLLabelElement;
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

function checkNewUserEmail(paramNewUserEmail: string) {
    let newUserEmail = (document.getElementById(paramNewUserEmail) as HTMLInputElement).value;
    let newUserEmailMessage = document.getElementById(paramNewUserEmail + "Message") as HTMLLabelElement;
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

function checkNewUserPassword(paramNewUserPassword: string) {
    let newUserPassword = (document.getElementById(paramNewUserPassword) as HTMLInputElement).value;
    let newUserPasswordMessage = document.getElementById(paramNewUserPassword + "Message") as HTMLLabelElement;
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

function checkNewUserConfirmPassword(paramNewUserPassword: string, paramNewUserConfirmPassword: string) {
    let newUserPassword = (document.getElementById(paramNewUserPassword) as HTMLInputElement).value;
    let newUserConfirmPassword = (document.getElementById(paramNewUserConfirmPassword) as HTMLInputElement).value;
    let newUserPasswordMessage = document.getElementById("confirmPasswordMessage") as HTMLLabelElement;

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

function checkNewUserPhoneNumber(paramNewUserPhoneNumber: string) {
    let newUserPhoneNumber = (document.getElementById(paramNewUserPhoneNumber) as HTMLInputElement).value;
    let newUserPhoneNumberMessage = document.getElementById(paramNewUserPhoneNumber + "Message") as HTMLLabelElement;
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

    let homePage = document.getElementById('homePage') as HTMLDivElement;
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    let dropdownId = document.getElementById('dropdown') as HTMLDivElement;
    let info = document.getElementById("AddInfoForm") as HTMLFormElement;
    info.style.display = "none";

    homePage.style.display = "none";
    newUserPage.style.display = "block";
    dropdownId.style.display = "none";
}

function signUp() {

    let signuppage = document.getElementById("newUserPage") as HTMLDivElement;
    signuppage.style.display = "block";
    if (NewUserNameStatus == true &&
        NewUserEmailStatus == true &&
        NewUserPasswordStatus == true &&
        NewUserPhoneNumberStatus == true) {
        let newUserName = (document.getElementById('newUserName') as HTMLInputElement).value;
        let newUserEmail = (document.getElementById('newUserEmail') as HTMLInputElement).value;
        let newUserPassword = (document.getElementById('newUserPassword') as HTMLInputElement).value;
        let newUserPhoneNumber = (document.getElementById('newUserPhoneNumber') as HTMLInputElement).value;
        let newUserBalance = (document.getElementById('newUserBalance') as HTMLInputElement).value;
        UserArrayList.push(new User(newUserName, newUserEmail, newUserPassword, +newUserPhoneNumber, +newUserBalance));
        alert("Registration Successful");
        let homePage = document.getElementById('homePage') as HTMLDivElement;
        homePage.style.display = "block";
        let signuppage = document.getElementById("newUserPage") as HTMLDivElement;
        signuppage.style.display = "none";
        let info = document.getElementById("AddInfoForm") as HTMLFormElement;
    info.style.display = "none";
    }
    else {
        alert("Please fill out the form fully.")
    }
}

function existingUserPage() {

    let fairdetail = document.getElementById('ticketBooking') as HTMLTableElement;
    fairdetail.style.display = "none";

    let rechargeId = document.getElementById("topup") as HTMLDivElement;
    rechargeId.style.display = "none";

    let orderInfo = document.getElementById('travelHistory') as HTMLTableElement;
    orderInfo.style.display = "none";

    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";

    let fairInfo = document.getElementById('ticketFairDetails') as HTMLTableElement;
    fairInfo.style.display = "none";
    let info = document.getElementById("AddInfoForm") as HTMLFormElement;
    info.style.display = "none";

    let homePage = document.getElementById('homePage') as HTMLDivElement;
    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    let availableUser = document.getElementById('availableUser') as HTMLLabelElement;

    homePage.style.display = "none";
    existingUserPage.style.display = "block";

    availableUser.innerHTML = "<h2>Available User</h2>";

    for (let i = 0; i < UserArrayList.length; i++) {

        availableUser.innerHTML += `User Name : ${UserArrayList[i].UserName} | User Id : ${UserArrayList[i].UserEmail}<br>`;
    }

}
function signIn() {

    let noExistingUserIdChecker: boolean = false;
    let existingUserId = (document.getElementById('existingUserId') as HTMLInputElement).value;
    let dropdownId = document.getElementById('dropdown') as HTMLDivElement;
    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
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

    let info = document.getElementById("AddInfoForm") as HTMLFormElement;
    info.style.display = "none";

}

function topUp() {

    let fairdetail = document.getElementById('ticketBooking') as HTMLTableElement;
    fairdetail.style.display = "none";

    let orderInfo = document.getElementById('travelHistory') as HTMLTableElement;
    orderInfo.style.display = "none";

    let fairInfo = document.getElementById('ticketFairDetails') as HTMLTableElement;
    fairInfo.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";

    let info = document.getElementById("AddInfoForm") as HTMLFormElement;
    info.style.display = "none";

    let rechargeId = document.getElementById("topup") as HTMLDivElement;
    rechargeId.style.display = "block";

    let currentBalance = document.getElementById("currentBalance") as HTMLLabelElement;


    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].CardId == CurrentUserId) {
            currentBalance.innerHTML = `Your Current Balance is ${UserArrayList[i].UserBalance.toString()}`
        }
    }
}

function recharge() {

    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].CardId === CurrentUserId) {
            let amount = (document.getElementById('amount') as HTMLInputElement).value;
            UserArrayList[i].UserBalance += parseInt(amount);
            alert('Recharge Successful');

        }
    }

    let fairdetail = document.getElementById('ticketBooking') as HTMLTableElement;
    fairdetail.style.display = "none";

    let fairInfo = document.getElementById('ticketFairDetails') as HTMLTableElement;
    fairInfo.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";

    let info = document.getElementById("AddInfoForm") as HTMLFormElement;
    info.style.display = "none";

    let rechargeId = document.getElementById("topup") as HTMLDivElement;
    rechargeId.style.display = "block";

    let currentBalance = document.getElementById('currentBalance') as HTMLLabelElement;
    currentBalance.style.display = "block";

    let orderInfo = document.getElementById('orderHistory') as HTMLTableElement;
    orderInfo.style.display = "none";
}

function ShowBalance() {

    let fairdetail = document.getElementById('ticketBooking') as HTMLTableElement;
    fairdetail.style.display = "none";

    let rechargeId = document.getElementById("topup") as HTMLDivElement;
    rechargeId.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let info = document.getElementById("AddInfoForm") as HTMLFormElement;
    info.style.display = "none";

    let orderInfo = document.getElementById('travelHistory') as HTMLTableElement;
    orderInfo.style.display = "none";

    let fairInfo = document.getElementById('ticketFairDetails') as HTMLTableElement;
    fairInfo.style.display = "none";

    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "block";

    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].CardId == CurrentUserId) {
            let currentBalance = document.getElementById("balance") as HTMLLabelElement;
            currentBalance.innerHTML = `Your Available Balance is ${UserArrayList[i].UserBalance.toString()}`
        }
    }
}

function ShowHistory() {
    let fairdetail = document.getElementById('ticketBooking') as HTMLTableElement;
    fairdetail.style.display = "none";

    let info = document.getElementById("AddInfoForm") as HTMLFormElement;
    info.style.display = "none";

    let fairInfo = document.getElementById('ticketFairDetails') as HTMLTableElement;
    fairInfo.style.display = "none";
    let rechargeId = document.getElementById("topup") as HTMLDivElement;
    rechargeId.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let orderInfo = document.getElementById('travelHistory') as HTMLTableElement;
    orderInfo.style.display = "block";

    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";

    const tableBody = document.querySelector("#dataTable1 tbody") as HTMLTableSectionElement;

    let orderCount: number = 0;
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

    let fairdetail = document.getElementById('ticketBooking') as HTMLTableElement;
    fairdetail.style.display = "none";

    let rechargeId = document.getElementById("topup") as HTMLDivElement;
    rechargeId.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let orderInfo = document.getElementById('travelHistory') as HTMLTableElement;
    orderInfo.style.display = "none";

    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";

    let fairInfo = document.getElementById('ticketFairDetails') as HTMLTableElement;
    fairInfo.style.display = "block";

    const tableBody = document.querySelector("#dataTable2 tbody") as HTMLTableSectionElement;
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

    let rechargeId = document.getElementById("topup") as HTMLDivElement;
    rechargeId.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let orderInfo = document.getElementById('travelHistory') as HTMLTableElement;
    orderInfo.style.display = "none";

    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";

    let fairInfo = document.getElementById('ticketFairDetails') as HTMLTableElement;
    fairInfo.style.display = "none";

    let fairdetail = document.getElementById('ticketBooking') as HTMLTableElement;
    fairdetail.style.display = "block";

    const tableBody = document.querySelector("#dataTable3 tbody") as HTMLTableSectionElement;
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

function Booking(ticketId: string) {
    UserArrayList.forEach((item) => {
        if (item.CardId == CurrentUserId) {
            TicketFairList.forEach((fair) => {
                if (fair.TicketId == ticketId) {
                    if (item.UserBalance > fair.TicketPrice) {
                        item.UserBalance -= fair.TicketPrice;
                        TravelList.push(new TravelDetails(item.CardId, fair.FromLocation, fair.ToLocation, new Date(), fair.TicketPrice));
                        alert("Ticket Booking Successfully....")
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
    let fairdetail = document.getElementById('ticketBooking') as HTMLTableElement;
    fairdetail.style.display = "none";

    let rechargeId = document.getElementById("topup") as HTMLDivElement;
    rechargeId.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let orderInfo = document.getElementById('travelHistory') as HTMLTableElement;
    orderInfo.style.display = "none";

    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";

    let fairInfo = document.getElementById('ticketFairDetails') as HTMLTableElement;
    fairInfo.style.display = "none";


    let homePage = document.getElementById('homePage') as HTMLDivElement;
    homePage.style.display = "block";

    let dropdownId = document.getElementById('dropdown') as HTMLDivElement;
    dropdownId.style.display = "none";
}


const form = document.getElementById("AddInfoForm") as HTMLFormElement;
const from = document.getElementById("from") as HTMLInputElement;
const destination = document.getElementById("destination") as HTMLInputElement;
const price = document.getElementById("price") as HTMLInputElement;
const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;

let editingId: string | null = null;

function Add() {
    let info = document.getElementById("AddInfoForm") as HTMLFormElement;
    info.style.display = "block";

    let fairInfo = document.getElementById('ticketFairDetails') as HTMLTableElement;
    fairInfo.style.display = "none";

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const fromLocation = from.value.trim();
        const toLocation = destination.value.trim();
        const priceAmount = parseInt(price.value.trim());

        if (editingId !== null) {
            const index = TicketFairList.findIndex((item) => item.TicketId === editingId);
            if (index !== -1) {
                TicketFairList[index] = { ...TicketFairList[index], FromLocation: fromLocation, ToLocation: toLocation, TicketPrice: priceAmount };
                editingId = null;
            }

        }
        else {

            const newData: TicketFairDetails = {
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

const efrom = document.getElementById("efrom") as HTMLInputElement;
const edestination = document.getElementById("edestination") as HTMLInputElement;
const eprice = document.getElementById("eprice") as HTMLInputElement;
let currentTicketId: string | null;


function Edit(items: string) {
    
    let editForm = document.getElementById("EditInfoForm") as HTMLFormElement;
    editForm.style.display = "block";
    const item = TicketFairList.find((item) => item.TicketId === items);
    if (item) {
        currentTicketId = item.TicketId;
        efrom.value = item.FromLocation;
        edestination.value = item.ToLocation;
        eprice.value = String(item.TicketPrice);
    };
}

function AddPush() {

    let editForm = document.getElementById("EditInfoForm") as HTMLFormElement;
    editForm.style.display = "block";

    const efrom = (document.getElementById("efrom") as HTMLInputElement).value;
    const edestination = (document.getElementById("edestination") as HTMLInputElement).value;
    const eprice = (document.getElementById("eprice") as HTMLInputElement).value;
    
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

function Delete(item: string) {
    TicketFairList = TicketFairList.filter((items) => items.TicketId !== item);
    FairDetails();
} 