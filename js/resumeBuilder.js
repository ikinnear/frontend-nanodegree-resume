var bio = {
	"name" : "Ian Kinnear",
	"role" : "Technical Consultant",
	"contacts" : {
		"mobile" : "416-457-3127",
		"email" : "ian.kinnear@gmail.com",
		"github" : "ikinnear",
		"twitter" : "@Dufferin2B",
		"location" : "Brampton, Ontario, Canada"
	},
	"picture_url" : "images/Ian_Kinnear.png",
	"welcome_message" : "Important to me: dedication, hard work, craftmanship, the team",
	"skills" : ["ServiceNow","Agile Methodologies","Integration","Cross-functional Team Leadership","Javascript","PrototypeJS","AJAX","ITIL"]
};


var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace('%data%',bio.picture_url);
var formattedWMSG = HTMLwelcomeMsg.replace('%data%',bio.welcome_message);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#header").append(formattedWMSG);

if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	var formattedSkills = "";
	var index=0;
	while(index<bio.skills.length){
		formattedSkills += bio.skills[index] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		index++;
	}
	var HTMLskills = HTMLskills.replace('%data%',formattedSkills);
	$("#skills").append(HTMLskills);
	
}

var work = {
	"positions" : [
		{ 
			"title" : "Technical Consultant",
			"employer" : "ServiceNow",
			"years_worked" : 2,
			"dates" : "Dec 2013 - Present",
			"location" : "Remote, Ontario, Canada",
			"description" : "Professional Services Developer on large scale ServiceNow client implementations and integrations. Skills used daily include Javascript, XML Web Services, Jelly Scripting, Prototype (JS), Unix/Windows Scripting, XML, and all ServiceNow modules/applications as well as Agile Methodologies."
		},
		{ 
			"title" : "Senior Manager, Support and Technical Services",
			"employer" : "407 ETR (Express Toll Route)",
			"years_worked" : 2,
			"dates" : "Dec 2011 - Dec 2013",
			"location" : "Woodbridge, Ontario, Canada",
			"description" : "Combining expertise in ServiceNow platforms and Agile methodologies to optimize support operations and technical services performance. Lead and mentor a cross-functional team of 34 to optimize technical operations and manage resources. Oversee infrastructure development, network security, application development, telecommunications, and end-user support. Review performance metrics, identify opportunities for improvement, and devise right-sized solutions. Generate business continuity and disaster recovery strategies and policies, and ensure compliance with internal and external requirements. Oversee configuration management and vendor relationships."
		},
		{ 
			"title" : "Manager, Development",
			"employer" : "407 ETR (Express Toll Route)",
			"years_worked" : 1.5,
			"dates" : "May 2010",
			"location" : "Woodbridge, Ontario, Canada",
			"description" : "Optimized development productivity through infusion of best practices and innovative tools. Orchestrated projects, heading a team of 12 to ensure delivery of all requirements. Consulted with architects and resource managers. Performed design and technical reviews, and coordinated testing activities."
		},
		{ 
			"title" : "Manager, Database Administration, IT Service Support",
			"employer" : "Symcor Inc",
			"years_worked" : 2,
			"dates" : "May 2008 - May 2010",
			"location" : "Mississauga, Ontario, Canada",
			"description" : "Directed expert database administration and 24x7x365 support. Oversaw 400+ active databases spanning numerous technologies such as MySQL, Postgres, SQL server, DB2, and Oracle. Managed six-member database administration team. Coordinated database setup, maintenance, production, release and deployment. Ensured business continuity during large-scale migrations to consolidate common database stacks by leveraging clustering technology. Achieved compliance during audits by establishing efficient security and access controls."
		},
		{ 
			"title" : "Manager, Production Application Support, Statement Solutions",
			"employer" : "Symcor Inc",
			"years_worked" : 9,
			"dates" : "April 1999 - May 2008",
			"location" : "Mississauga, Ontario, Canada",
			"description" : "Drove a top-performing team to support internal and external end-users of a wide range of applications in both Windows and Unix environments. Headed technical support team of 11 to provide troubleshooting, diagnosis, and resolution in alignment with business continuity objectives. Performed root cause analysis for critical issues."
		}
	]
}
work.display = function(){
	for(job in work.positions){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.positions[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.positions[job].title);
		var formattedWorkDates = HTMLworkDates.replace('%data%',work.positions[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.positions[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%',work.positions[job].description);
		$(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

work.display();

var education = {
	"schools" : [
		{
			"name": "University of Waterloo",
			"major": "Political Science",
			"degree": "BA",
			"dates": "1994",
			"location": "Waterloo, Ontario"
		}
	],
	"online" : [
		{
			"name": "Certified Implementation Specialist",
			"organization": "ServiceNow",
			"licence": "0100474",
			"dates": "February 2014"
		},
		{
			"name": "Certified ScrumMaster",
			"organization": "Scrum Alliance",
			"licence": "000190865",
			"dates": "May 2012"
		},
		{
			"name": "ITIL v3 Foundations",
			"organization": "Hewlett Packard",
			"licence": "870891",
			"dates": "March 2010"
		},
		{
			"name": "Mysql Database Administrator",
			"organization": "Oracle",
			"licence": "SUN656816",
			"dates": "April 2010"
		},
		{
			"name": "Management 3.0",
			"organization": "Happy Melly",
			"licence": "1310343",
			"dates": "October 2013"
		}
	]
}
education.display = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace('%data%',education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace('%data%',education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%',education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace('%data%',education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	if(education.online.length>0){
		$("#education").append(HTMLonlineClasses);
	}
	for(course in education.online){
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%',education.online[course].name);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%',education.online[course].organization);
		var formattedOnlineDates = HTMLonlineDates.replace('%data%',education.online[course].dates);
		var formattedOnlineLicence = HTMLonlineLicence.replace('%data%','Licence: ' + education.online[course].licence);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineLicence);
	}
}
education.display();

var projects = {
	"NanoDegree" : [
		{
			"title": "About me",
			"description": "(Udacity NanoDegree) About Me - Responsive Design",
			"dates": "July 2015",
			"image": "http://ikinnear.github.io/images/project1_fw2.jpg"
		},
		{
			"title": "Resume",
			"description": "(Udacity NanoDegree) My Online Resume, built with jQuery/scripting",
			"dates": "August 2015",
			"image": "http://ikinnear.github.io/images/project1_fw1.jpg"
		}
	]
}
projects.display = function(){
	for(project in projects.NanoDegree){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%',projects.NanoDegree[project].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%',projects.NanoDegree[project].dates);
		var formattedProjectImage = HTMLprojectImage.replace('%data%',projects.NanoDegree[project].image);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%',projects.NanoDegree[project].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
}
projects.display();



function inName(name){
	var name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
console.log(inName("stephen Kinnear"));


$('#main').append(internationalizeButton);

$("#map-div").append(googleMap);







