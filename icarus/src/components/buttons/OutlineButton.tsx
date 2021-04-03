import React from 'react';

export interface OutlineButtonProps {
    /**
     * Title of the button
     */
    title: string;
    /**
     * Action performed when clicked
     */
    onClick: string;
    /**
     * Should corners be rounded?
     */
    rounded?: boolean;
    /**
     * Border Color
     */
    borderColor?: string;
    /**
     * Font Color
     */
    color?: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = (props: OutlineButtonProps) => {
    return <button>

    </button>
}

export default OutlineButton