import React, { createContext, useContext, useState, useCallback } from 'react';

const GlitchContext = createContext();

export function GlitchProvider({ children }) {
    const [isPaused, setIsPaused] = useState(false);

    const triggerGlitch = useCallback(() => {
        setIsPaused(true);

        // Resume after 500ms (match with logo glitch duration)
        setTimeout(() => {
            setIsPaused(false);
        }, 500);
    }, []);

    return (
        <GlitchContext.Provider value={{ isPaused, triggerGlitch }}>
            {children}
        </GlitchContext.Provider>
    );
}

export function useGlitch() {
    return useContext(GlitchContext);
}
