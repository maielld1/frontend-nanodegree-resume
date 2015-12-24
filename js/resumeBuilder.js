/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills=["awesome", "programming", "engineering"];

var bio={
	"name": "Devin Maiello",
	"role": "Web Developer",
	"contacts":{
		"mobile":"201-270-7151",
		"email":"maiellodevin@gmail.com",
		"github":"maielld1",
		"location":"Teaneck, NJ"
	},
	"skills": skills,
	"bioPic": "images/devin.jpg"
};

var work={
	"jobs": [
	{
    "employer":"Lockheed Martin",
    "title":"Systems Engineer",
    "dates":"July 2015-Present",
    "location":"Owego, NY"
	},
	{
    "employer":"Rutgers University",
    "title":"Research Assistant",
    "dates":"May 2014-August 2014",
    "location":"New Brunswick, NJ"
	},
	{
	"employer":"Metro-North Railroad",
    "title":"Power Engineering Intern",
    "dates":"June 2013-January 2014",
    "location":"Manhattan, NY"
	}
	]
}

var education={
	"schools":[
	{
	"name":"The College of New Jersey",
	"dates": "2011-2015",
	"location":"Ewing, NJ",
	"degree":"BS",
	"major":"Electrical Engineering"
	},
	{
	"name":"Teaneck High School",
    "dates": "2007-2011",
	"location":"Teaneck, NJ",
	"degree":"Diploma"
	}
  ],
	"onlineCourses":[
	{
	"title":"JavaScript Syntax",
	"school":"Udacity",
	"dates":"2015"
	}
	]
}

var projects={
	"projects":[
		{
			"title": "Glass Sealants for Liquid Metal Baatteries",
			"datesWorked": "May 2014 - August 2014",
			"description": "Developed a glass composition of Calcium, Boron and Aluminum Oxide (CaBAl) to create a hermetic seal inside a liquid metal battery to maximize the batteries life for efficient use in a renewable energy market.",
			"images": ["images/Rise.jpg"],
			"url": ""
		},
		{
			"title": "TiVo for Radio",
			"datesWorked": "August 2014 - May 2015",
			"description": "Designed a device to digitize and capture the entire FM radio band, store the digitized radio signals in memory, and allow a user to play back a desired station at any point in the past 15 minutes.",
			"images": ["images/tivo.jpg"],
			"url": "h"
		}
	]
}
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
//var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
//$("#header").append(formattedWelcomeMsg);

if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo){
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}
function inName(name){
	name=name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}
$("#main").append(internationalizeButton);
function displayEducation(){

	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedSchoolDegree = formattedSchool + formattedDegree;
		$(".education-entry:last").append(formattedSchoolDegree);

		$("#education").append(HTMLschoolStart);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		$("#education").append(HTMLschoolStart);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		$("#education").append(HTMLschoolStart);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

	}

	for (course in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		$("#education").append(HTMLonlineClasses);
		
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		
		$("#education").append(HTMLschoolStart);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		

	}

}

function displayWork(){	

	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle ;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
projects.display=function(){
	if(projects.projects.length>0){
		for(i in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}


displayWork();
displayEducation();
projects.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  // your code goes here
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);

});


