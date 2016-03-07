jQuery(document).ready(function($) {
  $('#toggle-settings').on('click', handleSettingsToggle);
});
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
