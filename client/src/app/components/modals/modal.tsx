"use client";

import { useCallback, useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Butoon from "../Butoon";

interface ModalProps {
  isOpen?: boolean | false;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  className?:"";
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  className="",
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);
  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    });
  }, [disabled, onClose]);
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onsubmit]);
  const handlesecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
    <div
        className={"z-index-ismodal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/80 " + className}
    >
        <div
            className="
                relative
                w-full
                md:w-4/6
                lg:w-3/6
                xl:w-2/5
                my-6
                mx-auto
                h-full
                lg:h-auto
                md:h-auto    
            "
        >
            {/* Saddrzaj modala */}
            <div
                className={`
                    translate
                    duration-300
                    h-full
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}
                `}>
                <div
                    className="
                        translate
                        h-full
                        lg:h-auto
                        md:h-auto
                        border-0
                        rounded-lg
                        shadow-lg
                        relative
                        flex
                        flex-col
                        w-full
                        bg-white
                        outline-none
                        focus:outline-none            
                    "
                >
                    {/* Header modala */}
                    <div
                        className="
                            flex
                            items-center
                            p-6
                            rounded-t
                            justify-center
                            relative
                            border-b-[1px]
                        "
                    >
                        <button
                            onClick={handleClose}
                            className="
                                p-1
                                border-0
                                hover:opacity-70
                                transition
                                absolute
                                left-9
                            "
                        >
                            <FaWindowClose size={16} />
                        </button>
                        {/* hardkodovani tekst u novom div bloku */}
                        <div className="text-lg font-semibold">
                            {title}
                        </div>
                    </div>

                    {/* Body */}
                    <div className="relative p-7 flex-auto hmm-overlow">
                        {body}
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col gap-3 p-7">
                        <div
                            className="
                                flex
                                flex-row
                                items-center
                                gap-5
                                w-full
                            "
                        >
                            {secondaryAction && secondaryActionLabel && (<Butoon 
                                outline
                                disabled={disabled}
                                label={secondaryActionLabel}
                                onClick={handlesecondaryAction}
                            />
                            )}
                            <Butoon 
                                disabled={disabled}
                                label={actionLabel}
                                onClick={handleSubmit}
                            />
                        </div>
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  );
};

export default Modal;
