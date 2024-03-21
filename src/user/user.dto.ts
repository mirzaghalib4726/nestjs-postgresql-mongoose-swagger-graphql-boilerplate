import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsAlphanumeric,
  IsBoolean,
  IsDefined,
  IsEmail,
  IsEnum,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";
// import { IsPhoneNumber } from "src/decorators/phoneNumber.decorator";

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class DatabaseUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(7, { message: "Full Name must be 7 characters long" })
  @IsDefined()
  full_name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  //@IsPhoneNumber(['US'])
  phone: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  address: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  dob: string;

  @ApiProperty()
  @IsString()
  @IsEnum(["Male", "Female", "Others"])
  gender: string;

  @ApiProperty()
  @IsDefined()
  // @Matches(passwordRegEx, {
  //   message: `Password must contain Minimum 8 and maximum 20 characters,
  //   at least one uppercase letter,
  //   one lowercase letter,
  //   one number and
  //   one special character`,
  // })
  password: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  security_question?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  security_answer?: string;

  @ApiProperty()
  @IsAlphanumeric()
  @IsDefined()
  nickname: string;

  @ApiProperty()
  @IsString()
  @IsEnum(["On-hold", "Active", "Inactive"])
  status: string;

  @ApiPropertyOptional()
  @IsObject()
  @IsOptional()
  otp?: object;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  email_verified?: boolean;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  is_archived?: boolean;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  is_logged_in?: boolean;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  login_tries?: number;

  @ApiProperty()
  @IsString()
  @IsDefined()
  @MinLength(4)
  @MaxLength(4)
  pin_code: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  save_activity_logs?: boolean;
}
