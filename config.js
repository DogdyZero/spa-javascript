const {google} = require('googleapis');
const credentials = require('./credentials.json');

let client = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
)
client.authorize(function(err,tokens){
  if(err){
    console.log(err)
  } else{
    gsRun(client)
  }
})
async function gsRun(client){
  const gsApi = google.sheets({version:'v4', auth:client});
  const opt = {
    spreadsheetId:'1FJo4EHFqJZ5wglQaGo1V_lh21wooP_08b53oS4Rhv_c',
    range:'A1:D5'
  }
  let data = await gsApi.spreadsheets.values.get(opt);
  console.log(data)
}