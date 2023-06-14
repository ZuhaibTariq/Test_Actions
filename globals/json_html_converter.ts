const fs = require('fs');

// Read the JSON file
const jsonData = fs.readFileSync('cypress/results/mochawesome.json');
const data = JSON.parse(jsonData.toString());

// Create the HTML table
let table = `
  <table style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr style="background-color: #eee;">
        <th style="padding: 10px; border: 1px solid #ccc;">Stats</th>
        <th style="padding: 10px; border: 1px solid #ccc;">Values</th>
      </tr>
    </thead>
    <tbody>
`;
for (const [key, value] of Object.entries(data.stats)) {
  table += `
    <tr style="background-color: ${isEvenRow() ? '#f2f2f2' : '#fff'};">
      <td style="padding: 10px; border: 1px solid #ccc;">${formatKey(key)}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">${value}</td>
    </tr>
  `;
}
table += '</tbody></table>';

fs.writeFileSync('table.html', table);

function isEvenRow() {
  let count = 0;
  return () => {
    count += 1;
    return count % 2 === 0;
  };
}

function formatKey(key) {
  // Convert snake_case to Title Case
  return key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

