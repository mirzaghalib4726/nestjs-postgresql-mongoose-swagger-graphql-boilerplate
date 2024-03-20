export const CONTRACT_STATUS = {
  SIGNED: 1,
  PENDING: 2,
  OFFER_SENT: 3,
};

export const CONTRACT_TYPES = {
  CONTRACT: 1,
  DOC: 2,
};

export const DOC_TYPES = {
  ACQUISITION_CONTRACT: 1,
  ASSIGNMENT_CONTRACT_AA: 2,
  ASSIGNMENT_CONTRACT_DA: 3,
  ALCHEMIST_DISCLOSURE_CONTRACT_AA: 4,
  ALCHEMIST_DISCLOSURE_CONTRACT_DA: 5,
  SELLERS_DISCLOSURE_CONTRACT: 6,
  BROKEAGE_SERVICE_CONTRACT_AA: 7,
  BROKEAGE_SERVICE_CONTRACT_DA: 8,
  DISPOSITION_CONTRACT: 9,
  COMPLETE_AA_CONTRACT: 10,
  COMPLETE_DA_CONTRACT: 11,
  DOUBLE_CLOSED_DA_CONTRACT: 12,
};

export const PROPERTY_STATUS = {
  AVAILABLE: 1,
  SOLD: 2,
  FUNDED: 3,
  NEW: 4,
  OFFER_SENT: 5,
  // ARCHIVED: 6,
  DROPPED: 7,
  CLOSED: 8,
};

export const CONTACT_STATUS = {
  SUBSCRIBE: 1,
  UNSUBSCRIBE: 2,
  ARCHIVED: 3,
};

export const GROUP_STATUS = {
  ACTIVE: 1,
  INACTIVE: 2,
  ARCHIVED: 3,
};

export const COMMISSION_TYPE = {
  PERCENTAGE: 1,
  FIXED: 2,
};

export const NOTIFICATION_TYPE = {
  READ: 1,
  UNREAD: 2,
};

export const RESPONSE_TYPE = {
  ENTITY_EXISTS: " Entity with same credentials already exists",
  ENTITY_RESTORED: " The entity has been restored",

  INVALID_CREDENTIALS: "Invalid email or password. Please try again.",

  EMAIL_NOT_VERIFIED: "Email is not verified",
  EMAIL_SENT: "Email Sent Successfully",
  SMS_SENT: "Text Message Sent Successfully",
  EMAIL_VERIFIED: "Email Verified Successfully",
  EMAIL_ALREADY_VERIFIED: "The email address is already verified",
  EMAIL_OTP: "Email Verification Otp sent Successfully",

  LOGIN_ACCESS_BLOCKED: "You cannot logged in. Please contact to admin.",
  UNSUCCESSFUL_ATTEMPTS:
    "Too many unsuccessful attempts. Please try again later.",

  NOT_FOUND: " Not Found",

  DELETED_SUCCESSFUL: " Deleted Successfully",

  SOMETHING_WRONG: "Something Went Wrong",

  CREATION: "Created",

  FILE_UPLOADED: "File uploaded successfully",

  UNSUBSCRIBE: "You have Unsubscribed successfully",

  NOTIFICATIONS_READ_ALL: "All Notifications Read Successfully",
  NOTIFICATION_READ: "Notification Read Successfully",

  NO_FCM_TOKEN: "No FCM tokens",

  OTP_INCORRECT: "You have not provided correct otp code",
  OTP_VERIFY: "Please verify the otp",

  FORGOT_PASSWORD_OTP: "Forgot Password Otp Sent Successfully",
  FORGOT_PASSWORD_INVALID_REQUEST: "Forgot Password Request is not valid!",
  FORGOT_PASSWORD_SUCCESSFUL: "Forgot Password Successful",
  FORGOT_PASSWORD_OTP_SUCCESSFUL: "Forgot Password Otp Verification Successful",
  FORGOT_OTP_VERIFY: "Please verify the forgot otp first",

  RESET_PASSWORD_INVALID_REQUEST: "Reset Password Request is not valid!",
  RESET_PASSWORD_SUCCESSFUL: "Reset Password Successful",
  RESET_OTP_VERIFY: "Please verify the reset otp first",

  NEW_PASSWORD_SET: "New Password Set Successfully",
  NEW_PASSWORD_INVALID_REQUEST: "Set New Password Request is invalid",

  OLD_PASSWORD: "Old Password is not correct!",

  PASSWORD_CHANGED: "Your password has successfully changed",

  LOGOUT: "You have been logout",

  ADMIN_ACCESS: "You are not Admin",

  ROLE_CANNOT_DELETED:
    "This Role cannot be deleted. Assigned to the other entities",

  DUPLICATE_MLS: "Duplicate MLS No exists",

  ATTACHMENT_REQUIRED:
    "Please attach one of Assignment or Acquisition contract.",

  SOLD_PROPERTY_STATUS: "Sold Property Status Cannot Changed",

  DISPOSITION_MAX: "Two Disposition Agents are already assigned",

  NOT_LOGGED_IN: "You are not logged in",
};
