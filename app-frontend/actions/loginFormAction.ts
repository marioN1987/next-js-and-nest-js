/* -------------------------------------------------
   LOGIN ACTION
------------------------------------------------- */

import { isValidEmail } from "@/helper/helperMethods";
import { ILoginProps } from "@/types/ILoginProps.interface";
import { validateUser } from "@/utils/http";

export const loginAction = async (prevState: ILoginProps, formState: FormData):Promise<ILoginProps> => {
    const email = formState.get("email") as string;
    const password = formState.get("password") as string;
    let errors: string[] = [];

    if (!email) {
        errors.push("Please enter email");
    } else if (!isValidEmail(email)) {
        errors.push("Invalid email");
    }

    if (!password) {
        errors.push("Please enter password");
    } else if (password.trim().length < 6) {
        errors.push("Password length should be more than 6 characters");
    }

    if (errors.length > 0) {
        return { errors, success: false, userAccess: null, enteredValues: { email, password } };
    }

    try {
        const userAccess = await validateUser({ email, password });
        return { errors: null, enteredValues: {email, password}, success: true, userAccess };
    } catch (err: any) {
        errors.push(err.message);
        return { errors, success: false, userAccess: null, enteredValues: { email, password } };
    }
};