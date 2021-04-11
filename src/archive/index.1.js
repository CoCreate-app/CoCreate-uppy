import crud from '@cocreate/crud-client';
// Import the plugins
const Uppy = require("@uppy/core");
const XHRUpload = require("@uppy/xhr-upload");
const Dashboard = require("@uppy/dashboard");
const ImageEditor = require('@uppy/image-editor')
const Webcam = require('@uppy/webcam')
const ScreenCapture = require('@uppy/screen-capture')
const GoogleDrive = require('@uppy/google-drive')
const Dropbox = require('@uppy/dropbox')
const Instagram = require('@uppy/instagram')
const Facebook = require('@uppy/facebook')
const OneDrive = require('@uppy/onedrive')

// And their styles (for UI plugins)
// With webpack and `style-loader`, you can require them like this:
require("@uppy/core/dist/style.css");
require("@uppy/dashboard/dist/style.css");

const uppy = new Uppy()
  .use(Dashboard, {
    inline: true,
    trigger: "#drag-drop-area",
    replaceTargetContent: true,
    showProgressDetails: true,
    note: 'up to 15 MB',
    proudlyDisplayPoweredByUppy: false,
    metaFields: [
      { id: 'name', name: 'Name', placeholder: 'file name' },
      { id: 'license', name: 'License', placeholder: 'specify license' },
      { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' },
      { id: 'public', name: 'Public', render: function({value, onChange}, h) {
        return h('input', { type: 'checkbox', onChange: (ev) => onChange(ev.target.checked ? 'on' : 'off'), defaultChecked: value === 'on' })
      } }
    ]
  })
  .use(ImageEditor, { target: Dashboard })
  .use(Webcam, { target: Dashboard })
  .use(ScreenCapture, { target: Dashboard })
  // .use(XHRUpload, { endpoint: "https://api2.transloadit.com" })
  .use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
  .use(Dropbox, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
  .use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
  .use(Facebook, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
  .use(OneDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });

/*
uppy.on("file-added", (file) => {
   console.log("file adde ",file.data)
   console.log("........")
     crud.createDocument({collection:'jean',
       data: {
				"nuevo": 1,
				"nuevo2": 2,
				"nuevo3": 3,
			},
     })
  console.log("Guardo")
  // Do something
  var reader = new FileReader();
  reader.readAsDataURL(file.data);
  reader.onloadend = function () {
    var base64data = reader.result;
    console.log(base64data);
  };
});
*/

uppy.on("complete",async (result) => {
  //console.log("sssswsp --- ",result.successful)
  //crud.createDocument({collection:'jean', uuid: "unique string"})
  console.log("Guardo...")
    for (const index in result.successful) {
      let file = result.successful[index];
      let file_data = file.data;
      //console.log("file_data ",file_data)
      console.log("Guardo...",file_data)
      const resp2 = await readFile(file.data, 'readAsDataURL');
       crud.createDocument({
         collection:'jean',
         data: {
  				"name": file_data.name,
  				"type": file_data.type,
  				"size": file_data.size,
  				"base64": resp2.result,
  			},
       })
      //console.log("resp2",resp2.result)
      
    }
      console.log(
        "Upload complete! We’ve uploaded these files:",
        result.successful
      );
});

const readFile = (file = {}, method = 'readAsText') => {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader[method](file)
    reader.onload = () => {
      resolve(reader)
    }
    reader.onerror = (error) => reject(error)
  })
}
