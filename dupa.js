// ==UserScript==
// @id             iitc-plugin-multi-passcode@rongself
// @name           IITC plugin: MultiNakurwiacz
// @category       Controls
// @version        0.1.0.20180601.0917.
// @namespace      https://gist.github.com/rongself/288ad6c887ffb184b469ae0295acc642
// @updateURL      https://gist.github.com/onceamoose/8e9b36056fa841fd927924fd3fd4f44b
// @downloadURL    https://gist.github.com/onceamoose/8e9b36056fa841fd927924fd3fd4f44b
// @description    [rongself-2016-07-17-154202] script for multi passcode apply [appastair-2018-05-28.1331] fixed and added support for newline [onceamoose-2018-06-02.0917] fixed intel links and added random number time to wait
// @include        https://*.ingress.com/intel*
// @include        http://*.ingress.com/intel*
// @match          https://*.ingress.com/intel*
// @match          http://*.ingress.com/intel*
// @include        https://*.ingress.com/mission/*
// @include        http://*.ingress.com/mission/*
// @match          https://*.ingress.com/mission/*
// @match          http://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==


function wrapper(plugin_info) {
    // ensure plugin framework is there, even if iitc is not yet loaded
    if(typeof window.plugin !== 'function') window.plugin = function() {};

    //PLUGIN AUTHORS: writing a plugin outside of the IITC build environment? if so, delete these lines!!
    //(leaving them in place might break the 'About IITC' page or break update checks)
    plugin_info.buildName = 'onceamoose';
    plugin_info.dateTimeVersion = '2018-06-02.0917';
    plugin_info.pluginId = 'multi-passcode';
    //END PLUGIN AUTHORS NOTE



    // PLUGIN START ////////////////////////////////////////////////////////


    // use own namespace for plugin
    window.plugin.multiPasscode = function() {};


    window.plugin.multiPasscode.setup  = function() {
        $("#redeem").off('keypress');
        $("#redeem").keypress(function(e) {
            if((e.keyCode ? e.keyCode : e.which) !== 13) return;

            var passcodes = $(this).val();            
            var timeTowait = 5000;
            var start = 0;
            if(!passcodes) return;

            passcodes.split(/\s/).forEach(function(passcode){
                setTimeout(function(){
                    var jqXHR = window.postAjax('redeemReward', {passcode:passcode}, window.handleRedeemResponse, function(response) {
                        var extra = '';
                        if(response.status) {
                            extra = (window.REDEEM_STATUSES[response.status] || 'The server indicated an error.') + ' (HTTP ' + response.status + ')';
                        } else {
                            extra = 'No status code was returned.';
                        }
                        dialog({
                            title: 'Request failed: ' + data.passcode,
                            html: '<strong>The HTTP request failed.</strong> ' + extra
                        });
                    });
                    jqXHR.passcode = passcode;

                },start);
                start += Math.floor((Math.random() * timeTowait) + timeTowait);
            });
        })
    }
    var setup =  window.plugin.multiPasscode.setup;

    // PLUGIN END //////////////////////////////////////////////////////////


    setup.info = plugin_info; //add the script info data to the function as a property
    if(!window.bootPlugins) window.bootPlugins = [];
    window.bootPlugins.push(setup);
    // if IITC has already booted, immediately run the 'setup' function
    if(window.iitcLoaded && typeof setup === 'function') setup();
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
(document.body || document.head || document.documentElement).appendChild(script);
