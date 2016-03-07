jQuery(document).ready(function($) {
  $('#toggle-settings').on('click', handleSettingsToggle);
  $('#update-settings').on('submit', handleSettingsUpdate);
});

var sizes = {
  mcw : 320,
  miw : 320,
  dcw : 1200,
  diw : 1700
};

var handleSettingsToggle = function (e) {
  var togStat = this.getAttribute('data-settings-toggle'),
      setPnl = document.getElementById('settings');
  if ( !togStat || togStat == "false" ) {
    this.setAttribute('data-settings-toggle', true);
    this.innerHTML = "Close Settings";
    setPnl.setAttribute('data-settings-open', true);
  }
  else {
    this.setAttribute('data-settings-toggle', false);
    this.innerHTML = "Open Settings";
    setPnl.setAttribute('data-settings-open', false);
  }
};

var handleSettingsUpdate = function (e) {
  e.preventDefault();
  var mcwInp = document.getElementById('mobile-content-wide'),
      dcwInp = document.getElementById('desktop-content-wide'),
      mcwVal = mcwInp.value,
      dcwVal = dcwInp.value,
      updates = 0;
  if ( mcwVal !== sizes.mcw ) {
    sizes.mcw = mcwVal;
    updates++;
  }
  if ( dcwVal !== sizes.dcw ) {
    sizes.dcw = dcwVal;
    updates++;
  }
  if ( updates > 0 ) {
    // -- Set column widths for mobile and desktop.
    // -- If diff from content to image widths, set image
    //    sizes and negative margin within view wrapper.
  }
};
