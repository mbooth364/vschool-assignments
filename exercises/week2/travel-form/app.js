var myForm = document.getElementById("myForm");

var newSubmit = document.getElementById("submit");

newSubmit.addEventListener("click", function () {
    var firstName = myForm.elements.firstName.value;
    var lastName = myForm.elements.lastName.value;
    var age = myForm.elements.age.value;
    var gender = myForm.elements.gender.value;
    var location = myForm.elements.location.value;
    var diet = myForm.elements.diet.value;

    alert("firstname: " + firstName + lastName + age + gender + location + diet);
})



