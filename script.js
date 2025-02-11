function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (!dob) {
        alert('Please enter a valid date.');
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('ageResult').innerText = `You are ${age} years old.`;
}