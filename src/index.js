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

uppy.on("file-added", (file) => {
  // Do something
  var reader = new FileReader();
  reader.readAsDataURL(file.data);
  reader.onloadend = function () {
    var base64data = reader.result;
    console.log(base64data);
  };
});

uppy.on("complete", (result) => {
  console.log(
    "Upload complete! We’ve uploaded these files:",
    result.successful
  );
});
