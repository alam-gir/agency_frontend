// import { deleteTokenById, getVerificationTokenByEmail } from "@/data/token";
import { v4 as uuidv4 } from "uuid";

/**
 * Generate a new token
 * generate expires time
 * check that user has previous token and delete it
 * save new token
 */
export const generateEmailVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000); // t minutes

};
