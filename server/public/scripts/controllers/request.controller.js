myApp.controller('RequestController', function(RequestService, $location) {
  console.log('RequestController created');
  var vm = this;
  vm.RequestService = RequestService;
  vm.customer = RequestService.customer;
  vm.textboxShowing = false; 

/* this function is called when the submit form is clicked on the Request for Service form on the       website's requestService.html page. */
  vm.addCustomer = function () {
    console.log("Inside addCustomer function in request.controller.js line 13: ", vm.customer);
    vm.RequestService.addCustomer(vm.customer);
    }
    vm.openTextbox = function() {
    vm.textboxShowing = true;
    } 
    
  });


