export interface User {
    _id: string;
    name: string;
    email: string;
    age: string;
}

export interface ApiResponse {
    success: boolean;
    message: string;
    users?: User[];
    updatedData?: User;
}