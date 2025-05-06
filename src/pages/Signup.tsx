
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, User, UserCheck } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    if (users.some((user: any) => user.email === email)) {
      toast.error("Este email já está cadastrado");
      return;
    }
    
    const newUser = { 
      name, 
      email, 
      password, 
      profileImage: profileImage || `https://api.dicebear.com/8.x/initials/svg?seed=${name}`
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    
    toast.success("Cadastro realizado com sucesso!");
    navigate("/");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-restaurant-primary to-restaurant-dark flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-fade-in bg-white/95 backdrop-blur-sm">
        <CardHeader className="space-y-2 text-center">
          <Link to="/" className="inline-block">
            <h2 className="text-3xl font-bold font-playfair text-restaurant-primary">
              RestGester<span className="text-restaurant-secondary">.</span>
            </h2>
          </Link>
          <p className="text-muted-foreground">Crie sua conta grátis</p>
        </CardHeader>
        <form onSubmit={handleSignup}>
          <CardContent className="space-y-4">
            <div className="flex justify-center mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage 
                  src={profileImage || `https://api.dicebear.com/8.x/initials/svg?seed=${name}`} 
                  alt="Profile" 
                />
                <AvatarFallback>
                  <User className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex justify-center mb-4">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                className="hidden" 
                id="profileImageUpload"
              />
              <label 
                htmlFor="profileImageUpload" 
                className="cursor-pointer px-4 py-2 bg-restaurant-primary text-white rounded hover:bg-restaurant-secondary transition-colors"
              >
                Carregar Foto
              </label>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Nome completo"
                  className="pl-10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <Button type="submit" variant="restaurant" className="w-full font-semibold hover-scale">
              Criar conta
            </Button>
          </CardContent>
        </form>
        <CardFooter className="flex flex-col gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-restaurant-secondary hover:underline">
              Entre aqui
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupPage;

