import React, { useEffect } from 'react';

const CalendlyWidget: React.FC = () => {
    useEffect(() => {
        const scriptId = 'calendly-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);
        }

        const initCalendly = () => {
            if ((window as any).Calendly) {
                (window as any).Calendly.initInlineWidgets();
            }
        };

        if (script) {
            script.addEventListener('load', initCalendly);
        }

        // Call init in case the script is already loaded
        initCalendly();

        return () => {
            if (script) {
                script.removeEventListener('load', initCalendly);
            }
        };
    }, []);

    return (
        <div 
            className="calendly-inline-widget w-full rounded-3xl border border-white/10 overflow-hidden bg-black/20"
            data-url="https://calendly.com/stephanie-lucena95/discovery-call"
            style={{ minWidth: '320px', height: '700px' }}
        />
    );
};

export default CalendlyWidget;
