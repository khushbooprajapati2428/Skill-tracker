



// MessageModal.jsx
import React, { useState } from 'react';

export default function MessageModal({ isOpen, onClose, studentName, onSend }) {
    const [message, setMessage] = useState("");
    const charLimit = 300;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-800">Request to {studentName}</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl">&times;</button>
                </div>

                <textarea
                    className="w-full border border-slate-200 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-indigo-100 min-h-[120px] resize-none"
                    placeholder="Hi, I'd like to invite you to my project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value.substring(0, charLimit))}
                ></textarea>

                <div className="flex justify-between items-center mt-2 mb-6">
                    <span className={`text-xs font-medium ${message.length >= charLimit ? 'text-red-500' : 'text-slate-400'}`}>
                        {message.length} / {charLimit} characters
                    </span>
                    <p className="text-[10px] text-slate-400 italic font-medium">Max 3 requests allowed</p>
                </div>

                <button 
                    onClick={() => onSend(message)}
                    disabled={message.length === 0}
                    className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Send Invitation 🚀
                </button>
            </div>
        </div>
    );
}