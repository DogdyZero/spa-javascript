import credentials from './credentials.json';

let instance

export function InstanceOfGoogleSheetsApi() {
  if (!instance)
    instance = new GoogleSheetsConfig();
  return instance;
}
class GoogleSheetsConfig {

  constructor() {
    this._authorizeButton = document.getElementById('authorize_button')
    this._signoutButton = document.getElementById('signout_button');
    this._loadScript().then(res => {
      this.handleClientLoad()
    })
  }
  _loadScript() {
    return new Promise((resolve, reject) => {
      let googleUrl = 'https://apis.google.com/js/api.js';
      let script = document.createElement('script');
      script.defer = true;
      script.async = true;
      script.type = 'text/javascript';
      script.src = googleUrl;
      document.body.appendChild(script);
      script.addEventListener('load', function () {

        resolve(true)
      })
    })
  }

  handleClientLoad() {
    gapi.load('client:auth2', this.initClient);
  }

  initClient() {
    gapi.client.init({
      apiKey:credentials.apiKey,
      clientId:credentials.clientId,
      discoveryDocs:credentials.discoveryDocs,
      scope: credentials.scopesReadOnly
    }).then(() => {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(instance.updateSigninStatus);
      // Handle the initial sign-in state.
      instance.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

      instance.authorizeButton.onclick = instance.handleAuthClick;
      instance.signoutButton.onclick = instance.handleSignoutClick;
    }, function (error) {
      console.log(JSON.stringify(error, null, 2))
    });
  }

  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      instance.authorizeButton.style.display = 'none';
      instance.signoutButton.style.display = 'flex';
    } else {
      instance.authorizeButton.style.display = 'flex';
      instance.signoutButton.style.display = 'none';
    }
  }

  handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }
  handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }
  get authorizeButton() {
    return this._authorizeButton;
  }
  set authorizeButton(element) {
    this._authorizeButton = element;
  }
  get signoutButton() {
    return this._signoutButton
  }
  set signoutButton(element) {
    this._signoutButton = element;
  }

  // appendPre(message) {
  //   var pre = document.getElementById('content');
  //   var textContent = document.createTextNode(message + '\n');
  //   pre.appendChild(textContent);
  // }

  // listMajors() {
  //   gapi.client.sheets.spreadsheets.values.get({
  //     spreadsheetId: '1FJo4EHFqJZ5wglQaGo1V_lh21wooP_08b53oS4Rhv_c',
  //     range: 'A1:D493',
  //   }).then(function (response) {
  //     var range = response.result;
  //     if (range.values.length > 0) {
  //       for (i = 0; i < range.values.length; i++) {
  //         var row = range.values[i];
  //         //   console.log(row)
  //         // Print columns A and E, which correspond to indices 0 and 4.
  //         appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3]);
  //       }
  //     } else {
  //       appendPre('No data found.');
  //     }
  //   }, function (response) {
  //     appendPre('Error: ' + response.result.error.message);
  //   });
  // }
}

