(function (){
	angular
		.module("viraj")
		.controller("aboutCtrl", AboutController);
		
		AboutController.$inject = ['DataService']; 
		
		function AboutController(DataService){
			vm = this;
			vm.ab = "About Controller";
			vm.search  = "";
			vm.activeTurtle ={};
			vm.changeActiveTurtle = changeActiveTurtle;
			vm.produc = DataService.productDetails;
		}
		
		function changeActiveTurtle(index){
				vm.activeTurtle = index;
			}
})();