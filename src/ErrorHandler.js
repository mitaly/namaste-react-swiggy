import { useRouteError } from "react-router"
export default ErrorHandler = () => {
    const error = useRouteError();
    return (
        <>
            <h2>{error?.data}</h2>
            <h3>Error Status: {error?.status}</h3>
        </>
    )
}