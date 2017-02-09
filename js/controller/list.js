(function(){
	
	angular
			.module("viraj")
			.controller("listCtrl", ListController);
			
			ListController.$inject =['DataService'];
			
			function ListController(DataService){
				vm = this;
				vm.data = DataService.listedData;
				vm.customer = DataService.customers;
			}			
})();