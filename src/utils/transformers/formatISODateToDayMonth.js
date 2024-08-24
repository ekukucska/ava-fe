function formatISODateToDayMonth(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short' });
  return `${day} ${month}`;
}

// Example usage:
const formattedDate = formatISODateToDayMonth('2024-01-01T08:00:00Z'); // TODO: Remove after testing
console.log(formattedDate); // Output: 01 Jan // TODO: Remove after testing

export default formatISODateToDayMonth;
