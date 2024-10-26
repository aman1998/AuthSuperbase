import React from "react";

import Button from "@shared/ui/Button";

const SignOut = () => (
  <form action="/auth/signout" method="post">
    <Button htmlType="submit" type="link">
      Sign Out
    </Button>
  </form>
);

export default SignOut;
