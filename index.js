document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();

   
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const mobile = document.getElementById('mobile').value;
    const school = document.getElementById('school').value;

    const photoInput = document.getElementById('photo');
    const photoFile = photoInput.files[0];

   
    const enrolledStudentDetails = document.getElementById('enrolledStudentDetails');
    const studentDetailsDiv = document.createElement('div');
    
    studentDetailsDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>School Name:</strong> ${school}</p>
        <p><strong>Photo:</strong> <img src="${URL.createObjectURL(photoFile)}" alt="Student Photo" style="max-width: 100px;"></p>
        <hr>
    `;

    
    enrolledStudentDetails.appendChild(studentDetailsDiv);

   
    document.getElementById('studentForm').reset();
});