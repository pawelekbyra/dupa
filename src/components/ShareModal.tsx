
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal = ({ isOpen, onClose }: ShareModalProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Udostępnij</SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <p>Opcje udostępniania pojawią się tutaj.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShareModal;
