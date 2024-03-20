import { Injectable } from "@nestjs/common";
import {
  ValidateBy,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@Injectable()
@ValidatorConstraint({ name: "IsPhoneNumber", async: false })
export class IsPhoneNumberConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    // You can implement your phone number validation logic here
    // For simplicity, let's assume it just checks if the value is a string
    if (typeof value !== "string") {
      return false;
    }

    // You can access the array of country codes from args object
    const allowedCountryCodes: string[] = args.constraints[0];

    // Your validation logic based on country codes goes here

    return true; // Return true if the validation passes
  }

  defaultMessage(args: ValidationArguments) {
    return "The $property must be a valid phone number for the specified country codes";
  }
}

export function IsPhoneNumber(
  allowedCountryCodes: string[],
  validationOptions?: ValidationOptions
) {
  return ValidateBy(
    {
      name: "isPhoneNumber",
      constraints: [allowedCountryCodes],
      validator: IsPhoneNumberConstraint,
    },
    validationOptions
  );
}
