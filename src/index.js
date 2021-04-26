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
    target: "#drag-drop-area",
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
  let dashboard = uppy.getPlugin('Dashboard');
  let element_target = dashboard.el.parentElement
 console.log("dash -",element_target.getAttribute('data-collection'))
 console.log("name -",element_target.getAttribute('name'))
 const {collection,name} = crud.GetAttr(element_target)
 console.log("collection ",collection)
 console.log("name ",name)
});


uppy.on("complete",async (result) => {
  let dashboard = uppy.getPlugin('Dashboard');
  let element_target = dashboard.el.parentElement
  let collection = element_target.getAttribute('data-collection');
  let name = element_target.getAttribute('name');
  let data_array = []
  console.log(name)
  for (const index in result.successful) {
    let file = result.successful[index];
    let file_metadata = file.meta;
    let file_data = file.data;
    let method_parse = ( file_data.type.includes('image') || file_data.type.includes('audio') || file_data.type.includes('video') ) ? 'readAsDataURL' : 'readAsText'
    const resp2 = await readFile(file.data, method_parse);
    console.log(file_data.type,"->",resp2.result)
    file_data = Object.assign({},file_metadata , {
				"name": file_data.name,
				"type": file_data.type,
				"size": file_data.size,
				"content": resp2.result,
			});
			if(name == null)
         crud.createDocument({
           collection:collection,
           data: file_data,
         });
      else
        data_array.push(file_data);
  }
  
  if(data_array.length){
    console.log("saved many files on document with one name")
    crud.createDocument({
         collection:collection,
         data: {'name':name,'files':data_array},
       });
  }else{
    console.log("saved each document as image")
  }
/*  
  for (const index in result.successful) {
    let file = result.successful[index];
  console.log(file)
  console.log(file.type)
  console.log(file.data)
  const resp2 = await readFile(file.data, 'readAsText');
  console.log("html ",resp2)
  }*/
  
/*  console.log(
    "Upload complete! We’ve uploaded these files:",
    result.successful
  );*/
  alert("Saved")
  uppy.reset()
});

uppy.on('dashboard:modal-open', () => {
  console.log('Modal is open')
})

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

alert("----")