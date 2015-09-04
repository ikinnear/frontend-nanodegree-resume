var bio = {
	"name" : "Ian Kinnear",
	"role" : "Technical Consultant",
	"contacts" : {
		"mobile" : "416-457-3127",
		"email" : "ian.kinnear@gmail.com",
		"github" : "ikinnear",
		"twitter" : "@Dufferin2B",
		"location" : "Brampton, ON, Canada"
	},
	"welcome_message" : "Important to me: dedication, hard work, craftmanship, my team",
	"skills" : ["ServiceNow","Agile Methodologies","Integration","Cross-functional Team Leadership","Javascript","PrototypeJS","AJAX","ITIL"],
	"biopic" : "images/Ian_Kinnear.png",
	display : function(){
		var formattedName = HTMLheaderName.replace('%data%',bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
		var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
		var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace('%data%',bio.biopic);
		var formattedWMSG = HTMLwelcomeMsg.replace('%data%',bio.welcome_message);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").prepend(formattedBioPic);
		$("#header").append(formattedWMSG);

		if(bio.skills.length>0){
			$("#header").append(HTMLskillsStart);
			for(var skill in bio.skills){
				formattedSkill=HTMLskills.replace('%data%',bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);
	}
};
bio.display();

var education = {
	"schools" : [
		{
			"name": "University of Waterloo",
			"location": "Waterloo, ON, Canada",
			"majors": [
				"Political Science"
			],
			"degree": "BA",
			"dates": "1994",
			"url": "https://uwaterloo.ca/"
		}
	],
	"onlineCourses" : [
		{
			"title": "Frontend Developer NanoDegree",
			"school": "Udacity",
			"date": "December 2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
			"licence": "[in progress]"
		},
		{
			"title": "Certified Implementation Specialist",
			"school": "ServiceNow",
			"date": "February 2014",
			"url": "http://www.servicenow.com/services/training-and-certification.html",
			"licence": "0100474"
		},
		{
			"title": "Certified ScrumMaster",
			"school": "Scrum Alliance",
			"date": "May 2012",
			"url": "https://www.scrumalliance.org/certifications/practitioners/certified-scrummaster-csm",
			"licence": "000190865"
		},
		{
			"title": "ITIL v3 Foundations",
			"school": "Hewlett Packard",
			"date": "March 2010",
			"url": "http://www8.hp.com/us/en/training/portfolio/itil.html",
			"licence": "870891"
		},
		{
			"title": "Mysql Database Administrator",
			"school": "Oracle",
			"date": "April 2010",
			"url": "https://education.oracle.com/",
			"licence": "SUN656816"
		},
		{
			"title": "Management 3.0",
			"school": "Happy Melly",
			"date": "October 2013",
			"url": "https://management30.com/",
			"licence": "1310343"
		}
	],
	display : function(){
		for(school in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace('%data%',education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace('%data%',education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%',education.schools[school].location);
			var myMajors = '';
			for(major in education.schools.majors){
				if(education.schools.majors[major].length>0)
					myMajors += ", ";
				myMajors += education.schools.majors[major];
			}
			var formattedSchoolMajors = HTMLschoolMajor.replace('%data%',education.schools[school].majors[0]);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajors);
		}

		if(education.onlineCourses.length>0){
			$("#education").append(HTMLonlineClasses);
		}
		for(course in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace('%data%',education.onlineCourses[course].date + " - " + 'Licence: ' + education.onlineCourses[course].licence);
			var formattedOnlineURL = HTMLonlineURL.replace('%data%',education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};
education.display();

var work = {
	"jobs" : [
		{ 
			"title" : "Technical Consultant",
			"employer" : "ServiceNow",
			"years_worked" : 2,
			"dates" : "Dec 2013 - Present",
			"location" : "Brampton, ON, Canada",
			"description" : "Professional Services Developer on large scale ServiceNow client implementations and integrations. Skills used daily include Javascript, XML Web Services, Jelly Scripting, Prototype (JS), Unix/Windows Scripting, XML, and all ServiceNow modules/applications as well as Agile Methodologies.",
			"skills" : ["ServiceNow","Agile Methodologies","Integration","Javascript","PrototypeJS","AJAX","ITIL"]
		},
		{ 
			"title" : "Senior Manager, Support and Technical Services",
			"employer" : "407 ETR (Express Toll Route)",
			"years_worked" : 2,
			"dates" : "Dec 2011 - Dec 2013",
			"location" : "Woodbridge, Vaughan, ON, Canada",
			"description" : "Combining expertise in ServiceNow platforms and Agile methodologies to optimize support operations and technical services performance. Lead and mentor a cross-functional team of 34 to optimize technical operations and manage resources. Oversee infrastructure development, network security, application development, telecommunications, and end-user support. Review performance metrics, identify opportunities for improvement, and devise right-sized solutions. Generate business continuity and disaster recovery strategies and policies, and ensure compliance with internal and external requirements. Oversee configuration management and vendor relationships.",
			"skills" : ["Cross-functional Team Leadership","Agile Methodologies","Advanced troubleshooting","ITIL","Cloud Computing","Vendor Management","Change Management","Disaster Recovery"]
		},
		{ 
			"title" : "Manager, Development",
			"employer" : "407 ETR (Express Toll Route)",
			"years_worked" : 1.5,
			"dates" : "May 2010",
			"location" : "Woodbridge, Vaughan, ON, Canada",
			"description" : "Optimized development productivity through infusion of best practices and innovative tools. Orchestrated projects, heading a team of 12 to ensure delivery of all requirements. Consulted with architects and resource managers. Performed design and technical reviews, and coordinated testing activities.",
			"skills" : ["Team Leadership","Agile Methodologies","Java","Web Services","ActiveMQ","PeopleSoft","C","ITIL","Requirements Analysis"]
		},
		{ 
			"title" : "Manager, Database Administration, IT Service Support",
			"employer" : "Symcor Inc",
			"years_worked" : 2,
			"dates" : "May 2008 - May 2010",
			"location" : "Mississauga, ON, Canada",
			"description" : "Directed expert database administration and 24x7x365 support. Oversaw 400+ active databases spanning numerous technologies such as MySQL, Postgres, SQL server, DB2, and Oracle. Managed six-member database administration team. Coordinated database setup, maintenance, production, release and deployment. Ensured business continuity during large-scale migrations to consolidate common database stacks by leveraging clustering technology. Achieved compliance during audits by establishing efficient security and access controls.",
			"skills" : ["Team Leadership","Mysql","MSSQL","Oracle","DB2","Unix","Advanced troubleshooting","ITIL","Disaster Recovery"]
		},
		{
			"title" : "Manager, Production Application Support, Statement Solutions",
			"employer" : "Symcor Inc",
			"years_worked" : 9,
			"dates" : "April 1999 - May 2008",
			"location" : "Mississauga, ON, Canada",
			"description" : "Drove a top-performing team to support internal and external end-users of a wide range of applications in both Windows and Unix environments. Headed technical support team of 11 to provide troubleshooting, diagnosis, and resolution in alignment with business continuity objectives. Performed root cause analysis for critical issues.",
			"skills" : ["Team Leadership","Mysql","MSSQL","PHP","Unix","Advanced troubleshooting","ITIL","Disaster Recovery"]
		}
	],
	display : function(){
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
			var formattedWorkDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
			var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
			var formattedWorkDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
};
work.display();

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
	],
	display : display = function(){
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
};
projects.display();

// make a new work skills matrix graph
var graph = new Springy.Graph();
var node = [];
for (var job in work.jobs) {
	var myvar =  graph.newNode({label: work.jobs[job].dates});
	for (var skill in work.jobs[job].skills) {
		var myvar2 = graph.newNode({label: work.jobs[job].skills[skill]});
		graph.newEdge(myvar, myvar2);
	}
}
$("#my_canvas").springy({ graph: graph });

$("#map-div").append(googleMap);








