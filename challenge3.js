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

