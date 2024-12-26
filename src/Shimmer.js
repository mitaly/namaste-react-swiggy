export default Shimmer = () => {
    return (
        <div className="shimmer-list">
        {
            [1,2,3,4,5,6,7,8,9,10].map(() => (
            <div className="shimmer-container">
                <div className="img" />
                <div className="text"/>
                <div className="text"/>
                <div className="text"/>
            </div>))
        }
        </div>
    )
}