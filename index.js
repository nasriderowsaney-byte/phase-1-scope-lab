// Write your solution in this file!
// Global variable
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// This will create a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(customer) {
  bestCustomer = customer;
}

// constant
const leastFavoriteCustomer = 'some name';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new name'; // should throw error
}
