
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Logowanie</SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <p>Formularz logowania pojawi się tutaj.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LoginModal;
