'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useModalStore } from '@/lib/store';

const CommentsModal = () => {
  const { isCommentsModalOpen, closeCommentsModal } = useModalStore();

  return (
    <Transition appear show={isCommentsModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeCommentsModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-full"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-full"
            >
              <Dialog.Panel className="dialog-panel w-full max-w-md h-3/4 transform overflow-hidden rounded-t-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white text-center"
                >
                  Comments
                </Dialog.Title>
                <div className="mt-4 flex-grow overflow-y-auto">
                  {/* Placeholder for comments */}
                  <div className="text-gray-400">Comments will be shown here.</div>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full rounded-lg bg-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CommentsModal;
