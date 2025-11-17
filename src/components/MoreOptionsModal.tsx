
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface MoreOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MoreOptionsModal = ({ isOpen, onClose }: MoreOptionsModalProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Więcej opcji</SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <p>Dodatkowe opcje pojawią się tutaj.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MoreOptionsModal;
