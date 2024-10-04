const frmEmail = document.getElementById("form")
frmEmail.addEventListener("submit", sendEmail)

const serviceId = "service_38vvg27"
const templateId = "template_9ltb4un"
const apiKey = "JMPgGwxD4UgDvUdKk"


function sendEmail(event) 
{
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId, templateId, frmEmail, apiKey)
        .then(() => {
            alert("Email sent successfully!")
        }, (err) => {
            alert("Failed to send email!\r\n Response:\n " + JSON.stringify(err))
        })
}