document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("updateEmployeeBtn").addEventListener("click", function () {
        const employeeData = {
            employeeID: parseInt(document.getElementById("employeeID").value) || 0,
            employee_LastName: document.getElementById("lastName").value || null,
            employee_FirstName: document.getElementById("firstName").value || null,
            employee_DateofBirth: document.getElementById("dateOfBirth").value || null,
            employee_DateofJoining: document.getElementById("dateOfJoining").value || null,
            employee_Department: document.getElementById("department").value || null,
            employee_Salary: parseFloat(document.getElementById("salary").value) || null,
            loggedUserID: parseInt(document.getElementById("loggedUserID").value) || null,
        };
        console.log("Data to send:", employeeData);
        fetch("https://localhost:7251/api/Employee/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(employeeData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`API responded with status ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Employee updated successfully:", data);
                alert("Employee updated successfully!");
                document.getElementById("updateEmployeeForm").reset();
            })
            .catch((error) => {
                console.error("Error updating employee:", error);
                alert(`Error updating employee: ${error.message}`);
            });
    });
});
