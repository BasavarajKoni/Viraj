(function (){

	angular
		.module("viraj")
		.factory("DataService", DataService);
		
		function DataService(){
			var dataObj ={
				listedData:listedData,
				officeAdd:officeAdd,
				workAdd:workAdd,
				customers:customers,
				productDetails:productDetails
			};
			return dataObj;
		}

		var customers = [
			{
				image:"image/cust_1.jpg"
			},
			{
				image:"image/cust_2.jpg"
			},
			{
				image:"image/cust_3.jpg"
			},
			{
				image:"image/cust_4.jpg"
			},
			{
				image:"image/cust_5.png"
			}
		];
		
		var listedData = {
			abcdef :"Hello world",
			logo : "",
			image1 : "image/sugarcane.jpg",
			image2 :"image/sugar-mill.jpg",
			image3 : "image/slide13.jpg",
			image4 : "image/abc.jpg",
			heading : "Viraj Industries",
			heading2 : "We provide Innovation, Solutions and Services for Hydraulic Systems.",
			Question1 : "About Us",
			Answer1 : " We provide innovations, solutions and services for all hydraulic systems. Viraj Industries is an innovation, solution and service provider for Hydraulic systems, with its design, manufacture and service providing capability and experience of more than 20 years in this field of service.",
			Answer1a : "Viraj Industries was established in 1990 at Machhe industrial estate, Belgaum. Since then	we are providing solution for Sugar factory mill hydraulic power pack & control panel board, Hydraulic accumulators, Hydraulic pullers, Hydraulic Pan Discharge valves, Pan cut OFF valve Hydraulic Baggase compress machine, Hydraulic tool room press, Hydraulic jacks, Hydraulic pipe bender, Hydraulic lifting and stacking trucks.",					
			Question2 : "Why Us ?",
			Answer2 :"Viraj Industries have supplied more than 150 systems to the reputed Sugar industries in Karnataka and Maharashtra States. We also take turnkey projects for complete hydraulic systems for Sugar Industries and provide sevice and maintenance there after.",
			part:"Our Customers"
		};
		
		var officeAdd={
						type:"Office Address",
						area:"(O) 1865, Sai Leela Nivas, Near Ganesh Mandir, Mahaveer Nagar, P.O. Udyambag Dist:Belgavi-	590008, State: Karnataka, India.",
						email :"viraj.industries.bgm@gmail.com",
						fax : "0831 2411363",
						mobile1: "+91 9448 691 994",
						mobile2: "+91 9008 868 389"
		};
		
		var workAdd = {
						type:"Work Address",
						area:"(W) B-20, Belgavi Co – Op Industrial Estate, Machhe Industrial Area, P.O. Machhe, Dist: Belgavi – 590014, State: Karnataka, India.",
						email :"viraj.industries.bgm@gmail.com ",
						fax : "0831 2411363",
						mobile1: "+91 9448 691 994",
						mobile2: "+91 9008 868 389"
		};
		
		var productDetails =[
			{
				name:"Mill Hydraulic Power Pack",
				image:"image/productimages/img1.gif",
				description:"Hydraulic Power pack is drive system which helps  to build up the required hydraulic pressure to drive the system.",
				productdetailslist:[
					{
						answer:"Working pressure	: 450 Bar"
					},
					{
						answer:"Tank Capacity		: 750 Ltrs (Max)"
					}
				]
			},
			{
				name:"Mill Hydraulic Control Panel Board",
				image:"image/productimages/img2.jpg",
				description:"Hydraulic control panel helps in controlling, displaying and maintaining the hydraulic pressure in the hydraulic system of Mill caps.",
				productdetailslist:[
					{
						answer:"Test Pressure		: 400 Bar (Max)."
					},
					{
						answer:"Gauge			: Dial 4” / 6” with glycerine filled."
					}
				]
			},
			{
				name:"Mill Hydraulic Accumulators",
				image:"image/productimages/img3.jpg",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Effective Gas volume		: 5ltr to 50 ltr."
					},
					{
						answer:"Working pressure		: 5 Bar to 280 Bar"
					}
				]
			},
			{
				name:"Hydraulic Pullers (Mill pinion removing)",
				image:"image/productimages/img4.jpg",
				description:"Need a Description",
				productdetailslist:[
					{
						answer:"Capacity		: 150 Tons to 400 Tons"
					},
					{
						answer:"Type			: Motor driven hydraulic pump."
					}
				]
			},
			{
				name:"Hand Operated Hydraulic Puller",
				image:"image/productimages/img5.gif",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Capacity		: 5 Tons to 100 Tons  "
					},
					{
						answer:"Type			: Hand operated hydraulic pump."
					}
				]
			},
			{
				name:"Hydraulic Pan Discharge Valve",
				image:"image/productimages/img6.jpg",
				description:"Need A Description",
				productdetailslist:[
					{
						answer:"Capacity		: 40 Tons to 120 Tons."
					},
					{
						answer:"Type			: Hydraulic power pack operated."
					}
				]
			},
			{
				name:"Hydraulic Pan Cut Over Valve",
				image:"image/productimages/img7.jpg",
				description:"Need a Description Body : MS fabricated heavy duty.Seat			: Both S.S. 304 & EPDM rubber.",
				productdetailslist:[
					{
						answer:"Size			: 8”, 10” and 12” dia."
					},
					{
						answer:"Type			: Hydraulic power pack operated."
					}
				]
			},
			{
				name:"Mill Hydraulic Cap",
				image:"image/productimages/img8.jpg",
				description:"Reconditioning of MillHydraulic Caps by introducing high pressure sealing, along with new imported BFT sealing technology with turkite & turcon guide rings, pressure testing to be done upto 200kg/cm2.",
				productdetailslist:[
					{
						answer:"Need some details"
					},
					{
						answer:"Need some details"
					}
				]
			},
			{
				name:"Hydraulic Baggase Compress Machine",
				image:"image/productimages/img9.jpg",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Operation		: Dual acting cylinder."
					},
					{
						answer:"Stroke Speed		: 24 to 26 strokes/min"
					}
				]
			},
			{
				name:"Hydraulic Tool Room Press",
				image:"image/productimages/img10.png",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Capacity	: 50/200 Tons  "
					},
					{
						answer:"Type		: Hand operated with hydraulic pump."
					}
				]				
			},
			{
				name:"Hydraulic Jacks",
				image:"image/productimages/img11.jpg",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Capacity		: 5 Tons to 100/200 Tons "
					},
					{
						answer:"Type			: Hand operated with hydraulic pump."
					}					
				]
			},
			{
				name:"Hydraulic Pipe Bender",
				image:"image/productimages/img12.jpg",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Capacity (Size)		: 2” to 6” dia pipe"
					},
					{
						answer:"Type			: Hand operated."
					}
				]
			},
			{
				name:"Screw Puller",
				image:"image/productimages/img13.jpg",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Need some"
					},
					{
						answer:"Need some"
					}
				]
			},
			{
				name:"Hydraulic Lifting Pallet Trucks",
				image:"image/productimages/img14.jpg",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Need some"
					},
					{
						answer:"Need some"
					}
				]
			},
			{
				name:"Hydraulic Stacking Material Handler",
				image:"image/productimages/img15.jpg",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Need some"
					},
					{
						answer:"Need some"
					}
				]
			},
			{
				name:"Hydraulic Power Packs",
				image:"image/productimages/img16.png",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Need some"
					},
					{
						answer:"Need some"
					}
				]
			},
			{
				name:"Hydraulic Cylinder",
				image:"image/productimages/img17.jpg",
				description:"Need a description",
				productdetailslist:[
					{
						answer:"Need some"
					},
					{
						answer:"Need some"
					}
				]
			}
		];
		
})();