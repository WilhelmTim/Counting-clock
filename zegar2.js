document.getElementById("send").onclick = function calcback()	{
		var zmienna;

			//pobranie roku
			zmienna = document.getElementById("useryear").value;
			if(zmienna<=1900)	{
			alert("Please insert correct year");
			return false;			}
			else	{
			useryear=zmienna;			};
			//pobranie miesiąca
			zmienna = document.getElementById("usermonth").value;
			usermonth=zmienna;
			//pobranie dnia
			zmienna = document.getElementById("userday").value;
			if(zmienna>31 || zmienna<=0)	{
			alert("Please insert correct day of month");
			return false;			}
			else	{
			userday=zmienna;			};
			//pobranie godziny
			zmienna = document.getElementById("userhour").value;
			if(zmienna>23 || zmienna<0)	{
			alert("Please insert correct hour");
			return false;			}
			else	{
			userhour=zmienna;			};
			//pobranie minuty
			zmienna = document.getElementById("userminute").value;
			if(zmienna>59 || zmienna<0)	{
			alert("Please insert correct minute");
			return false;			}
			else	{
			userminute=zmienna;			};
			//nazwa wydarzenia
			eventname = document.getElementById("eventname").value;






		var element =	document.querySelector('#zegar');
		var element2 =	document.querySelector('#zegar2');
		var element3 =	document.querySelector('#zegar3');
		var dayofmonth	=	[31,28,31,30,31,30,31,31,30,31,30,31];
		function monthdaysum()	{
			for(i=0;i<futuremonth;i++)	{
				monthsdays=dayofmonth[i] + monthsdays;
			}
		};
		var futureyear = useryear;
		var futuremonth = usermonth-1;
		var futureday = userday;
		var futurehour = userhour;
		var futureminute = userminute;
		var futureseconds = 0;
		var futuremilisecond = 0;
		var futuredate = 0;


			function datetomiliseconds()	{
					monthsdays=0;
					monthdaysum();
					futuredate	=	(futureyear*365*24*60*60*1000)
								+	(monthsdays*24*60*60*1000)
								+	(futureday*24*60*60*1000)
								+	(futurehour*60*60*1000)
								+	(futureminute*60*1000)
								+	(futureseconds*1000);
					//alert(futuredate);
			};
			datetomiliseconds();
			var currentDate	=	new Date();
			futureyear			=	currentDate.getFullYear();
			futuremonth			=	currentDate.getMonth();
			futureday			=	currentDate.getDate();
			futurehour			=	currentDate.getHours();
			futureminute		=	currentDate.getMinutes();
			futureseconds		=	currentDate.getSeconds();
			var nowdate = 0;
			//alert(futureday);
			function datetomiliseconds2()	{
				monthsdays=0;
				monthdaysum();
					nowdate	=	(futureyear*365*24*60*60*1000)
							+	(monthsdays*24*60*60*1000)
							+	(futureday*24*60*60*1000)
							+	(futurehour*60*60*1000)
							+	(futureminute*60*1000)
							+	(futureseconds*1000);

			};
			datetomiliseconds2();
			var timeleft = futuredate-nowdate;
			if(timeleft	==	0)	{
				alert("Your event just started");
				return false;
			}	else if(timeleft < -1)	{
				alert("Your date is not correct. Please change it");
				return false;
			};
			element3.innerHTML	= eventname + "&nbsp; in" + "<br>";
			//LATA
			futureyear	=	timeleft/(365*24*60*60*1000);
			futureyear	=	Math.floor(futureyear);
			timeleft	=	timeleft%(365*24*60*60*1000);
			element.innerHTML	= futureyear + "&nbsp; years"+ ", &nbsp" ;
			//MIESIACE
			futuremonth	=	timeleft/(30.5*24*60*60*1000);
			futuremonth	=	Math.floor(futuremonth);
			timeleft	=	timeleft%(30.5*24*60*60*1000);
			element.innerHTML	+= futuremonth + "&nbsp; months" + ", &nbsp";
			//DNI
			futureday	=	timeleft/(24*60*60*1000);
			futureday	=	Math.floor(futureday);
			timeleft	=	timeleft%(24*60*60*1000);
			element.innerHTML	+= futureday + "&nbsp; days" + "</br>";
			//GODZINY-----------------------------------------------------------------------
			futurehour	=	timeleft/(60*60*1000);
			futurehour	=	Math.floor(futurehour);
			timeleft	=	timeleft%(60*60*1000);
			element2.innerHTML	=	futurehour + "&nbsp; hours" + ", &nbsp";
			//MINUTY-----------------------------------------------------------------------
			futureminute	=	timeleft/(60*1000);
			futureminute	=	Math.floor(futureminute);
			timeleft	=	timeleft%(60*1000);
			element2.innerHTML	+=	futureminute + "&nbsp; minutes" + ", &nbsp";;
			//SEKUNDY-----------------------------------------------------------------------
			futureseconds	=	timeleft/(1000);
			futureseconds	=	Math.floor(futureseconds);
			timeleft	=	timeleft%(1000);
			element2.innerHTML	+=	futureseconds + "&nbsp; seconds" + "</br>";;

			setTimeout(function() {
            calcback()
        }, 1000);

};
