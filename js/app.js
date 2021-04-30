
$( document ).ready(function() {

   $( ".cross" ).hide();
   $( ".menu" ).hide();
   $( ".hamburger" ).click(function() {
   $( ".menu" ).slideToggle( "slow", function() {
   $( ".hamburger" ).hide();
   $( ".cross" ).show();
   });
   });
   $( ".cross" ).click(function() {
   $( ".menu" ).slideToggle( "slow", function() {
   $( ".cross" ).hide();
   $( ".hamburger" ).show();
   });
   });
   
   $( ".close" ).hide();
   $( ".pdf-doc" ).hide();
   $( ".open" ).click(function() {
   $( ".pdf-doc" ).slideToggle( "fast", function() {
   $( ".open" ).hide();
   $( ".close" ).show();
   });
   });
   $( ".close" ).click(function() {
   $( ".pdf-doc" ).slideToggle( "fast", function() {
   $( ".close" ).hide();
   $( ".open" ).show();
   });
   });

   // 
   $( ".c-faq-1" ).hide();
   $( ".faq-1" ).hide();
   $( ".o-faq-1").click(function() {
   $( ".faq-1" ).slideToggle( "fast", function() {
   $( ".o-faq-1" ).hide();
   $( ".c-faq-1" ).show();
   });
   });
   $( ".c-faq-1" ).click(function() {
   $( ".faq-1" ).slideToggle( "fast", function() {
   $( ".c-faq-1" ).hide();
   $( ".o-faq-1" ).show();
   });
   });

   // 
   $( ".c-faq-2" ).hide();
   $( ".faq-2" ).hide();
   $( ".o-faq-2").click(function() {
   $( ".faq-2" ).slideToggle( "fast", function() {
   $( ".o-faq-2" ).hide();
   $( ".c-faq-2" ).show();
   });
   });
   $( ".c-faq-2" ).click(function() {
   $( ".faq-2" ).slideToggle( "fast", function() {
   $( ".c-faq-2" ).hide();
   $( ".o-faq-2" ).show();
   });
   });

   // 
   $( ".c-faq-3" ).hide();
   $( ".faq-3" ).hide();
   $( ".o-faq-3").click(function() {
   $( ".faq-3" ).slideToggle( "fast", function() {
   $( ".o-faq-3" ).hide();
   $( ".c-faq-3" ).show();
   });
   });
   $( ".c-faq-3" ).click(function() {
   $( ".faq-3" ).slideToggle( "fast", function() {
   $( ".c-faq-3" ).hide();
   $( ".o-faq-3" ).show();
   });
   });
   
   //
   $( ".c-faq-4" ).hide();
   $( ".faq-4" ).hide();
   $( ".o-faq-4").click(function() {
   $( ".faq-4" ).slideToggle( "fast", function() {
   $( ".o-faq-4" ).hide();
   $( ".c-faq-4" ).show();
   });
   });
   $( ".c-faq-4" ).click(function() {
   $( ".faq-4" ).slideToggle( "fast", function() {
   $( ".c-faq-4" ).hide();
   $( ".o-faq-4" ).show();
   });
   });
   
   });