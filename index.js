var customerName = 'bob';

const leastFavoriteCustomer = 'patrick'

function upperCaseCustomerName() {
   return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'dave';
}

console.log(changeLeastFavoriteCustomer());