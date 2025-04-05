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
      return "I understand you're asking about the same thing. Let me provide more specific information.";
    }

    // Innovation Lead specific query
    if (cleanInput.includes("innovation lead") || 
        (cleanInput.includes("who") && cleanInput.includes("innovation")) ||
        cleanInput === "whon is innovation lead") {
      return "🎯 Innovation Lead: Ananthakumar L\n\n" +
             "Role & Responsibilities:\n" +
             "• Co-founder & Innovation Lead at Zeyfira\n" +
             "• Leads Enterprise Solutions Architecture\n" +
             "• Expert in Cloud Infrastructure\n" +
             "• Drives Digital Transformation\n\n" +
             "Areas of Expertise:\n" +
             "• Enterprise Solution Design\n" +
             "• Cloud Architecture\n" +
             "• Technical Innovation\n" +
             "• Digital Strategy\n\n" +
             "Would you like to know about his specific projects or other leadership roles?";
    }

    // Services query with typo handling
    if (cleanInput.includes("service") || 
        cleanInput.includes("sevice") || 
        cleanInput.includes("what you do") ||
        cleanInput.includes("what do you do") ||
        cleanInput === "tell about sevice") {
      return "🌟 Our Services:\n\n" +
             "1. Web Development\n" +
             "   • Custom Websites\n" +
             "   • E-commerce Platforms\n" +
             "   • Web Applications\n" +
             "   • Progressive Web Apps\n\n" +
             "2. Software Development\n" +
             "   • Enterprise Solutions\n" +
             "   • Mobile Applications\n" +
             "   • Cloud Integration\n" +
             "   • System Modernization\n\n" +
             "3. AI & Machine Learning\n" +
             "   • Custom ML Models\n" +
             "   • AI Analytics\n" +
             "   • Computer Vision\n" +
             "   • NLP Solutions\n\n" +
             "Which service would you like to know more about?";
    }

    // Specific service queries
    if (cleanInput.includes("web") || cleanInput.includes("website")) {
      return "🌐 Web Development Services:\n\n" +
             "Our Expertise:\n" +
             "• Responsive Websites\n" +
             "• E-commerce Solutions\n" +
             "• Progressive Web Apps\n" +
             "• Custom Web Applications\n\n" +
             "Technologies:\n" +
             "• React, Angular, Vue\n" +
             "• Node.js, Python\n" +
             "• AWS, Azure, GCP\n" +
             "• MongoDB, PostgreSQL\n\n" +
             "Would you like to see our web development portfolio?";
    }

    if (cleanInput.includes("ai") || cleanInput.includes("ml") || cleanInput.includes("machine")) {
      return "🤖 AI & Machine Learning Solutions:\n\n" +
             "Our Capabilities:\n" +
             "• Custom ML Models\n" +
             "• Predictive Analytics\n" +
             "• Computer Vision\n" +
             "• Natural Language Processing\n\n" +
             "Applications:\n" +
             "• Business Intelligence\n" +
             "• Process Automation\n" +
             "• Data Analytics\n" +
             "• Pattern Recognition\n\n" +
             "Would you like to discuss your AI/ML requirements?";
    }

    // Company Overview
    if (cleanInput.includes("company") || cleanInput.includes("about") || cleanInput.includes("zeyfira")) {
      return "🏢 About Zeyfira Technologies\n\n" +
             "Establishment: Founded in 2024\n\n" +
             "Our Mission:\n" +
             "To revolutionize businesses through innovative technology solutions and exceptional service delivery.\n\n" +
             "Leadership Team:\n" +
             "1. Bharani Dharan M (Co-founder & Technical Director)\n" +
             "   • AI/ML Architecture Expert\n" +
             "   • Technical Strategy Lead\n\n" +
             "2. Ananthakumar L (Co-founder & Innovation Lead)\n" +
             "   • Enterprise Solutions Architect\n" +
             "   • Cloud Infrastructure Expert\n\n" +
             "3. Pavithra P (Co-founder & Operations Director)\n" +
             "   • Project Management Specialist\n" +
             "   • Client Success Strategist\n\n" +
             "Company Highlights:\n" +
             "• 50+ Happy Clients\n" +
             "• 15+ Team Members\n" +
             "• 5+ Years Combined Experience\n" +
             "• Located in Coimbatore, Tamil Nadu\n\n" +
             "Would you like to know more about our services or team?";
    }

    // Comprehensive Services
    if (cleanInput.includes("service") || cleanInput.includes("offer") || cleanInput.includes("what you do")) {
      return "🌟 Our Comprehensive Services\n\n" +
             "1. 🌐 Web Development\n" +
             "   • Responsive Website Development\n" +
             "   • Custom Web Applications\n" +
             "   • E-commerce Solutions\n" +
             "   • Progressive Web Apps\n" +
             "   • SEO Optimization\n\n" +
             "2. 💻 Software Development\n" +
             "   • Enterprise Solutions\n" +
             "   • Mobile App Development\n" +
             "   • Cloud Integration\n" +
             "   • API Development\n" +
             "   • System Modernization\n\n" +
             "3. 🤖 AI & Machine Learning\n" +
             "   • Custom ML Models\n" +
             "   • AI-Powered Analytics\n" +
             "   • Natural Language Processing\n" +
             "   • Computer Vision Solutions\n\n" +
             "Development Process:\n" +
             "1. Discovery & Planning\n" +
             "2. Design & Prototyping\n" +
             "3. Development & Testing\n" +
             "4. Deployment & Support\n\n" +
             "Which service would you like to explore further?";
    }

    // Portfolio Showcase
    if (cleanInput.includes("portfolio") || cleanInput.includes("work") || cleanInput.includes("projects")) {
      return "🎯 Our Featured Projects\n\n" +
             "1. E-commerce Platform\n" +
             "   • Full-featured online store\n" +
             "   • Inventory management system\n" +
             "   • Secure payment processing\n" +
             "   • Customer analytics\n\n" +
             "2. Healthcare Management System\n" +
             "   • Patient records management\n" +
             "   • Appointment scheduling\n" +
             "   • Billing integration\n" +
             "   • HIPAA compliant\n\n" +
             "3. AI-Powered Analytics Dashboard\n" +
             "   • Real-time data analysis\n" +
             "   • Predictive modeling\n" +
             "   • Custom reporting\n" +
             "   • Business intelligence\n\n" +
             "Would you like to discuss your project requirements?";
    }

    // Contact Information
    if (cleanInput.includes("contact") || cleanInput.includes("reach") || cleanInput.includes("location")) {
      return "📍 Contact Information\n\n" +
             "Location:\n" +
             "Coimbatore, Tamil Nadu, India\n\n" +
             "Contact Details:\n" +
             "• Phone: +91 7810085629\n" +
             "• Business Hours: Mon-Fri, 9:00 AM - 6:00 PM IST\n\n" +
             "Get in Touch:\n" +
             "1. Schedule a Consultation\n" +
             "2. Request a Quote\n" +
             "3. Technical Support\n\n" +
             "Response Time: Within 24 hours\n\n" +
             "Would you like to schedule a consultation?";
    }

    // Core Values
    if (cleanInput.includes("values") || cleanInput.includes("culture") || cleanInput.includes("principles")) {
      return "🎯 Our Core Values\n\n" +
             "1. Innovation\n" +
             "   • Cutting-edge technologies\n" +
             "   • Creative problem-solving\n" +
             "   • Continuous learning\n\n" +
             "2. Excellence\n" +
             "   • Quality deliverables\n" +
             "   • Best practices\n" +
             "   • Attention to detail\n\n" +
             "3. Collaboration\n" +
             "   • Client partnerships\n" +
             "   • Team synergy\n" +
             "   • Open communication\n\n" +
             "4. Integrity\n" +
             "   • Ethical practices\n" +
             "   • Transparency\n" +
             "   • Accountability\n\n" +
             "Would you like to know how these values benefit our clients?";
    }

    // Leadership Queries
    if (cleanInput.includes("leader") || cleanInput.includes("founder") || cleanInput.includes("director")) {
      return "👥 Leadership Team\n\n" +
             "1. Bharani Dharan M\n" +
             "   Role: Co-founder & Technical Director\n" +
             "   Expertise:\n" +
             "   • AI/ML Architecture\n" +
             "   • Technical Strategy\n" +
             "   • Innovation Leadership\n\n" +
             "2. Ananthakumar L\n" +
             "   Role: Co-founder & Innovation Lead\n" +
             "   Expertise:\n" +
             "   • Enterprise Solutions\n" +
             "   • Cloud Architecture\n" +
             "   • Digital Transformation\n\n" +
             "3. Pavithra P\n" +
             "   Role: Co-founder & Operations Director\n" +
             "   Expertise:\n" +
             "   • Project Management\n" +
             "   • Client Success\n" +
             "   • Operational Excellence\n\n" +
             "Would you like to know more about their specific areas of expertise?";
    }

    // Greetings
    if (/^(hello|hi|hey|howdy|hola)/.test(cleanInput)) {
      return "👋 Welcome to Zeyfira Technologies!\n\n" +
             "I can help you with:\n\n" +
             "1. 💼 Our Services\n" +
             "   • Web Development\n" +
             "   • Software Solutions\n" +
             "   • AI & ML Services\n\n" +
             "2. 🏢 Company Information\n" +
             "   • About Us\n" +
             "   • Leadership Team\n" +
             "   • Core Values\n\n" +
             "3. 📞 Contact & Support\n" +
             "   • Get in Touch\n" +
             "   • Schedule Consultation\n" +
             "   • Project Discussion\n\n" +
             "What would you like to know about?";
    }

    // Default response for unclear queries
    return "I'm here to help! Please ask about:\n\n" +
           "1. Our Services 🌟\n" +
           "   • Web Development\n" +
           "   • Software Solutions\n" +
           "   • AI & ML\n\n" +
           "2. Company Info 🏢\n" +
           "   • About Us\n" +
           "   • Team\n" +
           "   • Location\n\n" +
           "3. Get in Touch 📞\n" +
           "   • Contact\n" +
           "   • Quote\n" +
           "   • Support\n\n" +
           "How can I assist you today?";
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