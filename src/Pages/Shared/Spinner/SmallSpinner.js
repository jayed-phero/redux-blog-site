import React from 'react';

const SmallSpinner = () => {
    return (
        <div>
             <div className="flex items-center justify-center space-x-1.5">
                <div className="w-3 h-3 rounded-full animate-pulse bg-violet-400"></div>
                <div className="w-3 h-3 rounded-full animate-pulse bg-violet-400"></div>
                <div className="w-3 h-3 rounded-full animate-pulse bg-violet-400"></div>
            </div>
        </div>
    );
};

export default SmallSpinner;