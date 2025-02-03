document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("employeeForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        const employeeData = {
            employeeID: parseInt(document.getElementById("employeeID").value) || 0, 
            employee_LastName: document.getElementById("lastName").value,
            employee_FirstName: document.getElementById("firstName").value,
            employee_DateofBirth: document.getElementById("dateOfBirth").value,
            employee_DateofJoining: document.getElementById("dateOfJoining").value,
            employee_Department: document.getElementById("department").value,
            employee_Salary: parseFloat(document.getElementById("salary").value),
            loggedUserID: parseInt(document.getElementById("loggedUserID").value),
        }
    ;
    console.log("Data to send:", employeeData);
    fetch("https://localhost:7251/api/Employee/create", {
    method: "POST",
            headers:
        {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(employeeData),
        })
            .then((response) =>
             {
             if (!response.ok)
             {
                 throw new Error(`API responded with status ${ response.status }`);
}
return response.json();
            })
            .then((data) =>
             {
                 console.log("Employee created successfully:", data);
                 alert("Employee created successfully!");
                 document.getElementById("employeeForm").reset();
             })
            .catch((error) =>
            {
                console.error("Error creating employee:", error);
                alert(`Error creating employee: ${ error.message}`);
            });
    });
});
