import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);

    // Simulate bot response based on user input
    const response = generateResponse(inputValue.toLowerCase());
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 500);

    setInputValue("");
  };

  const generateResponse = (input: string): string => {
    const cleanInput = input.toLowerCase().trim();

    // Track previous questions to avoid repetition
    const lastUserMessage = messages.filter(m => m.isUser).slice(-1)[0]?.text.toLowerCase() || "";
    if (lastUserMessage === cleanInput && messages.length > 1) {
      return "I notice you're asking the same question. Would you like more specific information about a particular aspect?";
    }

    // Contact Information - Prioritized and expanded keywords
    if (cleanInput.includes("contact") || 
        cleanInput.includes("reach") || 
        cleanInput.includes("email") || 
        cleanInput.includes("phone") ||
        cleanInput.includes("number") ||
        cleanInput.includes("address") ||
        cleanInput.includes("location") ||
        cleanInput.includes("where") ||
        cleanInput.includes("office") ||
        cleanInput.includes("connect") ||
        cleanInput.includes("get in touch")) {
      return "📞 Contact Information:\n\n" +
             "📍 Location:\n" +
             "Coimbatore, Tamil Nadu, India\n\n" +
             "📱 Phone:\n" +
             "+91 7810085629\n\n" +
             "✉️ Email:\n" +
             "zeyfira03@gmail.com\n\n" +
             "⏰ Business Hours:\n" +
             "Monday - Friday\n" +
             "9:00 AM - 6:00 PM (IST)\n\n" +
             "We typically respond within 24 hours. Would you like to discuss a specific project?";
    }

    // Greetings
    if (/^(hello|hi|hey|howdy|hola)/.test(cleanInput)) {
      return "👋 Hello! I'm Zeyfira's virtual assistant. I can help you with:\n\n" +
             "• Information about our founders\n" +
             "• Our services and expertise\n" +
             "• Contact details\n" +
             "• Company information\n\n" +
             "What would you like to know?";
    }

    // Founders/Leadership Team Queries
    if (cleanInput.includes("founder") || cleanInput.includes("leader") || cleanInput.includes("director")) {
      return "👥 Meet Our Founders:\n\n" +
             "1. Bharani Dharan M\n" +
             "   Founder & Technical Director\n" +
             "   • AI/ML & Technical Strategy Expert\n\n" +
             "2. Ananthakumar L\n" +
             "   Founder & Innovation Lead\n" +
             "   • Enterprise & Cloud Solutions Expert\n\n" +
             "3. Pavithra P\n" +
             "   Founder & Operations Director\n" +
             "   • Project Management & Client Success Expert\n\n" +
             "Would you like to know more about any of our founders?";
    }

    // AI/ML Services Query
    if (cleanInput.includes("ai") || cleanInput.includes("ml") || cleanInput.includes("machine learning")) {
      return "🤖 AI & Machine Learning Services:\n\n" +
             "Our Solutions:\n" +
             "• Custom Machine Learning Models\n" +
             "• AI-Powered Analytics\n" +
             "• Computer Vision Systems\n" +
             "• Natural Language Processing\n\n" +
             "Contact our founders Bharani or Ananthakumar to discuss your AI/ML project requirements.";
    }

    // Services Overview
    if (cleanInput.includes("service") || cleanInput.includes("what you do")) {
      return "🌟 Our Services:\n\n" +
             "1. Web Development\n" +
             "   • Custom Websites\n" +
             "   • E-commerce Solutions\n" +
             "   • Progressive Web Apps\n\n" +
             "2. Software Solutions\n" +
             "   • Enterprise Applications\n" +
             "   • Cloud Integration\n" +
             "   • System Modernization\n\n" +
             "3. AI/ML Services\n" +
             "   • Custom ML Models\n" +
             "   • AI Analytics\n" +
             "   • Computer Vision\n\n" +
             "Which service interests you?";
    }

    // Company Overview
    if (cleanInput.includes("company") || cleanInput.includes("about") || cleanInput.includes("zeyfira")) {
      return "🏢 About Zeyfira Technologies:\n\n" +
             "We are a technology company founded in 2024 by three innovative leaders:\n" +
             "• Bharani Dharan M\n" +
             "• Ananthakumar L\n" +
             "• Pavithra P\n\n" +
             "Our Focus:\n" +
             "• Web & Software Development\n" +
             "• AI/ML Solutions\n" +
             "• Enterprise Applications\n\n" +
             "Located in Coimbatore, we serve clients globally.";
    }

    // Default response
    return "I can help you with:\n\n" +
           "• Information about our founders\n" +
           "• Our services and expertise\n" +
           "• Contact details\n" +
           "• Company information\n\n" +
           "Please ask about any of these topics!";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col h-[500px]">
          <div className="p-4 bg-gradient-to-r from-purple-600 to-zeyfira-500 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              <h3 className="font-semibold">Zeyfira Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button onClick={handleSend} className="bg-purple-600 hover:bg-purple-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 h-12 w-12 rounded-full shadow-lg flex items-center justify-center"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Chatbot; 