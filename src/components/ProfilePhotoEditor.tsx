
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { UserCheck, Camera } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface ProfilePhotoEditorProps {
  currentUser: {
    name: string;
    profileImage?: string;
  };
  onPhotoUpdate: (newPhotoUrl: string) => void;
}

export const ProfilePhotoEditor = ({ currentUser, onPhotoUpdate }: ProfilePhotoEditorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        onPhotoUpdate(imageUrl);
        
        // Update the user in localStorage
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          user.profileImage = imageUrl;
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
        
        setIsOpen(false);
        toast.success("Foto atualizada com sucesso!");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
          <Avatar className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity">
            <AvatarImage
              src={currentUser.profileImage || `https://api.dicebear.com/8.x/initials/svg?seed=${currentUser.name}`}
              alt={currentUser.name}
            />
            <AvatarFallback>
              <UserCheck />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atualizar Foto do Perfil</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-4">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src={currentUser.profileImage || `https://api.dicebear.com/8.x/initials/svg?seed=${currentUser.name}`}
              alt={currentUser.name}
            />
            <AvatarFallback>
              <UserCheck className="w-12 h-12" />
            </AvatarFallback>
          </Avatar>
          <div className="flex justify-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="profilePhotoInput"
            />
            <label
              htmlFor="profilePhotoInput"
              className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-restaurant-primary text-white rounded-md hover:bg-restaurant-secondary transition-colors"
            >
              <Camera size={20} />
              Escolher nova foto
            </label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
