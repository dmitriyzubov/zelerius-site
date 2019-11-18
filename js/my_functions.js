// https://gist.github.com/rmruano/4638071

newCorsXHR = function(type, url) {
  var xhr = false;
  try {
     xhr = new XMLHttpRequest();
  } catch(e) {}
  if (xhr && "withCredentials" in xhr) {
      xhr.open(type, url, true); // Standard Cors request
  } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest(); // IE Cors request
      xhr.open(type, url);
      xhr.onload = function() {
      	this.readyState = 4;
      	if (this.onreadystatechange instanceof Function) this.onreadystatechange();
      };
  } else if (xhr) {
  	xhr.open(type, url, true);
  };
  return xhr;
};

// USAGE --------------------------------------------------------
  // Request a new XHR object

function poolBtnFunction()
{
    var table = "", myObj;
    var xhr = newCorsXHR("GET","https://raw.githubusercontent.com/zelerius/zelerius-pool-list/master/pool-list/zelerius-pools.json");

    // Set future closure
    xhr.onreadystatechange=function() {
    	if (xhr.readyState == 4) {
            table += "<table class=\"col-centered text-center\">";
            var response = xhr.responseText;
                if(response.length != 0)
                {
                    myObj = JSON.parse(response);
                    for (x in myObj.pools) {
                        table += "<tr><td>" +  " <a href=\"" + myObj.pools[x].url + "\" target=\"_blank\" >" + myObj.pools[x].name + "</a>" + "</td></tr>";
                        /*if(x>=1)
                            break;*/
                    }
                    table += "</table>";
                    table += "<span style='text-align: right; font-size: 10px; float: right; margin: 10px;'>If you run a pool, please submit a Pull Request on <span class='fab fa-github'> <a href='https://github.com/zelerius/zelerius-pool-list' target=\'_blank\'>GitHub</a></span></span>";
                    document.getElementById("pools").innerHTML = table;
                }
    	}
    };
  // Initiate the request
    xhr.send();
}


//Zelerius Network requests
function initialRequest()
{
    var height = "";
    var myObj;
    var xhr = newCorsXHR("POST","http://pool.bitsumcash.org:8117/stats");

    // Set future closure
    xhr.onreadystatechange=function() {
    	if (xhr.readyState == 4) {
            var response = xhr.responseText;
                if(response.length != 0)
                {
                    myObj = JSON.parse(response);
                    var total_supply = 18446744073709551615 / Math.pow(10, 12);
                    var emission_factor = 21;
                    var k = 1 / Math.pow(2, emission_factor);
                    var target = 30;
                    var height = Number(myObj.network.height) - 1;
                    var csupply = total_supply *  ( (k-1) * Math.pow((1-k), height) + 1 );

                    /*document.getElementById("csupply").innerHTML =
                        csupply.toFixed(0).toString()
                        + '<span class="duration">ZLS</span>';*/

                    document.getElementById("lastreward").innerHTML =
                        ( (Number(myObj.lastblock.reward) / Math.pow(10, 12)).toFixed(2) ).toString()
                        + '<span class="duration">ZLS</span>';
                }
    	}
    };
  // Initiate the request
    xhr.send();
}

//JSON RPC
function get_status() {

    var myObj;
    var xhr = newCorsXHR("POST","http://82.223.50.28:48081/json_rpc");

    var request = '{"method":"get_status"}';
    // Set future closure
    xhr.onreadystatechange=function() {
    	if (xhr.readyState == 4) {
            var response = xhr.responseText;
                if(response.length != 0)
                {
                    myObj = JSON.parse(response);
                    var total_supply = 18446744073709551615 / Math.pow(10, 12);
                    var emission_factor = 21;
                    var k = 1 / Math.pow(2, emission_factor);
                    var target = 30;
                    var height = Number(myObj.result.top_block_height) - 1;
                    var csupply = total_supply *  ( (k-1) * Math.pow((1-k), height) + 1 );

                    document.getElementById("csupply").innerHTML =
                        csupply.toFixed(0).toString()
                        + '<span class="duration">ZLS</span>';
                }
    	}
    };
  // Initiate the request
    xhr.send(request);
}

//CORS

// Fetch live statistics
var xhrLiveStats;
var api = "https://pool.zelerius.org:4010";
function fetchLiveStats() {
    var apiURL = api + '/live_stats';

    var total_supply = 18446744073709551615 / Math.pow(10, 12);
    var emission_factor = 21;
    var k = 1 / Math.pow(2, emission_factor);
    var target = 30;

    xhrLiveStats = $.ajax({
        url: apiURL,
        dataType: 'json',
        cache: 'false'
    }).done(function(data){
        var height = Number(data.network.height) - 1;
        var csupply = total_supply *  ( (k-1) * Math.pow((1-k), height) + 1 );
        var creward = (total_supply - csupply) / Math.pow(2,emission_factor);
        var lreward =  ( Number(data.lastblock.reward) / Math.pow(10, 12) ).toFixed(4);//creward + fees
        document.getElementById("csupply").innerHTML =
                        csupply.toFixed(0).toString()
                        + '<span class="duration">ZLS</span>';
        document.getElementById("lastreward").innerHTML =
                        ( creward.toFixed(4) ).toString()
                        + '<span class="duration">ZLS</span>';
    }).always(function(){
        fetchLiveStats();
    });
}



// Loading button pool list
$(function(){

    getMARKET();

    var twoToneButton = document.querySelector('.outline-btn');
    var twoToneButtonLoader = document.querySelector('.outline-btn-loader');

    twoToneButton.addEventListener("click", function() {
    twoToneButton.innerHTML = "Loading... <i class='fa fa-spinner fa-spin fa-1x fa-fw'></i>";

    setTimeout(
            function(){
                try{
                    poolBtnFunction();
                }catch(err){
                    twoToneButton.innerHTML = err.message;
                    return;
                }
                try{
                    twoToneButton.remove();
                }catch(err){
                    twoToneButton.innerHTML = "Zelerius Pool List";
                }
            }, 2000);
    }, false);

});


function getMARKET() {

    var MARKET_URL = "https://explorer.zelerius.org/q/market/";

    xhrLiveStats = $.ajax({
        url: MARKET_URL,
        dataType: 'json',
        cache: 'false'
    }).done(function(data){
        document.getElementById("textBidAsk").innerHTML =
            "<a href='https://trade.birake.com/?focus=ZLS' target='_blank'>Birake.com</a>" +
            " - Zelerius [ZLS] bid " + data.bid + 'BTC / ask ' + data.ask + "BTC";
    }).always(function(){
        getMARKET();
    });
}
