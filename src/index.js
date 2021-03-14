// Import the plugins
const Uppy = require("@uppy/core");
const XHRUpload = require("@uppy/xhr-upload");
const Dashboard = require("@uppy/dashboard");

// And their styles (for UI plugins)
// With webpack and `style-loader`, you can require them like this:
require("@uppy/core/dist/style.css");
require("@uppy/dashboard/dist/style.css");

const uppy = new Uppy()
  .use(Dashboard, {
    inline: true,
    trigger: "#drag-drop-area",
  })
  .use(XHRUpload, { endpoint: "https://api2.transloadit.com" });

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
