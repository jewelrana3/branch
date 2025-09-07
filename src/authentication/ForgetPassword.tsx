import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import loginLogo from "../../public/login.jpg";

type FormData = {
  email: string;
};

export default function ForgetPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
    navigate("/verify-otp");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <CardContent className="w-[550px]">
        <div className="flex items-center justify-center">
          <div className="text-center space-y-3">
            <img src={loginLogo} alt="login" className="mx-auto" />

            <p className="text-lg mb-5">
              <span className="text-[30px] font-bold">Forgot Password?</span>
              <br />
              No worries, we’ll send you reset instructions.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label className=" text-xl">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 px-6 mt-2 border border-[#b8b8b8] "
              {...register("email", { required: "Please enter your email!" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="btn-bg font-bold text-lg px-6 w-full mt-4 h-12 cursor-pointer"
          >
            GET OTP
          </Button>
        </form>
      </CardContent>
    </div>
  );
}
