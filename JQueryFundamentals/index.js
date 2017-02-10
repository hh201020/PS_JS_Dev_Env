$(document).ready(function () {
  console.log($('#TestDiv').html());                                                  // # select by ID
  console.log($('.BlueDiv').html());                                                  // . select by class
  console.log($('span.BlueDiv').html());                                              // . select by class of tag
  $('div').each(function () {                                                         //   select by tag
    console.log($(this).html());
  });
  $('div[title*="Title"]').html('Updated anywhere Div Value due to Title');           // * select by Attr contains
  $('div[title^="Title"]').html('Updated start Div Value due to Title');              // ^ select by Attr starts with
  $('div[title$="Title"]').html('Updated end Div Value due to Title');                // $ select by Attr ends with
  $(':input').each(function () {                                                      // : select by input
    var elem = $(this);                                                               // 'this' stands for each item of input
    console.log(elem.val());
  });
  $('#form1 :input').each(function () {                                               // select inputs only in the form1
    var elem = $(this);                                                               // 'this' stands for each item of input
    console.log(elem.val());
  });
  $('#form1 :input').each(function () {                                               // select inputs only in the form1
    var elem = $(this);                                                               // 'this' stands for each item of input
    console.log(elem.val());
  });
  console.log($('div:contains("Table")').css('background-color', 'green').html());    // :contains    select by feature
  console.log($('tr:odd').css('background-color', 'yellow'));                         // :odd select  by feature
  console.log($('#DataTable tr:first-child').css('background-color', 'pink'));        // :first-child select by feature

});
