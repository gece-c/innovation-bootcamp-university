'use client'

import { useEffect, useRef, useState } from 'react'

interface HubSpotFormProps {
  readonly portalId?: string
  readonly formId: string
  readonly region?: string
  readonly targetId?: string
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string
          formId: string
          region: string
          target: string
          onFormReady?: () => void
        }) => void
      }
    }
  }
}

export function HubSpotForm({
  portalId = '45023159',
  formId,
  region = 'na1',
  targetId = 'hubspot-form',
}: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false) // ✅ start as NOT loaded

  useEffect(() => {
    let attempts = 0
    const maxAttempts = 50

    // LOAD SCRIPT
    const loadScript = () => {
      if (document.getElementById('hubspot-script')) return

      const script = document.createElement('script')
      script.id = 'hubspot-script'
      script.src = 'https://js.hsforms.net/forms/v2.js'
      script.async = true
      document.body.appendChild(script)
    }

    const checkAndCreateForm = () => {
      if (window.hbspt?.forms) {
        try {
          window.hbspt.forms.create({
            portalId,
            formId,
            region,
            target: `#${targetId}`,
            onFormReady: () => {
              setLoaded(true) // 
            },
          })
        } catch (error) {
          console.error('Error creating HubSpot form:', error)
        }
      } else if (attempts < maxAttempts) {
        attempts++
        setTimeout(checkAndCreateForm, 100)
      } else {
        console.error('HubSpot script failed to load.')
      }
    }

    loadScript()

    const timer = setTimeout(checkAndCreateForm, 100)

    return () => {
      clearTimeout(timer)

      const formContainer = document.getElementById(targetId)
      if (formContainer) {
        formContainer.innerHTML = ''
      }
    }
  }, [portalId, formId, region, targetId])

  return (
    <div className="hubspot-form-wrapper">
      <div id={targetId} ref={formRef} />

      {!loaded && (
        <div className="text-center py-8">
          <p className="text-gray-600">Loading application form...</p>
        </div>
      )}
    </div>
  )
}