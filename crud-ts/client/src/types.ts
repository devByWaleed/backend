// Interface matching MongoDB Model
export interface User {
    _id: string;
    name: string;
    email: string;
    age: string;
}


// Interface matching API response properties
export interface ApiResponse {
    success: boolean;
    message: string;
    users?: User[];
    updatedData?: User;
}