"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { signInSchema, TSignInSchema } from "@features/Auth/SignIn/lib/signInSchema";
import { loginServer } from "@features/Auth/SignIn/model/actions";

import Button from "@shared/ui/Button";
import InputControl from "@shared/controllers/InputControl";
import { ROUTES } from "@shared/config/routes";
import CheckboxControl from "@shared/controllers/CheckboxControl";
import TelegramIcon from "@shared/icons/TelegramIcon";
import { useUser } from "@shared/providers/UserProvider/lib/useUser";

import s from "./SignIn.module.scss";

const SignIn: React.FC = () => {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const { setUser } = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInSchema>({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
  });

  const handleClick = (data: TSignInSchema) => {
    startTransition(async () => {
      try {
        const user = await loginServer({ email: data.email, password: data.password });
        if (user) {
          setUser(user);
          router.push(ROUTES.dashboard);
        }
      } catch {
        alert("failed");
      }
    });
  };

  return (
    <Form className={s.form} onFinish={handleSubmit(handleClick)}>
      <h1 className={s.form__title}>Вход</h1>

      <Button
        onClick={() => router.push(ROUTES.telegramAuth)}
        type="outlined"
        icon={<TelegramIcon />}
        iconPosition="end"
      >
        Через Telegram
      </Button>

      <p className={s.form__text}>или</p>

      <Form.Item
        style={{ margin: 0 }}
        validateStatus={errors.email?.message ? "error" : ""}
        help={errors.email?.message}
      >
        <InputControl<TSignInSchema>
          control={control}
          name="email"
          errorMessage={errors.email?.message}
          placeholder="E-mail"
        />
      </Form.Item>

      <Form.Item
        style={{ margin: 0, marginBottom: 16, marginTop: 16 }}
        validateStatus={errors.password?.message ? "error" : ""}
        help={errors.password?.message}
      >
        <InputControl<TSignInSchema>
          isPassword
          control={control}
          name="password"
          errorMessage={errors.password?.message}
          placeholder="Пароль"
        />
      </Form.Item>

      <Link href={ROUTES.restoreAuth} className={s.form__restore}>
        Забыли пароль?
      </Link>

      <Form.Item style={{ margin: 0 }}>
        <Button loading={isPending} className={s.form__btn} type="primary" htmlType="submit">
          Войти на сайт
        </Button>
      </Form.Item>

      <Form.Item
        style={{ margin: 0 }}
        validateStatus={errors.remember?.message ? "error" : ""}
        help={errors.remember?.message}
      >
        <CheckboxControl<TSignInSchema>
          className={s.form__remember}
          control={control}
          name="remember"
          errorMessage={errors.remember?.message}
        >
          Запомнить меня
        </CheckboxControl>
      </Form.Item>

      <div className={s.form__footer}>
        <p>Нет аккаунта?</p>
        <Link href={ROUTES.signUp}>Зарегистрируйтесь</Link>
      </div>
    </Form>
  );
};

export default SignIn;
