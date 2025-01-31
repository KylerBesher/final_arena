import CMS from 'decap-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import config from '../_(admin)/_admin/config';

// Only register if not already registered
if (!CMS.getMediaLibrary('uploadcare')) {
    CMS.registerMediaLibrary(uploadcare);
}

// // Initialize the CMS
// CMS.init({
//     config: {
//         ...config,
//         media_library: {
//             name: 'uploadcare',
//             config: {
//                 publicKey: '1234567890'
//             }
//         }
//     }
// });
