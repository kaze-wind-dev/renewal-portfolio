"use server";

function validateEmail(email: string) {
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailPattern.test(email);
}

export interface rawFormData {
  lastName?: string;
  firstName?: string;
  email?: string;
  message?: string;
};

export interface errorMessages {
  lastName?: string;
  firstName?: string;
  email?: string;
  message?: string;
};

export interface formState {
  status: "success" | "error" | "initial";
  message: string;
  errorMessages: errorMessages;
  values: rawFormData;
};

export async function createFormData(state: formState, formData: FormData): Promise<formState> {
  const errorMessages: errorMessages = {};
  const rawFormData = {
    lastName: formData.get("lastName") as string,
    firstName: formData.get("firstName") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };
  if (!rawFormData.lastName) {
    errorMessages.lastName = "姓を入力してください";
  }
  if (!rawFormData.firstName) {
    errorMessages.firstName = "名を入力してください";
  }
  if (!rawFormData.email) {
    errorMessages.email = "メールアドレスを入力してください";
  } 
 else if (!validateEmail(rawFormData.email)) {
    errorMessages.email = "メールアドレスの形式が誤っています";
  }
  if (!rawFormData.message) {
    errorMessages.message = "お問い合わせ内容を入力してください";
  }

  if(Object.keys(errorMessages).length > 0) {
    return {
      status: "error",
      message: "",
      errorMessages: errorMessages,
      values: rawFormData,
    };
  }
  const result = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [
          {
            objectTypeId: "0-1",
            name: "lastname",
            value: rawFormData.lastName,
          },
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: rawFormData.firstName,
          },
          {
            objectTypeId: "0-1",
            name: "email",
            value: rawFormData.email,
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: rawFormData.message,
          },
        ],
      }),
    }
  );
  try {
    await result.json();
    return {
      status: "success",
      message: "OK",
      errorMessages: {
        lastName: "",
        firstName: "",
        email: "",
        message: "",
      },
      values: {
        lastName: "",
        firstName: "",
        email: "",
        message: "",
      },
    };
  } catch {
    return {
      status: "error",
      message: "お問い合わせに失敗しました。",
      errorMessages: errorMessages,
      values: rawFormData,
    };
  }

}
