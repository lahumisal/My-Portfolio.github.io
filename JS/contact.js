document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contactForm'); 

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;  
        const message = document.getElementById('message').value;

        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);

        const formData = {
            firstName,
            lastName,
            email,
            phone,  
            message
        };

        try {
            // Send the data to the server
            const response = await fetch('https://lahumisal402.netlify.app/api/contact/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse and handle the server response
            const result = await response.json();
            console.log('Server response:', result);

            alert('Your message has been sent successfully!');
            
        } catch (error) {
            console.log('There was a problem with the fetch operation:', error);
            alert('There was an error while sending your message. Please try again later.');
        }
    });
});