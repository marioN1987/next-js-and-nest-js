export interface ILoginProps {
    errors: string[] | null;
    enteredValues: {email: string | null, password: string} | null;
    success: boolean;
    userAccess: string | null;
}