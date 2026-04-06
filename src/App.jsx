import { useState } from 'react'
import { analyzeWithGemini } from './api/gemini'
import { saveToNotion } from './api/notion'
import InputPage from './components/InputPage'
import LoadingScreen from './components/LoadingScreen'
import PreviewPage from './components/PreviewPage'
import SuccessScreen from './components/SuccessScreen'

function App() {
  const [step, setStep] = useState('input') // 'input' | 'loading' | 'preview' | 'success'
  const [snippetData, setSnippetData] = useState(null)
  const [inputData, setInputData] = useState({ title: '', content: '' })

  const handleSubmit = async (title, content) => {
    try {
      setStep('loading')
      setInputData({ title, content })
      const result = await analyzeWithGemini(title, content)
      setSnippetData(result)
      setStep('preview')
    } catch (error) {
      console.error('Analysis failed:', error)
      setStep('input')
    }
  }

  const handleSave = async () => {
    try {
      setStep('loading')
      await saveToNotion({ ...snippetData, title: inputData.title })
      setStep('success')
    } catch (error) {
      console.error('Save failed:', error)
      setStep('preview')
    }
  }

  const handleReset = () => {
    setStep('input')
    setSnippetData(null)
    setInputData({ title: '', content: '' })
  }

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <main className="w-full max-w-[560px] px-4">
        {step === 'input' && <InputPage onSubmit={handleSubmit} />}
        {step === 'loading' && <LoadingScreen />}
        {step === 'preview' && (
          <PreviewPage
            snippetData={snippetData}
            inputData={inputData}
            onSave={handleSave}
            onBack={() => setStep('input')}
          />
        )}
        {step === 'success' && <SuccessScreen onReset={handleReset} />}
      </main>
    </div>
  )
}

export default App
