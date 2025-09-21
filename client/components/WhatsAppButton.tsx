import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { getWhatsAppLogo } from "@/lib/imageUtils";

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const phoneNumber = "+918019738108";
  const popupRef = useRef<HTMLDivElement>(null);
  
  const messageOptions = [
    {
      id: "info",
      text: "I like to know more information",
      label: "More Information"
    },
    {
      id: "admission",
      text: "I need to apply for admission",
      label: "Apply for Admission"
    },
    {
      id: "donate",
      text: "I would like to donate to school",
      label: "Donate to School"
    }
  ];
  
  const handleMessageClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setShowPopup(false);
  };

  const handleCustomMessageSend = () => {
    if (customMessage.trim()) {
      handleMessageClick(customMessage.trim());
      setCustomMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCustomMessageSend();
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setShowTooltip(false);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="fixed bottom-6 right-6 z-50 group" ref={popupRef}>
      <Button
        onClick={togglePopup}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0 whatsapp-float"
        aria-label="Contact us on WhatsApp"
      >
        <img 
          src={getWhatsAppLogo()} 
          alt="WhatsApp" 
          className="h-8 w-8 object-contain"
          style={{ backgroundColor: 'transparent' }}
        />
      </Button>
      
      {/* Tooltip */}
      <div className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg transition-all duration-300 whitespace-nowrap ${
        showTooltip && !showPopup ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}>
        Contact us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
      </div>

      {/* Chat Box Popup */}
      {showPopup && (
        <div className="absolute bottom-full right-0 mb-4 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden whatsapp-popup">
          {/* Chat Header */}
          <div className="bg-green-500 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <img 
                  src={getWhatsAppLogo()} 
                  alt="WhatsApp" 
                  className="h-5 w-5 object-contain"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">SMVM School</h3>
                <p className="text-green-100 text-xs">Online now</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPopup(false)}
              className="h-6 w-6 p-0 text-white hover:bg-green-600"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Chat Messages Area */}
          <div className="h-64 overflow-y-auto bg-gray-50 p-3 space-y-2 chat-scroll">
            {/* Welcome Message */}
            <div className="flex justify-start chat-message">
              <div className="bg-white rounded-lg px-3 py-2 max-w-xs shadow-sm border">
                <p className="text-sm text-gray-800">Hi! How can we help you today?</p>
                <p className="text-xs text-gray-500 mt-1">Just now</p>
              </div>
            </div>
            
            {/* Template Messages as Chat Bubbles */}
            <div className="text-xs text-gray-500 px-2 py-1 font-medium">Quick options:</div>
            {messageOptions.map((option) => (
              <div key={option.id} className="flex justify-end chat-message">
                <button
                  onClick={() => handleMessageClick(option.text)}
                  className="bg-green-500 text-white rounded-lg px-3 py-2 max-w-xs shadow-sm hover:bg-green-600 transition-colors duration-200 text-left"
                >
                  <p className="text-sm font-medium">{option.label}</p>
                  <p className="text-xs text-green-100 mt-1">{option.text}</p>
                </button>
              </div>
            ))}
          </div>
          
          {/* Chat Input Area */}
          <div className="bg-white border-t border-gray-200 p-3">
            <div className="flex gap-2">
              <Input
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 text-sm rounded-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                autoFocus
              />
              <Button
                onClick={handleCustomMessageSend}
                disabled={!customMessage.trim()}
                size="sm"
                className="h-9 w-9 rounded-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 p-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Chat Arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}
    </div>
  );
}
