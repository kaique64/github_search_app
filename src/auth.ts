export default function isAuthenticated() {
    const userData = localStorage.getItem('user_data');

    if (userData) {
        return true;
    } 
    
    return false;
}