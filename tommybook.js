// alert('Welcome to Tommybook! ');
// alert('Please remember to provide your email address for news and update.');

// let home;
// function showHomeInfo(home) {
//     console.log(home);
//     alert(house.name);
// }

jQuery(document).ready(function() {

// initially hide the answers in the FAQ section

jQuery(".answer").hide();

//handling the FAQ questions click

jQuery(".faq h4").click(function() {

    jQuery(this).next(".answer").slideToggle();
});

jQuery(".faq h4").addClass("faq-questions");

});
