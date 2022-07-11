import { useState } from "react";


export const useToggle = (className = '') => {

    const [isVisible, setIsVisible] = useState('hidden-class');

    const handleToggle = () => {
        setIsVisible(isVisible === 'hidden-class' ?
            className:
            'hidden-class'
        );
    };

    return {
        isVisible,
        handleToggle
    };
}
