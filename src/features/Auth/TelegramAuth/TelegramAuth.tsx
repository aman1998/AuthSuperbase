"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Button from "@shared/ui/Button";
import Input from "@shared/ui/Input";
import { ROUTES } from "@shared/config/routes";

import s from "./TelegramAuth.module.scss";

const TelegramAuth: React.FC = () => {
  const router = useRouter();

  return (
    <form className={s.form}>
      <div className={s.form__top}>
        <h1 className={s.form__title}>Вход через Telegram</h1>
        <p>Перейдите в Телеграм используя кнопку ниже</p>
        <Button type="primary" className={s.form__btn} onClick={() => router.push(ROUTES.telegramTwoFAAuth)}>
          Перейти
        </Button>
      </div>
      <div className={s.form__bottom}>
        <p>Если ничего не происходит, перейдите в бот и введите код вручную</p>
        <Button type="link">@worklyne_bot</Button>
        <Input placeholder="Введите код" />
        <Button type="outlined">Копировать код</Button>
        <Button type="link" onClick={() => router.push(ROUTES.signIn)} className={s.form__back}>
          Вернуться назад
        </Button>
      </div>
    </form>
  );
};

export default TelegramAuth;
