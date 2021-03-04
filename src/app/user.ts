
/**
 * Frontend user session object.
 */
export class User {
    id: string | undefined;
    username: string | undefined;
    hash: string | undefined;
    password: string | undefined; // filled only during login form handling. undefined during session
    token: string | undefined; // ctr-backoffice-backend JWT token
    //roles: Role[];
    //organization: Organization;
    //organizationId: string;
    //roleId: string;
}
