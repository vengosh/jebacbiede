function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}

function nakurwiaj(paskot, fau, token){

    fetch("/r/redeemReward", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux aarch64; rv:68.0) Gecko/20100101 Firefox/68.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/json; charset=utf-8",
            "X-CSRFToken": token
        },
        "referrer": "https://intel.ingress.com/",
        "body": "{\"passcode\":\""+paskot+"\",\"v\":\""+fau+"\"}",
        "method": "POST",
        "mode": "cors"
    });


}

//var jarvs = ["TechnologiesFromTheNIA","XUN722019252PN","VGT422020445PT","EHF962019224NF","JEZ452020638FY","StayingVigilantBeSafe","JKZ94PRIDE226AO","FJQ82PRIDE3V9XQ"];


var v = "3e0535ade2280896efce19761bda643d066d2b03";
var token = "9rCluP12AynTOs966a09FqNaxCN2k8g1X4uSM7ioMekD3CtZroE0oU54KTyw3ShP";

var rdm = ["TechnologiesFromTheNIA","XUN722019252PN","VGT422020445PT","EHF962019224NF","JEZ452020638FY","StayingVigilantBeSafe","JKZ94PRIDE226AO","FJQ82PRIDE3V9XQ","28PAGCEFMY3A3UG4B75MWPYKF4W","BGHNRRFCE3RU9CN5FZYJVEHYPK7","DBW652019645OM","FAB282019938CZ","DAT452019533TZ","OWF662019787UZ","MP1WB6INGY9DGSWZ","LVBOYNXAIE","GZE67DVAMA929DG","FTT582020848FH","BSG362020224OY","MME822020472OH","6HXAJADALDQAC","5PFJSADAQ3AVP","7BMJ2ITOEN2TL61","HelpingTheResearchers","SolvingTheTessellation","ExploreTogether2021","GJZQ2JEZERO3N5KJ","JNTPP21J2376","SR8BA21ZQYDW","SRXUP21ZNJSK","7X725A8GOPJX56T78MBEXIICPQ5","82A6UJ4FVATJT8EZ1V8MAVQH430","88G8M21TBBQP","7KEP584BTHJ2S5KK23DQCA","SBQTA21Y5AIW","79COT1KC85BIRTHDAY52NO2G9IB","A4JK6HPYYNW85HKR902DJD3R7AB","5ZKPLG392WPMUXF7F8RXZ4YFVFS","KC26VYCRBIKWNI2022M7IHU23AF","IFN0O1KDXI1MGVBBPVJSZ3PO1WC","936XOOY02QCF42IG80YKCDCOSGW","ALBERT18790314","MANYWORLDSMANYLINKS","EJONCITOENCVSK8","BH3KLUE9LT","80JDFITMAR","DBW6520196450M","152465240665744585196053038","517705509732107203640764589","921980791478436253833951694","XIG12JY56IMD2409D8OFK13J2KI","4R71570FMURD3R2"];

/*############ LOOP ################*/

for (let x1 = 0; x1 < rdm.length; x1++){
        nakurwiaj(rdm[x1],v, token);
        console.log("passcode: " + rdm[x1] + " redeemed! (nakurwiony)");
        sleep(3);
};