import React, {useState} from 'react'
import './App.css'
import "regenerator-runtime/runtime";
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard';
import { Button } from '@mui/material'
import Navbar from './components/Navbar';


const App = () => {
  const [textToCopy, setTextToCopy] = useState()
  const [isCopied, setCopied] = useClipboard(textToCopy)
  
  const startListening = () => SpeechRecognition.startListening({ continuous:true, language:'en-IN' });
  const stopListening = () => SpeechRecognition.stopListening();
  const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();
  
  if(!browserSupportsSpeechRecognition){
    return null
  }

  return (
    <>
      <Navbar/>
      
      <div className="container">
          <h1>Speech To Text</h1>
          <br/>

          <p>This is a speech to text converter which can convert your words to text within a second.</p>
          <h6><b>(Works best with Chrome)</b></h6>

          <div className="main-content" onClick={() => setTextToCopy(transcript)}>

                  {transcript}

          </div>

          <div className="btn">
            <Button variant='container' sx={{bgcolor:'lightskyblue', borderRadius:'20px'}} onClick={setCopied} >{ isCopied ? 'Copied!  ' : 'copy to Clipboard'} </Button>
            <Button variant='container' sx={{bgcolor:'lightskyblue', borderRadius:'20px'}} onClick={startListening} >start Listening</Button>
            <Button variant='container' sx={{bgcolor:'lightskyblue', borderRadius:'20px'}} onClick={stopListening} >stop Listening</Button>
          </div>
      
      </div>
    </>
  )
}

export default App
