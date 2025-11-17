type CommentsModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const CommentsModal = ({ isVisible, onClose }: CommentsModalProps) => {
  return (
    <div
      id="fastcomments-modal-container"
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end justify-center z-[10200] transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isVisible}
    >
      <div
        className={`bg-[#1c1c1e] w-full max-w-full rounded-t-2xl h-[60vh] max-h-[85vh] flex flex-col transform transition-transform duration-400 ease-in-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white border-opacity-10">
          <h2 id="commentsModalTitle" className="text-lg font-semibold text-white">
            Komentarze
          </h2>
          <button
            className="w-8 h-8 flex items-center justify-center bg-none border-none text-2xl cursor-pointer text-white opacity-70 hover:opacity-100"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          <div id="fastcomments-widget-0"></div>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
