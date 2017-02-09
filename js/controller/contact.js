(function (){
	angular
		.module("viraj")
		.controller("contactCtrl", ContactController);
		
		ContactController.$inject = ['DataService'];
		
		function ContactController(DataService){
			vt =this;
			vt.con ="Contact Controller";
			vt.addr1 = DataService.officeAdd;
			vt.addr2 = DataService.workAdd;
		}
})();