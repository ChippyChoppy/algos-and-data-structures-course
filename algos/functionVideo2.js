let lauchMissiles = function() {
    missileSystem.launch("now");
};
if (safeMode)( {
    launchMissiles = function() {* do nothing *};
})