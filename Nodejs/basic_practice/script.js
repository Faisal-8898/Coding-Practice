import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import RemoteSources from '@uppy/remote-sources'
import ImageEditor from '@uppy/image-editor'
import Webcam from '@uppy/webcam'
import Tus from '@uppy/tus'

const uppy = new Uppy()
  .use(Dashboard, { trigger: '#select-files' })
  .use(RemoteSources, { companionUrl: 'https://companion.uppy.io' })
  .use(Webcam, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
  .on('complete', (result) => {
    console.log('Upload result:', result)
  })


