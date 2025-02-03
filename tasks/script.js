document.getElementById("fetchDataBtn").addEventListener("click", () => {
    fetch("https://localhost:7251/api/Employee/get")
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);

            const tableBody = document.querySelector("#employeeTable tbody");
            tableBody.innerHTML = ""; 
            let employees = data.employees;

            if (!Array.isArray(employees) || employees.length === 0) {
                tableBody.innerHTML = "<tr><td colspan='8'>No employee data found.</td></tr>";
                return;
            }
            employees.forEach(employee => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${employee.employeeID || "N/A"}</td>
                    <td>${employee.employee_LastName || "N/A"}</td>
                    <td>${employee.employee_FirstName || "N/A"}</td>
                    <td>${employee.employee_DateofBirth ? new Date(employee.employee_DateofBirth).toLocaleDateString() : "N/A"}</td>
                    <td>${employee.employee_DateofJoining ? new Date(employee.employee_DateofJoining).toLocaleDateString() : "N/A"}</td>
                    <td>${employee.employee_Department || "N/A"}</td>
                    <td>${employee.employee_Salary ? `$${employee.employee_Salary.toFixed(2)}` : "N/A"}</td>
                    <td>${employee.loggedUserID || "N/A"}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error fetching employee data:", error);
            alert("Failed to fetch employee data. Check API response.");
        });
});
