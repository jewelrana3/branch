import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import loginLogo from "../../public/login.jpg";

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  type FormData = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <CardContent className="w-[550px]">
        <div className="flex items-center justify-center">
          <div className="text-center space-y-3">
            <img src={loginLogo} alt="login" className="mx-auto" />

            <p className="text-lg mb-6">
              <span className="text-[30px] font-bold">Set New Password</span>
              <br />
              Your new password must differ from previous ones
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label className="text-xl">New Password</Label>
            <Input
              type="password"
              placeholder="Enter new password"
              className="h-12 px-6 mt-2  border border-[#b8b8b8] 
              "
              {...register("newPassword", { required: true })}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">
                Please input new password!
              </p>
            )}
          </div>

          <div>
            <Label className="text-xl">Confirm Password</Label>
            <Input
              type="password"
              placeholder="Enter confirm password"
              className="h-12 px-6 mt-2  border border-[#b8b8b8]"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                Please input confirm password!
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="btn-bg font-bold text-lg px-6  w-full mt-4 h-12 cursor-pointer"
          >
            Reset Password
          </Button>
        </form>
      </CardContent>
    </div>
  );
}
