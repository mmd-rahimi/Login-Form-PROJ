import { RegisterFormSchema, RegisterFormState } from "@/lib/validation";

export async function register (state: RegisterFormState, formData: FormData) {
    //validate input
    const validatedFields = RegisterFormSchema.safeParse(
        Object.fromEntries(formData.entries())
      );
        // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  try {
    const res = await fetch("http://localhost:8000/auth/register" , {
        method: 'post',
        body: JSON.stringify(validatedFields.data),
        headers: {
            "Content-type": "application/json"
        },
      });
      const data = await res.json();
      if(!res.ok) {
        return{
            message: data.message,
            errors: data.errors,
          }
      }else {

      }

  }  catch(err) {
    return {
        message: 'register failed'
    }
    console.log(err);
    
  }
}