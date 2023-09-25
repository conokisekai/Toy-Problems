// Constants for tax rates, NHIF, and NSSF contributions
const TAX_RATE = 0.3; // 30% tax rate
const NHIF_RATE = 2500; // NHIF contribution
const NSSF_RATE = 2000; // NSSF contribution

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  // Calculate gross salary by adding basic salary and benefits
  const grossSalary = basicSalary + benefits;

  // Calculate tax (payee) based on the tax rate
  const tax = grossSalary * TAX_RATE;

  // Calculate net salary by subtracting tax, NHIF, and NSSF contributions
  const netSalary = grossSalary - tax - NHIF_RATE - NSSF_RATE;

  return {
    grossSalary,
    tax,
    nhifDeduction: NHIF_RATE,
    nssfDeduction: NSSF_RATE,
    netSalary,
  };
}

// Prompt the user for input
const inputBasicSalary = prompt('Enter basic salary:');
const inputBenefits = prompt('Enter benefits:');
const basicSalary = parseFloat(inputBasicSalary);
const benefits = parseFloat(inputBenefits);

if (!isNaN(basicSalary) && !isNaN(benefits)) {
  const result = calculateNetSalary(basicSalary, benefits);

  // Display the calculated values to the user
  alert(`Gross Salary: ${result.grossSalary.toFixed(2)}`);
  alert(`Tax (Payee): ${result.tax.toFixed(2)}`);
  alert(`NHIF Deduction: ${result.nhifDeduction.toFixed(2)}`);
  alert(`NSSF Deduction: ${result.nssfDeduction.toFixed(2)}`);
  alert(`Net Salary: ${result.netSalary.toFixed(2)}`);
} else {
  alert('Invalid input: Please enter valid numeric values for basic salary and benefits.');
}
