const VideoOverlays = () => {
  return (
    <>
      <div
        className="absolute top-[var(--topbar-height)] left-0 w-full h-[calc(100%-var(--topbar-height)-var(--bottombar-height))] flex items-center justify-center bg-transparent z-[101] opacity-0 pointer-events-none transition-opacity duration-200 ease-in-out"
        aria-hidden="true"
      >
        <svg
          className="w-20 h-20 text-white opacity-80 drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      <div
        className="absolute top-[var(--topbar-height)] left-0 w-full h-[calc(100%-var(--topbar-height)-var(--bottombar-height))] flex items-center justify-center bg-transparent z-[101] opacity-0 pointer-events-none transition-opacity duration-200 ease-in-out"
        aria-hidden="true"
      >
        <svg
          className="w-20 h-20 text-white opacity-90 drop-shadow-xl animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
        </svg>
      </div>

      <div
        className="absolute top-[var(--topbar-height)] left-0 w-full h-[calc(100%-var(--topbar-height)-var(--bottombar-height))] bg-repeat bg-[length:300px_auto] z-[100] flex items-center justify-center flex-col text-center p-5 opacity-0 pointer-events-none transition-opacity duration-400 ease-in-out"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-[#333]"></div>
        <svg
          className="w-16 h-16 mb-6 text-white opacity-90 drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
          Top Secret
        </h2>
        <p className="text-base text-white opacity-80 drop-shadow-sm">
          <u className="underline"></u>
          <span></span>
        </p>
      </div>

      <div
        className="absolute top-[var(--topbar-height)] left-0 w-full h-[calc(100%-var(--topbar-height)-var(--bottombar-height))] bg-black bg-opacity-40 backdrop-blur-xl backdrop-saturate-125 z-[100] flex items-center justify-center flex-col text-center p-5 opacity-0 pointer-events-none transition-opacity duration-400 ease-in-out"
        aria-hidden="true"
      >
        <svg
          className="w-16 h-16 mb-6 text-white opacity-90 drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
          Treść Dostępna w Aplikacji
        </h2>
        <p className="text-base text-white opacity-80 drop-shadow-sm">
          <u className="underline"></u>
          <span></span>
        </p>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-lg z-[102] flex items-center justify-center flex-col text-center p-5 opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out"
        aria-hidden="true"
      >
        <svg
          className="w-16 h-16 mb-6 text-yellow-400 drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
          Błąd Wideo
        </h2>
        <p className="text-base text-white opacity-80 drop-shadow-sm mb-6">
          Nie można załadować materiału.
        </p>
        <button className="bg-white bg-opacity-10 border border-white border-opacity-30 text-white py-3 px-6 text-base font-semibold rounded-full transition-all duration-200 ease-in-out hover:bg-opacity-20 hover:border-opacity-50">
          Spróbuj ponownie
        </button>
      </div>
    </>
  );
};

export default VideoOverlays;
