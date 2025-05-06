
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { toast } from "sonner";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      toast.success("Login realizado com sucesso!");
      navigate("/");
    } else {
      toast.error("Email ou senha incorretos");
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
          <p className="text-muted-foreground">Bem-vindo de volta! Entre na sua conta</p>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
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
              Entrar
            </Button>
          </CardContent>
        </form>
        <CardFooter className="flex flex-col gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="text-restaurant-secondary hover:underline">
              Cadastre-se
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
