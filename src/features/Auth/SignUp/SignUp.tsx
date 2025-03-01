"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "antd";
import Link from "next/link";

import { signUpSchema, TSignUpSchema } from "@features/Auth/SignUp/lib/signUpSchema";
import { signUpServer } from "@features/Auth/SignUp/model/actions";

import Button from "@shared/ui/Button";
import InputControl from "@shared/controllers/InputControl";
import { ROUTES } from "@shared/config/routes";
import CheckboxControl from "@shared/controllers/CheckboxControl";

import s from "./SignUp.module.scss";

const SignUp: React.FC = () => {
  const [isPending, startTransition] = React.useTransition();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
  });

  const handleClick = (data: TSignUpSchema) => {
    startTransition(async () => {
      try {
        await signUpServer({ email: data.email, password: data.password });
      } catch {
        alert("failed");
      }
    });
  };

  return (
    <Form className={s.form} onFinish={handleSubmit(handleClick)}>
      <h1 className={s.form__title}>Регистрация</h1>

      <Form.Item
        style={{ margin: 0 }}
        validateStatus={errors.email?.message ? "error" : ""}
        help={errors.email?.message}
      >
        <InputControl<TSignUpSchema>
          control={control}
          name="email"
          errorMessage={errors.email?.message}
          placeholder="E-mail"
        />
      </Form.Item>

      <Form.Item
        style={{ margin: 0 }}
        validateStatus={errors.password?.message ? "error" : ""}
        help={errors.password?.message}
      >
        <InputControl<TSignUpSchema>
          isPassword
          control={control}
          name="password"
          errorMessage={errors.password?.message}
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item
        style={{ margin: 0 }}
        validateStatus={errors.confirmPassword?.message ? "error" : ""}
        help={errors.confirmPassword?.message}
      >
        <InputControl<TSignUpSchema>
          isPassword
          control={control}
          name="confirmPassword"
          errorMessage={errors.confirmPassword?.message}
          placeholder="Повторите пароль"
        />
      </Form.Item>

      <Form.Item style={{ margin: 0 }}>
        <Button loading={isPending} className={s.form__btn} type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>

      <Form.Item
        style={{ margin: 0 }}
        validateStatus={errors.agreement?.message ? "error" : ""}
        help={errors.agreement?.message}
      >
        <CheckboxControl<TSignUpSchema>
          className={s.form__agreement}
          control={control}
          name="agreement"
          errorMessage={errors.agreement?.message}
        >
          Согласен с политикой конфиденциальности
        </CheckboxControl>
      </Form.Item>

      <div className={s.form__footer}>
        <p>Уже есть аккаунт?</p>
        <Link href={ROUTES.signIn}>Войти</Link>
      </div>
    </Form>
  );
};

export default SignUp;
