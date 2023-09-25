// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
    // Constants for speed limit and kilometers per demerit point
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    // Check if the current speed is within the speed limit
    if (speed < speedLimit) {
      return 'Ok'; // If within the limit, return 'Ok'
    } else {
      // Calculate demerit points for exceeding the speed limit
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      
      // Check if the driver's license should be suspended
      if (demeritPoints > 12) {
        return 'License suspended';
      } else {
        return `Points: ${demeritPoints}`; // Return the calculated demerit points
      }
    }
  }
  
  // Prompt the user for input
  const inputSpeed = prompt('Enter car speed (in km/h):'); // Prompt for user input
  const speed = parseFloat(inputSpeed); // Convert the input to a floating-point number
  
  if (!isNaN(speed)) { // Check if the input is a valid number
    const result = calculateDemeritPoints(speed); // Calculate demerit points
    alert(result); // Display the result to the user using an alert
  } else {
    alert('Invalid input: Please enter a valid number.'); // Handle invalid input
  }
  