document.addEventListener("DOMContentLoaded", function() {
    
    // Simulated data fetch from apply.php
    function fetchAdmissionData() {
        // Simulated data - this would normally come from your server
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = {
                    studentCount: 150,
                    courseCount: 300,
                    institutionCount: 5
                };
                resolve(data);
            }, 1000); // Simulate network delay
        });
    }

   // Update the dashboard with fetched data
   function updateDashboard(data) {
        document.getElementById("studentCount").textContent = data.studentCount;
        document.getElementById("courseCount").textContent = data.courseCount;
        document.getElementById("institutionCount").textContent = data.institutionCount;
   }

   // Fetch and display admission data on page load
   fetchAdmissionData().then(data => updateDashboard(data));
});