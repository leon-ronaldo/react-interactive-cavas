import './App.css'
import { ReactiveCanvas } from '../lib/main'
import CanvasProvider from '../lib/contexts/canvasContext'
import useAddCanvasBox from '../lib/utils/addBox'
import { MouseEventHandler, useEffect, useState } from 'react'

function App() {
  const [addBox, setAddBox] = useState<MouseEventHandler>()

  useEffect(() => {
    setAddBox(useAddCanvasBox())
  }, [])

  return (
    <>
      <CanvasProvider>
        <div className='flex w-full h-full items-stretch'>
          <div className='bg-white p-3 h-full flex items-center'>
            <button onClick={addBox}>
              Add rect
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <ReactiveCanvas props={{ className: "w-[400px] h-[400px] shadow-sm bg-white" }} />
          </div>
        </div>
      </CanvasProvider>
    </>
  )
}

export default App
