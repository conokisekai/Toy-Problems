// Function to calculate the grade based on student marks
function calculateGrade(marks) {
    // Check if marks are within the valid range (0 to 100)
    if (marks >= 0 && marks <= 100) {
      // Determine the grade based on the grading criteria
      if (marks > 79) {
        return 'A';
      } else if (marks >= 60 && marks <= 79) {
        return 'B';
      } else if (marks >= 50 && marks <= 59) {
        return 'C';
      } else if (marks >= 40 && marks <= 49) {
        return 'D';
      } else {
        return 'E'; // Marks are less than 40
      }
    } else {
      return 'Invalid input: Marks should be between 0 and 100.';
    }
  }
