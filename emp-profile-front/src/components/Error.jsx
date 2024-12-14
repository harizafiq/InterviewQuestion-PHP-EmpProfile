function ErrorForm({errors, id}) {
    return (
        <>
            { errors.map((error, index) => <small id={id} key={index} style={{
                color: "#e52b50"
            }}>{error}</small>)}
        </>
    )
}

export default ErrorForm;