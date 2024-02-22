/**
 * these routes will accessible for public users
 * @types {string[]}
 */

export const publicRoutes =["/", "/projects"]

/**
 * these routes will used for authentication
 * these routes will redirect to home if user authenticated
 * @types {string[]}
 */

export const authRoutes =["/auth/login", "/auth/register", "/auth/error", "/auth/verify-email"]

/**
 * Api routes
 * this routes prefix for authentication purpose
 * @types {string}
 */

export const apiAuthRoutePrefix ="/auth"

/**
 * default login redirect after login success
 * @types {string}
 */

export const Default_login_Redirect = "/"

/**
 * admin routes. these routes will redirect to home if user not admin
 * @types {string}
 */

export const adminRoutesPrefix ="/dashboard"