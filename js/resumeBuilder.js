/*
This is empty on purpose! Your code to build the resume will go here.
 */





var bio ={
	"fullname": "Victoria Ajayi",
	"Role": "Junior Software Engineer",
	"contacts": {
		"Mobile": "+2348066109631",
		"Email": "queenbusola1@gmail.com",
		"Github": "BABABUSOLA",
		"Twitter": "@queenbusola",
		"location": "Lagos"
	},
	"welcomeMessage": "Technology for Self Reliance",
	"skills": [ "Programmer", "Researcher","Good Teamworking skills", "Debugging skills"],
	"bioPic": "images/busola.jpg"

}



var work ={
	"jobs" :[{
		"employer":"Robotics Nigeria",
		"Title":"Working Trainee",
		"location":"Lagos",
		"date":"May,2016 - till date",
		"Description" :"Implementing and Designing Web Applications, to solve logical and analytical problems, using php laravel framework"
	},{
		"employer":"Nigeria Communication Satellite Limited",
		"Title":"AD-Hoc Staff",
		"location":"Akure",
		"date":"November,2015",
		"Description" : "Computer Operator for Registration and Voting Software during NSE Conference 2015 "
	}]
}

var education ={
	"schools": [ {
		"name": "School of Computational Intelligence",
		"degree": "Professional course",
		"date": "2016-till date",
		"location": "Lagos, Nigeria",
		"major": ["Software Engineering"]
	},
	{
		"name": "Federal University of Technology",
		"degree": "B.Tech",
		"date":"2008",
		"location": "Akure, Nigeria",
		"major": ["Physics Electronics"]
	} ],
	"onlinecourses": [{
		"title":"UI/UX Design",
		"school":"FreeCodeCamp",
		"date": "September, 2016 - till date",
		"url":"https://www.freeCodeCamp.com/BABABUSOLA"

	}, {
		"title":"Intro to Javascript",
		"school":"Udacity",
		"date": "September,2016",
		"url":"https://www.udacity.com"
	}]
};

var projects = {
	"projects":[ {
		"Title":"Design of a Simple Resume Webpage",
		"date":"September 2016",
		"Author":"Ajayi Victoria",
		"Description" : "A Simple one page resume",
		"images" : ["images/project.jpeg"]
	}]
	// ,{
	// 	"Title":"Design and Implementation of a web application for monitoring fuel level ",
	// 	"date":"August 2016",
	// 	"Author":"Ajayi Victoria",
	// 	"Description" : "Design and Implementation of a web application for monitoring fuel level",
	// 	"images" : ["images/project.jpeg"]

	// }]
}




var formattedName = HTMLheaderName.replace("%data%",bio.fullname);
var formattedRole = HTMLheaderRole.replace("%data%",bio.Role);

// var formattedContact = HTMLcontactGeneric.replace("%data%",bio.contacts)
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.Mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.Email);
var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.Github);
var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.Twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

var formattedPicture = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);


$("#header").append(formattedName);
$("#header").append(formattedRole);

// $("#header").append(formattedContact);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedgithub);
$("#header").append(formattedtwitter);
$("#header").append(formattedLocation);

$("#header").append(formattedPicture);
$("#header").append(formattedMessage);

   if(bio.skills.length > 0 ){
 $("#header").append(HTMLskillsStart);
 var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
 $("#skills").append(formattedSkills);
 formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
 $("#skills").append(formattedSkills);
 formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
 $("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
 $("#skills").append(formattedSkills);
}

var busola = {};
busola.job = "experience";

var makeProfile = function(){
	console.log("This a new profile");
}

var company = 0;

while(busola.job === "experience"){
	makeProfile();
	company = company + 1;
	if(company === 10){
		busola.job = "professional";
	}
}
	console.log(busola.job);

for (var i = 0; i < 9; i++){
	console.log(i);
}



	

function displayWork(){
	for (job in work.jobs){

// console.log(work.jobs[job]);
	$("#workExperience").append(HTMLworkStart);
	
var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].Title);
$(".work-entry:last").append(formattedEmployer + formattedTitle );


var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].date);
$(".work-entry:last").append(formattedDate );

var formattedCity = HTMLworkLocation.replace("%data%",work.jobs[job].location);
$(".work-entry:last").append(formattedCity );

var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].Description);
$(".work-entry:last").append(formattedDescription );
}

}

displayWork();


// function locationizer(work_obj){
//  var locationArray = [];

// for(var job in work_obj.jobs){

// 	var newlocation = work_obj.jobs[job].city;
// 	locationArray.push(newlocation);                      

// 		}
// return locationArray;
// }

// console.log(locationizer(work));



function inName(myname){
var fullname = bio.fullname;
	var myname = fullname.trim().split(" ");
	console.log(myname);
	myname[1] = myname[1].toUpperCase();
	myname[0] = myname[0].slice(0,1).toUpperCase() + myname[0].slice(1).toLowerCase();
myname
	 return myname[0] + " " + myname[1];
}

$("#main").append(internationalizeButton);



//project section

function displayproject(){
	for(project in projects.projects){

		$("#projects").append(HTMLprojectStart);

 	 var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].Title);
 	 $(".project-entry:last").append(formattedprojectTitle);

 	 var formattedprojectDate = HTMLprojectDates.replace("%data%",projects.projects[project].date);
	 $(".project-entry:last").append(formattedprojectDate);

	 var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].Description);
	 $(".project-entry:last").append(formattedprojectDescription);

	 //condition to display image
	 if(projects.projects[project].images.length > 0)
	 	{

	 	for(image in projects.projects[project].images)
	 		{

	 			var formattedprojectPicture = HTMLprojectImage.replace("%data%",projects.projects[project].images);
	 		
 	 			$(".project-entry:last").append(formattedprojectPicture);
	 		}
	
 	 	} 

	}
}

displayproject();
//to display map onthe resume

$("#mapDiv").append(googleMap);


function displayschool (){
	for(school in education.schools){

		$("#education").append(HTMLschoolStart);


		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

		 var formattedschoolDate = HTMLschoolDates.replace("%data%",education.schools[school].date);
 	 $(".education-entry:last").append(formattedschoolDate);

 	 var formattedschoollocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
	 $(".education-entry:last").append(formattedschoollocation);
if (education.schools[school].major.length > 0){

	for (major in education.schools[school].major){
		 var formattedschoolmajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
	 $(".education-entry:last").append(formattedschoolmajor);


		}
	}
	
}
}displayschool();

function displayonlinecourses(){
	$(".education-entry:last").append(HTMLonlineClasses);
		for (onlinecourse in education.onlinecourses)
		{
			

		var formattedonlinetitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[onlinecourse].title);
		var formattedonlineschool = HTMLonlineSchool.replace("%data%",education.onlinecourses[onlinecourse].school);
		$(".education-entry:last").append(formattedonlinetitle + formattedonlineschool);

		 var formattedonlineDate = HTMLonlineDates.replace("%data%",education.onlinecourses[onlinecourse].date);
 	 $(".education-entry:last").append(formattedonlineDate);

 	 var formattedonlineurl = HTMLonlineURL.replace("%data%",education.onlinecourses[onlinecourse].url);
	 $(".education-entry:last").append(formattedonlineurl);

	}
}

displayonlinecourses();



