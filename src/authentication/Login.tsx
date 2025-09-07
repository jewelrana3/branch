import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@radix-ui/react-checkbox";
import loginLogo from "../../public/login.jpg";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (data.email === "admin@example.com" && data.password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin"); // Explicit admin dashboard path
    } else if (
      data.email === "vendor@example.com" &&
      data.password === "vendor123"
    ) {
      localStorage.setItem("role", "vendor");
      navigate("/vendor");
    } else if (data.email === "hub@example.com" && data.password === "hub123") {
      localStorage.setItem("role", "hub");
      navigate("/hub");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <CardContent className="w-[550px] text-[#1E1E1E]">
        <div className="flex items-center justify-center">
          <div className="text-center space-y-3">
            <img src={loginLogo} alt="login" className="mx-auto" />
            <p className="text-lg mb-5">
              {/* <span className="text-[30px] font-bold">Set New Password</span> */}
              {/* <br /> */}
              Please enter your login details.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label className=" text-xl">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 px-6 mt-2  border border-[#b8b8b8] "
              {...register("email", { required: "Please enter your email!" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label className=" text-xl">Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="h-12 px-6 mt-2  border border-[#b8b8b8] "
              {...register("password", {
                required: "Please input your password!",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
            </div>
            <Link to="/forget-password" className="text-md ">
              Forget password
            </Link>
          </div>

          <Button
            type="submit"
            className="btn-bg  font-bold text-lg px-6 w-full mt-4 h-12 cursor-pointer"
          >
            Log In
          </Button>
        </form>
      </CardContent>
    </div>
  );
}
