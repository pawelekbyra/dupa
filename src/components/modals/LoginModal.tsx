'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useModalStore } from '@/lib/store';

const LoginModal = () => {
  const { isLoginModalOpen, closeLoginModal } = useModalStore();

  return (
    <Transition appear show={isLoginModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeLoginModal}>
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="dialog-panel w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-b from-[#242426] to-[#18181a] p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white text-center"
                >
                  Login to your account
                </Dialog.Title>
                <div className="mt-4">
                  <form>
                    <div className="flex flex-col gap-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg bg-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-lg bg-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                    <div className="mt-6 flex justify-center">
                      <button
                        type="submit"
                        className="rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition-colors hover:bg-pink-700"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginModal;
