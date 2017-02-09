expireDate = new Date
expireDate.setMonth(expireDate.getMonth()+6)
jcount = eval(cookieVal("jaafarCounter"))
jcount++ 
document.cookie = "jaafarCounter="+jcount+";expires=" + expireDate.toGMTString()

function cookieVal(cookieName) {
thisCookie = document.cookie.split("; ")
for (i=0; i<thisCookie.length; i++){
if (cookieName == thisCookie[i].split("=")[0]){
return thisCookie[i].split("=")[1]
}
}
return 0
}

function page_counter(){
for (i=0;i<(7-jcount.toString().length);i++)
$('#count').text("0");
for (y=0;y<(jcount.toString().length);y++)
$('#count').text(jcount.toString().charAt(y));
}

page_counter(jcount);

