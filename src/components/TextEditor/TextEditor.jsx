import React, { useEffect, useRef, useState } from 'react'
import JoditEditor from 'jodit-react'

export default function TextEditor({
  config,
  data,
  placeholder,
  onChange = () => {},
}) {
  const [layoutLoaded, setLayoutLoaded] = useState(false)

  useEffect(() => {
    setLayoutLoaded(true)
  }, [])
  const editor = useRef(null)
  const mergedConfig = {
    useSearch: false,
    spellcheck: false,
    enter: 'P',
    defaultMode: '1',
    toolbarAdaptive: false,
    toolbarSticky: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    minHeight: 300,
    // maxHeight: 500,
    minWidth: null,
    buttons: 'bold,underline,italic,strikethrough,ul,ol,superscript,subscript',
    editorCssClass: 'alic',
    placeHolder: placeholder || 'Start writing here...',
    controls: {
      fontsize: {
        list: [
          '8',
          '9',
          '10',
          '11',
          '12',
          '14',
          '16',
          '18',
          '24',
          '30',
          '36',
          '48',
          '60',
          '72',
          '96',
          '100',
        ],
      },
      font: {
        command: 'fontname',
        list: {
          '': 'Default',
          "'Open Sans',sans-serif": 'Open Sans',
          'Helvetica,sans-serif': 'Helvetica',
          'Arial,Helvetica,sans-serif': 'Arial',
          'Georgia,serif': 'Georgia',
          'Impact,Charcoal,sans-serif': 'Impact',
          'Tahoma,Geneva,sans-serif': 'Tahoma',
          "'Times New Roman',Times,serif": 'Times New Roman',
          'Verdana,Geneva,sans-serif': 'Verdana',
        },
      },
    },
    ...config,
  }
  const [content, setContent] = useState('')

  return (
    <>
      {layoutLoaded ? (
        <JoditEditor
          ref={editor}
          value={data || ''}
          config={mergedConfig}
          // tabIndex={1} // tabIndex of textarea
          // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          // onChange={(e) => {
          //   onChange(e)
          // }}
          onBlur={(e) => {
            onChange(e)
            // setContent(e)
          }}
        />
      ) : null}
    </>
  )
}
