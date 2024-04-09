import React from "react";
import { FormProvider } from "react-hook-form";


export default function Form({ children, methods }) {
  return <FormProvider {...methods}>{children}</FormProvider>;
}
