console.log("contact form");

const formSubmission = () => {
  const formData = document.getElementById("contactForm");
  console.log(formData);
  const formdatas = new FormData(formData);
  //for display form value
  for (const value of formdatas.values()) {
    console.log(value);
  }
  document.getElementById("contactForm").reset()

  document.getElementsByClassName("systemMsgs")[0].innerHTML =
    "thank you for contacting us";
  setTimeout(() => {
    document.getElementsByClassName("systemMsgs")[0].innerHTML = "";
  }, 3000);
};
