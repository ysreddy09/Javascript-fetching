document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("deleteEmployeeForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const employeeID = parseInt(document.getElementById("employeeID").value);

        if (isNaN(employeeID) || employeeID <= 0) {
            alert("Please enter a valid Employee ID.");
            return;
        }
        const confirmDelete = confirm(`Are you sure you want to delete Employee with ID ${employeeID}?`);
        if (!confirmDelete) {
            return;
        }
        const apiUrl = `https://localhost:7251/api/Employee/delete/${employeeID}`;
        fetch(apiUrl, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`API responded with status ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Employee deleted successfully:", data);
                alert("Employee deleted successfully!");
                document.getElementById("deleteEmployeeForm").reset();
            })
            .catch((error) => {
                console.error("Error deleting employee:", error);
                alert(`Error deleting employee: ${error.message}`);
            });
    });
});
