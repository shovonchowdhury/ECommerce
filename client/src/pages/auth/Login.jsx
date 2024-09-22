import React from "react";
import CommonForm from "@/components/common/CommonForm";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/slice/authSlice";

const initialState = {
  email: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = useState(initialState);

  console.log(formData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      (data?.payload?.success && toast({ title: data?.payload?.message })) ||
        toast({ title: data?.payload?.message, variant: "destructive" });
    });
  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account ?
          <Link
            className="font-medium ml-2 text-primary hover:underline text-blue-500"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}
