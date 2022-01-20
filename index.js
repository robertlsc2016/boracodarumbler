// var unirest = require("unirest");


slide(2);
function slide(x) 
{
    if (x == 1){
        // SLIDE EMAILS
        document.getElementById ("precos-hospedagem").style.display = "none";
        document.getElementById ("precos-dominios").style.display = "none";

        document.getElementById ("precos-emails").style.display = "flex";


        document.getElementById ("hr-emails").style.border = "#f26b7a 3px solid";
        document.getElementById ("hr-dominio").style.border = "";
        document.getElementById ("hr-hospedagem").style.border = "";
    }

    if (x == 2){
        // SLIDE HOSPEDAGEM
        document.getElementById ("precos-emails").style.display = "none";
        document.getElementById ("precos-dominios").style.display = "none";

        document.getElementById ("precos-hospedagem").style.display = "flex";

        document.getElementById ("hr-emails").style.border = "";
        document.getElementById ("hr-hospedagem").style.border = "#f26b7a 3px solid";                
        document.getElementById ("hr-dominio").style.border = "";
    }   

    if (x == 3){
        // SLIDE DOMÍNIO
        document.getElementById ("precos-emails").style.display = "none";
        document.getElementById ("precos-hospedagem").style.display = "none";

        document.getElementById ("precos-dominios").style.display = "flex";

        document.getElementById ("hr-emails").style.border = "";
        document.getElementById ("hr-dominio").style.border = "#f26b7a 3px solid";
        document.getElementById ("hr-hospedagem").style.border = "";                
    }
}

function whois(){  
    var req = unirest("GET", "https://whoisapi-whois-v2-v1.p.rapidapi.com/whoisserver/WhoisService");
    var domain = "rasdobert.com"
    
    req.query({
      "apiKey": "at_m6OvoSkvkg5PDOkRY0uH8j8iEiISA",
      "domainName": `${domain}`,
      "ip": "0",
      "checkproxydata": "0",
      "preferfresh": "0",
      "_parse": "0",
      "thinWhois": "0",
      "ipwhois": "0",
      "da": "0",
      "outputFormat": "JSON"
    });
  
    req.headers({
      "x-rapidapi-key": "d09b63fd6cmshecd47c538ab411ap1930f4jsn4dc17f63ad0f",
      "x-rapidapi-host": "whoisapi-whois-v2-v1.p.rapidapi.com",
      "useQueryString": true
    });
  
  
    req.end(
      function (res) {
      if (res.error) new Error(res.error);
      console.log(res.body.WhoisRecord.domainName);
  
      if (res.body.WhoisRecord.status == "clientTransferProhibited") {
        console.log("Registrado");
      } else {
        console.log("Domínio Livre")
      }
    });
}
  
whois();
