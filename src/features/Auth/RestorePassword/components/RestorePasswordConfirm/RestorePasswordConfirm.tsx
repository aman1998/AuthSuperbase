"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Transition from "@shared/ui/Transition";
import Button from "@shared/ui/Button";
import { ROUTES } from "@shared/config/routes";

import s from "./RestorePasswordConfirm.module.scss";

const RestorePasswordConfirm: React.FC = () => {
  const router = useRouter();

  return (
    <Transition className={s.confirm}>
      <h1 className={s.confirm__title}>Пароль сброшен!</h1>
      <p className={s.confirm__text}>
        В письме на почту указанную при регистрации, перейдите по ссылке и введите новый пароль{" "}
      </p>
      <Button type="primary" className={s.confirm__btn} onClick={() => router.push(ROUTES.newPassword)}>
        Хорошо
      </Button>
    </Transition>
  );
};

export default RestorePasswordConfirm;
