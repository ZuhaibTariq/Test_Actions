const fs = require('fs');

// Read the JSON file
const jsonData = fs.readFileSync('merged_report.json');
const data = JSON.parse(jsonData.toString()).stats;

// Create the HTML table
let table = `
<html>
<h2>Cypress Results</h2>
<h3><a href=${process.argv[2]}>Execution Link</a><h3>
<table role="table" style="border-collapse: collapse; width: 100%;">
  <tbody>
    <tr>
      <th style="padding: 10px; border: 1px solid #ccc;">Passed 
        <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji>
      </th>
      <th style="padding: 10px; border: 1px solid #ccc;">Failed 
        <g-emoji class="g-emoji" alias="x" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/274c.png">❌</g-emoji>
      </th>
      <th style="padding: 10px; border: 1px solid #ccc;">Pending 
        <g-emoji class="g-emoji" alias="hand" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/270b.png">✋</g-emoji>
      </th>
      <th style="padding: 10px; border: 1px solid #ccc;">Skipped 
        <g-emoji class="g-emoji" alias="leftwards_arrow_with_hook" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/21a9.png">↩️</g-emoji>
      </th>
      <th style="padding: 10px; border: 1px solid #ccc;">Duration <g-emoji class="g-emoji" alias="clock8" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f557.png">🕗</g-emoji>
      </th>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ccc;">${data.passes}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">${data.failures}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">${data.pending}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">${data.skipped}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">${data.duration/1000}s</td>
    </tr>
  </tbody>
</table>
</html>
`;

fs.writeFileSync('table.html', table);
