emailjs.init({
	publicKey: "mtp6vqPR3Upyy9wsZ"
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
	event.preventDefault();
	// these IDs from the previous steps
	emailjs.sendForm("service_c2odexb", "template_i3pd7id", this).then(
		() => {
			console.log("SUCCESS!");
		},
		error => {
			console.log("FAILED...", error);
		}
	);
});
//3교_btnReset추가_formMail시작_설정_전송까지
