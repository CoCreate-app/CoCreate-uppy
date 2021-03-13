const uppy = Uppy.Core({ autoProceed: false });
uppy.use(Uppy.Dashboard, {
  target: "#drag-drop-area",
  inline: true,
  height: 450,
});

uppy.use(Uppy.Tus, { endpoint: "https://master.tus.io/files/" });
uppy.on("file-added", (file) => {
  // Do something
  var reader = new FileReader();
  reader.readAsDataURL(file.data);
  reader.onloadend = function () {
    var base64data = reader.result;
    console.log(base64data);
  };
});

uppy.on("upload", (data) => {
  // Do something
});

uppy.on("complete", (result) => {
  // Do something
});
