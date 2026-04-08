"use client";

export default function ChatWidget() {
  const phone = "919363707090";
  const message = encodeURIComponent("Hi! I'd like to know more about Bonitaa Hair Clinic treatments.");

  return (
    <>
      <style>{`
        @keyframes wa-ping {
          0%   { transform: scale(1);   opacity: 0.75; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes wa-bounce {
          0%,100% { transform: translateY(0);    }
          30%      { transform: translateY(-8px); }
          60%      { transform: translateY(-3px); }
        }
        @keyframes wa-glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.55), 0 8px 28px rgba(37,211,102,0.4); }
          50%      { box-shadow: 0 0 0 10px rgba(37,211,102,0), 0 8px 28px rgba(37,211,102,0.6); }
        }
        .wa-btn      { animation: wa-bounce 2.8s ease-in-out infinite, wa-glow 2.8s ease-in-out infinite; }
        .wa-btn:hover{ animation: none; }
        .wa-ring     { animation: wa-ping 2.8s ease-out infinite; }
        .wa-ring2    { animation: wa-ping 2.8s ease-out 0.6s infinite; }
      `}</style>

      <div className="fixed bottom-14 right-3 sm:bottom-7 sm:right-7 z-[9999]">
        {/* Ripple rings */}
        <span className="wa-ring  absolute inset-0 rounded-full bg-[#25d366] opacity-0" />
        <span className="wa-ring2 absolute inset-0 rounded-full bg-[#25d366] opacity-0" />

        <a
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="wa-btn relative flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#25d366] transition-transform duration-200 hover:-translate-y-1 hover:scale-105 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="white">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.655 4.83 1.8 6.86L2 30l7.34-1.78A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.83-1.6l-.42-.25-4.35 1.05 1.09-4.23-.27-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.597 9.597 4.5 16 4.5S27.5 9.597 27.5 16 22.403 27.5 16 27.5zm6.29-8.61c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59H11c-.2 0-.51.07-.77.34-.26.28-1 1-1 2.43s1.02 2.82 1.17 3.01c.14.2 2.02 3.09 4.9 4.33.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.54-.33z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
