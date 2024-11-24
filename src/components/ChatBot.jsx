import React, { useEffect } from 'react';

function ChatBot() {
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.onload = () => {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const style = document.createElement("style");
        style.innerHTML = `
          .bpw-chat-container {
            background-color: transparent !important; /* Set to transparent or your desired color */
          }
        `;
        doc.head.appendChild(style);
      };
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <iframe
        src="https://mediafiles.botpress.cloud/0d8cca97-4947-43a7-9fb4-a3a2b9edf2db/webchat/bot.html"
        title="ChatBot"
        className="w-full h-[80vh] max-w-4xl border-0 rounded-lg shadow-lg"
        allow="microphone; camera"
      />
    </div>
  );
}

export default ChatBot;
