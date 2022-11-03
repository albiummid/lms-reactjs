// import React, { useEffect, useRef, useState } from 'react'
// // import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
// // import '@ckeditor/ckeditor5-clipboard/theme/clipboard.css'
// // import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
// // import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
// // import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
// // import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
// // import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
// // import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
// // import Link from '@ckeditor/ckeditor5-link/src/link'
// // import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
// // import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
// // import Heading from '@ckeditor/ckeditor5-heading/src/heading'
// // import Font from '@ckeditor/ckeditor5-font/src/font'
// // import Image from '@ckeditor/ckeditor5-image/src/image'
// // import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
// // import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
// // import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
// // import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
// // import List from '@ckeditor/ckeditor5-list/src/list'
// // import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
// // import Table from '@ckeditor/ckeditor5-table/src/table'
// // import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
// // import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation'
// // import Indent from '@ckeditor/ckeditor5-indent/src/indent'
// // import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock'
// // import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter'

// export default function Editor({ onChange, name, value }) {
//   const [editorLoaded, setEditorLoaded] = useState(false)
//   const editorRef = useRef(null)
//   const { CKEditor, ClassicEditor } = editorRef.current || {}
// //
//   useEffect(() => {
//     setEditorLoaded(true)
//     editorRef.current = {
//       CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
//       ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
//     }
//   }, [])
//   return (
//     <>
//       {editorLoaded ? (
//         <CKEditor
//           editor={ClassicEditor}
//           // config={{
//           //   plugins: [
//           //     // Essentials,
//           //     // Paragraph,
//           //     // Bold,
//           //     // Italic,
//           //     // Heading,
//           //     // Indent,
//           //     // IndentBlock,
//           //     // Underline,
//           //     // Strikethrough,
//           //     // BlockQuote,
//           //     // Font,
//           //     // Alignment,
//           //     // List,
//           //     // Link,
//           //     // MediaEmbed,
//           //     // PasteFromOffice,
//           //     // Image,
//           //     // ImageStyle,
//           //     // ImageToolbar,
//           //     // ImageUpload,
//           //     // ImageResize,
//           //     // Base64UploadAdapter,
//           //     // Table,
//           //     // TableToolbar,
//           //     // TextTransformation,
//           //   ],
//           //   toolbar: [
//           //     'heading',
//           //     '|',
//           //     'bold',
//           //     'italic',
//           //     'underline',
//           //     'strikethrough',
//           //     '|',
//           //     'fontSize',
//           //     'fontColor',
//           //     'fontBackgroundColor',
//           //     '|',
//           //     'alignment',
//           //     'outdent',
//           //     'indent',
//           //     'bulletedList',
//           //     'numberedList',
//           //     'blockQuote',
//           //     '|',
//           //     'link',
//           //     'insertTable',
//           //     'imageUpload',
//           //     'mediaEmbed',
//           //     '|',
//           //     'undo',
//           //     'redo',
//           //   ],
//           //   heading: {
//           //     options: [
//           //       {
//           //         model: 'paragraph',
//           //         view: 'p',
//           //         title: 'Paragraph',
//           //         class: 'ck-heading_paragraph',
//           //       },
//           //       {
//           //         model: 'heading1',
//           //         view: 'h1',
//           //         title: 'Heading 1',
//           //         class: 'ck-heading_heading1',
//           //       },
//           //       {
//           //         model: 'heading2',
//           //         view: 'h2',
//           //         title: 'Heading 2',
//           //         class: 'ck-heading_heading2',
//           //       },
//           //       {
//           //         model: 'heading3',
//           //         view: 'h3',
//           //         title: 'Heading 3',
//           //         class: 'ck-heading_heading3',
//           //       },
//           //     ],
//           //   },
//           //   fontSize: {
//           //     options: [
//           //       9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 27,
//           //       29, 31, 33, 35,
//           //     ],
//           //   },
//           //   alignment: {
//           //     options: ['justify', 'left', 'center', 'right'],
//           //   },
//           //   table: {
//           //     contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
//           //   },
//           //   image: {
//           //     resizeUnit: 'px',
//           //     toolbar: [
//           //       'imageStyle:alignLeft',
//           //       'imageStyle:full',
//           //       'imageStyle:alignRight',
//           //       '|',
//           //       'imageTextAlternative',
//           //     ],
//           //     styles: ['full', 'alignLeft', 'alignRight'],
//           //   },
//           //   typing: {
//           //     transformations: {
//           //       remove: [
//           //         'enDash',
//           //         'emDash',
//           //         'oneHalf',
//           //         'oneThird',
//           //         'twoThirds',
//           //         'oneForth',
//           //         'threeQuarters',
//           //       ],
//           //     },
//           //   },
//           //   placeholder: 'Click here to start typing',
//           // }}
//           config={{
//             plugins: [
//               // Paragraph,
//               // Bold,
//               // Italic,
//               // Essentials,
//               // Underline,
//               // Strikethrough,
//               // // Code,
//               // Subscript,
//               // Superscript,
//             ],
//             toolbar: {
//               items: [
//                 'heading',
//                 '|',
//                 'fontfamily',
//                 'fontsize',
//                 '|',
//                 'alignment',
//                 '|',
//                 'fontColor',
//                 'fontBackgroundColor',
//                 '|',
//                 'bold',
//                 'italic',
//                 'strikethrough',
//                 'underline',
//                 'subscript',
//                 'superscript',
//                 '|',
//                 'link',
//                 '|',
//                 'outdent',
//                 'indent',
//                 '|',
//                 'bulletedList',
//                 'numberedList',
//                 'todoList',
//                 '|',
//                 'code',
//                 'codeBlock',
//                 '|',
//                 'insertTable',
//                 '|',
//                 'uploadImage',
//                 'blockQuote',
//                 '|',
//                 'undo',
//                 'redo',
//               ],
//               shouldNotGroupWhenFull: true,
//             },
//           }}
//           data='<p>Hello from CKEditor 5!</p>'
//           onReady={(editor) => {
//             // You can store the "editor" and use when it is needed.
//             console.log('Editor is ready to use!', editor)
//           }}
//           onChange={(event, editor) => {
//             const data = editor.getData()
//             console.log({ event, editor, data })
//           }}
//           onBlur={(event, editor) => {
//             console.log('Blur.', editor)
//           }}
//           onFocus={(event, editor) => {
//             console.log('Focus.', editor)
//           }}
//         />
//       ) : (
//         <div>Editor is Loading...</div>
//       )}
//     </>
//   )
// }
