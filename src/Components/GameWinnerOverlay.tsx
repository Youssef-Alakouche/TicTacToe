// import React from 'react';
// import { X } from 'lucide-react';


export interface GameWinnerOverlayProps {
  /** Controls whether the overlay dialog is visible */
  // isOpen: boolean;
  
  /** Function called when the overlay should be closed */
  onClose: () => void;
  
  /** The winning player identifier (e.g., "X", "O", "Player 1") */
  winner?: string;
  
  /** Function called when the "Play again" button is clicked */
  onPlayAgain: () => void;
  
  /** Function called when the "Browse Moves" button is clicked */
//   onBrowseMoves: () => void;
}

const GameWinnerOverlay = ({ 
  // isOpen, 
  onClose, 
  winner = "X", 
  onPlayAgain, 
//   onBrowseMoves 
} : GameWinnerOverlayProps) => {
  //TODO: This runing twice, need to fix this
  // console.log(isOpen);
  // if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full transform transition-all border-4 border-black">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
        </button>
        
        {/* Content */}
        <div className="p-12 text-center">
          {/* Celebration icons and winner text */}
          <div className="flex items-center justify-center gap-6 mb-12">
            {/* Left celebration icon */}
            <div className="relative">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg">
                <span className="text-2xl">🎉</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">✨</span>
              </div>
            </div>
            
            {/* Winner text */}
            <h2 className="text-4xl font-bold text-black font-mono">
              The Winner is {winner}
            </h2>
            
            {/* Right celebration icon */}
            <div className="relative">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center transform -rotate-12 shadow-lg">
                <span className="text-2xl">🎉</span>
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">✨</span>
              </div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-center gap-8">
            <button
              onClick={onPlayAgain}
              className="px-8 py-4 bg-white border-3 border-black rounded-2xl font-bold text-lg text-black hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              Play again
            </button>
            
            <button
              onClick={onClose}
              className="px-8 py-4 bg-white border-3 border-black rounded-2xl font-bold text-lg text-black hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
            >
              Browse Moves
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWinnerOverlay;