import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiDownload, FiArrowLeft } from 'react-icons/fi'

const Resume = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Try to load the PDF directly
    // If PDF exists, it will open; otherwise, fallback to HTML
    const checkPDF = async () => {
      try {
        const response = await fetch('/resume.pdf', { method: 'HEAD' })
        if (response.ok) {
          // PDF exists, open it
          window.location.href = '/resume.pdf'
        } else {
          // Fallback to HTML resume
          window.location.href = '/resume.html'
        }
      } catch (error) {
        // Fallback to HTML resume
        window.location.href = '/resume.html'
      } finally {
        setLoading(false)
      }
    }
    
    checkPDF()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding pt-32">
        <div className="container-custom text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 dark:border-primary-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Loading resume...</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
          >
            <FiArrowLeft className="mr-2" />
            Go back to home
          </button>
        </div>
      </div>
    )
  }

  return null // Component will redirect, so this won't render
}

export default Resume

