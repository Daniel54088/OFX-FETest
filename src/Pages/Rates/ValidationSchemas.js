import { z } from "zod";

export const dropdownSchema = z.string().min(1, "Selection is required");

export const numberInputSchema = z
  .string()
  .regex(
    /^\d+(\.\d{1,2})?$|^$/,
    "Enter a valid amount (e.g., 10.05 or leave empty)"
  );
