// Load the Google APIs Client Library for JavaScript
gapi.load('client', initClient);

// Initialize the API client with your API credentials
function initClient() {
  gapi.client.init({
    apiKey: 'YOUR_API_KEY',
    clientId: 'YOUR_CLIENT_ID',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets',
  }).then(function() {
    // Call the submitForm function when the form is submitted
    document.getElementById('myForm').addEventListener('submit', submitForm);
  });
}

// Submit the form data to the Google Sheets document
function submitForm(event) {
  event.preventDefault();

  // Get the form data
  var formData = new FormData(event.target);

  // Get the spreadsheet ID and sheet name where you want to store the data
  var spreadsheetId = 'YOUR_SPREADSHEET_ID';
  var sheetName = 'YOUR_SHEET_NAME';

  // Create the range for the new row of data
  var range = sheetName + '!A1';

  // Create the new row of data as an array
  var newRow = [];
  for (var value of formData.values()) {
    newRow.push(value);
  }

  // Call the Google Sheets API to append the new row of data
  gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [newRow],
    },
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.error('Error: ' + reason.result.error.message);
  });

  // Clear the form fields
  event.target.reset();
}
