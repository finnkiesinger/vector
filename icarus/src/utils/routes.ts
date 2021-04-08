import {useHistory} from 'react-router-dom';

const ROUTES = {
    HOME: "/"
}

export function navigate(route: string) {
    return () => useHistory().push(route);
}

export default ROUTES;
