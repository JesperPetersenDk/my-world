const Inline = ({online}) => {
    const isLoggedIn = online;

    return(
        <>
            <p>This user is <b>{isLoggedIn ? "ONLINE!" : "not online"}</b></p>
        </>
    )
}


export default Inline;