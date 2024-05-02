let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 10;
let OrderIdAutoIncrement = 100;


let CurrentUserId: string;
let CurrentUserEmail: string;

let CurrentUser : User;

let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;
let NewUserPhoneNumberStatus = false;



class User {

    UserId: string;
    UserEmail: string;
    UserPassword: string;
    UserPhoneNumber: number;
    UserBalance :number;

    constructor(paramUserEmail: string, paramUserPassword: string, paramUserPhoneNumber: number ,paramUserbalance:number) {

        UserIdAutoIncrement++;

        this.UserId = "UI" + UserIdAutoIncrement.toString();

        this.UserEmail = paramUserEmail;
        this.UserPassword = paramUserPassword;
        this.UserPhoneNumber = paramUserPhoneNumber;
        this.UserBalance =paramUserbalance;
    }

}


class MedicineInfo {

    MedicineId: string;
    MedicineName: string;
    MedicineCount: number;
    MedicinePrice: number;

    constructor(paramMedicineName: string, paramMedicineCount: number, paramMedicinePrice: number) {
        MedicineIdAutoIncrement++;

        this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
    }

}



class Order {
    OrderId: string;
    MedicineId: string;
    UserId: string;

    MedicineName: string;
    MedicineCount: number;

    constructor(paramMedicineId: string, paramUserId: string, paramMedicineName: string, paramMedicineCount: number) {
        OrderIdAutoIncrement++;

        this.OrderId = "OI" + OrderIdAutoIncrement.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;

        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
    }
}







let UserArrayList: Array<User> = new Array<User>();

UserArrayList.push(new User("hemanth@gmail.com","Hemanth", 9789011226,150));
UserArrayList.push(new User("harish@gmail.com","Harish", 9445153060,1000));

let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();

MedicineList.push(new MedicineInfo("Paracetomol", 5, 50));
MedicineList.push(new MedicineInfo("Colpal", 5, 60));
MedicineList.push(new MedicineInfo("Stepsil", 5, 70));
MedicineList.push(new MedicineInfo("Iodex", 5, 80));
MedicineList.push(new MedicineInfo("Acetherol", 5, 100));

let OrderList: Array<Order> = new Array<Order>();


function newUserPage() {
    let homePage = document.getElementById('homePage') as HTMLDivElement;
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;

    homePage.style.display = "none";
    newUserPage.style.display = "block";
}

function signUp() {

    if (NewUserEmailStatus == true &&
        NewUserPasswordStatus == true &&
        NewUserPhoneNumberStatus == true) {
        let newUserEmail = (document.getElementById('newUserEmail') as HTMLInputElement).value;
        let newUserPassword = (document.getElementById('newUserPassword') as HTMLInputElement).value;
        let newUserPhoneNumber = (document.getElementById('newUserPhoneNumber') as HTMLInputElement).value;
        let newUserBalance = 0;



        UserArrayList.push(new User(newUserEmail, newUserPassword, +newUserPhoneNumber,newUserBalance));

        displayHomePage();
    }
    else
    {
        alert("Please fill out the form fully.")
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

// function checkPassword(paramNewUserPassword: string) {
//     let newUserPassword = (document.getElementById(paramNewUserPassword) as HTMLInputElement).value;
//     let confirmPassword = (document.getElementById(paramNewUserPassword) as HTMLInputElement).value
//     let newUserPasswordMessage = document.getElementById(paramNewUserPassword + "Message") as HTMLLabelElement;
//     let newUserPasswordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

//     if (newUserPasswordRegex.test(newUserPassword)) {

//         NewUserPasswordStatus = true;
//         newUserPasswordMessage.style.visibility = "hidden";
//     }
//     else {
//         NewUserPasswordStatus = false;
//         newUserPasswordMessage.innerHTML = "Please enter valid password";
//         newUserPasswordMessage.style.visibility = "visible";
//         newUserPasswordMessage.style.color = "tomato";
//         newUserPasswordMessage.style.marginLeft = "10px";
//     }

// }

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

function existingUserPage() {
 
    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    let availableUser = document.getElementById('availableUser') as HTMLLabelElement;

    existingUserPage.style.display = "block";

    availableUser.innerHTML = "<h2>Available User</h2>";


    for (let i = 0; i < UserArrayList.length; i++) {

        availableUser.innerHTML += `Email : ${UserArrayList[i].UserEmail} | User Id : ${UserArrayList[i].UserId}<br>`;
    }

}

function signIn() {

    let noExistingUserIdChecker: boolean = false;
    let existingUserId = (document.getElementById('existingUserId') as HTMLInputElement).value;
    let navigationId = document.getElementById('extrapage') as HTMLDivElement;

    let existingUserIdRegex = /^UI\d{4}$/;

    if (existingUserIdRegex.test(existingUserId)) {

        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].UserId == existingUserId) {

                CurrentUserId = UserArrayList[i].UserId;
                CurrentUserEmail = UserArrayList[i].UserEmail;
                navigationId.style.display="block";
                medicinePage();

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

}

function medicinePage() {

    let homePage =document.getElementById('homePage') as HTMLDivElement;
    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    let medicinePage = document.getElementById('medicinePage') as HTMLDivElement;
    let greet = document.getElementById('greet') as HTMLLabelElement;

    existingUserPage.style.display = "none";
    homePage.style.display = "none";
    medicinePage.style.display = "block";

    greet.innerHTML = `<h3>Hello ${CurrentUserEmail}</h3>`;
}

function medicineListCheck() {
    let medicineInfo = document.getElementById('medicineInfo') as HTMLLabelElement;

    let medicineList = document.getElementById('medicineList') as HTMLSelectElement;

    let medicineName = medicineList[medicineList.selectedIndex].innerHTML;

    for (let i = 0; i < MedicineList.length; i++) {

        if (MedicineList[i].MedicineName == medicineName) {
            medicineInfo.innerHTML = `Medicine Id : ${MedicineList[i].MedicineId} --- Medicine Name : ${MedicineList[i].MedicineName} --- Medicine Count : ${MedicineList[i].MedicineCount} --- Medicine Price : ${MedicineList[i].MedicinePrice} `;

            displayRequiredCount();
        }

    }
}

function displayRequiredCount() {
    let medicineInfo = document.getElementById('medicineInfo') as HTMLLabelElement;
    let requiredCount = document.getElementById('requiredCount') as HTMLDivElement;

    medicineInfo.style.display = "block";
    requiredCount.style.display = "block";
}

function buyMedicine() {

    let proceed : boolean = true;
    let finalMedicineRequiredCount : number = 0;

    let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
    let medicineRequiredCount = (document.getElementById('medicineRequiredCount') as HTMLInputElement).value;

    let medicineName = medicineList[medicineList.selectedIndex].innerHTML;

    let medicineRequiredCountRegex = /^\d{1,3}$/;

    if (medicineRequiredCountRegex.test(medicineRequiredCount) && +medicineRequiredCount > 0) {
        for (let i = 0; i < MedicineList.length; i++) {

            if (MedicineList[i].MedicineName == medicineName) {

                
                if (MedicineList[i].MedicineCount > 0) {

                    if((MedicineList[i].MedicineCount - +medicineRequiredCount) < 0)
                    {
                        proceed = confirm(`We only have ${MedicineList[i].MedicineCount} ${MedicineList[i].MedicineName}. Do you want to buy ${MedicineList[i].MedicineCount} ${MedicineList[i].MedicineName}?`)
                        
                        if(proceed)
                        {
                            finalMedicineRequiredCount = MedicineList[i].MedicineCount;
                        }
                    }
                    else
                    {
                        finalMedicineRequiredCount = +medicineRequiredCount;
                    }

                    if(proceed)
                    {
                        MedicineList[i].MedicineCount = MedicineList[i].MedicineCount - finalMedicineRequiredCount;

                        OrderList.push(new Order(MedicineList[i].MedicineId, CurrentUserId, MedicineList[i].MedicineName, finalMedicineRequiredCount));
                        alert("Purchase Success.");
                        displayHomePage();
                    }
                   
                }
                else if(MedicineList[i].MedicineCount <= 0) {
                    alert("Out of Stock, you can buy alternative medicine.");
                }
            }

        }
    }
    else {
        alert("Please enter valid Required Count");
    }


}

function showHistory() {
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "block";

    let orderCount: number = 0;
    historyDisplay.innerHTML = "<h3>Order History</h3>";

    for (let i = 0; i < OrderList.length; i++) {
        if (OrderList[i].UserId == CurrentUserId) {
            historyDisplay.innerHTML += `You buyed ${OrderList[i].MedicineCount} ${OrderList[i].MedicineName}<br>`;
            orderCount++;
        }
    }

    if (orderCount == 0) {
        historyDisplay.innerHTML += "Order History is empty.<br>";
    }
}

function displayHomePage() {
    CurrentUserId = "";
    CurrentUserEmail = "";

    let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
    medicineList.selectedIndex = 0;

    let requiredCount = document.getElementById('requiredCount') as HTMLDivElement;
    let medicineInfo = document.getElementById('medicineInfo') as HTMLLabelElement;
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;

    let medicinePage = document.getElementById('medicinePage') as HTMLDivElement;
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    let homePage = document.getElementById('homePage') as HTMLDivElement;

    (document.getElementById('medicineRequiredCount') as HTMLInputElement).value = "";
    (document.getElementById('existingUserId') as HTMLInputElement).value = "";

    requiredCount.style.display = "none";
    historyDisplay.style.display = "none";
    medicinePage.style.display = "none";
    medicineInfo.style.display = "none";
    newUserPage.style.display = "none";
    existingUserPage.style.display = "none";
    homePage.style.display = "block";
}

let totalAmount :number=0;
function topUp()
{
    let rechargeId = document.getElementById("recharge") as HTMLMediaElement;
    rechargeId.style.display = "block";
    let totalAmount=(document.getElementById("walletRecharge") as HTMLInputElement).value;
    CurrentUser.UserBalance += parseFloat(totalAmount);
    alert("Recharged SuccessFully");
}
function ShowBalance()
{
    `${CurrentUser.UserBalance}`
}