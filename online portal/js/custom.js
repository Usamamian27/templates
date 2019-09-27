var tStart = 100 // Start transition 100px from top
  , tEnd = 500   // End at 500px
  , cStart = [255, 255, 255, 0.5 ]   // Gold
  , cEnd = [255, 255, 255]   // Lime
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $(".header").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});