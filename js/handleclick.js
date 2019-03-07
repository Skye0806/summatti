
// able to recieve email notification and also have the warning when entering wrong info
function handleClick() {
$.ajax({
  url:"https://us-central1-teak-spot-172014.cloudfunctions.net/notification",
  data:{
    email: $('#email').val(),
    name: $('#fullname').val(),
    phone: $('#phonenum').val()
  },
  dataType: 'json',
  success: {}
}).done(function(data){
    $("#button1").click(function(){
      $("#checkimg").show();
      $("div.info").html("<h4> <b>Submission Successful</b><br><br><h6>Thanks for submitting the form. We will send you the dashboard shortly.</h6></h4>");
});
})
}


// code for "submission successful page"

// $(document).ready(function(){
//   $("#button1").click(function(){
//     $("#checkimg").show();
//     $("div.info").html("<h4> <b>Submission Successful</b><br><br><h6>Thanks for submitting the form. We will send you the dashboard shortly.</h6></h4>");
//
// });
// });

//alert does not show

// function handleClick() {
// $.ajax({
//   url:"https://us-central1-teak-spot-172014.cloudfunctions.net/notification",
//   data:{
//     email: $('#email').val(),
//     name: $('#fullname').val(),
//     phone: $('#phonenum').val()
//   },
//   dataType: 'json',
//   success: function(data){
//   alert('done');
//   }
// });
// }


// can get the email notification,but does not do anything when clicking the button

// function handleClick() {
// $.ajax({
//   url:"https://us-central1-teak-spot-172014.cloudfunctions.net/notification",
//   data:{
//     email: $('#email').val(),
//     name: $('#fullname').val(),
//     phone: $('#phonenum').val()
//   },
//   dataType: 'json',
//   success: function (data){
//     $("div.info").replaceWith("<h1> have a great day</h1>");
//   }
// }).done(function(data) {
//     alert("done");
//   });
// }
