function whois(){
  var unirest = require("unirest");

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
    function consultar(res) {
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

function slide() {
  alert("pl");
}