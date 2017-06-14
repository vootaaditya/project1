function revNumber()
   {
    var b : number=0;
	var a:string = (<HTMLInputElement> document.getElementById("num")).value;
    var d = parseInt(a);
   while(d > 0)
    {      
        b = b * 10;
        b = b + (d%10);
        d =(d / 10);
	    var c = b.toString;
        var out = document.write("The reversed number is" + c);
    }
   }