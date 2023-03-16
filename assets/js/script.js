// Show date and time
setInterval(function() {
  var now = dayjs();
  $("#date-time").text(now.format('MMM DD YYYY HH:mm:ssa'));
}, 1000);

// Autocomplete widget
$(function () {
  var projectType = [
    'Web Application (Full Stack)',
    'Digital Marketing Campaign',
    'Mobile Application',
  ];
  $('#project-type').autocomplete({
    source: projectType,
  });
});

// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});